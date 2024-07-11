import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from './ui/input';

export const Navbar = () => {
	return (
		<div className='flex justify-between items-center mx-7 py-3'>
			<Logo />
			<SearchArea />
			<ProfillNotification />
		</div>
	)
};

const Logo = () => {
	return (
		<span>MORENT</span>
	)
}

const SearchArea = () => {
	return (
		<div className='flex border-2 items-center px-3 rounded-xl gap-3'>
			<Search width={24} height={24} />

			<Input
				type='text'
				placeholder='Search something here'
				className='w-[24rem] border-0 focus:outline-none focus:outline-0'
			/>

			<SlidersHorizontal width={24} height={24} />
		</div>
	)
}

const ProfillNotification = () => {
	return (
		<span>Profill Notification</span>
	)
}