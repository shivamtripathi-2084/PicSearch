import React, { useEffect } from "react";
import { fetchGIF, fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTabs, results, loading, error } = useSelector(
    (store) => store.search,
  );



  useEffect(() => {
    if(!query) return
    const getData = async () => {
      try {
        dispatch(setLoading());
          let data = []
        if (activeTabs == "photos") {
          let response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
          }));
          console.log(data);
        }

        if (activeTabs == "videos") {
          let response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "videos",
            title: item.user.name,
            thumbnail: item.image,
            src: item.video_files.link,
          }));
          console.log(data);
        }

        if (activeTabs == "GIF") {
          let response = await fetchGIF(query);
          data = response.data.data.map((item) => ({
            id: item.id,
            type: item.type,
            title: item.title || "GIF",
            thumbnail: item.file.hd.jpg.url,
            src: item.file.hd.gif.url,
          }));
          console.log(data);
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };
    getData();
  }, [query, activeTabs, dispatch]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading..</h1>;

  return (
    <div className='flex justify-between w-full flex-wrap gap-6 overflow-auto px-10'>
      {results.map((item, idx) => {
        return <div key={idx}>
                <ResultCard item ={item} />
        </div>
      })}
    </div>
  );
};

export default ResultGrid;
