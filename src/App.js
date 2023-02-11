import DesignSection from './sections/DesignSection';
import Quote from './sections/Quote';
import { GlobalStyle } from './styles/GlobalStyle';
import FireItem from './components/Fire';
import AngularSection from './sections/AngularSection';
import ReactSection from './sections/ReactSection';

function App() {
	return (
		<>
			<GlobalStyle />
			<Quote />
			<DesignSection />
			<AngularSection />
			<ReactSection />
			<FireItem />
			<Quote />
		</>
	);
}

export default App;
