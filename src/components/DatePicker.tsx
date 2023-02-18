import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default (props) => {
  const { onChangeHandler } = props;
  const [value, setValue] = React.useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
    if (onChangeHandler) onChangeHandler(newValue); // Pass state info to implementer
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        {...props}
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField size="small" {...params} />}
      />
    </LocalizationProvider>
  );
};
