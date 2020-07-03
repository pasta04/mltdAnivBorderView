import React from 'react';
import queryString from 'query-string';
import useInterval from 'use-interval';
import './App.css';

const API_BASE = 'https://api.matsurihi.me/mltd/v1/';

type MatsuriEventRankingIdolPointList = MatsuriEventRankingIdolPoint[];

type MatsuriEventRankingIdolPoint = {
  rank: number;
  data: {
    score: number;
    summaryTime: string;
  }[];
};

type MatsuriEventInfo = {
  id: number;
  name: string;
  type: number;
  schedule: {
    beginDate: string;
    endDate: string;
    pageBeginDate: string;
    pageEndDate: string;
    boostBeginDate: string;
    boostEndDate: string;
  };
};

const idolList = [
  '天海春香',
  '如月千早',
  '星井美希',
  '萩原雪歩',
  '高槻やよい',
  '菊地真',
  '水瀬伊織',
  '四条貴音',
  '秋月律子',
  '三浦あずさ',
  '双海亜美',
  '双海真美',
  '我那覇響',
  '春日未来',
  '最上静香',
  '伊吹翼',
  '田中琴葉',
  '島原エレナ',
  '佐竹美奈子',
  '所恵美',
  '徳川まつり',
  '箱崎星梨花',
  '野々原茜',
  '望月杏奈',
  'ロコ',
  '七尾百合子',
  '高山紗代子',
  '松田亜利沙',
  '高坂海美',
  '中谷育',
  '天空橋朋花',
  'エミリー',
  '北沢志保',
  '舞浜歩',
  '木下ひなた',
  '矢吹可奈',
  '横山奈緒',
  '二階堂千鶴',
  '馬場このみ',
  '大神環',
  '豊川風花',
  '宮尾美也',
  '福田のり子',
  '真壁瑞希',
  '篠宮可憐',
  '百瀬莉緒',
  '永吉昴',
  '北上麗花',
  '周防桃子',
  'ジュリア',
  '白石紬',
  '桜守歌織',
];
// 詩花は201, 玲音は202

async function fetchJson<T>(url: string): Promise<T> {
  const result = await fetch(url);
  const json = await result.json();
  return json as T;
}

const formatDate = (date: Date, format: string): string => {
  format = format.replace(/yyyy/g, `${date.getFullYear()}`);
  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
  format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
  format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
  return format;
};

const fetchEventList = async (eventType: number, eventId: number, rankList: number[], idolId?: number): Promise<MatsuriEventRankingIdolPointList> => {
  let url: string;
  if (eventType === 5) {
    url = `${API_BASE}events/${eventId}/rankings/logs/idolPoint/${idolId}/${rankList.join(',')}?prettyPrint=false`;
  } else {
    url = `${API_BASE}events/${eventId}/rankings/logs/eventPoint/${rankList.join(',')}?prettyPrint=false`;
  }
  console.log(url);
  let result = await fetchJson<MatsuriEventRankingIdolPointList>(url);
  result = result.map(rank => {
    return {
      rank: rank.rank,
      data: rank.data.map(data => {
        return {
          score: data.score,
          summaryTime: formatDate(new Date(data.summaryTime), 'yyyy/MM/dd HH:mm'),
        };
      }),
    };
  });
  return result;
};

const fetchEventInfo = async (eventId: number): Promise<MatsuriEventInfo> => {
  const url = `${API_BASE}events/${eventId}?prettyPrint=false`;
  const result = await fetchJson<MatsuriEventInfo>(url);
  return result;
};

const App: React.SFC = () => {
  const [list, setList] = React.useState<MatsuriEventRankingIdolPointList>([]);
  const [idolId, setIdolId] = React.useState<number>(0);
  const [eventId, setEventId] = React.useState<number>(0);
  const [rankList, setRankList] = React.useState<number[]>([]);
  const [latestTime, setLatestTime] = React.useState<string>('');
  const [diffList, setDiffList] = React.useState<number[]>([]);
  const [eventType, setEventType] = React.useState<number>(0);
  const [eventTitle, setEventTitle] = React.useState<string>('');

  React.useEffect(() => {
    // クエリ情報を取得
    let idol = 35;
    let event = 142;
    let rank = [1, 10, 50, 80, 100];
    let diff: number[] = [1, 6, 24];
    if (window.location.search) {
      const parsed = queryString.parse(window.location.search) as {
        idol: string;
        event: string;
        rank: string;
        diff: string;
        idolRank: string;
      };
      // アイドルID
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let temp: any;
      if (parsed.idol && parsed.idol.match(/^\d+$/)) {
        idol = Number(parsed.idol);
      }
      // イベントID
      if (parsed.event && parsed.event.match(/^\d+$/)) {
        event = Number(parsed.event);
      }
      // 取得対象の順位
      if (parsed.rank && parsed.rank.match(/^[\d|,]+$/)) {
        temp = parsed.rank.split(',');
        rank = temp.map((i: string) => Number(i));
      }
      // 前回からの差分
      if (parsed.diff && parsed.diff.match(/^[\d|,]+$/)) {
        temp = parsed.diff.split(',');
        diff = temp.map((i: string) => Number(i));
      }
    }
    setIdolId(idol);
    setEventId(event);
    setRankList(rank);
    setDiffList(diff);

    // イベントタイトル取得
    fetchEventInfo(event).then(info => {
      setEventTitle(info.name);
      setEventType(info.type);

      // イベント取得
      const result = fetchEventList(info.type, event, rank, idol);
      result.then(data => {
        if (data.length > 0) {
          setList(data);
          const summary = data[data.length - 1].data[data[data.length - 1].data.length - 1].summaryTime;
          setLatestTime(summary);
        }
      });
    });
  }, []);

  // 定期取得
  useInterval(() => {
    console.log(new Date());
    const result = fetchEventList(eventType, eventId, rankList, idolId);
    result.then(data => {
      setList(data);
      const summary = data[data.length - 1].data[data[data.length - 1].data.length - 1].summaryTime;
      setLatestTime(summary);
    });
    // 5分ごと
  }, 5 * 60 * 1000);

  return (
    <div className="App">
      {/* ヘッダ */}
      <div className="header">
        <div className="eventName">{eventTitle}</div>
        <div className="subHeader">
          <div className="idolName">{eventType === 5 && idolList[idolId - 1]}</div>
          <div className="updateTime">update: {latestTime}</div>
        </div>
      </div>

      {/* データ */}
      <div className="rank">
        {/* 順位 */}
        <div className="rankValue"></div>
        {/* 最新のボーダー */}
        <div className="borderValue"></div>
        {/* 差分 */}
        <div className="borderDiff">
          {diffList.map(diff => (
            <div className="borderDiffValue">{diff}h</div>
          ))}
        </div>
      </div>

      {list.map(rankData => {
        // 最新のボーダー
        const latestScore = rankData.data[rankData.data.length - 1].score;
        const latestTime = new Date(rankData.data[rankData.data.length - 1].summaryTime).getTime();

        // N時間前
        const agoList = diffList;
        const agoData = [];
        for (const agoHour of agoList) {
          // 1時間前算出
          const hourAgo = latestTime - 1000 * 60 * 60 * agoHour;
          const hourAgoData = rankData.data.filter(data => {
            return new Date(data.summaryTime).getTime() === hourAgo;
          });
          const hourAgoDiff = hourAgoData.length > 0 ? `+${latestScore - hourAgoData[0].score} pts` : '-';
          agoData.push(hourAgoDiff);
        }

        return (
          <div className="rank">
            {/* 順位 */}
            <div className="rankValue">{rankData.rank} 位</div>
            {/* 最新のボーダー */}
            <div className="borderValue">{latestScore} pts</div>
            {/* 差分 */}
            <div className="borderDiff">
              {agoData.map(data => (
                <div className="borderDiffValue">{`${data}`}</div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
