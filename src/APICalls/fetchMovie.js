import axios from "axios"

import { mainUrl} from "./constants"

export const fetchMovie = (movieId,token,isAnon) =>{
    
    const url = mainUrl + 'Media/GetMediaPlayInfo'
    const id = Number(movieId)
    const streamType = isAnon === "true" ? "TRIAL": "MAIN"

    const bodyParams ={
        MediaId: id,
        StreamType: streamType
    }
    const config ={
        headers: { Authorization: `Bearer ${token}` }
    }

    return axios.post(url,bodyParams,config)
}