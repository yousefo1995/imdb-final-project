import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Link } from "@mui/material";
import AccordionData from "./AccordionData";

const ImdbAccordion = ({ creator, stars }) => {
  return (
    <Box display={{ xs: "block", lg: "none" }}>
      <Accordion sx={{ bgcolor: "#212121" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFF" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            height: "24px",
            bgcolor: "#212121",
            flexDirection: "row-reverse",
            paddingLeft: "0",
          }}
        >
          <Link href="#" fontSize="16px" fontWeight="600" color="#fff">
            Top credits
          </Link>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingLeft: "0" }}>
          <AccordionData creator={creator} stars={stars} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ImdbAccordion;
