import React from 'react'
import GetYoutubeVid from './GetYoutubeVid'
import {searchForVid} from '../api'

const App = () => {
  return (
    <div className="page-container">
      <h1>React development has begun!</h1>
      <GetYoutubeVid />
      {/* {searchForVid()} */}
    </div>
  )
}




export default App
