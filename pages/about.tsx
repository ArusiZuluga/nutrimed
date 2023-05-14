import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"

export default function AboutUs(){
    return <div>
        <Header></Header>
        <h1 className="mx-auto max-w-4xl font-display items-center justify-center text-center text-4xl font-bold tracking-normal text-gray-300 sm:text-6xl">
            About Nutrimed
        </h1>

        <div className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
        Nutrimed Foods is a growing food product manufacturing company
        committed to providing HEALTH-BASED, high-quality and nutritious
        alternatives food products  to customers around the world.
        </div>
        <div className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
        With a mission to promote healthy eating habits and improve the
        overall well-being of people, Nutrimed Foods Is at the forefront
        of the food industry for many years.
        </div>
        <div className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
        The company's product line is diverse and includes a range of healthy
        and delicious food products such as Dates seed coffee, Dates Sugar, 
        Burro Banana flours, Potato & Yam flours, Bitterleaf tea extract.
        </div>
        <div className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
        Nutrimed Foods is dedicated to using only the most natural and finest 
        ingredients in their products, ensuring that each product is healthy, 
        nutritious, natural, and satisfying. 
        </div>
        <div  className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
        At Nutrimed Foods, the focus is on health and wellness, and the company
        is constantly researching and developing new products to meet the ever-evolving
        needs of consumers. The company's team of experienced professionals works tirelessly
        to ensure that each product meets the highest standards of quality and safety, from 
        the sourcing of ingredients to the manufacturing and distribution of products. 
        </div>
        <div className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
        Nutrimed Foods is committed to sustainable and ethical business practices, 
        and the company is dedicated to reducing its environmental impact through 
        responsible manufacturing and packaging practices. Nutrimed Foods also maintains
        a strong commitment to giving back to the community, and the company is involved
        in numerous charitable initiatives to help those in need. 
        </div>
        <div className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
        At Nutrimed Foods, the goal is to promote a healthier, more balanced lifestyle for
        people everywhere. Whether you're looking for a quick and healthy breakfast on-the-go
        or a satisfying snack to fuel your day, Nutrimed Foods has the perfect product to meet
        your needs.
        </div>
        <div className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
        Choose Nutrimed Foods for nutritious, delicious, and high-quality food products you can trust.
        </div>
        <div className="bg-purple-300 rounded-xl text-black items-center justify-center text-center font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition">
            <a href="store">
                <button > Go To Store</button>
            </a>
        </div>

        <Footer></Footer>

    </div>
}