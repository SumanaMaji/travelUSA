import React, { useState } from 'react'
import './Contact.css';

export default function Contact() {

    const [transport, setTransport] = useState(false)
    const transportHandler = () =>{
       setTransport(!transport)
    }
    return (
        <div className=' Contact-Us'>
            <h2>Contact Us</h2>
            <div className='contact-Form'>
                <div className='form-left'>
                    <h4>Categories</h4>
                    <div>
                        <ul>
                            <li>About the USA<i className="fa-solid fa-caret-down"></i></li>
                            <li>Visa & Entry<i className="fa-solid fa-caret-down"></i></li>
                            <li onClick={transportHandler}>Transportation<i className={ transport? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i></li>
                            <div className='' style={{display: transport? 'block':'none', backgroundColor: 'rgb(171, 171, 171)', marginTop: '0px', marginBottom: '10px'}}>
                                <ul>
                                    <li style={{borderBottom: 'none', color: 'rgb(2, 2, 110)', fontWeight: '500', cursor: 'pointer'}}><a>Train Travel</a></li>
                                    <li style={{borderBottom: 'none', color: 'rgb(2, 2, 110)', fontWeight: '500', cursor: 'pointer'}}><a>Rentals & Driving in the USA</a></li>
                                    <li style={{borderBottom: 'none', color: 'rgb(2, 2, 110)', fontWeight: '500',cursor: 'pointer'}}><a>Public Transit & Ride Shares</a></li>
                                    <li style={{borderBottom: 'none', color: 'rgb(2, 2, 110)', fontWeight: '500', cursor: 'pointer'}}><a>Bus Travel</a></li>
                                    <li style={{borderBottom: 'none', color: 'rgb(2, 2, 110)', fontWeight: '500', cursor: 'pointer'}}><a>Boat Travel</a></li>
                                </ul>
                            </div>
                            <li>Accomodation<i className="fa-solid fa-caret-down"></i></li>
                            <li>Attractions & Tours<i className="fa-solid fa-caret-down"></i></li>
                            <li>Communication & Technology<i className="fa-solid fa-caret-down"></i></li>
                            <li>Health & Safety<i className="fa-solid fa-caret-down"></i></li>
                            <li>Accessible Travel<i className="fa-solid fa-caret-down"></i></li>
                        </ul>
                    </div>
                </div>
                <div className='form-right'>
                    <h1>We'd Love To Hear From You.</h1>
                    <p id='firstP'>Please complete all require fields in this form. If you have a specific enquiry, please describe it in the "comment" field and we will respond promptly.</p>
                    <p>Inquiry subject.</p>
                    <form>
                        <div className='form-checkbox'>
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Partnership oppertunities</label>
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Media/Press</label>
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">General Interest</label>
                        </div>

                        <div className="form-group row mt-3 formInput">
                            <div >
                                <input type="email" className="form-control fieldInput" id="inputEmail3" placeholder="Name*" />
                            </div>
                        </div>
                        <br></br>
                        <div className="form-group row formInput">
                            <div >
                                <input type="password" className="form-control fieldInput" id="inputPassword3" placeholder="Surname*" />
                            </div>
                        </div>
                        <br />
                        <div className="form-group row formInput">
                            <div >
                                <input type="email" className="form-control fieldInput" id="inputEmail3" placeholder="Organization" />
                            </div>
                        </div>
                        <br></br>
                        <div className="form-group row formInput">
                            <div >
                                <input type="password" className="form-control fieldInput" id="inputPassword3" placeholder="Email Address" />
                            </div>
                        </div>
                        <br></br>
                        <div className="form-group formInput">
                            <textarea className="form-control fieldInput" id="exampleFormControlTextarea1" rows="3" placeholder='Comments'></textarea>
                        </div>
                        <br></br>
                        <div className='checking'>
                            <label htmlFor="check">
                                <div className="input-container">
                                    <input type="checkbox" class="checkbox" id="check" />
                                    <span className="checkbox-text">I'm not a robot</span>
                                </div>
                            </label>

                            <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" />
                            <br></br>
                            <span className="recaptcha">reCAPTCHA</span>
                            <br />
                            <p><a>Privecy-Terms</a></p>
                        </div>
                        <button type='button'>Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
