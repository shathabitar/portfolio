import '../css/App.css'
import { Typewriter } from 'react-simple-typewriter';


function About() {
    return (
        <div className='aboutSec'> 
            <div>
                <h2>
                    <Typewriter
                            words={[
                            "Hey! I'm Shatha Al-Bitar"
                            ]}
                            loop={0}
                            typeSpeed={50}
                            deleteSpeed={30}
                            delaySpeed={2000}
                        />
                </h2>
                <p className='aboutp'> I'm a computer science student passionate about web, mobile, and game development. I enjoy exploring creative tech through UI/UX design and continuously learning new tools and technologies.</p>
            </div>
            
        </div>
    );
}

export default About;
