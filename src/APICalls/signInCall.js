import axios from "axios"

import { mainUrl, uuid } from "./constants"

export const signIn = (username, password) =>{
    
    const url = mainUrl + 'Authorization/SignIn'
    const platformCode = "WEB"

    let bodyParams = {
        Device:{
            PlatformCode:platformCode,
            Name: uuid
        }
    }
    
    if(username && password){
        bodyParams.Username = username
        bodyParams.Password = password
    }
    
    return axios.post(url,bodyParams)

}