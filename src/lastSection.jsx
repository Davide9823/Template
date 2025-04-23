import './lastSection.css';
import PlatformIcon from './assets/App-icon.png'


export default function LastSection() {
    return(
        <section className='lastsectionS'>
            <div className='lastSectionDiv'>
                <h2>Try WhitePace <br/> today</h2>
                <p>Get started for free. <br/> Add your whole team as your needs grow.</p>
                <button><span>Try Taskey free<i className="fas fa-arrow-right"></i></span></button>
                <span>On a big team? Contact sales</span>
                <img src={PlatformIcon} alt="app-icon" />
            </div>
        </section>
    )
}