import { useQuery, gql } from "@apollo/client";
import { Autocomplete, TextField, Box } from "@mui/material";

const query = gql`
  query Form {
    data @rest(type: "Form", path: "form") {
      states {
        label: name
        abra: abbreviation
      }
    }
  }
`;

export const Test = () => {
  // TODO: Place the useQuery in the parent component above THIS dropdown
  // then pass the data down as props? so that the autocomplete dropdown
  // is re-usable
  const { loading, error, data } = useQuery(query);
  if (data) {
    console.log("data line 39 graphql", data);
  }

  return (
    <>
      <Autocomplete
        autoHighlight
        id="auto-highlight"
        options={
          data.data.states
            ? data.data.states
            : [{ label: "loading", abra: "loading" }]
        }
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="State" />}
        renderOption={(props, option: any) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            {option.label} ({option.abra})
          </Box>
        )}
      />
    </>
  );
};
