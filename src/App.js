import React, { Component } from "react";
import General from "../Components/General";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import "./styles.css";

let displayMode = "displayMode",
  editMode = "editMode";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: displayMode
    };
  }

  setToDisplay = (event) => {
    event.preventDefault();
    this.setState({ mode: displayMode });
  };

  setToEdit = (event) => {
    event.preventDefault();
    this.setState({ mode: editMode });
  };

  render() {
    let generalInfo = {
      name: "Micheal Andolini",
      email: "MAndolini101@gamil.com",
      number: "0712345678"
    };

    let educationalInfo = {
      "school name": "Oxford Varsity",
      "title of study": "Masters in BA",
      "period of study": "2000-2008"
    };

    let experienceInfo = {
      "company name": "Apple Inc",
      position: "Vice President",
      "period of work": "2009 - 2023",
      "main tasks of work": "Overseeing Company operations"
    };

    return (
      <div>
        <form>
          <div className="general">
            <h2>General Section</h2>
            <General
              mode={this.state.mode}
              name={generalInfo.name}
              email={generalInfo.email}
              number={generalInfo.number}
            />
          </div>
          <div>
            <h2>Education Section</h2>
            <Education
              school={educationalInfo["school name"]}
              study={educationalInfo["title of study"]}
              date={educationalInfo["period of study"]}
            />
          </div>
          <div>
            <h2>Experience Section</h2>
            <Experience
              company={experienceInfo["company name"]}
              position={experienceInfo["position"]}
              tasks={experienceInfo["main tasks of work"]}
              period={experienceInfo["period of work"]}
            />
          </div>
          <button onClick={this.setToEdit}>Edit</button>
          <button onClick={this.setToDisplay}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
