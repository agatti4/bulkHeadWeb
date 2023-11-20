import './Header.css'
import YoutubeEmbed from "../YoutubeEmbed";

const Header = () => (
    <div className='header'>
        <h1>The BulkHead</h1>
        <div className='video-container'>
            <YoutubeEmbed embedId="3RMvr3dOVzo" />
        </div>
  </div>
);

export default Header
