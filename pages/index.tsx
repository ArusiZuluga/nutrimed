import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";
import NextJsCarousel from "../components/Carousel";
import ProductSlide from "../components/ProductSlide";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Nutrimed Foods</title>
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <a
          href="https://nutrimedfoods.ng/shop"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-300"
        >
          Build a stronger immune system with{" "}
          <span className="text-blue-600">Nutrimed Food Products</span>
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          A Healthier Life,{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative">through food</span>
          </span>{" "}
          and food discipline.
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          Living a healthy life might be challenging,
          but Nutrimed strives to make it an easy lifestyle routine for you.
        </h2>
        <Link
          className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
          href="https://mealplanner.nutrimed.ng"
        >
          Generate Meal Plan.   


        </Link>
        <br></br>

        <NextJsCarousel></NextJsCarousel>

        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-gray-300 sm:text-6xl">
          Things to do here:
        </h1>

        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div className="sm:mt-0 mt-8">
                <Link href={"/datesseed"}>
                <button className="bg-purple-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition">IMPROVE IMMUNITY</button>
                </Link>
              </div>
              <div>
                <Link href={"/bmi"}>
                <button className="bg-purple-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition">CHECK BMI</button>
                </Link>
              </div>
              <div className="sm:mt-0 mt-8">
                <Link href={"https://nutrimedfoods.bumpa.shop/"}>
                <button className="bg-purple-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition">SHOP</button>
                </Link>
              </div>

              <div>
              <Link href={"https://wa.link/ri4flz"}>
                <button className="bg-purple-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition">TALK TO A NUTRITIONIST</button>
              </Link>
              </div>
              <div>
              <Link href={"/course"}>
                <button className="bg-purple-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition">LEARN FAMILY NUTRITION</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ProductSlide />
      <Footer />
    </div>
  );
};

export default Home;
