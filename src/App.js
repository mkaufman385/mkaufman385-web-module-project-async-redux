import React from "react";
import "./App.css";
import ActivityList from "./Components/ActivityList";
import data from "./Data/activities";

function App(props) {
  const activities = data;
  const loading = false;
  const error = "";

  return (
    <div className="App">
      <h1>Async Redux - Random Activity Selector</h1>
      <form>
        <button>Get New Activity</button>
      </form>

      {loading ? (
        <h3>Loading now</h3>
      ) : (
        <ActivityList activities={activities} />
      )}
    </div>
  );
}

export default App;
