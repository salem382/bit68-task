
import './subscribe.scss';

const Subscribe = () => {

    return (
        <section className='subscribe text-center mt-5'>
            <h2>Subscribe our newsletter to be notified when it’ll be live.</h2>
            <form className='mt-4'>
                <input type='email' placeholder="Email address"/>
                <button>Subscribe</button>
            </form>
        </section>
    )
}

export default Subscribe;