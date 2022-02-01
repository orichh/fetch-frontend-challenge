import { Autocomplete, TextField, Box } from "@mui/material";

interface Occupation {
  label: string;
  value: string;
}

interface OccupationProps {
  setOccupation: Function;
  occupations: Array<string>;
}

export const OccupationDropdown = ({
  setOccupation,
  occupations,
}: OccupationProps) => {
  const transformData = (occupations: string[]): Array<Occupation> => {
    const transformedData = occupations.map((occupation) => {
      return { label: occupation, value: occupation };
    });

    return transformedData;
  };

  const occupationsData = transformData(occupations);

  const handleChange = (event: object, value: any) => {
    console.log("value", value);
    if (value === null) {
      setOccupation(null);
    } else {
      setOccupation(value.value);
    }
  };

  return (
    <>
      <Autocomplete
        onChange={handleChange}
        autoHighlight
        id="auto-highlight"
        options={occupationsData}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Occupation" required />
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
