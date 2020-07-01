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

const fetchEventList = async (eventId: number, idolId: number, rankList: number[]): Promise<MatsuriEventRankingIdolPointList> => {
  const url = `${API_BASE}events/${eventId}/rankings/logs/idolPoint/${idolId}/${rankList.join(',')}`;
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

const App: React.SFC = () => {
  const [list, setList] = React.useState<MatsuriEventRankingIdolPointList>([]);
  const [idolId, setIdolId] = React.useState<number>(0);
  const [eventId, setEventId] = React.useState<number>(0);
  const [rankList, setRankList] = React.useState<number[]>([]);
  const [latestTime, setLatestTime] = React.useState<string>();

  React.useEffect(() => {
    // クエリ情報を取得
    let idol = 35;
    let event = 142;
    let rank = [1, 10, 50, 80, 100];
    if (window.location.search) {
      const parsed = queryString.parse(window.location.search) as {
        idol: string;
        event: string;
        rank: string;
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
        rank = temp;
      }
    }
    setIdolId(idol);
    setEventId(event);
    setRankList(rank);

    // イベント取得
    const result = fetchEventList(event, idol, rank);
    result.then(data => {
      if (data.length > 0) {
        setList(data);
        const summary = data[data.length - 1].data[data[data.length - 1].data.length - 1].summaryTime;
        setLatestTime(summary);
      }
    });
  }, []);

  // 定期取得
  useInterval(() => {
    const result = fetchEventList(eventId, idolId, rankList);
    result.then(data => {
      setList(data);
    });
    // 10分ごと
  }, 10 * 60 * 1000);

  return (
    <div className="App">
      {/* ヘッダ */}
      <div className="header">
        <div className="updateTime">update: {latestTime}</div>
      </div>

      {/* データ */}
      <div className="rank">
        {/* 順位 */}
        <div className="rankValue"></div>
        {/* 最新のボーダー */}
        <div className="borderValue"></div>
        {/* 差分 */}
        <div className="borderDiff">
          <div className="borderDiffValue">1h</div>
          <div className="borderDiffValue">6h</div>
          <div className="borderDiffValue">12h</div>
        </div>
      </div>

      {list.map(rankData => {
        // 最新のボーダー
        const latestScore = rankData.data[rankData.data.length - 1].score;
        const latestTime = new Date(rankData.data[rankData.data.length - 1].summaryTime).getTime();

        // N時間前
        const agoList = [1, 6, 12];
        const agoData = [];
        for (const agoHour of agoList) {
          // 1時間前算出
          const hourAgo = latestTime - 1000 * 60 * 60 * agoHour;
          const hourAgoData = rankData.data.filter(data => {
            return new Date(data.summaryTime).getTime() === hourAgo;
          });
          const hourAgoDiff = hourAgoData ? latestScore - hourAgoData[0].score : NaN;
          if (!Number.isNaN(hourAgoDiff)) agoData.push(hourAgoDiff);
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
                <div className="borderDiffValue">{`+${data} pts`}</div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
