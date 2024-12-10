import React, { useEffect, useState } from "react";

const DotCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom Dot Cursor */}
      <div
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          width: "10px", // Adjust size of the dot here
          height: "10px",
          backgroundColor: "white", // Adjust color of the dot here
          borderRadius: "50%",
          pointerEvents: "none", // Prevent dot from interfering with mouse events
          transform: "translate(-50%, -50%)",
          zIndex: 1000, // Ensure the dot is on top of other elements
        }}
      ></div>

      {/* Hide the default cursor */}
      <style>
        {`
          body {
            cursor: none;
          }
        `}
      </style>
    </>
  );
};

export default DotCursor;
