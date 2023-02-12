import React,{Fragment} from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import '../src/Contact.css'
const Contact = () => {
  return (
    <Fragment>
        
        <section className="contact">
            <div className="contact-heading">
                <h2>Contact Us</h2>
            </div>
            <div className="container">
                <div className='row'>
                    <div className="column">
                        <div className='contact-widget'>
                        <div className='contact-widget-item'>
                        <div className='icon'>
                            <LocationOnIcon/>
                        </div>
                        <div className='text'>
                            <h2>Address</h2>
                            <p> Bharathi Salai, Ramapuram, Chennai, Tamil Nadu 600089</p>
                        </div>
                        </div>
                        <div className='contact-widget-item'>
                        <div className='icon'>
                            <CallIcon/>
                        </div>
                        <div className='text'>
                            <h2>Contact Us</h2>
                            <p>125-711-811 | 125-666-999</p>
                        </div>
                        </div>

                        <div className='contact-widget-item'>
                        <div className='icon'>
                            <EmailIcon/>
                        </div>
                        <div className='text'>
                            <h2>Email</h2>
                            <p>your.support@gmail.com</p>
                        </div>
                        </div>

                    </div>
                    </div>


                    <div className='column'>
                        <div className='contact-form'>
                            <form action="#">
                                <input type="text" placeholder='Name' />
                                <input type="email" placeholder='Email' />
                                <textarea placeholder='Comment'></textarea>
                                <button type='submit'className='site-btn'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='map-column'>
                        <div className='contact-map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0536728005522!2d80.17854891474092!3d13.032254090816068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266d11f9ca625%3A0xf77d1733be7b5b74!2sSRM%20Institute%20Of%20Science%20And%20Technology!5e0!3m2!1sen!2sin!4v1676118979652!5m2!1sen!2sin" 
                        width="600" 
                        height="450"
                        title='a'
                        style={{border:0}}
                        allowfullscreen="" 
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Contact
