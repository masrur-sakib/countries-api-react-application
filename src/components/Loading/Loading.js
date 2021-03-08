import React from "react";

const Loading = (props) => {
  return (
    <div style={{ display: props.visibility }}>
      <h4 className="text-center pt-5">Loading Data from API ...</h4>
    </div>
  );
};

export default Loading;
