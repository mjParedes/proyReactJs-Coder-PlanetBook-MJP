import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from '@mui/material';
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemCount from './ItemCount';


const ItemDetail = ({ producto }) => {
  return (
    <Card sx={{ maxWidth: 280, margin: 5}} align="center">
      <CardActionArea>
        <CardContent>
          <Typography variant="h5">
            Detalle de producto 
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="400"
          image={producto.imgAlt}
          alt={producto.titulo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.titulo}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            SINOPSIS: <br /> {producto.detalle}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Precio: $ {producto.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ItemCount />
      </CardActions>
    </Card>
  );
}

export default ItemDetail
