import React from 'react'
import './Travel.css';
import { useState } from 'react';
const image=[
    {'image': 'https://cdn.pixabay.com/photo/2023/06/29/04/30/fishing-boat-at-sea-8095632_1280.jpg'},
    {'image': 'https://cdn.pixabay.com/photo/2023/05/22/13/45/mount-fuji-8010752_1280.jpg'},
    {'image': 'https://cdn.pixabay.com/photo/2023/05/28/07/50/antarctica-8023068_1280.jpg'}
]
export default function Travel() {

    const [activeImageNum, setCurrent] = useState(0);
    const length = image.length;
    const nextSlide = () => {
        setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
    };
    const prevSlide = () => {
        setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
    };
    if (!Array.isArray(image) || image.length <= 0) {
        return null;
    }
    return (
        <div className='Travel'>
            <div className='upperImage'>
                <h1>Pacific Coast Highway Road Trip</h1>
            </div>
            <div className='map-paragraph'>
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6511984.409029338!2d-124.59326030551495!3d37.160310474234784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1691571034993!5m2!1sen!2sin" style={{ border: '0px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="btn-group buttons" role="group" aria-label="Basic example">
                        <button type="button" className="btn btnfirst"><i class="fa-regular fa-heart"></i></button>
                        <button type="button" className="btn"><i class="fas fa-share-alt"></i></button>
                    </div>
                </div>
                <div className='paragraph'>
                    <h1>Explore California's stunning coastline from San Fransisco to San Diego</h1>
                    <p>Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
                </div>
            </div>
            <img src='https://cdn.pixabay.com/photo/2023/07/10/18/39/harvest-8118900_1280.jpg' className='travelImage' id='travelImage'></img>
            <div className='place'>
                <div className='placeDescription'>
                    <h1>Starting Point: San Fransisco</h1>
                    <p>Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
                </div>
                <div className='placeInfo'>
                    <p id='information'>More information</p>
                    <p className="text-warning" id='warning'>San Fransisco Travel</p>
                    <p id='you-may-enjoy'>You may enjoy</p>
                    <img src='https://avatars.mds.yandex.net/i?id=a8ef47eff3d96a28cfdb4c695b5d1e05b30af7ef-7886515-images-thumbs&n=13'></img>
                    <p className="text-warning" id='warning'>Exporience</p>
                    <p className='w-75' id='placeName'>San Fransisco, California: Outdoor Adventers in this Urban Gem</p>
                </div>
            </div>
            <div className='icons'>
                <div className='dashed'></div>
                <i class="fas fa-tachometer-alt altameter"></i>
                <span> 139 Km</span>
                <br></br>
                <i class="fa-solid fa-car"></i>
                <span> 2 hours by car</span>
                <div className='dashed dash2'></div>
            </div>
            <img src='https://cdn.pixabay.com/photo/2023/05/23/10/55/antarctica-8012488_1280.png' className='travelImage'></img>
            <div className='place'>
                <div className='placeDescription'>
                    <h1>Felton and Santa Cruz</h1>
                    <p>Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
                </div>
                <div className='placeInfo'>
                    <p id='information'>More information</p>
                    <p className="text-warning" id='warning'>San Fransisco Travel</p>
                    <p id='you-may-enjoy'>You may enjoy</p>
                    <img src='https://east.caribedev.com/wp-content/uploads/2018/02/pack.jpg'></img>
                    <p className="text-warning" id='warning'>Exporience</p>
                    <p className='w-75' id='placeName'>From the Bay to the Wine: San Fransisco to California Wine Country</p>
                </div>
            </div>
            <div className='icons'>
                <div className='dashed'></div>
                <i class="fas fa-tachometer-alt altameter"></i>
                <span> 139 Km</span>
                <br></br>
                <i class="fa-solid fa-car"></i>
                <span> 2 hours by car</span>
                <div className='dashed dash2'></div>
            </div>
            <div id="carouselExampleControls" class="carousel slide Slider" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2023/06/29/04/30/fishing-boat-at-sea-8095632_1280.jpg" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2023/05/22/13/45/mount-fuji-8010752_1280.jpg" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2023/05/28/07/50/antarctica-8023068_1280.jpg" alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev previous" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div className='place'>
                <div className='placeDescription'>
                    <h1>Big Sur</h1>
                    <p>Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
                </div>
                <div className='placeInfo'>
                    <p id='information'>More information</p>
                    <p className="text-warning" id='warning'>San Fransisco Travel</p>
                    <p id='you-may-enjoy'>You may enjoy</p>
                    <img src='https://jooinn.com/images/cherry-blossom-30.jpg'></img>
                    <p className="text-warning" id='warning'>Experience</p>
                    <p className='w-75' id='placeName'>Dine with a View in California</p>
                </div>
            </div>
            <div className='icons' id='california'>
                <div className='dashed'></div>
                <i class="fas fa-tachometer-alt altameter"></i>
                <span> 139 Km</span>
                <br></br>
                <i class="fa-solid fa-car"></i>
                <span> 2 hours by car</span>
                <div className='dashed dash2'></div>
            </div>
            <img src='https://cdn.pixabay.com/photo/2023/05/30/21/12/lake-8030021_1280.jpg' className='travelImage'></img>
            <div className='place'>
                <div className='placeDescription'>
                    <h1>Cambria</h1>
                    <p>Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
                </div>
                <div className='placeInfo'>
                    <p id='information'>More information</p>
                    <p className="text-warning" id='warning'>San Fransisco Travel</p>
                    <p id='you-may-enjoy'>You may enjoy</p>
                    <img src='https://blogimages.musement.com/2018/06/september-destination-st-petersburg-jpg_header-104319.jpeg'></img>
                    <p className="text-warning" id='warning'>Experience</p>
                    <p className='w-75' id='placeName'>California's Highway 1: 160 Kilometers of Enriching Costal Adventures</p>
                </div>
            </div>
            <div className='icons'>
                <div className='dashed'></div>
                <i class="fas fa-tachometer-alt altameter"></i>
                <span> 139 Km</span>
                <br></br>
                <i class="fa-solid fa-car"></i>
                <span> 1 hours by car</span>
                <div className='dashed dash2'></div>
            </div>
            <img src='https://cdn.pixabay.com/photo/2015/04/23/21/59/hot-air-balloon-736879_1280.jpg' className='travelImage'></img>
            <div className='place'>
                <div className='placeDescription'>
                    <h1>Morro Bay</h1>
                    <p>Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
                </div>
                <div className='placeInfo'>
                    <p id='information'>More information</p>
                    <p className="text-warning" id='warning'>San Fransisco Travel</p>
                    <p id='you-may-enjoy'>You may enjoy</p>
                    <img src='https://pbs.twimg.com/media/CdIJaaIWAAQCBef?format=jpg&name=4096x4096'></img>
                    <p className="text-warning" id='warning'>Experience</p>
                    <p className='w-75' id='placeName'>California's Highway 1: 160 Kilometers of Enriching Costal Adventures</p>
                </div>
            </div>
            <div className='icons'>
                <div className='dashed'></div>
                <i class="fas fa-tachometer-alt altameter"></i>
                <span> 139 Km</span>
                <br></br>
                <i class="fa-solid fa-car"></i>
                <span> 1 hours by car</span>
                <div className='dashed dash2'></div>
            </div>
            <img src='https://cdn.pixabay.com/photo/2023/06/06/15/32/squirrel-8044947_1280.jpg' className='travelImage'></img>
            <div className='place'>
                <div className='placeDescription'>
                    <h1>San Luis Obispo</h1>
                    <p>Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
                </div>
                <div className='placeInfo'>
                    <p id='information'>More information</p>
                    <p className="text-warning" id='warning'>San Fransisco Travel</p>
                    <p id='you-may-enjoy'>You may enjoy</p>
                    <img src='https://images.unsplash.com/photo-1690380117575-82fb93cf524a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzODN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'></img>
                    <p className="text-warning" id='warning'>Experience</p>
                    <p className='w-75' id='placeName'>San Luis Obispo: Wine Country Goes Coastal</p>
                </div>
            </div>
            <div className='icons'>
                <div className='dashed'></div>
                <i class="fas fa-tachometer-alt altameter"></i>
                <span> 139 Km</span>
                <br></br>
                <i class="fa-solid fa-car"></i>
                <span> 1 hours by car</span>
                <div className='dashed dash2'></div>
            </div>
            <img src='https://cdn.pixabay.com/photo/2023/04/14/20/52/lake-7925872_1280.jpg' className='travelImage'></img>
            <div className='place'>
                <div className='placeDescription'>
                    <h1>Los Olivos and Solvang</h1>
                    <p>Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
                </div>
                <div className='placeInfo'>
                    <p id='information'>More information</p>
                    <p className="text-warning" id='warning'>San Fransisco Travel</p>
                    <p id='you-may-enjoy'>You may enjoy</p>
                    <img src='https://avatars.mds.yandex.net/i?id=5d6ad9a0b90a23bc8b3738f19380a1b07b7e7ad2-4398781-images-thumbs&n=13'></img>
                    <p className="text-warning" id='warning'>Experience</p>
                    <p className='w-75' id='placeName'>5 Ofbeat Events That Revel the Spirit of U.S.Destination</p>
                </div>
            </div>
            <div className='icons'>
                <div className='dashed'></div>
                <i class="fas fa-tachometer-alt altameter"></i>
                <span> 139 Km</span>
                <br></br>
                <i class="fa-solid fa-car"></i>
                <span> 1 hours by car</span>
                <div className='dashed dash2'></div>
            </div>
            <img src='https://cdn.pixabay.com/photo/2023/04/01/14/52/moon-7892567_1280.jpg' className='travelImage'></img>
            <div className='place'>
                <div className='placeDescription'>
                    <h1>Santa Barboa</h1>
                    <p>Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
                </div>
                <div className='placeInfo'>
                    <p id='information'>More information</p>
                    <p className="text-warning" id='warning'>San Fransisco Travel</p>
                    <p id='you-may-enjoy'>You may enjoy</p>
                    <img src='https://avatars.mds.yandex.net/i?id=3a5bd724cf14b12939f84a977d3239b76d0f0291-9100149-images-thumbs&n=13'></img>
                    <p className="text-warning" id='warning'>Experience</p>
                    <p className='w-75' id='placeName'>Santa Barbara, California: From Land to Sea in 'The American Riviera'</p>
                </div>
            </div>
            <div className='icons'>
                <div className='dashed'></div>
                <i class="fas fa-tachometer-alt altameter"></i>
                <span> 139 Km</span>
                <br></br>
                <i class="fa-solid fa-car"></i>
                <span> 1 hours by car</span>
                <div className='dashed dash2'></div>
            </div>
            <div id="carouselExampleControls" class="carousel slide Slider" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2023/02/08/17/55/mountains-7777164_1280.jpg" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2023/03/12/19/17/trees-7847672_1280.jpg" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2023/03/08/10/11/crocuses-7837426_1280.jpg" alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev previous" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div className='place'>
                <div className='placeDescription'>
                    <h1>Los Angels</h1>
                    <p>Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
                </div>
                <div className='placeInfo'>
                    <p id='information'>More information</p>
                    <p className="text-warning" id='warning'>San Fransisco Travel</p>
                    <p id='you-may-enjoy'>You may enjoy</p>
                    <img src='https://vibrant.holiday/media_images/package/images/16093241514.jpg'></img>
                    <p className="text-warning" id='warning'>Experience</p>
                    <p className='w-75' id='placeName'>5 Great Places in Los Angels</p>
                </div>
            </div>
            <div className='icons' id='california'>
                <div className='dashed'></div>
                <i class="fas fa-tachometer-alt altameter"></i>
                <span> 139 Km</span>
                <br></br>
                <i class="fa-solid fa-car"></i>
                <span> 2 hours by car</span>
                <div className='dashed dash2'></div>
            </div>

            <img src='https://cdn.pixabay.com/photo/2023/01/07/12/15/bridge-7703146_1280.jpg' className='travelImage'></img>
            <div className='place'>
                <div className='placeDescription'>
                    <h1>San Diego</h1>
                    <p>Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
                </div>
                <div className='placeInfo'>
                    <p id='information'>More information</p>
                    <p className="text-warning" id='warning'>San Diego Travel</p>
                    <p id='you-may-enjoy'>You may enjoy</p>
                    <img src='https://cdn.pixabay.com/photo/2022/11/14/20/14/compass-7592447_1280.jpg'></img>
                    <p className="text-warning" id='warning'>Experience</p>
                    <p className='w-75' id='placeName'>5 Family-Friendly Outdoor Activities in San Diego'</p>
                </div>
            </div>
            <div className='skyblue-area'>
                <p>Travel Information</p>
                <div className='image-portion'>
                    <div className='first-image'>
                        <img src='https://live.staticflickr.com/3440/3750980312_b604834f77_b.jpg'></img>
                        <p>Discover Trip Ideas</p>
                    </div>
                    <div className='last-image'>
                        <img src='https://i.pinimg.com/originals/26/91/8d/26918d9e610d9e00e49bd1808a7f0905.jpg'></img>
                        <p>USA Trip Planner</p>
                    </div>
                </div>
            </div>
            <div className='lastImage'>
                <h1>Continue Exploring</h1>
            </div>
            <div className='fullvideos'>
                <div className='firstVideo'>
                    <div className='Video'>
                        <iframe
                            src="https://www.youtube.com/embed/ESnrn1kAD4E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className="text-warning font-weight-bold worn">Trip-1-2 weeks</p>
                        <p className='font-weight-bold des'>An Epic Tour of Southern California Culture, Cuisine and Attractions</p>
                    </div>
                    <div className='Video'>
                        <iframe
                            src="https://www.youtube.com/embed/CBYHwZcbD-s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className="text-warning font-weight-bold worn">Trip-1-2 weeks</p>
                        <p className='font-weight-bold des'>Puerto Rico Road Trip: Island Adventure and Scenic Beauty</p>
                    </div>
                    <div className='Video'>
                        <iframe
                            src="https://www.youtube.com/embed/lGmRnu--iU8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className="text-warning font-weight-bold worn">Trip-1-2 weeks</p>
                        <p className='font-weight-bold des'>The Ultimate Hawaiian Island-Hopping Itinerary</p>
                    </div>
                </div>
                <div className='lastVideo'>
                    <div className='Video'>
                        <iframe
                            src="https://www.youtube.com/embed/lGmRnu--iU8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className="text-warning font-weight-bold worn">Trip-1-2 weeks</p>
                        <p className='font-weight-bold des'>The Ultimate Hawaiian Island-Hopping Itinerary</p>
                    </div>
                    <div className='Video'>
                        <iframe
                            src="https://www.youtube.com/embed/RDV3Z1KCBvo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className="text-warning font-weight-bold worn">Trip-1-2 weeks</p>
                        <p className='font-weight-bold des'>Cultrure, History, and Tranquility: 3 Captivating Stops in Georgia</p>
                    </div>
                    <div className='Video'>
                        <iframe
                            src="https://www.youtube.com/embed/RDV3Z1KCBvo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className="text-warning font-weight-bold worn">Trip-1-2 weeks</p>
                        <p className='font-weight-bold des'>Cultrure, History, and Tranquility: 3 Captivating Stops in Georgia</p>
                    </div>
                </div>
                <button type='button' className='btn btn-warning'>View all trips</button>
            </div>
            <div className='fullImage'>
                <h3>Explore more</h3>
                <div className='Images'>
                    <div className='leftImage'>
                        <div>
                            <img src='https://img5.goodfon.com/original/2738x1826/c/52/northern-lights-colors-night.jpg'></img>
                            <span>
                                <p>Experience</p>
                                <p>Underwater Graveyards</p>
                            </span>
                        </div>
                        <div>
                            <img src='https://w.forfun.com/fetch/e7/e7fa3ee2b571f048852cedd2cf868fcd.jpeg'></img>
                            <span>
                                <p>Experience</p>
                                <p>Underwater Graveyards</p>
                            </span>
                        </div>
                        <div>
                            <img src='https://cdn.pixabay.com/photo/2023/08/05/02/25/dog-8170199_1280.jpg'></img>
                            <span>
                                <p>Experience</p>
                                <p>Underwater Graveyards</p>
                            </span>
                        </div>
                    </div>
                    <div className='rightImage'>
                        <div>
                            <img src='https://cdn.pixabay.com/photo/2022/11/17/01/35/black-forest-7597147_1280.jpg'></img>
                            <span>
                                <p>Experience</p>
                                <p>Underwater Graveyards</p>
                            </span>
                        </div>
                        <div>
                            <img src='https://cdn.pixabay.com/photo/2023/01/22/15/16/ocean-7736669_1280.jpg'></img>
                            <span>
                                <p>Experience</p>
                                <p>Underwater Graveyards</p>
                            </span>
                        </div>
                        <div>


                            <img src='https://cdn.pixabay.com/photo/2023/01/04/13/21/animals-7696695_1280.jpg'></img>
                            <span>
                                <p>Experience</p>
                                <p>Underwater Graveyards</p>
                            </span>
                        </div>
                    </div>
                </div>
                <button type='button'>Refresh</button>
            </div>

        </div>
    )
}
