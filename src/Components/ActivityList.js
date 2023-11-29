import React from "react";
import Activity from "./Activity";

const ActivityList = (props) => {
  const { activities } = props;

  return (
    <div id="activityList">
      {activities.map((activity) => {
        return <Activity activity={activity} />;
      })}
    </div>
  );
};

export default ActivityList;
