import './Navbar.css';
import LogoIcon from './assets/LogoIcon.png';

export default function Navbar() {
    return (
        <header>
            <div>
                <img src={LogoIcon} alt="logo" />
                <span className='name'>whitepace</span>
            </div>

            <div>
                <nav className='Nav'>
                    <ul>
                        <li><a href="">Products<i className="fas fa-arrow-right"></i></a></li>
                        <li><a href="">Solution<i className="fas fa-arrow-right"></i></a></li>
                        <li><a href="">resource<i className="fas fa-arrow-right"></i></a></li>
                        <li><a href="">pricing<i className="fas fa-arrow-right"></i></a></li>
                    </ul>    
                </nav>
                <button className='loginButton'>Login</button>
            </div>
        </header>
    )
}