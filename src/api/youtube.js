import axios from 'axios';

const KEY = 'AIzaSyAVbI0SwgfrF-LKyH0BE3YF7edTavz-uOE'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part:'snippet',
    maxResults:5,
    key: KEY
  }
});
