import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
	<div className="fixed bg-zinc-950 w-full p-3">
	    <header className="bg-zinc-800 h-14 w-full rounded-full flex justify-between items-center">
		<Image src="" alt=""/>
		<nav className="mx-10">
		    <ul className="flex">
			<li className="text-slate-100 mx-4 bg-zinc-900 rounded-md py-1 px-4 cursor-pointer hover:shadow-md hover:shadow-blue-400 transition-all" ><Link href="" />Home</li>
			<li className="text-slate-100 mx-4 bg-zinc-900 rounded-md py-1 px-4 cursor-pointer hover:shadow-md hover:shadow-blue-400 transition-all" ><Link href="" />Precios</li>
			<li className="text-slate-100 mx-4 bg-zinc-900 rounded-md py-1 px-4 cursor-pointer hover:shadow-md hover:shadow-blue-400 transition-all" ><Link href="" />Sobre Mí</li>
			<li className="text-slate-100 mx-4 bg-zinc-900 rounded-md py-1 px-4 cursor-pointer hover:shadow-md hover:shadow-blue-400 transition-all" ><Link href="" />Ingresar</li>
		    </ul>
		</nav>
	    </header>
	</div>
    )
}
