import React from 'react'
import VideoCard from './VideoCard'
import {suggestVideos} from './util'
import {DataContext} from './App'

function Suggestion({id,tags}) {
    const dataContext = React.useContext(DataContext);
    const suggestion =  suggestVideos(dataContext.videos,id,tags);

    return (
        <div className="d-flex flex-column"> 
        {
            suggestion.map((item)=>{return <VideoCard data={item}/>})
        }
        </div>
    )
}

export default Suggestion
