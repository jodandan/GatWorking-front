import React from 'react';
import './FisrtAppleWatchUI.css'; // You'll need to create this CSS file



export const AppleWatchUI = () => {
  return (
  <div className="apple-header">
    <div className="apple-watch">
      <div className="watch-face">
        {/* Display the time and date */}
        <div className="time">12</div>


      </div>

      <div className="watch-face">
        {/* Display the time and date */}
        <div className="time">12:34</div>
        <div className="date">August 18</div>

        {/* Complications */}
        <div className="complications">
          <div className="complication weather">☀️ 75°F</div>

        </div>
      </div>

      <div className="watch-face">
        {/* Display the time and date */}
        <div className="time">12:34</div>
        <div className="date">August 18</div>

        {/* Complications */}
        <div className="complications">
          <div className="complication weather">☀️ 75°F</div>

        </div>
      </div>

      <div className="watch-face">
        {/* Display the time and date */}
        <div className="time">12:34</div>
        <div className="date">August 18</div>

        {/* Complications */}
        <div className="complications">
          <div className="complication weather">☀️ 75°F</div>

        </div>
      </div>


      <div className="watch-face">
        {/* Display the time and date */}
        <div className="time">12</div>

      </div>
    </div>
  </div>
  );
}

export default AppleWatchUI;
