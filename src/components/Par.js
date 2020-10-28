import React, { useState, useEffect } from "react";

export default function Par(props) {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY * 0.35);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div style={{ height: scroll }}> </div>
      <div>{props.children}</div>
    </>
  );
}
