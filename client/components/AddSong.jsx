import React from 'react'

const AddSong = (props) => {
return (
  <button className='text-button' onClick={props.addSong}>
  Add Song
</button>
)
} 

export default AddSong