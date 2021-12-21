import logo from "./logo.svg";
import styles from "./App.module.css";
import UserForm from "./Components/UserForm";
import { Button } from "@mui/material";

function App() {
  return (
    <div className={`${styles["user-form"]}`}>
      <UserForm hintText={"User Name"}></UserForm>
      <UserForm hintText={"Age"}></UserForm>
      <Button className={`${styles["add-user-button"]}`} variant="contained">
        Add User
      </Button>
    </div>
  );
}

export default App;
