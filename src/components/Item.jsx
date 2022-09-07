import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemCount from "./ItemCount";
import { Button, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Item = ({ producto }) => {
const {id,titulo,precio,img,genero,stock}= producto
 const navegar = useNavigate()

  return (
    <Card sx={{ maxWidth: 320, height: 610, width: 250, align: "center" }}>
      <CardActionArea>
        <CardMedia component="img" height="50%" image={img} alt={titulo} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {genero}
          </Typography>
          <Typography  variant="body1">
            Precio: $ {precio}
          </Typography>
          <br/>
          <Typography  variant="body4">
            Stock: {stock}
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
        {/* <ItemCount stock={producto.stock} initial={1} onAdd={(onAdd)} /> */}
        <Button
          color="success"
          variant="contained"
          onClick={() => navegar(`/item/${id}`)}
        >
          VER MAS INFO
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
