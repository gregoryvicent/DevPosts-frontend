import Image from 'next/image'

import imageTest from '../../public/image/python-coding-mistakes.jpg'

export default function Posts() {
    return (
	<article className="w-auto h-80 rounded-3xl mb-10 bg-black cursor-pointer hover:shadow-lg hover:shadow-blue-400 transition-all">
	    <div className="w-full h-4/6">
		<Image className="w-full h-full rounded-t-3xl" src={ imageTest } alt="" />
	    </div>
	    <div className="flex flex-col justify-end p-5 rounded-b-3xl bg-gradient-to-b from-transparent via-black via-80% to-black">
		<h2 className="text-xl text-white">This is a Title</h2>
		<p className="text-white"><small>28-09-2023</small></p>
	    </div>
	</article>
    )
}
