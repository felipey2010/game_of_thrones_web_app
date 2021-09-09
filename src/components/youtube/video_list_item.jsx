const VideoListItem = props => {
  const video = props.video;
  const imageURL = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item" onClick={() => props.onUserSelected(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img
            className="media-object"
            src={imageURL}
            alt={video.snippet.title}
          />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
