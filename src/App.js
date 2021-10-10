import './App.scss';
import Home from './components/home-page/home';
import Search from './components/search-page/Search';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { getStoragedFavorites, saveFavoritesToStorage } from './utils';

function App() {
	const [favoriteImages, setFavoriteImages] = useState(getStoragedFavorites());

	const handleAddToFavs = (image) => {
		let newFavoriteImages;
		if (favoriteImages.find(({ id }) => id === image.id)) {
			newFavoriteImages = favoriteImages.filter(({ id }) => image.id !== id);
		} else {
			newFavoriteImages = [...favoriteImages, image];
		}
		setFavoriteImages(newFavoriteImages);
		saveFavoritesToStorage(newFavoriteImages);
	};

	return (
		<div className="App">
			<HashRouter basename="/">
				<Switch>
					<Route exact path="/">
						<Home favoriteList={favoriteImages} handleAddToFavs={handleAddToFavs} />
					</Route>
					<Route exact path="/search">
						<Search favoriteList={favoriteImages} handleAddToFavs={handleAddToFavs} />
					</Route>
				</Switch>
			</HashRouter>
		</div>
	);
}

export default App;
