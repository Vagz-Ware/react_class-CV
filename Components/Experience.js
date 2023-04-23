import React from "react";

const Experience = (props) => {
  const { company, position, tasks, period } = props;

  return (
    <div>
      <h1>{company}</h1>
      <h1>{position}</h1>
      <h1>{tasks}</h1>
      <h1>{period}</h1>
    </div>
  );
};

export default Experience;
