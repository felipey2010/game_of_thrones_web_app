import React from "react";

const VideoDetails = props => {
  const video = props.video;

  if (!video) {
    return <></>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsiv-16by9">
        <iframe
          className="embed-responsive-item"
          src={url}
          title={video.snippet.title}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};
export default VideoDetails;
