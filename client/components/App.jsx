import React from 'react'
import SongList from './SongList'


import GetYoutubeVid from './GetYoutubeVid'
import {searchForVid} from '../api'

const App = () => {
  return (
    <div className="page-container">
    
      <GetYoutubeVid />
      <SongList />
      {/* {searchForVid()} */}
    </div>
  )
}




export default App
