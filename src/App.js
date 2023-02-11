import DesignSection from './sections/DesignSection';
import Quote from './sections/Quote';
import { GlobalStyle } from './styles/GlobalStyle';
import FireItem from './components/Fire';
import AngularSection from './sections/AngularSection';
import ReactSection from './sections/ReactSection';
import PathAnimation from './sections/Path';

function App() {
	return (
		<>
			<GlobalStyle />
			{/* <Quote /> */}
			{/* <DesignSection />
			<AngularSection />
			<ReactSection />
		<Quote /> */}
			{/* <FireItem /> */}
			<PathAnimation />
		</>
	);
}

export default App;
