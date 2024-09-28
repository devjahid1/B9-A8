import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='lg:w-[1270px] m-auto '>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;