import React from 'react'
import "./Sidebar.css";
import  WhatshotIcon  from '@material-ui/icons/Whatshot';
import  {SidebarRow } from './SidebarRow';
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined"
import  WatchLaterIcon from '@material-ui/icons/WatchLater';
import HistoryIcon from "@material-ui/icons/History"
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo"
import HomeIcon from '@material-ui/icons/Home';
import  SubscriptionsIcon  from '@material-ui/icons/Subscriptions';
const Sidebar = () => {
    return (
        <div className="sidebar"> 
             <SidebarRow selected Icon ={HomeIcon} title ="Home"/>
            <SidebarRow Icon ={WhatshotIcon} title="Trending"/>
            <SidebarRow  Icon={SubscriptionsIcon}title="Subscription"/>
            <hr/>
            <SidebarRow  Icon={VideoLibraryIcon}title="Library"/>
            <SidebarRow  Icon={HistoryIcon}title="History"/>
            <SidebarRow  Icon={OndemandVideoIcon}title="Your video"/>
            <SidebarRow  Icon={WatchLaterIcon}title="Watch Later"/>
            <SidebarRow  Icon={ThumbUpAltOutlinedIcon}title="Liked videos"/>
            <SidebarRow  Icon={ExpandMoreOutlinedIcon}title="Others"/>
        </div>
    )
}

export default Sidebar
