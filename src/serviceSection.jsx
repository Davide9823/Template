import './serviceSection.css';
import ServiceCard from './serviceCard';
import icon2 from './assets/illustration.png'

export default function ServiceSection() {
    return(
        <section className='Services'>
        <div className='serviceTitle'>
            <h1>Services</h1>
            <p>At our digital marketing agency, we offer a range of services to <br /> help businesses grow and succeed online. These services include:</p>
        </div>
        <div className='card'>
            <a href="">
                <ServiceCard 
                icon={icon2} 
                title="Search engine optimization" 
                />
            </a>
            <a href="">
                <ServiceCard 
                icon={icon2} 
                title="Pay-per-click advertising" 
                />
            </a>
            <a href="">
                <ServiceCard 
                icon={icon2} 
                title="Social Media Marketing" 
                />
            </a>
            <a href="">
                <ServiceCard 
                icon={icon2} 
                title="Email Marketing" 
                />
            </a>
            <a href=""><ServiceCard 
                icon={icon2} 
                title="Content Creation" 
                />
            </a>
            <a href="">
                <ServiceCard 
                icon={icon2} 
                title="Analytics and Traking" 
                />
            </a>                                    
        </div>
        </section>
    )
}
