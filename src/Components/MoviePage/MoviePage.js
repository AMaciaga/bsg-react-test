import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Alert } from 'antd';
import ReactPlayer from 'react-player'

const MoviePage = ({match}) => {

    const [movie, setMovie] = useState({})
    const [isForbidden, setIsForbidden] = useState(false)

    useEffect(() => {
        const token = sessionStorage.getItem('authToken')
        const isAnon = sessionStorage.getItem('isAnon')
        const streamType = isAnon === "true" ? "TRIAL": "MAIN"
        const id = Number(match.params.id)
        const bodyParams ={
            MediaId: id,
            StreamType: streamType
        }
        const config ={
            headers: { Authorization: `Bearer ${token}` }
        }
        axios
        .post("https://thebetter.bsgroup.eu/Media/GetMediaPlayInfo",bodyParams,config)
        .then(response => {
            if(response.status === 200){
                setMovie(
                    {
                        title: response.data.Title,
                        url: response.data.ContentUrl
                    }
                )
                setIsForbidden(false)
            }
        })
        .catch(error => {
            console.log("data fetching error", error);
            if(error.response.status === 403){
                setIsForbidden(true)
            }
        })
    },[match.params.id])
    
    return(
        <>
            {!isForbidden && 
                <div className="centered container">
                    <h2>{movie.title}</h2>
                    {movie.url && <ReactPlayer  url={movie.url} controls playing />}
                    { movie.title &&!movie.url && <Alert  message="Movie not found" type='error'/>}
                </div>
                }
            {isForbidden &&
                <div className="centered container">
                <Alert message="You are not a subscriber" type='error'/>
                </div>
            }
            
        </>
    )
    
}

export default MoviePage