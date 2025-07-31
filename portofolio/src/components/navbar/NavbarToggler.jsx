import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../state/menuSlice';

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <button
  className='text-xl p-2 w-10 h-10 border border-orange rounded-full flex items-center justify-center'
  onClick={setToggleMenu}
>
  <GiHamburgerMenu />
</button>

  );
};

export default NavbarToggler;
