import './serviceCard.css';

export default function ServiceCard({ title, icon }) {
    return(
        <article className="service-card">
            <div>
                <h3>{ title }</h3>
                <span>Learn More<i className="fas fa-arrow-right"></i></span>
            </div>
            <div>
                <img src={ icon } alt="" />    
            </div>
        </article>
    )
}