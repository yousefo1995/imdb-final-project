import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Modal, Rating, Stack, Typography } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ImdbButton from "../../Core/ImdbButton/ImdbButton";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../Firebase";
import { AuthContext } from "../../../AuthContext";
const RatingModal = ({ openModal, handleCloseModal, movieId }) => {
  const [value, setValue] = useState(0);
  const [yourRates, setYourRates] = useState({});
  const { currentUser } = useContext(AuthContext);

  const clickHandler = (e) => {
    e.stopPropagation();
  };

  // Adding the movie rating to TMDB Data
  //   const options = {
  //     method: "POST",
  //     url: `https://api.themoviedb.org/3/movie/${movieId}/rating`,
  //     headers: {
  //       accept: "application/json",
  //       "Content-Type": "application/json;charset=utf-8",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzdiN2RmZTA2NGQ2MzZhOWRlNWIxYmUzYWVjZjc0OCIsInN1YiI6IjY0NjBiNWY4YTY3MjU0MDBlM2QxYzhkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FEW-f0nD7r9Pt2Y0z5zNp6haKVhqashRIv0aL6aU6LM",
  //     },
  //     data: '{"value":8.5}',
  //   };

  //   const addRateToTDMB = () => {
  //     axios
  //       .request(options)
  //       .then(function (response) {
  //         console.log(response.data);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   };

  const addRateToFirebase = async () => {
    try {
      const ratingRef = doc(db, "Rating", currentUser.uid);
      const ratingSnapshot = await getDoc(ratingRef);

      if (ratingSnapshot.exists()) {
        const data = ratingSnapshot.data();
        const movies = data.movies || [];
        const existingMovie = movies.find((movie) => movie.movieId === movieId);
        if (existingMovie) {
          const findIndex = movies.find((movie) => movie.movieId === movieId);

          existingMovie.rateValue = value;
          movies[findIndex] = value;
          await setDoc(ratingRef, {
            movies: movies,
          });
        }

        await updateDoc(ratingRef, {
          movies: arrayUnion({
            movieId,
            rateValue: value,
            isRated: true,
          }),
        });
      } else {
        await setDoc(ratingRef, {
          movies: [
            {
              movieId,
              rateValue: value,
              isRated: true,
            },
          ],
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getYourRate = async () => {
    try {
      const docRef = doc(db, "Rating", currentUser.uid);
      const docSnap = await getDoc(docRef);
      setYourRates(docSnap.data());
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getYourRate();
  }, [currentUser, movieId]);

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack
        flexDirection="row"
        justifyContent="center"
        height="100%"
        alignItems="center"
        onClick={() => handleCloseModal()}
      >
        <Stack
          bgcolor="#1F1F1F"
          width={{ xs: "100%", md: "520px" }}
          padding={4}
          height="174px"
          borderRadius="8px"
          onClick={clickHandler}
          position="relative"
        >
          <Stack
            position="absolute"
            flexDirection="row"
            top={-94}
            width={{ xs: "100%", md: "520px" }}
            height="20px"
            justifyContent="center"
          >
            <Stack position="relative">
              <StarRoundedIcon
                sx={{
                  width: "160px",
                  height: "160px",
                  color: "info.main",
                  marginLeft: "20px",
                }}
              />{" "}
              <Typography
                fontSize={24}
                fontWeight={500}
                position="absolute"
                top={68}
                left={92}
                color="#fff"
              >
                8
              </Typography>
            </Stack>
          </Stack>
          <Stack
            justifyContent="space-between"
            height="85%"
            alignItems="center"
            marginTop={3}
          >
            <Typography variant="button" color="secondary">
              RATE THIS
            </Typography>{" "}
            <Typography variant="h2" color="#fff">
              Elemental
            </Typography>
            <Stack gap={2}>
              <Rating
                name="simple-controlled"
                size="large"
                max={10}
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                sx={{ color: "info.main" }}
              />
              <ImdbButton width="100%" onClick={addRateToFirebase}>
                Rate
              </ImdbButton>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default RatingModal;
