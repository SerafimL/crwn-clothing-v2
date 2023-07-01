import React from 'react'
import { Outlet } from 'react-router';
import CategoryList from '../../components/categoryList/categoryList';

const Home = () => {
    return (
        <div>
            <CategoryList />
            <Outlet/>
        </div>
	);
}
export default Home;