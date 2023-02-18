import * as React from "react";
import * as MuiTextField from "@mui/material/TextField";
import styled from "styled-components";

export const TextField = (props) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState(null);
  const { size = "small", variant = "outlined", onChangeHandler } = props;

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChangeHandler) {
      const anyError = onChangeHandler(newValue); // Pass state info to implementer, take any error
      setError(anyError);
      setHelperText(anyError ? "Field is required" : null);
    }
  };
  return (
    <MuiTextField.default
      size={size}
      variant={variant}
      onChange={handleChange}
      onBlur={handleChange}
      value={value}
      error={error}
      helperText={helperText}
      {...props}
    />
  );
};

export default styled(TextField)`
  width: 100%;
  margin-top: 10px;
`;
