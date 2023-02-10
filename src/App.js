import DesignSection from './sections/DesignSection';
import Quote from './sections/Quote';
import { GlobalStyle } from './styles/GlobalStyle';
import ProcessorSection from './sections/ProcessorSection';
import ColorSection from './sections/ColorSection';
import CameraSection from './sections/CameraSection';
import { ColorContextProvider } from './context/ColorContext';
import FireItem from './components/Fire';

function App() {
	return (
		<>
			<GlobalStyle />
			<Quote />
			<DesignSection />
			<ProcessorSection />
			<ColorContextProvider>
				<ColorSection />
				<CameraSection />
			</ColorContextProvider>
			<FireItem />
		</>
	);
}

export default App;
