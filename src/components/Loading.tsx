import { CircularProgress } from "@mui/material";

export const Loading = (): JSX.Element => {
  return (
    <div
      style={{
        position: "absolute",
        top: -300,
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={50} />
    </div>
  );
};
