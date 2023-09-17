import './sidebar.css';
import {RssFeed, Message, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School} from '@material-ui/icons';
import {Users} from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
                  <RssFeed className='sidebarIcons' />
                  <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
                  <Message className='sidebarIcons' />
                  <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
                  <PlayCircleFilledOutlined className='sidebarIcons' />
                  <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
                  <Group className='sidebarIcons' />
                  <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
                  <Bookmark className='sidebarIcons' />
                  <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
                  <HelpOutline className='sidebarIcons' />
                  <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
                  <WorkOutline className='sidebarIcons' />
                  <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
                  <Event className='sidebarIcons' />
                  <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
                  <School className='sidebarIcons' />
                  <span className="sidebarListItemText">Courses</span>
            </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr' />
        <ul className="sidebarFriendlist">
         {Users.map(u=> (
            <CloseFriend key={u.id} user={u} />
         ))} 
            
        </ul>
      </div>
    </div>
  )
}
