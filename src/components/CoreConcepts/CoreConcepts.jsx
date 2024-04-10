import { CORE_CONCEPTS } from '../../data';
import { CoreConcept } from './CoreConcept';

function CoreConcepts() {
	return (
		<section id='core-concepts'>
			<h2>Time to get started!</h2>
			<h2>Core concepts</h2>
			<ul>
				{CORE_CONCEPTS.map((concept, idx) => (
					<CoreConcept key={idx} {...concept} />
				))}
			</ul>
		</section>
	);
}

export default CoreConcepts;
