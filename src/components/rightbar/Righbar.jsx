import './rightbar.css';
import {Users} from '../../dummyData';
import Online from '../online/Online';

export default function Righbar({profile}) {
  const HomeRightbar = () => {
    return(
      <div>
        <div className="birthdayContainer">
          <img src="/assets/gift.jpg" alt="" className="birthdayImg" />
          <span className='birthdayText'>
            <b>Jeevitha</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
       <img src="/assets/ad.jpg" alt="" className="rightbarAd" />
       <h4 className="rightbarTitle">Online Friends</h4>
       <ul className="rightbarFriendList">
        
       {Users.map((u)=>(
        <Online key={u.id} user={u} />
       ))}
       
       </ul>
      </div>
    )
  
  }
  const ProfileRightbar = () => {
    return (
      <div>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className="rightbarInfo"></div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>

        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>

        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>

        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Luxe Voyager</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">ChicNomad</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">AuraAesthetic</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">EtherealGlow</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">GlamourGaze</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/6.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Fiaz Hwan</span>
          </div>
        </div>
        
      </div>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
        
      </div>
    </div>
  )
}
