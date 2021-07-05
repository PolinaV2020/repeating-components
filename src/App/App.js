import React from "react";
import data from "./data.json";

class App extends React.Component {
  render() {
    return (
      <div className="users-list">
        {data.map((user) => {
          return (
            <div key={user._id} className="user-card">
              <h3>{user.name.first}</h3>
              <h4>{user.name.last}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
