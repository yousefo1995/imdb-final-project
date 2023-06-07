import React, { useState, useEffect } from "react";
import SearchCard from "../components/SearchPageComponents/SearchCard/SearchCard";
import { Stack, Typography, Button } from "@mui/material";
import SidePanel from "../components/SearchPageComponents/SidePanel/SidePanel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const [list, setList] = useState([]);
  const [resultsNum, setResultsNum] = useState(5);
  const { searchText } = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/title/v2/find",
      params: {
        title: searchText,
        limit: `${resultsNum}`,
        sortArg: "moviemeter,asc",
      },
      headers: {
        "X-RapidAPI-Key": "c9a49e6e0emshe6287501bc0261cp1f8a3cjsn71d861239fec",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        const data = response.data.results;
        setList(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [resultsNum, searchText]);

  const handelViewMore = () => {
    setResultsNum(resultsNum + 5);
  };

  return (
    <Stack alignItems="center">
      <Stack
        paddingLeft={{ xxl: "5.5%", xl: "3.5%", md: "1%" }}
        paddingRight={{ xxl: "5.5%", xl: "3.5%", md: "1%" }}
        width={{ xs: "100%", md: "100%", lg: "992px", xl: "1232px" }}
        alignItems="center"
        paddingTop={2}
      >
        <Stack flexDirection={{ sx: "column", lg: "row" }} width="100%">
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
              {list ? (
                list.map(
                  (item) =>
                    item.image && (
                      <SearchCard
                        movieTitle={item.title}
                        image={item.image.url}
                        releaseYear={item.year}
                        titleType={item.titleType}
                        key={item.id}
                      />
                    )
                )
              ) : (
                <Stack flexDirection="row">
                  <Typography variant="h2" color="error">
                    No results found for
                  </Typography>
                  <Typography marginLeft={1} variant="h2">
                    " {searchText}"
                  </Typography>
                </Stack>
              )}

              <Stack width="212px" alignContent="flex-start">
                {list && (
                  <Button color="info" variant="text" onClick={handelViewMore}>
                    <Typography textTransform="none">
                      More popular matches
                    </Typography>
                    <KeyboardArrowDownIcon />
                  </Button>
                )}
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
