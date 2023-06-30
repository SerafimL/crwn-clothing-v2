import './categories.scss'

const App = () => {

	const categoryList = [
		{ title: 'Hats', id: 1, },
		{ title: 'Jackets', id: 2, },
		{ title: 'Sneakers', id: 3, },
		{ title: 'Womens', id: 4, },
		{ title: 'Mans', id: 5, },
	];

	return (
		<div className='categories-container'>
			{categoryList.map(({id, title}) => (
				<div className='category-container' key={id}>
					<div className='background-image' />
					<div className='category-body-container'>
						<h2>{title}</h2>
						<p>Shop Now</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default App;
