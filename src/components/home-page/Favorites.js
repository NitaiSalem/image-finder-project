import { IconButton } from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import { formatBytes } from '../../utils';

const Favorites = ({ displayImages, handleAddToFavs }) => {
	return displayImages.map((image) => {
		return (
			<div key={image.id} className="image-container">
				<div id={image.id} className="image-text-container">
					<h5 className="image-info">Owner: {image.user}</h5>
					<h5 id='imageSize' className="image-info">
						Image size: {formatBytes(image.imageSize)}
					</h5>

					<IconButton
						aria-label="delete"
						size="small"
						onClick={() => handleAddToFavs(image)}
					>
						<DeleteIcon fontSize="small" style={{ fill: '#e34231' }} />
					</IconButton>
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
		);
	});
};

export default Favorites;
