import React from "react";
import SearchCard from "../components/SearchPageComponents/SearchCard/SearchCard";
import { Stack, Typography, Button } from "@mui/material";
import SidePanel from "../components/SearchPageComponents/SidePanel/SidePanel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SearchPage = ({ searchText = "searchText" }) => {
  return (
    <Stack alignItems="center">
      <Stack
        paddingLeft={{ xxl: "5.5%", xl: "3.5%", md: "1%" }}
        paddingRight={{ xxl: "5.5%", xl: "3.5%", md: "1%" }}
        width={{ xs: "100%", md: "100%", lg: "992px", xl: "1232px" }}
        alignItems="center"
        paddingTop={2}
      >
        <Stack
          flexDirection={{ sx: "column", lg: "row" }}
          width="100%"
          // justifyContent="space-between"
        >
          {/* padding 16 and xl width check the border and margin */}
          <Stack>
            <Typography variant="h3" padding={3}>
              Search "{searchText}"
            </Typography>
            <Stack
              paddingY={1}
              marginLeft={2}
              marginBottom={3}
              boxSizing="content-box"
              width={{ xs: "100%", lg: "675px", xl: "800px" }}
            >
              <Typography
                borderLeft="5px solid "
                borderColor="secondary.main"
                paddingLeft={1}
                fontSize="32px"
                color="#000"
              >
                Titles
              </Typography>
            </Stack>
            <Stack
              border="1px solid #E0E0E0"
              borderRadius="0.25rem"
              marginX={{ sx: "0", lg: "16px" }}
              padding={3}
            >
              <SearchCard />
              <SearchCard />
              <SearchCard />
              <SearchCard />
              <SearchCard />
              <SearchCard />
              <SearchCard />
              <SearchCard />
              <SearchCard />
              <Stack width="212px" alignContent="flex-start">
                <Button color="info" variant="text">
                  <Typography textTransform="none">
                    More popular matches
                  </Typography>
                  <KeyboardArrowDownIcon />
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack marginTop={3} width={{ xs: "100%", xl: "406px" }}>
            <SidePanel searchText={searchText} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SearchPage;
