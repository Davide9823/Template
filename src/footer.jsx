import './footer.css';
import LogoCompleto from './assets/LogoCompleto.png'
import SocialIcon from './assets/Social-Icon.png'

export default function Footer() {
    return(
        <footer>
            <div className='ulDiv'>
                <div className='footerArticleDiv'>
                <article>    
                    <img src={LogoCompleto} alt="" />
                    <p>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                </article>
                </div>

                <div className='FooterNavDiv'>
                <nav>    
                    <h5>Product</h5>
                    <ul>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Customer stories</li>
                    </ul>
                </nav>

                <nav>
                    <h5>Resources</h5>
                    <ul>
                        <li>Blog</li>
                        <li>Guides & tutorials</li>
                        <li>Help center</li>
                    </ul>
                </nav>

                <nav>
                    <h5>Company</h5>
                    <ul>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Media kit</li>
                    </ul>
                </nav>
                </div>
            </div>

            <div className='lastDiv'>
                <nav>
                    <ul>
                        <a href=""><li>English</li></a>
                        <a href=""><li>Terms & privacy</li></a>
                        <a href=""><li>Security</li></a>
                        <a href=""><li>Status</li></a>
                        <a href=""><li>©2021 Whitepace LLC.</li></a>
                    </ul>
                </nav>
                <div className='IconDiv'>
                    <a href=""><img src={SocialIcon} alt="" /></a>
                </div>
            </div>    
        </footer>
    )
}