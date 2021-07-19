import React from 'react'
import "./Searchpage.css"
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
const Searchpage = () => {
    return (
        <div className="searchpage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/><h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
            image="https://wallpapercave.com/wp/wp2036902.jpg"
            channel= "Academind"
            verified
            subs="6.4lakh"
            noOfVideos={618}
            description="There is always something to leaen !"
            />
            <hr/>
            <VideoRow/>
        </div>
    )
}

export default Searchpage
