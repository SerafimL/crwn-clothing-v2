import Home from './routes/home/home';
import { Routes, Route, Outlet } from 'react-router-dom';

const Navigation = () => {
	return (
		<div>
			<div>
				<h1>Im the navigation bar</h1>
			</div>
		</div>
	);
}


const Shop = () => {
	return (
		<h1>Im the shop page</h1>
	);
}

const App = () => {
	return (
		<Routes>
			<Route path='/home' element={<Home/>}>
				<Route path='shop' element={<Shop/>}/>
			</Route>
		</Routes>
	);
};

export default App;