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
					<h1>{props.title}</h1>
					<p>{props.summary}</p>
				</div>
			</div>
		</>
	)
}