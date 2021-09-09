import React from "react";
import SearchBar from "../components/youtube/search_bar";
import VideoList from "../components/youtube/video_list";
import YTSearch from "youtube-api-search";
import VideoDetails from "../components/youtube/video_details";
import { Link } from "react-router-dom";
import "../styles/youtube.css";

class YoutubePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch("Game of thrones");
  }

  videoSearch(term) {
    YTSearch({ key: process.env.REACT_APP_API_KEY, term: term }, data => {
      this.setState({
        videos: data,
        // selectedVideo: data[0],
      });
    });
  }
  render() {
    return (
      <div className="youtube-container">
        <Link to="/">Back</Link>
        <SearchBar
          onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}
        />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={userSelected =>
            this.setState({ selectedVideo: userSelected })
          }
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default YoutubePage;

/**
 * Project tutorial
 * https://www.innominds.com/blog/create-youtube-player-in-reactjs-part-3
 */
