import './subPlan.css';
import SubCard from './subCard';

export default function SubPlan() {
    return(
        <section className='subSection'>
            <div className='subTitle'>
                <h2>Choose Your Plan</h2>
                <br />
                <p>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
            </div>
            <div className='subCardDiv'>
                <SubCard 
                    title="Free"
                    price="$0"
                    description="Capture ideas and find them quickly"
                />
                <SubCard
                    title="Personal"
                    price="$11.99"
                    description="Keep home and family on track"
                />
                <SubCard 
                    title="Organization"
                    price="$49.99"
                    description="Capture ideas and find them quickly"
                />
            </div>
        </section>
    )
}
