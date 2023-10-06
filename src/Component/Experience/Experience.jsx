import React, { useState } from 'react'
import './Experience.css';
import { useSearchParams } from 'react-router-dom';
import America1 from './America1.jpg';
import America2 from './America2.jpg';
import America3 from './America3.jpg';
import America4 from './America4.jpg';
import America5 from './America5.jpg';
import America6 from './America6.jpg';
import America7 from './America7.jpg';

export default function Experience() {

    const [isTopic, setTopic] = useState(false)
    const topicHandler = () => {
        setTopic(!isTopic)
        setRegion(false)
    }

    const [isRegion, setRegion] = useState(false)
    const regionHandler = () => {
        setRegion(!isRegion)
        setTopic(false)
    }
    return (
        <div className='experience-container'>
            <div className='background_image'>
                <h1>USA Experience</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className='input-field'>
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search all experience" />
                    <i class="fas fa-search"></i>
                </div>
            </div>
            <div className='buttons-container'>
                <button onClick={topicHandler} style={{ backgroundColor: isTopic && isRegion === false ? 'orangered' : 'white', color: isTopic && isRegion === false ? 'white' : 'orangered' }}>Topics<i className={isTopic && isRegion === false ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i></button>
                <button onClick={regionHandler} style={{ backgroundColor: isRegion && isTopic === false ? 'orangered' : 'white', color: isRegion && isTopic === false ? 'white' : 'orangered' }}>Regions<i className={isRegion && isTopic === false ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i></button>
            </div>
            {
                (isRegion && isTopic) || isRegion || isTopic ?
                    ""
                    :
                    <>
                        <div className='popularDiv'>
                            <p id='popular-p'>Popular</p>
                            <div className='popular-images'>
                                <div className='popular-image'>
                                    <img src='https://cdn.pixabay.com/photo/2023/07/06/07/40/antarctica-8109879_1280.jpg'></img>
                                    <p className='p-exp'>Experience</p>
                                    <p className='p-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                </div>
                                <div className='popular-image'>
                                    <img src='https://cdn.pixabay.com/photo/2023/07/08/04/58/sunset-8113697_1280.jpg'></img>
                                    <p className='p-exp'>Experience</p>
                                    <p className='p-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                </div>
                                <div className='popular-image'>
                                    <img src='https://cdn.pixabay.com/photo/2023/07/11/08/50/fireworks-8119898_1280.jpg'></img>
                                    <p className='p-exp'>Experience</p>
                                    <p className='p-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                </div>
                                <div className='popular-image'>
                                    <img src='https://cdn.pixabay.com/photo/2023/06/19/15/45/paraglider-8074916_1280.jpg'></img>
                                    <p className='p-exp'>Experience</p>
                                    <p className='p-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                </div>
                            </div>
                        </div>
                        <div className='feature-experiences'>
                            <h1>Feature experiences</h1>
                            <div className='feature-images'>
                                <div className='feature-image'>
                                    <img src='https://cdn.pixabay.com/photo/2023/06/15/10/03/surfing-8065035_1280.jpg'></img>
                                    <p className='f-exp'>Experience</p>
                                    <p className='f-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                </div>
                                <div className='feature-image'>
                                    <img src='https://cdn.pixabay.com/photo/2023/05/28/07/50/antarctica-8023068_1280.jpg'></img>
                                    <p className='f-exp'>Experience</p>
                                    <p className='f-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                </div>
                                <div className='feature-image'>
                                    <img src='https://cdn.pixabay.com/photo/2023/05/09/05/37/flowers-7980350_1280.jpg'></img>
                                    <p className='f-exp'>Experience</p>
                                    <p className='f-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                </div>
                            </div>
                        </div>
                        <div className='all-experiences'>
                            <h3>Explore all experiences</h3>
                            <div className='whole-images'>
                                <div className='whole-images-row'>
                                    <div className='whole-images-image'>
                                        <img src='https://cdn.pixabay.com/photo/2023/05/10/16/50/squirrel-7984541_1280.jpg'></img>
                                        <p className='whole-images-exp'>Experience</p>
                                        <p className='whole-images-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                    </div>
                                    <div className='whole-images-image'>
                                        <img src='https://cdn.pixabay.com/photo/2023/05/04/06/42/winter-7969339_1280.jpg'></img>
                                        <p className='whole-images-exp'>Experience</p>
                                        <p className='whole-images-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                    </div>
                                    <div className='whole-images-image'>
                                        <img src='https://cdn.pixabay.com/photo/2023/04/05/19/46/photographer-7902219_1280.jpg'></img>
                                        <p className='whole-images-exp'>Experience</p>
                                        <p className='whole-images-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                    </div>
                                    <div className='whole-images-image'>
                                        <img src='https://cdn.pixabay.com/photo/2023/05/01/13/12/tree-7963026_1280.jpg'></img>
                                        <p className='whole-images-exp'>Experience</p>
                                        <p className='whole-images-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                    </div>
                                </div>
                                <div className='whole-images-row'>
                                    <div className='whole-images-image'>
                                        <img src='https://cdn.pixabay.com/photo/2023/04/21/12/06/teapot-7941793_1280.jpg'></img>
                                        <p className='whole-images-exp'>Experience</p>
                                        <p className='whole-images-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                    </div>
                                    <div className='whole-images-image'>
                                        <img src='https://cdn.pixabay.com/photo/2023/04/01/14/52/monastery-7892569_1280.jpg'></img>
                                        <p className='whole-images-exp'>Experience</p>
                                        <p className='whole-images-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                    </div>
                                    <div className='whole-images-image'>
                                        <img src='https://cdn.pixabay.com/photo/2023/04/16/08/10/flower-7929400_1280.jpg'></img>
                                        <p className='whole-images-exp'>Experience</p>
                                        <p className='whole-images-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                    </div>
                                    <div className='whole-images-image'>
                                        <img src='https://cdn.pixabay.com/photo/2023/04/03/18/35/nature-7897648_1280.jpg'></img>
                                        <p className='whole-images-exp'>Experience</p>
                                        <p className='whole-images-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                    </div>
                                </div>
                                <div className='whole-images-row'>
                                    <div className='whole-images-image'>
                                        <img src='https://cdn.pixabay.com/photo/2023/04/13/10/42/cherry-blossom-7922329_1280.jpg'></img>
                                        <p className='whole-images-exp'>Experience</p>
                                        <p className='whole-images-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                    </div>
                                    <div className='whole-images-image'>
                                        <img src='https://cdn.pixabay.com/photo/2023/03/30/05/45/bird-7886820_1280.jpg'></img>
                                        <p className='whole-images-exp'>Experience</p>
                                        <p className='whole-images-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                    </div>
                                    <div className='whole-images-image'>
                                        <img src='https://cdn.pixabay.com/photo/2023/04/09/23/32/fish-7912504_1280.jpg'></img>
                                        <p className='whole-images-exp'>Experience</p>
                                        <p className='whole-images-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                    </div>
                                    <div className='whole-images-image'>
                                        <img src='https://cdn.pixabay.com/photo/2022/01/24/14/48/road-6963584_1280.jpg'></img>
                                        <p className='whole-images-exp'>Experience</p>
                                        <p className='whole-images-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                    </div>
                                </div>
                                <div className='whole-images-row'>
                                    <div className='whole-images-image'>
                                        <img src='https://cdn.pixabay.com/photo/2023/03/28/19/54/mountains-7884039_1280.jpg'></img>
                                        <p className='whole-images-exp'>Experience</p>
                                        <p className='whole-images-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                    </div>
                                    <div className='whole-images-image'>
                                        <img src='https://cdn.pixabay.com/photo/2023/03/29/09/19/wooden-hut-7884975_1280.jpg'></img>
                                        <p className='whole-images-exp'>Experience</p>
                                        <p className='whole-images-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                    </div>
                                    <div className='whole-images-image'>
                                        <img src='https://cdn.pixabay.com/photo/2023/03/26/03/12/ladybug-7877480_1280.jpg'></img>
                                        <p className='whole-images-exp'>Experience</p>
                                        <p className='whole-images-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                    </div>
                                    <div className='whole-images-image'>
                                        <img src='https://cdn.pixabay.com/photo/2023/01/23/17/28/tree-7739243_1280.jpg'></img>
                                        <p className='whole-images-exp'>Experience</p>
                                        <p className='whole-images-places'>Cultural must-sees in Louisville, Kentuchy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav aria-label="Page navigation example" className='pagination'>
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" aria-label="Previous">
                                        <span aria-hidden="true">&lt;</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link">1</a></li>
                                <li class="page-item"><a class="page-link">2</a></li>
                                <li class="page-item"><a class="page-link">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" aria-label="Next">
                                        <span aria-hidden="true">&gt;</span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </>
            }

            {
                isTopic && isRegion === false ?
                    <div className='topics'>
                        <div className='topices'>
                            <p>Lifestyle</p>
                            <form>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>All Lifestyle</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Couples</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Family</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Kid Friendly</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>LGBT</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Local Experiences</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>New Visitors</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Solo Traveller</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Wellness</label>
                                </span>
                            </form>
                        </div>
                        <div className='topices'>
                            <p>Shopping</p>
                            <form>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>All Shopping</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Local Finds</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Luxury</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Malls and Shopping Centers</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Outlet & Discount Stores</label>
                                </span>
                            </form>
                        </div>
                        <div className='topices'>
                            <p>Food & Drink</p>
                            <form>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>All Food & Drink</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Cheff & Artisans</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Drinks</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Food Festival & Events</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Food Trails</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Market & Firms</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Must Eats</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Regional Cuisine</label>
                                </span>
                            </form>
                        </div>
                        <div className='topices'>
                            <p>Cities & Towns</p>
                            <form>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>All Cities & Towns</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>City Guides</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>City Life</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Neighborhoods</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Nightlife</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Sightseeing</label>
                                </span>
                                <span>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Small Towns</label>
                                </span>
                            </form>
                        </div>
                        <div className='topices'>
                            <p>Outdoors</p>
                            <form>
                            <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>All Outdoors</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Adventure</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Beaches</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Deserts</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Gardens & City Parks</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Lakes & Rivers</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Mountains</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Natural Wounders</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Sports & Recreation</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Wildlife</label>
                                </span>
                            </form>
                        </div>
                        <div className='topices'>
                            <p>Culture & History</p>
                            <form>
                            <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>All Culture & History</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Architecture</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Art & Literature</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>History</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Landmarks</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Museums & Galleries</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Native American</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Natural History</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>U.S Culture</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>U.S Holidays</label>
                                </span>
                            </form>
                        </div>
                        <div className='topices' style={{ borderBottom: 'none' }}>
                            <p>Entertainment</p>
                            <form>
                            <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>All Entertainment</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Attractions</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Fairs & Festivals</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Gaming</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Movies & TV</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Music</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Performing Arts</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Spectators Sports</label>
                                </span>
                                <span>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label>Theme Parks</label>
                                </span>
                            </form>
                        </div>
                        <button>Apply</button>
                        <button>Clear</button>
                    </div>
                    :
                    ""
            }

            {
                isRegion && isTopic === false ?
                    <>
                        <div className=' regions'>
                            <div className='region'>
                                <img src={America1}></img>
                                <p>Pacific</p>
                                <form>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>All Pacific</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Oregon</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Washington</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Hawaii</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Alaska</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>California</label>
                                </form>
                            </div>
                            <div className='region'>
                                <img src={America7}></img>
                                <p>West</p>
                                <form>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>All West</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>North Dakota</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Nevada</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Wyoming</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>South Dakota</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Utah</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Montana</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Idaho</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Colorado</label>
                                </form>
                            </div>
                            <div className='region'>
                                <img src={America3}></img>
                                <p>Southwest</p>
                                <form>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>All Southwest</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Oklahoma</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>New Maxico</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Texas</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Arizona</label>
                                </form>
                            </div>
                            <div className='region'>
                                <img src={America2}></img>
                                <p>Midwest</p>
                                <form>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>All Midwest</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Ohio</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Wisconsin</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Nebraska</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Indiana</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Illinois</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Michigan</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Minnesota</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Lowa</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Kansas</label>
                                </form>
                            </div>
                            <div className='region'>
                                <img src={America6}></img>
                                <p>Southeast</p>
                                <form>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>All Southwest</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Alabama</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Florida</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Georgia</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Washington D.C</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>West Virginia</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Virginia</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Mississippi</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Missouri</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Maryland</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Kentuchy</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Louisiana</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Arkansas</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>North Carolina</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>South Carolina</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Tennessee</label>
                                </form>
                            </div>
                            <div className='region'>
                                <img src={America5}></img>
                                <p>Northeast</p>
                                <form>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>All Northeast</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Massachusetts</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Pennsylvenia</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>New Hampshire</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>New Jersey</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>New York</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Rhode Island</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Vermont</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Delaware</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Connecticut</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Maine</label>
                                </form>
                            </div>
                            <div className='region'>
                                <img src={America4}></img>
                                <p>USA Territories</p>
                                <form>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>All USA Territories</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Northern Mariana Island</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Puerto Rico</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>U.S Virgin Island</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>Guam</label>
                                    <br></br>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label>American Samoa</label>
                                </form>
                            </div>
                        </div>
                        <div className='region-button'>
                            <button>Apply</button>
                            <button>Clear</button>
                        </div>
                    </>
                    :
                    ""
            }



        </div>
    )
}