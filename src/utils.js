export const formatBytes = (bytes) => {
	const marker = 1024;
	const decimal = 1;
	const kiloBytes = marker;
	const megaBytes = marker * marker;
	const gigaBytes = marker * marker * marker;

	if (bytes < kiloBytes) return bytes;
	else if (bytes < megaBytes) return (bytes / kiloBytes).toFixed(decimal) + 'K';
	else if (bytes < gigaBytes) return (bytes / megaBytes).toFixed(decimal) + 'M';
};

export const getStoragedFavorites = () => JSON.parse(localStorage.getItem('favoriteImages')) || [];

export const saveFavoritesToStorage = (newFavoriteImages) =>
	localStorage.setItem('favoriteImages', JSON.stringify(newFavoriteImages));
