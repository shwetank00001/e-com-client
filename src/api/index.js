import axios from 'axios'

const url = 'http://localhost:5000/items'


export const getData = () => axios.get(url)

export const createData = (newPost) => axios.post( url, newPost )

export const deleteData = (id) => axios.delete(`${url}/${id}`)

