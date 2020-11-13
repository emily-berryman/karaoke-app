import React from 'react'
import SongList from './SongList'


import GetYoutubeVid from './GetYoutubeVid'
import {searchForVid} from '../api'

const App = () => {
  return (
    <div className="page-container">
      <h1 className = 'Logo' >Google Sounds</h1>
 
    
      <GetYoutubeVid />
      <SongList />
      {/* {searchForVid()} */}
    </div>
  )
}




export default App
