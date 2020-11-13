import React from 'react'
import AddSong from  './AddSong'

import GetYoutubeVid from './GetYoutubeVid'
import {searchForVid} from '../api'

const App = () => {
  return (
    <div className="page-container">
      <h1>React development has begun!</h1>
      <AddSong />
      <GetYoutubeVid />
      {/* {searchForVid()} */}
    </div>
  )
}




export default App
