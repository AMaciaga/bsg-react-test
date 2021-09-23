import axios from "axios"

import { mainUrl} from "./constants"

export const fetchMediaList = (listId,token) =>{
    
    const url = mainUrl + 'Media/GetMediaList'


    const bodyParams ={
        MediaListId: listId,
        IncludeCategories: false,
        IncludeImages: true,
        IncludeMedia: false,
        PageNumber: 1,
        PageSize: 15
    }
    const config ={
        headers: { Authorization: `Bearer ${token}` }
    }

    return axios.post(url,bodyParams,config)
}