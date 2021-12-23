import logo from "./logo.svg";
import * as React from "react";
import UserForm from "./Components/UserForm";
import styles from "./App.module.css";

import UsersList from "./Components/UsersList";
import { Card } from "@mui/material";

function App() {
  const [usersList, setUsersList] = React.useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((previousList) => {
      return [
        ...previousList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Card>
      <section className={`${styles["user-form"]}`}>
        <UserForm onAddUser={addUserHandler}></UserForm>
      </section>
      <section className={`${styles["user-form"]}`}>
        <UsersList users={usersList}></UsersList>
      </section>
    </Card>
  );
}

export default App;
