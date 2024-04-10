import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Examples from './components/Examples/Examples';

function App() {
	return (
		<>
			<Header />
			<main className='main'>
				<CoreConcepts />
				<Examples />
			</main>
		</>
	);
}

export default App;
