import React, { useState, useEffect } from 'react'
import { Alert } from 'antd';
import ReactPlayer from 'react-player'

import { fetchMovie } from '../../APICalls/fetchMovie';

const MoviePage = ({match}) => {

    const [movie, setMovie] = useState({})
    const [isForbidden, setIsForbidden] = useState(false)

    useEffect(() => {
        const token = sessionStorage.getItem('authToken')
        const isAnon = sessionStorage.getItem('isAnon')
        fetchMovie(match.params.id,token,isAnon)
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