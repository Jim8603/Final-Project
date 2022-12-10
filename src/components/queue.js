import React from "react";
import "./queue.css";

export default function Queue({ tracks, playlist }) {
  const getTrackDuration = (trackduration) => {
    const track_duration = trackduration / 1000;
    let track_min = Math.floor(track_duration / 60);
    let track_sec = Math.round(track_duration - (track_min * 60));
    if (track_sec < 10) {track_sec = '0'+ track_sec}
    return track_min + ':' + track_sec;
  }

  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="playlist-Title">{playlist}</p>
        <div className="queue-list">
          {tracks?.map((track, index) => (
            <div key={index + "key"} className="queue-item flex">
              <p className="track-name">{index + 1} &nbsp; &nbsp; {track?.track?.name}</p>
              <ArtistDetails artists={track?.track?.artists}/>
              <p>{getTrackDuration(track?.track?.duration_ms)}</p>
            </div>      
          ))}
        </div>
      </div>
    </div>
  );
}

function ArtistDetails(artists) {
  return (
    <div>
      {artists.artists.map((artist,index) =>(
        <div key={index} className="artist-name">
          {artist.name}
        </div>
      ))}
    </div>
   
  )
  
}