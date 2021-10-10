import Favorites from './Favorites';
import './home.scss';
import { useHistory } from 'react-router-dom';

const Home = ({ favoriteList, handleAddToFavs }) => {
	const history = useHistory();
	return (
		<div className="home-container">
			{favoriteList.length > 0 && <Favorites displayImages={favoriteList} handleAddToFavs={handleAddToFavs} />}
			<button className="search-link" onClick={() => history.push('/search')}>
				Add image
			</button>
		</div>
	);
};

export default Home;
