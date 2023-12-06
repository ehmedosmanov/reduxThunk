import axios from 'axios'

const baseUrl = 'http://localhost:3000/popularMenu'

export const getAllProductApi = async () => {
  try {
    const res = await axios.get(baseUrl)
    return res.data 
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const addProductApi = async product => {
  try {
    const res = await axios.post(baseUrl, product)
    return res.data
  } catch (error) {
    console.log('Error', error)
    throw error
  }
}
