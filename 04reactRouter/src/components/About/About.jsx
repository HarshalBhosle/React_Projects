import React from 'react'
import image from '../../images/image2.png';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src={image}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            React development is driven by curiosity, collaboration, and a 
                            relentless pursuit of performance. Developers working with React don’t
                             just build websites — they architect dynamic user experiences that
                              adapt, respond, and evolve.
                        </p>
                        <p className="mt-4 text-gray-600">
                            At its core, React is more than a library; it’s a philosophy. 
                            With every component rendered and every state updated, 
                            it reflects a mindset of modularity, reusability, and clarity. 
                            Developers embracing React are not only coders but creators — blending 
                            logic and design to shape the future of the web.                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
