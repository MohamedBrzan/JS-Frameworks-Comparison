import { Sparkle } from 'lucide-react';

export default function Home() {
	return (
		<section className='home text-balance md:w-3/4'>
			<div className='intro-text mb-4 leading-loose mt-5 mx-0 text-4xl md:w-3/4 m-auto md:text-7xl font-bold'>
				<div className='leading-tight flex gap-4 text-balance'>
					We Develop
					<div className='bg-blue'>
						<Sparkle size={30} />
					</div>
				</div>
				<div className='leading-tight'>
					<span className='bottom-text'>amazing </span>
					websites for your business.
				</div>
			</div>
			<p className='leading-loose text-xl'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur magni
				vitae corporis eligendi, suscipit similique necessitatibus quo atque
				quasi ipsum assumenda, repellendus numquam perspiciatis? Voluptatem
				repellendus sunt consequatur accusamus consequuntur.
			</p>
		</section>
	);
}
