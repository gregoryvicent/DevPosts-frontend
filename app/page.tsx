import { Posts } from "../components/Posts"

import imageTest from '../public/image/python-coding-mistakes.jpg'

export default function Page() {
    const posts = [
	{
	    img: imageTest,
	    title: 'This is a Title',
	    date: '27-09-2023'
	},
	{
	    img: imageTest,
	    title: 'This is a Title',
	    date: '27-09-2023'
	},
	{
	    img: imageTest,
	    title: 'This is a Title',
	    date: '27-09-2023'
	},
	{
	    img: imageTest,
	    title: 'This is a Title',
	    date: '27-09-2023'
	},
	{
	    img: imageTest,
	    title: 'This is a Title',
	    date: '27-09-2023'
	}
    ]
    return (
	<>
	    <br />
	    <br />
	    <br />
	    <br />
	    <br />
	    <h1 className="text-3xl font-bold text-center text-white">PostDev!!</h1>
	    <section className="mt-20 mx-10 grid grid-cols-4 gap-5">
		{
		    posts.map((a) => (
			<Posts 
			    title={ a.title }
			    img={ a.img }
			    date={ a.date }
			/>
		    ))
		}
	    </section>
	</>
    )
}
