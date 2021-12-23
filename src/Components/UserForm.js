import * as React from "react";
import styles from "./UserForm.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { usePreviousProps } from "@mui/utils";
import ErrorModal from "./ErrorModal";

const UserForm = (props) => {
  const [enteredUserName, setEnteredUserName] = React.useState("");
  const [enterdUserAge, setEnteredUserAge] = React.useState("");
  const [error, setError] = React.useState();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUserName === "" || enterdUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    // if (
    //   enteredUserName.trim().length === 0 ||
    //   enterdUserAge.trim().length === 0
    // ) {
    //   setError({
    //     title: "Invalid Input",
    //     message: "Please enter a valid name and age (non-empty value)",
    //   });
    //   console.log(error);
    //   return;
    // }
    if (+enterdUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    console.log(enteredUserName, enterdUserAge);
    props.onAddUser(enteredUserName, enterdUserAge);
    setEnteredUserName("");
    setEnteredUserAge("");
  };
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} />}

      <form onSubmit={onSubmitHandler}>
        <TextField
          type={"text"}
          value={enteredUserName}
          onChange={userNameChangeHandler}
          required
          id="outlined-basic"
          label="Name"
          variant="outlined"
          fullWidth
        />
        <TextField
          type={"number"}
          value={enterdUserAge}
          onChange={userAgeChangeHandler}
          required
          id="outlined-basic"
          label="age"
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" type="submit">
          Add User
        </Button>
      </form>
    </div>
    // <Box
    //   component="form"
    //   sx={{
    //     "& > :not(style)": { m: 1, width: "25ch" },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    //   <TextField id="filled-basic" label="Filled" variant="filled" />
    // </Box>
  );
};
export default UserForm;
