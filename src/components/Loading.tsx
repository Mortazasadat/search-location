import { useState, CSSProperties } from "react";
import { RingLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

function Loading({ loading }: any) {
  return (
    <div className="sweet-loading">
      <RingLoader
        color="#000"
        loading={loading}
        cssOverride={override}
        size={100}
        speedMultiplier={1}
      />
    </div>
  );
}

export default Loading;
