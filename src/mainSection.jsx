import './mainSection.css';
import image from'./assets/Image-container.png'

export default function MainSection() {
    return (
        <section>   
            <div className="main">
                <h1>Get more Done whit whitepace</h1>
                <br />
                <p>project management software that anables your teams to collaborate,<br />
                 plan, analyze and manage everyday tasks</p>
                <button><span>try Whitepace free<i className="fas fa-arrow-right"></i></span></button>
            </div>

            <div className="Image">
                <img src={image} alt="image" />
            </div>
        </section>
    )
}