import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/stackNavigator';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

function App(props) {
	return (
		//<Splash />
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<NavigationContainer>
					<StackNavigator />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}

export default App;
