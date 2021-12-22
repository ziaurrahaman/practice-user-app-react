import * as React from "react";
import styles from "./UserForm.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { usePreviousProps } from "@mui/utils";

const UserForm = (props) => {
  const [enteredUserName, setEnteredUserName] = React.useState("");
  const [enterdUserAge, setEnteredUserAge] = React.useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      setEnteredUserAge.trim().length === 0
    ) {
      return;
    }
    if (+enterdUserAge < 1) {
      return;
    }
    console.log(enteredUserName, enterdUserAge);
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
