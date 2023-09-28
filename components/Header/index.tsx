import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
	<header className="bg-slate-950 w-auto h-14 m-2 rounded-full flex justify-between items-center">
	    <Image src="" alt=""/>
	    <nav className="mx-10">
		<ul className="flex">
		    <li className="text-slate-100 mx-4 bg-slate-800 rounded-md py-1 px-4 cursor-pointer hover:shadow-md hover:shadow-blue-400 transition-all" ><Link href="" />Home</li>
		    <li className="text-slate-100 mx-4 bg-slate-800 rounded-md py-1 px-4 cursor-pointer hover:shadow-md hover:shadow-blue-400 transition-all" ><Link href="" />Precios</li>
		    <li className="text-slate-100 mx-4 bg-slate-800 rounded-md py-1 px-4 cursor-pointer hover:shadow-md hover:shadow-blue-400 transition-all" ><Link href="" />Sobre Mí</li>
		</ul>
	    </nav>
	</header>
    )
}
