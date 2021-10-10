import { Button } from '@mui/material';

const ImageResults = ({ images, handleAddToFavs, currentFavoriteList }) => {
	return (
		<div className="image-results-container">
			{images.map((image) => (
				<div id={image.id} key={image.id} className="image-container">
					<div className="image-text-container">
						<Button
            id='addOrRemoveButton'
							className="addOrRemove-button"
							variant="contained"
							color="success"
							onClick={() => handleAddToFavs(image)}
						>
							{currentFavoriteList.find(({ id }) => id === image.id) ? 'Remove' : 'Add'}
						</Button>
					</div>
					<img
						className="image"
						src={image.largeImageURL}
						alt={image.tags}
						width="150px"
						height="99px"
						id={image.id}
					/>
				</div>
			))}
		</div>
	);
};

export default ImageResults;
