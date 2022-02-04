import { Autocomplete, TextField, Box } from "@mui/material";

interface OccupationProps {
  setOccupation: Function;
  occupations: Array<{ label: string; value: string }>;
  resetDropdown: Boolean;
}

//prettier-ignore
export const OccupationDropdown = ({ setOccupation, occupations, resetDropdown }: OccupationProps) => {

  const handleChange = (event: any, value: any) => {
    event.preventDefault()
    if (value === null) {
      setOccupation("");
    } else {
      setOccupation(value.value);
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
        options={occupations}
        key={resetDropdown.toString()}
        renderInput={(params) => (<TextField {...params} label="Occupation" required />)}
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
