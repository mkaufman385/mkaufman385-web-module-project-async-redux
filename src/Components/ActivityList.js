import React from "react";
import { connect } from "react-redux";
import Activity from "./Activity";

const ActivityList = (props) => {
  const { activities } = props;

  return <div id="activityList">{<Activity activity={activities} />}</div>;
};

const mapStateToProps = (state) => {
  return {
    activities: state.activities,
  };
};

export default connect(mapStateToProps)(ActivityList);
