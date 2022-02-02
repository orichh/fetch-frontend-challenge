import { Autocomplete, TextField, Box } from "@mui/material";

interface OccupationProps {
  setOccupation: Function;
  occupations: Array<string>;
}

//prettier-ignore
export const OccupationDropdown = ({ setOccupation, occupations }: OccupationProps) => {
  const occupationsData = occupations.map((occupation) => ({ label: occupation, value: occupation }));

  const handleChange = (event: any, value: any) => {
    event.preventDefault()
    if (value === null) {
      setOccupation(null);
    } else {
      setOccupation(value.value);
    }
  };

  return (
    <>
      <Autocomplete
        autoHighlight
        fullWidth
        id="auto-highlight"
        sx={{ display: "flex", flex: "5", margin: "3%", minWidth: "157px" }}
        onChange={handleChange}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        options={occupationsData}
        renderInput={(params) => (<TextField {...params} label="Occupation" required />)}
        renderOption={(props, option: any) => (
          <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props} value={option.value}>
            {option.label}
          </Box>
        )}
      />
    </>
  );
};
