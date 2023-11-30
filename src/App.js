import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchStart, fetchSuccess } from "./Actions";
import ActivityList from "./Components/ActivityList";

import axios from "axios";

function App(props) {
  const { loading, error } = props;

  useEffect(() => {
    props.fetchStart();
    axios.get("https://www.boredapi.com/api/activity").then((res) => {
      props.fetchSuccess(res.data);
    });
  }, []);

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

const mapActionsToProps = () => {
  return {
    fetchStart,
  };
};

export default connect(mapStateToProps, { fetchStart, fetchSuccess })(App);
