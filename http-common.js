import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:50235/api',
  headers: {
    'Content-type': 'application/json'
  }
})
