"use strict";

var React = require('react');

var About = React.createClass({

	render: function(){
		return (
				<div>
				<h1>About</h1>
				<p> this application use the following technologies
				<ul>
				<li>React</li>
				<li>React Router</li>
				<li>flux</li>
				<li>Node</li>
				<li>Gulp</li>
				<li>Broserify</li>
				<li>Bootstrap</li>
				</ul>
			</p>
		</div>		
		);
	}

});

module.exports = About;