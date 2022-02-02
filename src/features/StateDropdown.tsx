import { Autocomplete, TextField, Box } from "@mui/material";

interface StateProps {
  setResidentState: Function;
  states: [{ label: string; value: string }];
}

//prettier-ignore
export const StateDropdown = ({ setResidentState, states }: StateProps) => {
  const handleChange = (event: any, value: any) => {
    event.preventDefault()
    if (value === null) {
      setResidentState(null);
    } else {
      setResidentState(value.value);
    }
  };

  return (
    <>
      <Autocomplete
        autoHighlight
        fullWidth
        id="auto-highlight"
        onChange={handleChange}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        options={states}
        sx={{ display: "flex", flex: "5", margin: "3%", minWidth: "157px" }}
        renderInput={(params) => (<TextField {...params} label="State" required />)}
        renderOption={(props, option: any) => (
          <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 }, flex: 5 }} {...props} value={option.value} >
            {option.label}
          </Box>
        )}
      />
    </>
  );
};
