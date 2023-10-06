import React, { useState } from 'react'
import './Information.css';

export default function Faq() {

    const [transport, setTransport] = useState(false)
    const transportHandler = () => {
        setTransport(!transport)
    }
    return (
        <div className=' Information'>
            <h2>US Travel Information</h2>
            <div className='InformList'>
                <div className='in-left'>
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
                <div className='in-right'>
                    <h1>Information and tips on visiting the USA</h1>
                    <p>Welcome to the USA! Here you will find lots of great information and tips on visiting the USA. We’ve done the research for you so you can just enjoy your trip. Being prepared early and knowing what to expect will help you ease into the USA way of life.
                    <br></br>
                        No two trips are alike, so you will find information in this section for a variety of trip types. Whether you prefer staying in a resort or camping under the stars, we’ve included the details you need to be safe and happy on your USA trip.
                        <br></br>
                        While you’ll find many of the things you already love, and discover new ones, there are a few things that are different here. Take for example our units of measurement, our electricity, our business hours and official public holidays. We suggest you begin with a brief overview of <span>U.S. customs and culture</span>. From here, you will find information covers <span>family travel, activity planning, shopping</span> and an overview of the country’s <span>health and safety information</span>. No matter if your trip length is two days or two months, these sections will help make you an informed traveler.
                        <br></br>
                        Have a great trip!
                        <br></br>
                        Still have questions? Find us on<br></br> Twitter @VisitTheUSA and Facebook.com/visittheusa and we’ll get you answers. And don't forget to share your top trip moments by using #VisitTheUSA on your favorite social platforms.
                        <br></br>
                        Click here for Travel Alerts.
                        <br></br>
                        Who owns and operates VisitTheUSA.com?
                        VisitTheUSA.com is owned and operated by the Corporation for Travel Promotion, now doing business as Brand USA. This public-private marketing entity was created in 2010 to encourage and inspire travellers to explore America's boundless possibilities.
                        <br></br>
                        I can't find the information that I'm looking for on the website. What should I do?
                        First, read the FAQs below to see if your question is answered. Next, use ‘Search site’ in the top right hand side of all pages. If you are unable to find what you are looking for, email us at info@thebrandusa.com.
                        <br></br>
                        I don't see my country's flag on the website. How can I view in my language?
                        We will be expanding into new markets and adding additional languages in the future. In the meantime, we invite you to view the website from the market with whose language you are most familiar. Please keep in mind that some information on these sites has been tailored just for the markets listed above in the main navigation.
                        <br></br>
                        Do I need a visa for leisure or business (non-immigrant) travel to the U.S.?
                        The answer depends on a couple of factors, including your country of citizenship. For the full explanation, see the Plan section of our website.
                        <br></br>
                        Also, please note that upon entry into the United States your photograph and digital fingerprints will be collected. Many countries around the world use biometrics as a way of facilitating the international travel process, protecting travellers against identity theft, and preventing document fraud, as well as for security purposes. For more information about these procedures, visit http://www.dhs.gov/us-visit.
                        <br></br>

                        US-VISIT Documents, FOIA Electronic Reading Room | Homeland Security<br></br>
                        http://www.dhs.gov
                        How can my organisation learn more about partnership opportunities with VisitTheUSA.com and Brand USA?
                        For enquiries regarding how to become a partner on VisitTheUSA.com or with Brand USA please contact partnerships@thebrandusa.com.
                        <br></br>
                        Still have questions? Find us on<br></br> Twitter <span>@VisitTheUSA</span> and <span>Facebook.com/visittheusa</span> and we’ll get you answers. And don't forget to share your top trip moments by using #VisitTheUSA on your favorite social platforms.
                        <br></br>
                        Click here for <span>Travel Alerts</span>.</p>
                </div>
            </div>
        </div>
    )
}
