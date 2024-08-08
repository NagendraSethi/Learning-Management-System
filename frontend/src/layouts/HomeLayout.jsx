import { FiMenu } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Footer from '../component/Footer';

function HomeLayout({ children }) {
    function chageWidth() {
        const drawerSide = document.getElementsByClassName('drawer-side');
        drawerSide[0].style.width = 'auto';
    }
    function hideDrawer(){
        const element=document.getElementsByClassName('drawer-toggle');
        element[0].checked = false;

        const drawerSide=document.getElementsByClassName("drawer-side");
        drawerSide.style.width= '0';
    }
    return (
        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-full">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer">
                        <FiMenu onClick={chageWidth} size={'32px'} className='font-bold text-white m-4' />
                    </label>
                </div>
                <div className='drawer-side w-0'>
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className='menu p-4 w-48 sm:w-80 min-h-full bg-base-200 text-base-content relative'>
                        <li className='w-fit absolute right-2 z-50'>
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Abou us</Link>
                        </li>
                        <li>
                            <Link to="/">Contact us</Link>
                        </li>
                        <li>
                            <Link to="/">All Courses</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {children}
            <Footer/>
        </div>
    )
}

export default HomeLayout;