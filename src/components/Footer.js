import React from "react";
import {} from "@material-ui/core";

export default function Footer() {
  return (
    <div align="center" className="footer">
      <p>
        <a
          href="https://gitee.com/darkAtMid/react-online-video-converter"
          target="_"
        >
          Source Code
        </a>{" "}
        / @affkoul
      </p>
      <div>{new Date().toLocaleString()}</div>
    </div>
  );
}
