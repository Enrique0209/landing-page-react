import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Navbar />
			<div className="container my-4 mt-0 mb-0 
			flex-grow-1">
				<Jumbotron />
				<div className="row text-center">
					<div className="col-lg-3  mb-4">
						<Card />
					</div>
					<div className="col-lg-3  mb-4">
						<Card />
					</div>
					<div className="col-lg-3  mb-4">
						<Card />
					</div>
					<div className="col-lg-3 mb-4">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;