import profilePicture from '../assets/profile-picture.png'
import { FaInstagram, FaTiktok, FaTwitter, FaFacebookF } from "react-icons/fa";
import '../styles/Header.css'

function Header() {
    return (
        <header>
            <div className="header-jumbotron">
                <img src={profilePicture} alt="Foto profil Angga Winata" />
                <h3>Angga Winata</h3>
                <p>Programmer - Editor - Designer</p>
                <div className='socialMedia'>
                    <a 
                        href="https://www.instagram.com/angga_winats?igsh=a3NnaXJsdXNxZWNn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Kunjungi Instagram Angga Winata"
                        title="Instagram"
                    >
                        <FaInstagram aria-hidden="true" />
                 </a>
                    <a 
                        href="https://www.tiktok.com/@anggawinata8?_t=ZS-8wQjayL17do&_r=1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Kunjungi TikTok Angga Winata"
                        title="TikTok"
                    >
                        <FaTiktok aria-hidden="true" />
                    </a>
                    <a 
                        href="https://x.com/Cund1l?t=4fkLYjzk_9tbukZWhVbvIQ&s=09" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Kunjungi Twitter Angga Winata"
                        title="Twitter"
                    >
                        <FaTwitter aria-hidden="true" />
                    </a>
                    <a 
                        href="https://www.facebook.com/share/1GZevRnfuv/?mibextid=qi2Omg" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Kunjungi Facebook Angga Winata"
                        title="Facebook"
                    >
                        <FaFacebookF aria-hidden="true" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
