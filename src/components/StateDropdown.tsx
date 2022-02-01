import { Autocomplete, TextField, Box } from "@mui/material";

export const StateDropdown = ({
  setResidentState,
  states,
}: {
  setResidentState: Function;
  states: [];
}) => {
  const handleChange = (event: object, value: any) => {
    console.log("value", value);
    if (value === null) {
      setResidentState(null);
    } else {
      setResidentState(value.value);
    }
  };

  return (
    <>
      <Autocomplete
        onChange={handleChange}
        autoHighlight
        id="auto-highlight"
        options={states ? states : [{ label: "loading", value: "loading" }]}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="State" required />
        )}
        renderOption={(props, option: any) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 }, flex: 5 }}
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
