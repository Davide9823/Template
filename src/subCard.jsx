import './subCard.css';

export default function SubCard({ title, price, description }) {
    return(
        <article className='Cardplan'>
            <h4>{ title }</h4>
            <span>{ price }</span>
            <p>{ description }</p>
            <ul>
                <li><i className="fas fa-check"></i> Sync unlimited devices</li>
                <li><i className="fas fa-check"></i> 10 GB monthly uploads</li>
                <li><i className="fas fa-check"></i> 200 MB max. note size</li>
                <li><i className="fas fa-check"></i> Customize Home dashboard and access extra widgets</li>
                <li><i className="fas fa-check"></i> Connect primary Google Calendar account</li>
                <li><i className="fas fa-check"></i>Add due dates, reminders, and notifications to your tasks</li>
            </ul>
            <a href="">
                <button>Get Started</button>
            </a>
        </article>
    )
}