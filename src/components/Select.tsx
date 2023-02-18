import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";

export default (props) => {
  const { label, size = "small", items = [], onChange } = props;

  const [value, setValue] = React.useState("");

  const itemsTemplate = items.map((item) => (
    <MenuItem value={item.value}>{item.label}</MenuItem>
  ));

  const StyledSelect = styled(Select)`
    width: 100%;
    text-align: left;
  `;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size={size}>
        {label ? (
          <InputLabel id="label-id" size={size}>
            {label}
          </InputLabel>
        ) : null}
        <StyledSelect
          {...props}
          labelId="label-id"
          size={size}
          value={value}
          onChange={(event) => {
            setValue(event.target.value as string); // These event signatures are different across mui components...
            if (onChange) onChange(event.target.value); // Pass state info to implemente
          }}
        >
          {itemsTemplate}
        </StyledSelect>
      </FormControl>
    </Box>
  );
};
