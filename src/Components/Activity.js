import React from "react";

const Activity = (props) => {
  const { activity } = props;

  return (
    <div class="activity">
      <h3>{activity.activity}</h3>
      <h4>Activity Type: {activity.type}</h4>
      <p>Participants: {activity.participants}</p>
    </div>
  );
};

export default Activity;
