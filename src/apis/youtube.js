import axios from 'axios';


const KEY = "AIzaSyCkA0A4UjhJ_Vt59FGnIL65kdL3a4Inkfg";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    type: 'video',
    maxResults: '5',
    key: KEY
  }
});
