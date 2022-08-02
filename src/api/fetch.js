import axios from 'axios'
import { BASE_URL } from '../variables/url'


export const getAllPosts = async () => {
  return await axios.get(`${BASE_URL}posts`)
}

export const getPostById = async (id) => {
  return await axios.get(`${BASE_URL}posts/${id}`)
}
