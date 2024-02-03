import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
const CREATE_USER = gql`
  mutation CreateUser($name: String, $email: String) {
    createUser(name: $name, email: $email) {
      _id
      name
    }
  }
`;
const CreateUser = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER, {
    variables: {
      name: formState.name,
      email: formState.email,
    },
  });
  if (loading) return <p>loading ...</p>;
  if (error) {
    console.log(error);
    return <p>Error in Fetching Data</p>;
  }
  if (data) {
    console.log("data", data);
  }
  return (
    <div>
      <h1>Create a new Entity...</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createUser();
          //   createUser({
          //     variables: {
          //       name: formState.name,
          //       email: formState.email,
          //     },
          //   });
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value,
              })
            }
            type="text"
            placeholder="Name of the user"
          />
          <br />
          <br />
          <input
            className="mb2"
            value={formState.url}
            onChange={(e) =>
              setFormState({
                ...formState,
                email: e.target.value,
              })
            }
            type="text"
            placeholder="The Email of the user"
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
      {data ? <p>User Created : {data.createUser.name} </p> : null}
    </div>
  );
};

export default CreateUser;
