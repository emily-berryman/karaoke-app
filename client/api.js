import request from 'superagent'

const youtubeAPI = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDsnTtMOS3SLeB0s6zMH4dT7T5os-xtWCM&part=snippet&type=video&maxResults=1&q='lyrics '`



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


