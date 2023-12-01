import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchStart, fetchSuccess } from "./Actions";
import ActivityList from "./Components/ActivityList";

import { getActivities } from "./Actions";

function App(props) {
  const { loading, error, getActivities } = props;

  useEffect(() => {
    getActivities();
    //
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    props.getActivities();
  };

  return (
    <div className="App">
      <h1 className="App-header">Async Redux - Random Activity Selector</h1>
      <form onClick={handleClick}>
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

const mapActionsToProps = () => {
  return {
    fetchStart,
  };
};

export default connect(mapStateToProps, { getActivities })(App);
