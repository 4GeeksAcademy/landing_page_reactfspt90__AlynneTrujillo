import React from "react";

import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Cards from './Cards';
import Footer from "./Footer";

const cardsInfo = [
	{
		image: "https://m.media-amazon.com/images/I/61Oyte2OO-L._AC_UF1000,1000_QL80_.jpg",
		title: "Do you want to taco 'bout it?",
		description: "A dog dressed in a taco costume",
	},
	{
		image: "https://i.pinimg.com/736x/a4/8c/45/a48c4595bc88f776c2b75b98f0c9a5a8.jpg",
		title: "This puppuchino is just delish girl",
		description: "A dog having her puppuchino at Starbucks",
	},
	{
		image: "https://m.media-amazon.com/images/I/71r-86gTCiL._AC_UF1000,1000_QL80_.jpg",
		title: "Who's a good boy? Chuckie isn't.",
		description: "A dog dressed in a chuckie costume",
	},
	{
		image: "https://i.pinimg.com/736x/0c/e0/6a/0ce06a7c72ff0f658a6e1da243162876.jpg",
		title: "Ma'am, do you need to report a crime?",
		description: "A dog dressed in a police costume",
	}
];

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<div className="container d-flex justify-content-center my-4">
				<div className="row justify-content-center g-4">
					{cardsInfo.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center" key={index}>
							<Cards {...item} />
						</div>
					))}
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Home;