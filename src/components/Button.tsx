import * as React from "react";
import Button from "@mui/material/Button";

export default (props) => {
  const { label } = props;
  return (
    <Button variant="contained" {...props}>
      {label ? label : null}
    </Button>
  );
};
