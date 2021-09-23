import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import {Image,Card, Tooltip } from 'antd'
import Meta from 'antd/lib/card/Meta'
import SimpleBar from 'simplebar-react';

import { fetchMediaList } from '../../APICalls/fetchMediaList'

import 'simplebar/dist/simplebar.min.css';
import './MainPage.less'

const MainPage = () =>{

    const history = useHistory()
    const [lists, setLists] = useState([])


    useEffect(() => {
        const token = sessionStorage.getItem('authToken')
        
        const requestListThree = fetchMediaList(3, token)
        const requestListFour = fetchMediaList(3, token)

        axios.all([requestListThree,requestListFour]).then(axios.spread((...responses) => {
            
            let newLists = []
            for(let i = 0; i<responses.length; i++){
                let response = responses[i]
                if(response.status === 200){
                    let movies = response.data.Entities.map(movie => {
                        const title = movie.Title
                        const id = movie.Id
                        const image = movie.Images.find(i => i.ImageTypeCode === "FRAME")
                        return {
                            title: title,
                            id: id,
                            imageUrl: image ? image.Url : undefined
                        }
                    })
                    let newList = {
                        listTitle: `List No. ${i+1}`,
                        movies: movies
                    }
                    newLists.push(newList)
                }
            }
            setLists(newLists)
            
        }))
        .catch(error => {
            console.log("data fetching error", error);
        })
    },[])

    const _handleOnClick = (id) =>{
        history.push(`/movie/${id}`)
    }
    
    return(
        <div className='container'>
            {lists.map(list => {
                return(
                    <Card bordered={false} key={list.listTitle} title={list.listTitle} className='movieList'>
                        
                        <SimpleBar>
                        <div style={{display:'flex'}}>
                        {list.movies.map(movie => {
                            return(
                                <Card key={movie.id} hoverable style={{ width: 192 }}  cover={
                                    <Image preview={false} placeholder={true} src={movie.imageUrl} height={108} width={192}/>
                                }
                                onClick={()=>_handleOnClick(movie.id)}
                                ><Meta title={<Tooltip placement='bottom' title={movie.title}>{movie.title}</Tooltip>}/></Card>
                            )
                        })}
                        </div>
                        </SimpleBar>
                        
                    </Card>
                )
            })}
        </div>
    )
}
export default MainPage