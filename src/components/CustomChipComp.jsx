import React from "react";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";

const CustomChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "rgba(248, 177, 60, 1)",
  color: "black",
  height: "2rem",
  margin: "3px",
  fontWeight: 500,
  "& .MuiChip-label": {
    fontWeight: "bold",
  },

  "&:hover": {
    color: "rgb(222, 157, 54)",
  },
}));

export default function CustomChipComp({ label, iconUrl }) {
  return (
    <CustomChip
      label={label}
      variant="filled"
      avatar={<Avatar src={iconUrl} />}
    />
  );
}
