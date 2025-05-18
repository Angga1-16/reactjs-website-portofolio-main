import { useParams, Navigate } from "react-router-dom"
import '../styles/DetailPortfolio.css'
import { portfolioList } from '../data/DataPortfolio'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function DetailPortfolio() {
    const { id } = useParams();
    const data = portfolioList.find((item) => item.id === id)
    if (data == undefined) {
        return <Navigate to='/page-not-found' />
    }
    return (
        <>
            <Navbar />
            <section id="detail-portfolio">
                <div className="wrapper">
                    <h1>{data.title}</h1>
                    <img src={data.image} alt={data.title} />
                    <h4>MA ASSIROJI</h4>
                    <p>Saya pernah berkontribusi dalam pengembangan website MA Assiroji sebagai Designer UI/UX, dengan fokus pada desain antarmuka dan kenyamanan pengguna. Proyek ini menjadi salah satu pengalaman penting saya dalam dunia pengembangan web berbasis kebutuhan lembaga pendidikan.</p>
                    
                    <a 
                        href="https://www.maassiroji.sch.id/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="visit-button"
                    >
                        Kunjungi Website
                    </a>
                </div>
            </section>
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default DetailPortfolio
