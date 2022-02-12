import { Autocomplete, TextField, Box } from "@mui/material";

interface DropdownProps {
  setField: Function;
  selectOptions: Array<{ label: string; value: string }>;
  resetDropdown: Boolean;
  label: string;
}

export const SelectDropdown = ({
  setField,
  selectOptions,
  resetDropdown,
  label,
}: DropdownProps): JSX.Element => {
  const handleChange = (event: any, value: any) => {
    event.preventDefault();
    if (value === null) {
      setField("");
    } else {
      setField(value.value);
    }
  };

  return (
    <>
      <Autocomplete
        autoHighlight
        fullWidth
        sx={{ display: "flex", flex: "5", margin: "3%", minWidth: "159px" }}
        onChange={handleChange}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        options={selectOptions}
        key={resetDropdown.toString()}
        renderInput={(params) => (
          <TextField {...params} label={label} required />
        )}
        renderOption={(props, option: any) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
            value={option.value}
          >
            {option.label}
          </Box>
        )}
      />
    </>
  );
};
