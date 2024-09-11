//import { useState } from 'react'
import { ProjectCard } from './components/ProjectCard'
import './App.css'

import promoImg from './assets/CutePaimon.png'

function App() {
	//const [count, setCount] = useState(0)

	const projects = [
		{
			image: promoImg,
			title: 'Project 1',
			summary: 'summary'
		},
		{
			image: promoImg,
			title: 'Project 2',
			summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
	]

	return (
		<>
			{projects.map((proj) => (
				<div className='cardContainer'>
					<ProjectCard image={proj.image} title={proj.title} summary={proj.summary} />
				</div>
			))}
		</>
	)
}

export default App
