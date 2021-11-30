import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import '@/assets/css/reset.css';

import WYheader from '@/components/app-header';
import WYfooter from '@/components/app-footer';
import routes from './router';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<HashRouter>
				<WYheader></WYheader>
				{renderRoutes(routes)}
				<WYfooter></WYfooter>
			</HashRouter>
		</Provider>
	);
}

export default App;
