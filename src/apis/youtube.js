import axios from 'axios';

const KEY = 'AIzaSyDopFlmStKiAI4QH9l_DHtbo9dOznjMzYo';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key : KEY
	}
})