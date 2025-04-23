import './sponsor.css';
import Apple from './assets/Apple.png'
import Microsoft from './assets/Microsoft.png'
import Slack from './assets/Slack.png'
import Google from './assets/google.png'

export default function OurSponsor() {
    return (
        <section className='sponsorSection'>
        <div className='sponsorTitle'>
            <h3>Our sponsors</h3>
        </div>

        <div className='sponsorList'>
            <img src={Apple} alt="logoApple" />
            <img src={Microsoft} alt="logoMicrosoft" />
            <img src={Slack} alt="logoSlack" />
            <img src={Google} alt="logoGoogle" />
        </div>
        </section>
    )
}