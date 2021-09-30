import React from 'react'
import './Video.css'
import YouTube from 'react-youtube'

function Video({ url }) {


    const getId = (_url) => {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    };

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const pause = (e)=>{
        e.target.pauseVideo();
    }

    return (<div className="video-container"><YouTube videoId={getId(url)} opts={opts} onReady={pause} /></div>);
}

export default Video
