import React from 'react';
import Img from '../img.png';
function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm d-flex justify-content-between  " id="main-nav">
			<div className="pl-3">
				<a href="index.html" className="navbar-brand">
					<img src={Img} style={{ height: '50%', width: '50%' }} alt="/" />
				</a>
			</div>
			<div>
				<ul className="navbar-nav  ">
					<li className="nav-item  ">
						<a href="#home" className="nav-link">
							<span style={{ color: '#33A950' }}>
								<i className="fab fa-twitter fa-1x" />
							</span>
						</a>
					</li>
					<li className="nav-item  ">
						<a href="#home" className="nav-link">
							<span style={{ color: '#33A950' }}>
								<i className="fab fa-github fa-1x" />
							</span>
						</a>
					</li>
					<li className="nav-item ">
						<a href="#explore-head-section" className="nav-link">
							<span style={{ color: '#33A950' }}>
								<i className="fab fa-facebook-square fa-1x" />
							</span>
						</a>
					</li>
					<li className="nav-item  ">
						<a href="#create-head-section" className="nav-link">
							<span style={{ color: '#33A950' }}>
								<i className="fab fa-linkedin fa-1x" />
							</span>
						</a>
					</li>
					<li className="nav-item ">
						<a href="#share-head-section" className="nav-link">
							<span style={{ color: '#33A950' }}>
								<i className="fab fa-instagram fa-1x" />
							</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
