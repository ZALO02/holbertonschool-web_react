import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

export function Notifications() {
  const handleClick = () => {
    console.log('Close button has been clicked')
  }

  const buttonStyle = {
    float: 'right',
    backgroundColor: 'white',
    border: 'none'
  }
  
  const latestNotification = getLatestNotification();

  return (
    <div className="Notifications">
      <button aria-label="Close" style={buttonStyle} onClick={handleClick}>
        <img src={closeIcon} alt="close-icon" width="20px" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: latestNotification }} />
      </ul>
    </div>
  );
}
