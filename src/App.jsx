import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import CoreConcept from './components/CoreConcept';

function App() {
	const [selectedTopic, setSelectedTopic] = useState();

	return (
		<div className='app'>
			<Header />
			<main>
				<section id='core-concepts'>
					<h2>Time to get started!</h2>
					<h2>Core concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((concept, idx) => (
							<CoreConcept
								key={idx}
								title={concept.title}
								image={concept.image}
								description={concept.description}
							/>
						))}
					</ul>
				</section>
				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						{Object.values(EXAMPLES).map((value, idx) => (
							<TabButton
								key={idx}
								onSelect={() => setSelectedTopic(value.title.toLowerCase())}
							>
								{value.title}
							</TabButton>
						))}
					</menu>
					{!selectedTopic && <p>Please select a topic</p>}
					{selectedTopic ? (
						<div id='tab-content'>
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic]?.description}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic]?.code}</code>
							</pre>
						</div>
					) : null}
				</section>
			</main>
		</div>
	);
}

export default App;
