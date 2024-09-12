//import { useState } from 'react'
import { ProjectCard } from './components/ProjectCard'
import './App.css'

import promoImg from './assets/CutePaimon.png'

function App() {
	//const [count, setCount] = useState(0)

	const projects = [
		{
			image: promoImg,
			title: 'Portfolio Website',
			summary: 'summary'
		},
		{
			image: 'https://picsum.photos/id/13/2500/1667',
			title: 'Major Qualifying Project',
			summary: 'summary'
		},
		{
			image: 'https://picsum.photos/id/17/2500/1667',
			title: 'Interactive Qualifying Project',
			summary: 'summary'
		},
		{
			image: 'https://picsum.photos/id/20/3670/2462',
			title: 'Software Engineering',
			summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
	]

	return (
		<>
			<div id='headerDiv'>
				<h1 className='nameText cousine-bold'>Nelson Diaz</h1>
				<h2 className='introSubtitle cousine-regular'>B.S. Computer Science — 2024</h2>
				<h2 className='introSubtitle cousine-regular'>Worcester Polytechnic Institute</h2>
			</div>

			<div id='contentDiv'>
				<div id='gridDiv'>
					{projects.map((proj, index) => (
						<div className='cardContainer' key={`ProjectCard${index}`}>
							<ProjectCard image={proj.image} title={proj.title} summary={proj.summary} />
						</div>
					))}
				</div>
			</div>
			
		</>
	)
}

export default App
