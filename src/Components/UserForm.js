import * as React from "react";
import styles from "./UserForm.module.css";
import TextField from "@mui/material/TextField";
import { usePreviousProps } from "@mui/utils";

const UserForm = (props) => {
  return (
    <form className={`${styles["user-form-control"]}`}>
      <TextField
        id="outlined-basic"
        label={props.hintText}
        variant="outlined"
        fullWidth
      />
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
