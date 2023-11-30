import React from "react";
import { connect } from "react-redux";
import "./App.css";
import ActivityList from "./Components/ActivityList";

function App(props) {
  const { loading, error } = props;

  return (
    <div className="App">
      <h1>Async Redux - Random Activity Selector</h1>
      <form>
        <button>Get New Activity</button>
      </form>

      {error !== "" && <h3>{error}</h3>}

      {loading ? <h3>Loading now</h3> : <ActivityList />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps)(App);
