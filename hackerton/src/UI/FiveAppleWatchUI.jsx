import React from 'react';
import './FisrtAppleWatchUI.css'; // You'll need to create this CSS file



export const AppleWatchUI = () => {
  return (
  <div className="apple-header">
    <div className="apple-watch">
      <div className="watch-face-4">
        {/* Display the time and date */}
        <div className="time"></div>


      </div>



      <div className="watch-face-5">
        {/* Display the time and date */}

        {/* Complications */}
        <div className="complications">


        </div>
      </div>



      <div className="watch-face-6">
        {/* Display the time and date */}
        <div className="time"></div>

      </div>
    </div>
  </div>
  );
}

export default AppleWatchUI;
