import './profile.css';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Righbar from "../../components/rightbar/Righbar";

export default function Profile() {
  return (
    <div>
      
            <Topbar />
            <div className="profile">
            <Sidebar />
            <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img src="/assets/post/a.jpg" alt="" className="profileCoverImg" />
                <img src="/assets/person/9.jpg" alt="" className="profileUserImg" />
                </div>
                <div className="profileINfo">
                    <h4 className='profileInfoName'>Nivashini</h4>
                    <span className='profileInfoDesc'>Hello! My friends</span>

                </div>
            </div>
            <div className="profileRightBottom">

            <Feed />
            <Righbar profile />
            
            </div>
            </div>
            </div>
        
    </div>
  )
}
