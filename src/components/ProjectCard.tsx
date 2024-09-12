import './ProjectCard.css'

type ProjectDescription = {
	image: string;
	title: string;
	summary: string;
}

export function ProjectCard( props: ProjectDescription ) {
	return (
		<>
			<div className='divContainer'>
				<div className='imageDiv'>
					<img className='promoImg' src={props.image}></img>
				</div>

				<div className='textDiv'>
					<h2 className='projectTitle cousine-bold'>{props.title}</h2>
					<p className='projectSummary cousine-regular'>{props.summary}</p>
				</div>
			</div>
		</>
	)
}