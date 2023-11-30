import React from "react";
import { connect } from "react-redux";
import Activity from "./Activity";

const ActivityList = (props) => {
  const { activities } = props;

  console.log("This one:", activities);

  return (
    <div id="activityList">
      {activities.map((activity) => {
        return <Activity activity={activity} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activities: state.activities,
  };
};

export default connect(mapStateToProps)(ActivityList);
