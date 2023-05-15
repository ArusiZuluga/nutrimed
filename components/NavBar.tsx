import Link from "next/link";



export default function Menu(){
    return <div>
        <ul className="flex sm:space-x-8 sm:flex-row flex-col">
            <li><a href="/about">About Nutrimed</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/bmi">Check BMI</a></li>
            <li><a href="/mission">Mission</a></li>
            <li><a href="/mission">Vision</a></li>
            <li><a href="https://twitter.com/nutrimedfoods">Twitter</a></li>
            <li><a href="https://tiktok.com/nutrimedfoods">Tiktok</a></li>
            <li><a href="https://instagram.com/nutrimedfoods">Meta</a></li>
        </ul>
    </div>
}