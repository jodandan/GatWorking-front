import React from 'react';
import './FisrtAppleWatchUI.css'; // You'll need to create this CSS file



export const AppleWatchUI = () => {
  return (
  <div className="apple-header">
    <div className="apple-watch">
      <div className="watch-face-15">
        {/* Display the time and date */}
        <div className="time"></div>


      </div>

      <div className="watch-face-16">
        {/* Display the time and date */}

        {/* Complications */}
        <div className="complications">
          <div className="complication weather"></div>

        </div>
      </div>

      <div className="watch-face-17">
        {/* Display the time and date */}

        {/* Complications */}
        <div className="complications">
          <div className="complication weather"></div>

        </div>
      </div>

      <div className="watch-face-18">
        {/* Display the time and date */}

        {/* Complications */}
        <div className="complications">
          <div className="complication weather"></div>

        </div>
      </div>


      <div className="watch-face-19">
        {/* Display the time and date */}
        <div className="time"></div>

      </div>
    </div>
  </div>
  );
}

export default AppleWatchUI;
