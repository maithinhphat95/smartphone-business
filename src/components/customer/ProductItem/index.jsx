import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductItem.scss";
import { Link, useNavigate } from "react-router-dom";
function ProductItem(props) {
  const { img, name, priceNew, priceOld } = props;
  //submit 
  const history = useNavigate();
  const onSubmit = () =>{
    
    history("/phone/phoneitem/id");
  }
  return (
    <>
      <Card className="titleitem" sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <Link to="/phone/phoneitem/id">
          <CardMedia
            className="imgmedia"
            component="img"
            height="280px"
            width="100%"
            image={img}
            alt="green iguana"
          />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <a href="" className="name-product">
                {name}
              </a>
            </Typography>
            <Typography
              className="price"
              variant="body2"
              color="text.secondary"
            >
              {priceNew} đ
            </Typography>
            <div className="strike-price">
              <strike>{priceOld} đ</strike>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" color="success" onClick={() => onSubmit()}>
            Mua ngay 
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ProductItem;
