import { Button } from "@mui/material";
import * as React from "react";
import styles from "../App.module.css";
import classes from "../Components/ErrorModal.module.css";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <div className={classes.backdrop}>
      <div></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button variant="contained">ok</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;
