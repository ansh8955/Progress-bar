import React, { useEffect, useState } from "react";
import "./Progressbar.css";

function Progressbar({ value }) {
  const [percentage, setPercentage] = useState(value);

  useEffect(() => {
    console.log(value);
    setPercentage(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div className="prog-container">
      <h1>Progressbar</h1>

      <div className="progressbar">
        <span style={{color:percentage < 49? "black":"white" }}className="percentage">{percentage}%</span>
        <div className="animation" style={{ width: `${percentage}%` }}></div>
      </div>

      {percentage < 100 &&
      (<p>Loading...</p>)
      }

      {percentage === 100 &&
      (<p>Complete!</p>)
      }


      

    </div>
  );
}

export default Progressbar;
