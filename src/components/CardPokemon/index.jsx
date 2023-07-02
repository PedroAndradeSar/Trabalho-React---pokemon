import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { showTypes } from '../TiposPokemons';

export default function CardPokemon({ name, image, types }) {



  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={name}
        />
        <CardContent>
          <Box>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
            >
              {name}
            </Typography>
            <Typography
              gutterBottom
              variant="caption"
              component="div"
            >
              {showTypes(types)}
            </Typography>

          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

