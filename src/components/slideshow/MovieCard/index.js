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
    return (
        <Card sx={{ maxWidth: 250, position: "relative"}} style={{ display: 'flex', flexDirection: 'column' }}>
            <CardInfo >
                <Typography variant="subtitle2" style={{ marginTop: '0' }} component="div">
                    {movie.siteName}
                </Typography>

                <Typography variant="subtitle2" component="div">
                    {movie.timeUpdate}
                </Typography>
            </CardInfo>

            <Box sx={{ position: 'relative'}}>
                <CardMedia
                    component="img"
                    width="250px"
                    height="150px"
                    image={movie.fileUrl}
                    alt="uploaded image"/>
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