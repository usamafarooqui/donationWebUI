import React from 'react'
import Arrow from "../assets/images/arrow.svg?react";
import bg1 from "../assets/images/donationCardImages/bg1.png";
import mask from "../assets/images/donationCardImages/mask.png"
const cardData = [
    {
        id: 1,
        title: "Help us touch their lives of these youths",
        desc: "Join our community of dedicated supporter by becoming member.",
        raisedAmount: 45000,
        goalAmount: 60000,
        imageUrl: bg1

    },
    {
        id: 2,
        title: "Help us touch their lives of these youths",
        desc: "Join our community of dedicated supporter by becoming member.",
        raisedAmount: 45000,
        goalAmount: 60000,
        imageUrl: "../assets/images/donationCardImages/bg1.png"


    },
    {
        id: 3,
        title: "Help us touch their lives of these youths",
        desc: "Join our community of dedicated supporter by becoming member.",
        raisedAmount: 45000,
        goalAmount: 60000,
        imageUrl: "../assets/images/donationCardImages/bg1.png"


    },
]


const DonationCards = () => {
    return (
        <div className='max-w-351.25 w-95width mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12.5 '>
            {
                cardData.map((card, i) => {
                    return (
                        <>
                            <div key={card.id} className='p-4 rounded-2xl'>
                                <div className='rounded-2xl overflow-hidden'>
                                    <div className='w-full h-75.5 relative '>
                                        <img src={card.imageUrl} className='w-full h-full object-cover ' alt="" />
                                        <img
                                            src={mask}
                                            className="absolute top-0 right-0"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3>{card.title}</h3>
                                        <p>{card.desc}</p>
                                        <div>
                                            <progress value={(card.raisedAmount / card.goalAmount) * 100} max="100" />
                                            <div>
                                                <div>
                                                    <h5>Raised</h5>
                                                    <h6>${card.raisedAmount}</h6>
                                                </div>
                                                <div>
                                                    <h5>Goaled</h5>
                                                    <h6>${card.goalAmount}</h6>
                                                </div>
                                                <button>Donate Now <Arrow className="text-primary w-2 h-3.5" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default DonationCards