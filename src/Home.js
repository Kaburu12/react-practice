import { useState } from "react";
import BlogLIst from "./BlogList";

const Home = () => {
	//personal details section
	const [ name, setName ] = useState("mario")
	const [ age, setAge ] = useState(23)
	//Blog section
	const [blogs, setBlogs] = useState([
		{ title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
		{ title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
		{ title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
	  ])
	
	//on button click function
	const handleClick = () => {
		setName("Mike");
		setAge(25)
	console.log("Hello ,thanks for visiting my site")
	}
	
	const handleDelete = (id) => {
		const NewBlogs = blogs.filter(blog => blog.id !== id)
		setBlogs(NewBlogs)
	}

	return (  
		<div className="home">
			<h2>Home Page</h2>
			<p>{name} is {age} years old</p>
			<button onClick={handleClick}>Click To Update</button>
        
			<BlogLIst blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
		 
		</div>
	);
}
 
export default Home;