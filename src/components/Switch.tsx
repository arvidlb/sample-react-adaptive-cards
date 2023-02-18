import * as React from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "styled-components";

const SwitchWithLabel = (props) => {
  const { onChangeHandler } = props;
  const [value, setValue] = React.useState("false");
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChangeHandler) onChangeHandler(newValue);
  };
  return (
    <FormControlLabel
      {...props}
      labelPlacement="start"
      control={<Switch color="primary" value={value} onChange={handleChange} />}
    />
  );
};

export default styled(SwitchWithLabel)`
  margin-top: 10px;
`;
