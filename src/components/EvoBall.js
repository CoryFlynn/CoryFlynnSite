import React, { useState, useEffect } from "react";

export default function EvoBall(props) {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        width: `${props.size}px`,
        height: `${props.size}px`,
        borderRadius: "50%",
        backgroundColor: `#86acb1`,
        left: props.xPos,
        top: props.yPos,
        transform: `translate(-50%, -50%) scale(min(${scroll * 0.03}, 10)`,
        zIndex: "-1",
        overflowY: "hidden",
        overflowX: "hidden"
      }}
    >
      {" "}
    </div>
  );
}
