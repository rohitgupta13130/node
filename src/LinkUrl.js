import React, { useState } from 'react';
import ReactPlayer from 'react-player';

export default function VideoUploadAndLink() {
  // State for handling local video file
  const [localVideo, setLocalVideo] = useState(null);
  // State for handling YouTube URL input
  const [youtubeVideo, setYoutubeVideo] = useState('');
  // State for storing the submitted YouTube URL
  const [youtubeURL, setYoutubeURL] = useState('');

  // Event handler for file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setLocalVideo(fileURL);
      setYoutubeURL(''); // Clear YouTube URL when a local video is uploaded
    }
  };

  // Event handler for YouTube URL input change
  const handleYoutubeChange = (e) => {
    setYoutubeVideo(e.target.value);
  };

  // Event handler for YouTube URL form submit
  const handleYoutubeSubmit = (e) => {
    e.preventDefault();
    setYoutubeURL(youtubeVideo);
    setLocalVideo(null); // Clear local video when a YouTube URL is submitted
  };

  // Determine which video URL to use
  const videoURL = localVideo || youtubeURL;

  return (
    <div className='wrapper'>
      <form className='form-group form' onSubmit={handleYoutubeSubmit}>

      <input
          type='text'
          className='form-control'
          placeholder='Enter YouTube URL'
          value={youtubeVideo}
          onChange={handleYoutubeChange}
        />

         <button type='submit' className='btn btn-success btn-md'>
          UPLOAD
        </button>

        <input
          type='file'
          className='form-control'
          accept='video/*'
          onChange={handleFileChange}
        />
       
      </form>

      <div className=' youtbe-box ' >
        {videoURL && (
          <ReactPlayer url={videoURL} className='video' controls style={{backgroundColor:'yellow'}} />
        )}
      </div>
    </div>
  );
}
