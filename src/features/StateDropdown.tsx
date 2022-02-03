import { Autocomplete, TextField, Box } from "@mui/material";

type StateProps = {
  setResidentState: Function;
  states: Array<{ label: string; value: string }>;
};

//prettier-ignore
export const StateDropdown = ({ setResidentState, states }: StateProps) => {

  const handleChange = (event: any, value: any) => {
    event.preventDefault()
    if (value === null) {
      setResidentState("");
    } else {
      setResidentState(value.value);
    }
  };

  return (
    <>
      <Autocomplete
        autoHighlight
        fullWidth
        onChange={handleChange}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        options={states}
        sx={{ display: "flex", flex: "5", margin: "3%", minWidth: "159px" }}
        renderInput={(params) => (<TextField {...params} label="State" required />)}
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
