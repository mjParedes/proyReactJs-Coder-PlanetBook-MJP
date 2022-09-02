import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemCount from "./ItemCount";
import { CardActionArea } from "@mui/material";

const Item = ({ producto }) => {
  return (
    <Card sx={{ maxWidth: 320, height: 650, width: 250, align: "center" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="50%"
          image={producto.img}
          alt={producto.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.genero}
          </Typography>
          <Typography variant="body3">Precio: $ {producto.precio}</Typography>
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
};

export default Item;
