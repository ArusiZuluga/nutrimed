import Image from "next/image";
import SquigglyLines from "../components/SquigglyLines";

export default function ProductSlide(){
  return <div>
    <div>
    <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <h1 className="mx-auto max-w-4xl font-display items-center justify-center text-center text-4xl font-bold tracking-normal text-gray-300 sm:text-6xl">TOP PRODUCTS</h1>
          </span>{" "}
    </div>
    <br></br>
    <div className="flex sm:space-x-8 sm:flex-row flex-col">
    <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">Dates Seed Coffee: Dates seed coffee is a super food that has a wide range of benefits. Apart from memory improvement. It serves as an excellent antioxidant, antiaging and antiinflammatory.<a className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-300" href="/store/coffee">Learn More</a></h2>
    <Image
      src = "/product1.jpg"
      alt="Nutrimed Dates Seed Coffee"
      width={300}
      height={300}
      className="rounded-full"
    
    />
    <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">Dates Sugar: An excellent and healthy alternative to sugar. Dates sugar is perfect for babies, diabetics and sugar conscious persons. <a className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-300" href="/store/sugar">Learn More</a></h2>
<Image
      src = "/product2.jpg"
      alt="Nutrimed Dates Sugar"
      className="rounded-full"
      width={300}
      height={300}
    
    />
    </div>

    <br></br>

    <div className="flex sm:space-x-8 sm:flex-row flex-col">
    <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7"> Nutri Burro: Burro banana flours are the healthiest alternative to fufu and garri. Rich with fibres and antioxidants. <a className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-300" href="/store/burro">Learn More</a></h2>
<Image
      src = "/product3.jpg"
      alt="Nutrimed Foods Healthy Burro Banana Flour"
      className="rounded-full"
      width={300}
      height={300}
    
    />
    <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">Nutri Poraro: Made from 100% Nigerian Sweet Potatoes, Nutri Poraro is a joy to go with your favorite soup. <a className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-300" href="/store/poraro">Learn More</a></h2>
<Image
      src = "/product4.jpg"
      alt="Nutrimed Food Healthy Potato Flour"
      className="rounded-full"
      width={300}
      height={300}
      
    
    />
    </div>
    </div>
}
