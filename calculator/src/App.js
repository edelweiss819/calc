import './App.css';
import ThemeToggler from './components/ThemeToggler';
import Content from './module/Content';
import {CalcProvider} from './module/CalcContext';
import {ThemeProvider, useTheme} from './module/ThemeContext';
import Wrapper from './components/Wrapper'



function App() {


	return (
		<ThemeProvider>
			<CalcProvider>
				<div className="App">
					<Wrapper >
						<ThemeToggler/>
						<Content/>
					</Wrapper>
				</div>
			</CalcProvider>
		</ThemeProvider>
	);
}

export default App;
