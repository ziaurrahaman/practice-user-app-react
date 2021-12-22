import logo from "./logo.svg";

import UserForm from "./Components/UserForm";
import styles from "./Components/App.module.css";
import { style } from "@mui/system";

function App() {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={`${styles["user-form"]}`}>
      <UserForm></UserForm>
    </div>
  );
}

export default App;
