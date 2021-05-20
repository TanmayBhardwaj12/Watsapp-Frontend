import React from 'react';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import {Avatar,IconButton} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src="https://lh3.googleusercontent.com/n5rxicZ19RdzjxW62PM4lVM0jXg0CyigitxiuwcvOBg56I1bObcqGks6bBKT99pVyFYn0LUGnCvKuPjvBNz9bTgzUkVn9X4Xlim9pQbzIAoCZQL1OzgkqZ0mDdi-sI95LZTL5PseExXT8sCjwJlrFMIrH8x__YtelDGt6_kVYCC9fPow30Px78A70Jw9U-C2ccfn5sSkMCfb1OTlxeVnwvuFh61O42BGIXwAqFgG-0bcors9a9ovFNvVZBM5ZtuYInBzdRUE-9Fq8Yfu2JYgOTE8dowFfGNS-i4OwPxdweIBHyQ64g9SDd8P083xh3u8ABgumTalJt67raGZnPTsYvAhLw9gJtidjBX4CP4YgY5MruvaQ6JF6hzJYtUeB6tTsMUnHiRLtApMFNQ24VKomlPLRRhPabGxkgAzwaKUETdEJm0-IsDlaV1m5AiQFWOruK8bniz3cWDf8i7UM6P30AJGLGOIfifD-pL4reQpdUsHn6zsoFS53R22sa__7z_OuAVDgYjrQuPYFC0Ku-W77Ic-9ApQrAhBmcFd4eYpvtNLFAjX-SlaxgZNfAMRcgPyQnOPxwqcR1wo9mweYXUj1luwxjzNcg4m0cm8oUN5GC9P2sadPAMiUrNGBwjs4-qjfQdaEmB5HWZJ1Gy2NdINR4b0gp6b0Z9mgpxEAHaxGAdtbtiBcstBwg=w214-h266-no?authuser=0"/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat." type="text"/>
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    );
}

export default SideBar
