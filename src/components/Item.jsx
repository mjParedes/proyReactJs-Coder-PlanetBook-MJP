  import React from 'react'
  import Card from "@mui/material/Card";
  import CardActions from "@mui/material/CardActions";
  import CardContent from "@mui/material/CardContent";
  import CardMedia from "@mui/material/CardMedia";
  import Button from "@mui/material/Button";
  import Typography from "@mui/material/Typography";
import ItemCount from './ItemCount';
  
  const Item = ({ producto }) => {


    return (
      <Card
        sx={{ maxWidth: 345, height: 720, align: "center" }}
      >
        <CardMedia
          component="img"
          height="400"
          image={producto.img}
          alt={producto.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.detalle}
          </Typography>
          <Typography variant="body3">Precio: $ {producto.precio}</Typography>
        </CardContent>
        <CardActions>
          <ItemCount />
        </CardActions>
      </Card>
    );
  }
  
  export default Item