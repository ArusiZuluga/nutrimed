import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

export default class NextJsCarousel extends Component {
	render() {
		return (
			<div  className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
			<Carousel  data-interval="5000" data-pause="false" autoPlay preventMovementUntilSwipeScrollTolerance>
				<div>
                    <a href='/store'>
                        <img width={200} height={200} src="/img1.png" alt="Family Nutrition"/>
                    </a>
                    <Link className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
                    href="/store"
                    >
                        Buy Now
                    </Link>
                    
				</div>
				<div>
					<a href='/store'>
                        <img width={200} height={200} src="/img2.png" />
                    </a>
                    <Link className="bg-red-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
                    href="/store"
                    >
                        Buy Now
                    </Link>

				</div>
				<div>
					<a href='/store'>
                        <img width={200} height={200} src="/img3.png" alt="immunity"/>
                    </a>
                    <Link className="bg-pink-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
                    href="/store"
                    >
                        Buy Now
                    </Link>

				</div>
				<div>
					<a href='/dietingandnutrition'>
                        <img width={200} height={200} src="/img4.png"/>
                    </a>
                    <Link className="bg-purple-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
                    href="/course"
                    >
                        TAKE THE NUTRIMED FAMILY NUTRITION COURSE
                    </Link>

				</div>

			</Carousel>
			</div>
		);
	}
};
