import React, { useState } from 'react'
import './Faq.css';

export default function Faq() {

    const [transport, setTransport] = useState(false)
    const transportHandler = () => {
        setTransport(!transport)
    }

    const [divs, setdivs] = useState()
    const divShowHandler=(id)=>{
        setdivs(id)
    }
    return (
        <div className=' Faq'>
            <h2>US Travel Information</h2>
            <div className='FaqList'>
                <div className='f-left'>
                    <h4>Categories</h4>
                    <div>
                        <ul>
                            <li>About the USA<i className="fa-solid fa-caret-down"></i></li>
                            <li>Visa & Entry<i className="fa-solid fa-caret-down"></i></li>
                            <li onClick={transportHandler}>Transportation<i className={transport ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i></li>
                            <div className='' style={{ display: transport ? 'block' : 'none', backgroundColor: 'rgb(171, 171, 171)', marginTop: '0px', marginBottom: '10px' }}>
                                <ul>
                                    <li style={{ borderBottom: 'none', color: 'rgb(2, 2, 110)', fontWeight: '500', cursor: 'pointer' }}><a>Train Travel</a></li>
                                    <li style={{ borderBottom: 'none', color: 'rgb(2, 2, 110)', fontWeight: '500', cursor: 'pointer' }}><a>Rentals & Driving in the USA</a></li>
                                    <li style={{ borderBottom: 'none', color: 'rgb(2, 2, 110)', fontWeight: '500', cursor: 'pointer' }}><a>Public Transit & Ride Shares</a></li>
                                    <li style={{ borderBottom: 'none', color: 'rgb(2, 2, 110)', fontWeight: '500', cursor: 'pointer' }}><a>Bus Travel</a></li>
                                    <li style={{ borderBottom: 'none', color: 'rgb(2, 2, 110)', fontWeight: '500', cursor: 'pointer' }}><a>Boat Travel</a></li>
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
                <div className='f-right'>
                    <h1>Frequently Asked Questions</h1>
                    <p>General Questions</p>
                    <div className='f-rightDiv'>
                        <ul>
                            <li onClick={() =>divShowHandler(1)}>Who owns and operates VisitTheUSA.com<i className="fa-solid fa-caret-down"></i></li>
                            {
                                divs === 1?
                                <div className='answers'>VisitTheUSA.com is owned and operated by the Corporation for Travel Promotion, now doing business as Brand USA. This public-private marketing entity was created in 2010 to encourage and inspire travellers to explore America's boundless possibilities.</div>
                                :
                                ""
                            }
                            
                            <li onClick={() =>divShowHandler(2)}>I can't find the information that I'm looking for on the website. What should I do?<i className="fa-solid fa-caret-down"></i></li>
                            {
                                divs === 2?
                                <div className='answers'>First, read the FAQs below to see if your question is answered. Next, use ‘Search site’ in the top right hand side of all pages. If you are unable to find what you are looking for, email us at info@thebrandusa.com.</div>
                                :
                                ""
                            }
                            
                            <li onClick={() =>divShowHandler(3)}>I do't see my country flag on the website. How can I view in my language?<i className={transport ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i></li>
                            {
                                divs === 3?
                                <div className='answers'>We will be expanding into new markets and adding additional languages in the future. In the meantime, we invite you to view the website from the market with whose language you are most familiar. Please keep in mind that some information on these sites has been tailored just for the markets listed above in the main navigation.</div>
                                :
                                ""
                            }
                            
                            <li onClick={() =>divShowHandler(4)}>Do I need a visa for leisure or business (non-immigrant) travel to the U.S.?<i className="fa-solid fa-caret-down"></i></li>
                            {
                                divs === 4?
                                <div className='answers'>The answer depends on a couple of factors, including your country of citizenship. For the full explanation, see the Plan section of our website.
                                <br></br>
                                Also, please note that upon entry into the United States your photograph and digital fingerprints will be collected. Many countries around the world use biometrics as a way of facilitating the international travel process, protecting travellers against identity theft, and preventing document fraud, as well as for security purposes. For more information about these procedures, visit http://www.dhs.gov/us-visit.</div>
                                :
                                ""
                            }
                            
                            <li onClick={() =>divShowHandler(5)}>How can my organisation learn more about partnership opportunities with VisitTheUSA.com and Brand USA?<i className="fa-solid fa-caret-down"></i></li>
                            {
                                divs === 5?
                                <div className='answers'>For enquiries regarding how to become a partner on VisitTheUSA.com or with Brand USA please contact partnerships@thebrandusa.com.</div>
                                :
                                ""
                            }        
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
