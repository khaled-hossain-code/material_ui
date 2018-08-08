import React from "react";
import { Paper, Tabs } from "material-ui";
import { Tab } from "material-ui/Tabs";

export default ({ muscles, category, onSelect }) => {
  const index = category ? muscles.findIndex(muscle => muscle === category) : 0;
  const onTabChange = (e, index) => onSelect(muscles[index]);
  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {muscles.map(muscle => <Tab label={muscle} />)}
      </Tabs>
    </Paper>
  );
};
