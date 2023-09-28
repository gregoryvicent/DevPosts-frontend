import Image from 'next/image'

import { PostsComponentTypes } from '../../types/PostComponentType'

export const Posts: React.FC<PostsComponentTypes> = ({ img, title, date }) => {
    return (
	<article className="w-auto h-80 rounded-3xl mb-10 bg-black cursor-pointer hover:shadow-lg hover:shadow-blue-400 transition-all">
	    <div className="w-full h-4/6">
		<Image 
		    className="w-full h-full rounded-t-3xl" 
		    src={ img } 
		    alt={`Image Post: ${title}`} 
		    width={50} 
		    height={50}
		/>
	    </div>
	    <div className="flex flex-col justify-end p-5 rounded-b-3xl bg-gradient-to-b from-transparent via-black via-80% to-black">
		<h2 className="text-xl text-white">{ title }</h2>
		<p className="text-white"><small>{ date }</small></p>
	    </div>
	</article>
    )
}
