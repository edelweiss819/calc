import {createContext, useContext, useReducer} from 'react';

export const ThemeContext = createContext("dark");
export const ThemeDispatchContext = createContext(null);

export function ThemeProvider({children}) {
	const [theme, dispatch] = useReducer(
		themeReducer,
		'dark',
	);
	return (<ThemeContext.Provider value={theme}>
			<ThemeDispatchContext.Provider value={dispatch}>
				{children}
			</ThemeDispatchContext.Provider>
		</ThemeContext.Provider>

	);
}

const themeReducer = (state, action) => {
	switch (action.type) {
		case 'toggle_theme' :
			return state === 'dark' ? 'light' : 'dark';
		default:
			return state;

	}

};

export function useTheme() {
	return useContext(ThemeContext);
}

export function useThemeDispatch() {
	return useContext(ThemeDispatchContext);
}