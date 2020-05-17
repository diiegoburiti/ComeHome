import React from "react";
import loadingGig from "../images/gif/loading-arrow.gif";
const Loading = () => {
  return (
    <div className="loading">
      <h4>Rooms data loading</h4>
      <img src={loadingGig} alt=""></img>
    </div>
  );
};
export default Loading;
