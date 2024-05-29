import React, { useState } from 'react';

import ReactPlayer from 'react-player'


export default function LinkUrl() {
  //for onchange event 
  const [youtubeVideo , setYoutubeVideo] = useState('');
  //for submit event
  const [youtubeURL , setYoutubeURL] = useState(' ');

  const handleYoutubeChange=(e) =>{
    setYoutubeVideo(e.target.value);
  }

  const handleYoutubeSubmit=(e) =>{
    e.preventDefault();
    setYoutubeURL(youtubeVideo);
  }
    return (
      <div className='wrapper'>
          <form className='form-group form' onSubmit={handleYoutubeSubmit}>

           <input type='text' className='form-control' placeholder='Enter youtube URL' required  onChange={handleYoutubeChange}/>

           <button type='submit' className='btn btn-success btn-md'>
            UPLOAD
           </button>
           <div className='youtube-box'>
                  <ReactPlayer url= {youtubeURL} className='video' controls/>
           </div>
          </form>
       
           
       

      </div>
    )
}