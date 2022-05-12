import React from "react";

function H1withStroke({ text }) {
  return (
    <div className="h1withshadow">
      <h1 classname="h1text">{text}</h1>
      <h1 classname="h1shadow">{text}</h1>
    </div>
  );
}

export default H1withStroke;
