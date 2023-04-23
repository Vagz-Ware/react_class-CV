import React from "react";

const Education = (props) => {
  const { school, study, date } = props;

  return (
    <div>
      <p>{school}</p>
      <h1>{study}</h1>
      <h1>{date}</h1>
    </div>
  );
};

export default Education;
