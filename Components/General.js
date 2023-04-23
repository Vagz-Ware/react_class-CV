import React from "react";

const General = (props) => {
  const { mode, name, email, number } = props;

  if (mode === "displayMode") {
    console.log("1st " + mode);
    return (
      <div>
        <h4>Name : {name}</h4>
        <h4>Email : {email}</h4>
        <h4>Phone Number : {number}</h4>
      </div>
    );
  } else {
    console.log("2nd " + mode);
    return (
      <div>
        <p>
          Name <input type="text" placeholder={name} />{" "}
        </p>
        <p>
          Email <input type="text" placeholder={email} />{" "}
        </p>
        <p>
          Phone Number <input type="text" placeholder={number} />{" "}
        </p>
      </div>
    );
  }
};

export default General;
