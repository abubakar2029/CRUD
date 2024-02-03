import React from "react";
import ListItem from "./ListItem";
import { gql, useQuery } from "@apollo/client";

const LIST_USERS = gql`
  query {
    users {
      email
      name
    }
  }
`;

function List() {
  const { data, loading, error } = useQuery(LIST_USERS);
  if (loading) return <p>loading ...</p>;
  if (error) {
    console.log(error);
    return <p>Error in Fetching Data</p>;
  }
  return (
    <div>
      <h1>List</h1>
      {data.users.map((item, index) => {
        return <ListItem key={index} data={item} />;
      })}
    </div>
  );
}

export default List;
