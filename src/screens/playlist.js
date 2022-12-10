import React, { useEffect, useState } from "react";
import "./playlist.css";
import { useLocation } from "react-router-dom";
import apiClient from "../spotify";
// import SongCard from "../components/songCard";
import Queue from "../components/queue";

export default function Playlist(props) {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentPlaylist, setCurrentPlaylist] = useState("");

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setCurrentPlaylist(location.state?.name)
          setTracks(res.data.items);
        });
    }
  }, [location.state]);


  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        {/* <SongCard album={currentTrack?.album} /> */}
        <Queue tracks={tracks} playlist={currentPlaylist}/>
      </div>
    </div>
  );
}