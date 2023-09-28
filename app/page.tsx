import Posts from "../components/Posts"

export default function Page() {
    return (
	<>
	    <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
	    <section className="mt-20 mx-10 grid grid-cols-4 gap-5">
		<Posts />
		<Posts />
		<Posts />
		<Posts />
		<Posts />
		<Posts />
		<Posts />
		<Posts />
		<Posts />
		<Posts />
		<Posts />
		<Posts />
		<Posts />
		<Posts />
		<Posts />
	    </section>
	</>
    )
}
