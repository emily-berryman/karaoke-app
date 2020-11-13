import React from "react";
import { search } from "superagent";

import { searchForVid} from "../api";

class GetYoutubeVid extends React.Component {
  state = {
    vidToRender: null,
    query: ''
  }

  handleChange = (evt) => {
    this.setState({
      query: evt.target.value
    })
  }

  submit = (evt) => {
    evt.preventDefault()
    //this prevents the form from doing it's default behaviour, i.e submitting and looking for a route
    searchForVid(this.state.query).then((dataFromSearchForVidFunction) => {
      console.log("this is the data from the search for vid function ", dataFromSearchForVidFunction)
      this.setState({
        vidToRender: dataFromSearchForVidFunction
      })
    })
  }

  renderVid = () => {


  return (
    <>
      <iframe width="854" height="480"
      src={`https://www.youtube.com/embed/${this.state.vidToRender}?autoplay=1`}> </iframe> 
    </>
   )}
  
 
  render(){
    return (
      <>

      <form onSubmit={this.submit}>

        <label htmlFor="videoSearch"></label>

        <input className ='form-style 'type="search" name="vidSearchBar" onChange={this.handleChange} autoFocus={true}/>

        <br/> 

        <input className = 'button-style' type="submit" value="Let me sing this" onClick={this.submit} />

      </form>

      {this.state.vidToRender && this.renderVid()}

      </>
    )
  }
}



export default GetYoutubeVid;