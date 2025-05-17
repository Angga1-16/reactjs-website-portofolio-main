import profilePicture from '../assets/profile-picture.png'
import { FaInstagram, FaTiktok, FaTwitter, FaFacebookF } from "react-icons/fa";
import '../styles/Header.css'

function Header() {
    return (
        <header>
            <div className="header-jumbotron">
                <img src={profilePicture} alt="Profile" />
                <h3>Angga Winata</h3>
                <p>Programmer - Content Creator - Researcher</p>
                <div className='socialMedia'>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTiktok /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="https://www.facebook.com/share/1GZevRnfuv/?mibextid=qi2Omg"><FaFacebookF /></a>
                </div>
            </div>
        </header>
    )
}

export default Header
