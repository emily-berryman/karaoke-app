import request from 'superagent'

const youtubeAPI = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDsnTtMOS3SLeB0s6zMH4dT7T5os-xtWCM&part=snippet&videoEmbeddable=true&type=video&maxResults=1&q='karaoke '`



// const apiKey = 'AIzaSyDsnTtMOS3SLeB0s6zMH4dT7T5os-xtWCM'


// function to a return a request with the user input search query passed in which gets added to the youtubeAPI endpoint



export function searchForVid(query){
  return request
  .get(youtubeAPI + query)
  .then(res => {
    console.log(res.body.items[0].id.videoId)
    return res.body.items[0].id.videoId}
   )
}


// title is the query state

export function addSongToList(urlFromDisplayedVid, title){
  // here is the post request that needs to add something to the song database in specified format
  return request.post('/songs')
  .send(
    {
      "title": title,
      "URL": urlFromDisplayedVid
   }
  )
  .then(response => response.body)
}

export function getSongsList(){

  return request.get('/songs')
  .then(response => response.body)

}