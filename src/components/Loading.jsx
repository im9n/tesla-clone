import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <svg className="loading__circle" viewBox="0 0 48 48">
        <path
          d="M24 1a2.347 2.347 0 1 1 0 4.694 18.306 18.306 0 1 0 13.359 5.792 2.347 2.347 0 1 1 3.426-3.21A23 23 0 1 1 24 1Z"
        ></path>
      </svg>
      <svg className='loading__logo' viewBox="0 0 160 160">
        <path d="m80 129.8 14-78.7c13.3 0 17.5 1.5 18.1 7.4 0 0 8.9-3.3 13.5-10.1-17.6-8.1-35.3-8.5-35.3-8.5L80 52.5 69.7 39.9s-17.7.4-35.3 8.5c4.5 6.8 13.5 10.1 13.5 10.1.6-6 4.8-7.4 18.1-7.4l14 78.7z"></path>
        <path d="M80 36.3c14.2-.1 30.5 2.2 47.2 9.5 2.2-4 2.8-5.8 2.8-5.8-18.2-7.3-35.3-9.7-50-9.8-14.7.1-31.8 2.5-50 9.8 0 0 .8 2.2 2.8 5.8 16.7-7.3 33-9.6 47.2-9.5z"></path>
      </svg>
    </div>
  );
};

export default Loading;
