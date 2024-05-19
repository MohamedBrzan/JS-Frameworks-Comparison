import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Testimonials from '../pages/Testimonials';
import FAQ from '../pages/FAQ';

export default function AppRoutes() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/testimonials' element={<Testimonials />} />
				<Route path='/faq' element={<FAQ />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</>
	);
}
