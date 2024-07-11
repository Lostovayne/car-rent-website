import { Logo } from './Logo';
import { ProfilNotification } from './ProfilNotification';
import { SearchArea } from './SearchArea';

export const Navbar = () => {
	return (
		<div className='flex flex-wrap justify-between items-center py-5 bg-[#ffffff] mx-[29.06px]'>
			<Logo />
			<SearchArea />
			<ProfilNotification
				unreadNotifications={true}
			/>
		</div>
	)
};


