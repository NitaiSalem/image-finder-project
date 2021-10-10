import './search.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ImageResults from './ImageResults';
import { useHistory } from 'react-router-dom';
import { API_KEY, API_URL, IMG_LIMIT } from '../../constants';
import NavButtons from './NavButtons';
import SearchBar from './SearchBar';

const Search = ({ handleAddToFavs, favoriteList }) => {
	const history = useHistory();
	const [searchText, setSearchText] = useState('');
	const [resultImages, setResultImages] = useState([]);
	const [isSearched, setIsSearched] = useState(false);
	const [page, setPage] = useState(1);

	const onTextChange = ({ target: { value } }) => {
		setSearchText(value);
	};

	const handleSearch = async () => {
		if (searchText === '') {
			setResultImages([]);
		} else {
			try {
				const res = await axios.get(
					`${API_URL}/?key=${API_KEY}&q=${searchText}&image_type=photo&per_page=${IMG_LIMIT}&page=${page}&safesearch=true`
				);
				setResultImages(res.data.hits);
			} catch (err) {
				console.log(err);
			} finally {
				setIsSearched(true);
			}
		}
	};

	useEffect(
		() => {
			if (searchText) {
				handleSearch();
			}
		},
		[page]
	);

	const changePage = (diff) => {
		setPage((page) => page + diff);
	};

	const moveToHomePage = () => {
		history.push('/');
	};

	const search = () => {
		if (page === 1) {
			handleSearch();
		} else {
			setPage(1);
		}
	};

	return (
		<div className="search-container">
			<SearchBar onTextChange={onTextChange} search={search} moveToHomePage={moveToHomePage} />
			<ImageResults images={resultImages} handleAddToFavs={handleAddToFavs} currentFavoriteList={favoriteList} />
			{isSearched && resultImages.length === 0 ? (
				<h2>No Results</h2>
			) : (
				isSearched && <NavButtons currPage={page} changePage={changePage} resultImages={resultImages} />
			)}
		</div>
	);
};

export default Search;
