import { useState } from 'react';
import { EXAMPLES } from '../../data';
import TabButton from '../TabButton/TabButton';

function Examples() {
	const [selectedTopic, setSelectedTopic] = useState();

	return (
		<section id='examples'>
			<h2>Examples</h2>
			<menu>
				{Object.values(EXAMPLES).map((value, idx) => (
					<TabButton
						key={idx}
						isSelected={selectedTopic === value.title.toLowerCase()}
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
	);
}

export default Examples;
