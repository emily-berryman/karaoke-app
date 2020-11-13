import React from 'react'
import AddSong from  './AddSong'

import GetYoutubeVid from './GetYoutubeVid'
import {searchForVid} from '../api'

const App = () => {
  return (
    <div className="page-container">
      <h1 className = 'Logo' >Google Sounds</h1>
      <GetYoutubeVid />
     <AddSong />
 
      {/* {searchForVid()} */}
    </div>
  )
}




export default App
