import '../styles/About.css'

import { FaPhp, FaHtml5, FaReact, FaBootstrap, FaRust, FaLaravel, FaGit } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MdOutlineCss } from "react-icons/md";
import { FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";


function About() {
    return (
        <section id="about">
            <div className='wrapper'>
                <h3>About</h3>
                <p>Saya adalah seorang santri yang fokus mendalami bidang Teknologi Informasi (IT). Dengan latar belakang pesantren, saya ingin memadukan ilmu agama dan teknologi untuk memberikan manfaat nyata bagi masyarakat.</p>
                <p>Saya percaya bahwa gabungan antara nilai-nilai keislaman dan kemajuan teknologi dapat menjadi solusi bagi berbagai tantangan zaman. Saat ini, saya terus mengembangkan diri melalui pembelajaran mandiri dan keterlibatan dalam proyek-proyek IT untuk memperkuat keterampilan teknis dan kontribusi sosial saya.</p>
               <h3>Pendidikan</h3>
<div className="education-list">
    <div className="education-item">
        <h5>TK Uswatun Hasanah</h5>
        <span className="education-location">Bandung Barat</span>
        <span className="education-year">2008 - 2009</span>
    </div>
    <div className="education-item">
        <h5>SDN 1 Kertamulya</h5>
        <span className="education-location">Bandung Barat</span>
        <span className="education-year">2009 - 2015</span>
    </div>
    <div className="education-item">
        <h5>Pondok Pesantren Modern Darussalam</h5>
        <span className="education-location">Bandung Barat</span>
        <span className="education-year">2015 - 2021</span>
    </div>
    <div className="education-item">
        <h5>STMIK Mardira Indonesia</h5>
        <span className="education-location">Bandung</span>
        <span className="education-year">2022 - Sekarang</span>
    </div>
</div>

               
                <h4>Programming Language & Tools</h4>
                <div className="skills">
                    <FaHtml5 /><SiJavascript /><MdOutlineCss />
                

                </div>
            </div>
        </section>
    )
}

export default About