import axios from "axios";

//https://api.themoviedb.org/3
// /movie/now_playing &language=pt-BR&page=1


export const  key = 'e97db83df37d8b5674c0243e230d5551'

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3'
})

export default api;