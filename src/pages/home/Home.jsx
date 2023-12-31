import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Righbar from "../../components/rightbar/Righbar";
import './Home.css';

export default function Home(){
    return(
        <div>
            <Topbar />
            <div className="homeContainer">
            <Sidebar />
            <Feed />
            <Righbar />
            </div>
        </div>
    )
}