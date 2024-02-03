import React from "react";

function ListItem(props) {
  const { data } = props;
  return (
    <div>
      {data.name} &nbsp;
      {data.email}
    </div>
  );
}

export default ListItem;
