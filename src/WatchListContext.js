import React, { useState, useEffect } from "react";
import { createContext } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./Firebase";

export const WatchListContext = createContext();
const WatchListContextProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);
  const getData = async () => {
    const data = await getDocs(collection(db, "watchList"));
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      firebaseId: doc.id,
    }));
    setWatchList(filteredData);
  };
  useEffect(() => {
    getData();
  }, []);

  const addToWatchList = async (movieData) => {
    const isDuplicate = watchList.find((movie) => movie.id === movieData.id);
    if (!isDuplicate) {
      try {
        const docRef = await addDoc(collection(db, "watchList"), movieData);
        getData();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  const deleteFromWatchList = async (firebaseId) => {
    // setWatchList((prev) =>
    //   prev.filter((movie) => movie.firebaseId !== firebaseId)
    // );
    const movieDoc = doc(db, "watchList", firebaseId);
    await deleteDoc(movieDoc);
    getData();
  };

  const clearWatchList = async () => {
    const deletePromises = watchList.map(async (movie) => {
      const movieDoc = doc(db, "watchList", movie.firebaseId);
      await deleteDoc(movieDoc);
    });
    await Promise.all(deletePromises);

    getData();
  };

  return (
    <WatchListContext.Provider
      value={{
        watchList,
        setWatchList,
        addToWatchList,
        deleteFromWatchList,
        clearWatchList,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListContextProvider;
