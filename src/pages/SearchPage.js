import React, { useState, useEffect } from "react";
import SearchCard from "../components/SearchPageComponents/SearchCard/SearchCard";
import { Stack, Typography, Button } from "@mui/material";
import SidePanel from "../components/SearchPageComponents/SidePanel/SidePanel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";
import { useParams } from "react-router-dom";
import ViewMoreSkeleton from "../components/SearchPageComponents/ViewMoreSkeleton/ViewMoreSkeleton";

const SearchPage = () => {
  const [list, setList] = useState([]);
  const [resultsNum, setResultsNum] = useState(5);
  const [isloding, setIsloding] = useState(true);
  const [noMoreData, setNoMoreData] = useState(false);
  const { searchText } = useParams();

  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/v2/find",
    params: {
      title: searchText,
      limit: `${resultsNum}`,
      sortArg: "moviemeter,asc",
    },
    headers: {
      "X-RapidAPI-Key": "caf467bd50msh1a4a2e97771a573p18ed90jsnb2ab667232c2",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };
  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      const data = response.data.results;
      setIsloding(true);
      if (list.length === data.length) {
        setNoMoreData(true);
      }
      setList(data);
    } catch (error) {
      console.error(error);
      setIsloding(true);
      setNoMoreData(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, [resultsNum, searchText]);

  const handelViewMore = () => {
    setIsloding(false);
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
                {list &&
                  (isloding ? (
                    !noMoreData && (
                      <Button
                        color="info"
                        variant="text"
                        onClick={handelViewMore}
                      >
                        <Typography textTransform="none">
                          More popular matches
                        </Typography>
                        <KeyboardArrowDownIcon />
                      </Button>
                    )
                  ) : (
                    <ViewMoreSkeleton />
                  ))}
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
