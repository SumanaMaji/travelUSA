import React, { useState } from 'react'
import './Terms.css';

export default function Faq() {

    const [transport, setTransport] = useState(false)
    const transportHandler = () => {
        setTransport(!transport)
    }
    return (
        <div className=' Terms'>
            <h2>Terms of Use</h2>
            <div className='TermsList'>
                <div className='list-left'>
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
                <div className='list-right'>
                    <h1>Corporation for Travel Promotion d/b/a Brand USA, Inc. - Terms of Use</h1>
                    <ol>
                        <li>The content and information displayed on this website (‘GoUSA.in’ or the ‘Site’) is the property of the Corporation for Travel Promotion, doing business as Brand USA, and/or other parties (the ‘GoUSA.in Information’). The downloading, reproduction or retransmission of GoUSA.in Information, other than for non-commercial individual use, is strictly prohibited.</li>
                        <li>GoUSA.in may contain or reference trademarks, patents, copyrighted materials, trade secrets, technologies, products, processes or other proprietary rights of Brand USA and/or other parties. No licence to or right in any such trademarks, patents, copyrighted materials, trade secrets, technologies, products, processes and other proprietary rights of the Site or of Brand USA and/or other parties is granted to or conferred upon you without the express written consent of Brand USA.</li>
                        <li>Brand USA is providing information and services on the Internet as a benefit and service in furtherance of Brand USA's non-profit and tax-exempt status. Brand USA makes no representations about the suitability of this information and these services for any purpose.</li>
                        <li>You agree that you will not use any device, software or other instrumentality to interfere or attempt to interfere with the proper working of our Site, and that you will not take any action that imposes an unreasonable or disproportionately large load on our infrastructure. In addition, you agree that you will not use any robot, spider, other automatic device or manual process to monitor the Site or copy our web pages or the content contained herein, without the prior express consent from an authorised Corporation for Travel Promotion representative (such consent is deemed given for standard search engine technology employed by Internet search websites to direct Internet users to this Site).</li>
                        <li>This Site may provide you with the ability to use usernames, passwords or other codes or devices to gain access to restricted portions of this Site (‘access codes’). The content contained in such restricted areas is confidential to Corporation for Travel Promotion, and is provided to you for your business use only. We reserve the right to prohibit the use of such access codes on your behalf by third parties where we determine that such use interferes with our Site's operation or is detrimental to Brand USA.</li>
                        <li>All GOUSA.IN INFORMATION IS PROVIDED ‘AS IS’ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to you.</li>
                        <li>With respect to all communications you make to Brand USA regarding GoUSA.in Information, including but not limited to feedback, questions, comments, suggestions and the like: (a) you shall have no right of confidentiality in your communications and Brand USA shall have no obligation to protect your communications from disclosure; (b) Brand USA shall be free to reproduce, use, disclose and distribute your communications to others without limitation; and (c) Brand USA shall be free to use any ideas, concepts, know-how, content or techniques contained in your communications for any purpose whatsoever, including but not limited to the development, production and marketing of products and services that incorporate such information.</li>
                        <li>The GoUSA.in Information may contain technical inaccuracies and typographical errors. Brand USA shall not assume responsibility or liability for any such inaccuracies, errors or omissions, and shall have no obligation related to information affected by such inaccuracies. Brand USA reserves the right to make changes, corrections, cancellations and/or improvements to GoUSA.in Information, and to the products and programmes described in such information, at any time without notice, including after confirmation of a transaction.</li>
                        <li>Passwords. If we have provided you with a unique password, one of its purposes is so that access to information related to you and your company can be restricted to only those individuals to whom you provided the password. It is your responsibility to protect the confidentiality of the password. Brand USA assumes no liability for any access to information that is executed with the password provided to you. We strongly recommend that you change the password on a periodic basis and whenever you suspect that knowledge of the password is no longer limited to those that you have authorised.</li>
                        <li>With the exception of the general data protection regulations, this is a United States website and is subject to United States law. Brand USA will disclose any information regarding the use of this Site, including personal information pertaining to you without your permission when required by law, or in good faith belief that such action is necessary to investigate or protect against harmful activities to Brand USA, its associates, or property (including this Site), or to others.</li>
                        <li>No Arrangements for Prohibited Persons – Brand USA is a United States company and is prohibited from providing services to certain ‘prohibited persons’ that are government officials or residents of certain embargoed countries, or terrorists or drug traffickers whose names are published on lists maintained by the United States Department of Treasury. You agree to use all reasonable efforts not to arrange travel for any of these prohibited persons and understand that doing so is grounds for termination from participation on the Site.</li>
                        <li>If you choose to leave this Site via links to other non-GoUSA.in websites, including those of advertisers, Brand USA is not responsible for the privacy policies of those sites or the cookies those sites use. In addition, because Brand USA has no control over such sites and resources, you acknowledge and agree that Brand USA is not responsible for the availability of such external sites or resources, and does not endorse and is not responsible or liable for any content, advertising, products or other materials on or available from such sites or resources.</li>
                        <li>If you would like to view the privacy practices that govern the Go USA Information, the Site or that may be in use by Brand USA, please review our Internet Privacy Policy Statement. If you have questions about these Terms of Use please send an email to: <span>webadministrator@thebrandusa.com.</span></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}
