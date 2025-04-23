import './secondPage.css';
import image from'./assets/Image-container.png';
import imageWork from './assets/WorkTogetherImage.png'

export default function SecondPage() {
    return(
        <>
        <section className='secondSection'>

            <div  className='projectManDiv'>
                <div className='ProjectManSecond'>
                    <h2>Project Managment</h2>
                    <br />
                    <p>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                    <button className='buttonP'><span>Get Started<i className="fas fa-arrow-right"></i></span></button>
                </div>

                <div className="projectImage">
                    <img src={image} alt="image" />
                </div>
            </div>
        </section>

        <section className='thirdSection'>
            <div className='workTogetherDiv'>
                <div className='imageWork'>
                    <img src={imageWork} alt="image"/>
                </div>

                <div className='workTogetherSecond'>
                    <h2>Work together</h2>
                    <br />
                    <p>With whitepace, share your notes with your colleagues and collaborate on them.
                    You can also publish a note to the internet and share the URL with others.</p>
                    <button className='buttonP'><span>Try it now<i className="fas fa-arrow-right"></i></span></button>
                </div>
            </div>
        </section>    
        </>
    )
}