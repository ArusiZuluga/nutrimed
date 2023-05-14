import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"

export default function AboutUs(){
    return <div>
        <Header></Header>
        <h1 className="mx-auto max-w-4xl font-display items-center justify-center text-center text-4xl font-bold tracking-normal text-gray-300 sm:text-6xl">
            Mission
        </h1>

        <div className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
        At Nutrimed Foods, our mission is to provide high-quality, nutritious food 
        products that promote health and well-being for all individuals. We strive
        to use only the finest natural ingredients and innovative production processes
        to create foods that are not only good for the body, but also taste delicious.
        </div>

        <div>=
            <h1 className="mx-auto max-w-4xl font-display items-center justify-center text-center text-4xl font-bold tracking-normal text-gray-300 sm:text-6xl">
                Vision
            </h1>
        </div>



        <div className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
        Our vision at Nutrimed Foods is to become the leading provider of 
        health food products in the market, setting the standard for quality
        and innovation in the industry. We aim to educate and inspire people 
        to make healthier food choices and to create a healthier, more sustainable 
        world through our commitment to social and environmental responsibility.
        </div>

        <div className="bg-purple-300 rounded-xl text-black items-center justify-center text-center font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition">
            <a href="store">
                <button > Go To Store</button>
            </a>
        </div>

        <Footer></Footer>

    </div>
}