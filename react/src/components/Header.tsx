import { ArrowUpRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Offcanvas from './Offcanvas';

export default function Header() {
	return (
		<header className='flex flex-row flex-1'>
			<Offcanvas />
			<div className='justify-start items-start text-start flex-1'>
				<Link to='/' className='group hover:text-primary text-2xl md:text-4xl'>
					<span className='font-bold text-primary group-hover:text-quinary'>
						R
					</span>
					obo
					<span className='font-bold text-primary group-hover:text-quinary'>
						D
					</span>
					esk
				</Link>
			</div>
			<div className='flex flex-row gap-5 flex-1 group '>
				<Link to='/why-us' className='hover:text-quaternary'>
					Why us
				</Link>
				<Link to='/about' className='hover:text-quaternary'>
					About
				</Link>
				<Link to='/testimonials' className='hover:text-quaternary'>
					Testimonials
				</Link>{' '}
				<Link to='/faq' className='hover:text-quaternary'>
					FAQ
				</Link>
			</div>
			<div className='bg-primary py-2 px-4 rounded-sm flex gap-1 hover:bg-secondary hover:outline hover:outline-2 hover:outline-primary'>
				<Link to='/'>Let's Talk</Link>
				<ArrowUpRightIcon size={20} />
			</div>
		</header>
	);
}
