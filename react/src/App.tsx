import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AppRoutes from './routes/routes';

function App() {
	return (
		<div className='md:container mx-auto p-4'>
			<Header />
			<main>
				<AppRoutes />
			</main>
			<Footer />
		</div>
	);
}

export default App;
