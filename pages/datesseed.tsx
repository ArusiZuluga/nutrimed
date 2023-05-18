import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"
import Image from "next/image"

export default function DatesSeedPage(){
    return <div>
        <Header></Header>
        <h1 className="mx-auto max-w-4xl font-display items-center justify-center text-center text-4xl font-bold tracking-normal text-gray-300 sm:text-6xl">
             ✨ Unlock the Immune-Boosting Magic ✨

            </h1>
   
        <div className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">

            <br></br>
            <img src="/datesseed.png" alt="Dates seed coffee"></img>
             
            <br></br>
            <ul>
                <li>✔️ Natural Antioxidant Powerhouse: Dates seeds are loaded with antioxidants that help combat harmful free radicals in your body, supporting a strong immune system. Say goodbye to those pesky seasonal illnesses!
</li>

             <br></br>
                <li>✔️ Nutrient-Dense Goodness: Dates seed coffee is a treasure trove of essential vitamins and minerals. It contains high levels of vitamin A, vitamin E, calcium, and magnesium, all known to strengthen the immune system and promote overall well-being.</li>
                <br></br>
                <li>✔️ Energy Boosting: Need an extra kick in the morning? Dates seed coffee is an excellent caffeine-free option that provides a natural energy boost without the jitters. Feel rejuvenated and ready to conquer the day!</li>
                <br></br>
                <li>✔️ Gut Health Support: A healthy gut is vital for a robust immune system. Dates seed coffee is rich in dietary fiber, promoting good digestive health and ensuring your body absorbs nutrients effectively.
                
</li>
<br></br>
                <li>✔️ All-Natural and Sustainable: Our Dates Seed Coffee is sourced from premium quality dates seeds, carefully selected and roasted to perfection. We are committed to sustainable practices, ensuring you enjoy a guilt-free cup of immune-boosting goodness.</li>
                <br></br>

                <h1>🌍 Start Your Journey to a Healthier You 🌍</h1>
                <br></br>

                <li>Say goodbye to ordinary coffee and welcome a healthier alternative into your life. Dates Seed Coffee is easy to prepare, simply brew it like your regular coffee and enjoy the rich aroma and delicious flavor. Whether you sip it hot or over ice, it's a perfect choice any time of the year.</li>
                <br></br>
                <li>Experience the extraordinary benefits of Dates Seed Coffee and supercharge your immune system. Don't wait to enhance your well-being and indulge in a warm, comforting cup of goodness. Visit our website or your nearest retailer to get your hands on this natural immune booster today!</li>
                <br></br>
                <h4>Boost your immunity with Dates Seed Coffee - your pathway to a healthier, happier life!</h4>
            </ul>
        </div>
      

        <div className="bg-purple-300 rounded-xl text-black items-center justify-center text-center font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition">
            <a href="https://nutrimedfoods.bumpa.shop/">
                <button > Go To Store</button>
            </a>
        </div>

        <Footer></Footer>

    </div>
}