import React from 'react';

class About extends React.Component {
	componentDidMount() {
		document.title = "Kyle Bonar";
	}
	render() {
		return(
			<div className="about-container">
				<p className="about-header">					
					<span className="droid-bold">Hello world!</span> Welcome to my portfolio website.
				</p>

				<p>
					I am a <span className="droid-bold">Full Stack Dev</span> who likes to work with JavaScript as much as possible.
				</p>

				<p>
					I primarily focus on the front-end, I like to make pixel-perfect, minimalistic designs, but I also enjoy working with databases and server logic. 
				</p>

				<p>
					The majority of the updates to this site will be focused on the "Projects" section. Stay tuned!
				</p>

				<p>
					- Kyle Bonar
				</p>
			</div>
		)
	}
}

module.exports = About