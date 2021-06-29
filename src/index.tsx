import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SWUpdateDialog } from './SWUpdateDialog';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register({
  onSuccess: registration => {
    console.log(`'ServiceWorker registration successful with scope: ${registration.scope}`);
  },
  onUpdate: registration => {
    if (registration.waiting) {
      ReactDOM.render(<SWUpdateDialog registration={registration} />, document.querySelector('.SW-update-dialog'));
    }
  },
});
