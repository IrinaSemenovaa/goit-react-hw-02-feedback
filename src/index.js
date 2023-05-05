import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotificationContainer />
    <App />
  </React.StrictMode>
);
