import { IUser } from '../../interfaces/user.interface';
import { Logo } from './Logo';
import { ProfileNotification } from './ProfileNotification';
import { SearchArea } from './SearchArea';

interface Props {
	user: IUser
}

export const Navbar = ({user}:Props) => {
	return (
		<div className='flex flex-wrap justify-between items-center py-5 bg-[#ffffff] mx-[29.06px]'>
			<Logo />
			<SearchArea />
			<ProfileNotification
				user={user}
			/>
		</div>
	)
};


