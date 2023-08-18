import React from 'react';
import './FisrtAppleWatchUI.css'; // You'll need to create this CSS file



export const AppleWatchUI = () => {
  return (
  <div className="apple-header">
    <div className="apple-watch">
      <div className="watch-face-1">
        {/* Display the time and date */}
        <div className="time"></div>


      </div>



      <div className="watch-face-2">
        {/* Display the time and date */}

        {/* Complications */}
        <div className="complications">


        </div>
      </div>



      <div className="watch-face-3">
        {/* Display the time and date */}
        <div className="time"></div>

      </div>
    </div>
  </div>
  );
}

export default AppleWatchUI;
