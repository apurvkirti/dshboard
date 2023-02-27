import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


const CardInfo = styled(CardContent)(({theme}) => ({
    '&:last-child': {
        paddingBottom: theme.spacing(1),
      }
  }));


const MovieCard = ({ movie }) => {
    const handleImageClick = (event) => {
        event.preventDefault();
        window.location.href = movie.fileUrl;
      };
    return (
        <Card sx={{ maxWidth: 240, position: "relative"}} style={{ display: 'flex', flexDirection: 'column' }}>
            <CardInfo >
                <Typography variant="subtitle2" style={{ marginTop: '0' }} component="div">
                    {movie.siteName}
                </Typography>

                <Typography variant="subtitle2" component="div">
                    {movie.timeUpdate}
                </Typography>
            </CardInfo>

            <Box sx={{ position: 'relative'}}>
               <a href={movie.fileUrl} download onClick={handleImageClick}>
                <CardMedia
                    component="img"
                    width="240px"
                    height="140px"
                    image={movie.fileUrl.replace('/upload/', '/upload/w_240,h_140/')}
                    alt="uploaded image"/>
                    </a>
            </Box>

        </Card>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        releaseDate: PropTypes.string
    }).isRequired,
}

export default MovieCard;