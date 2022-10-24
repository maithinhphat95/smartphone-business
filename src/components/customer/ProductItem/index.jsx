import React from "react";
import {Button,Card,CardActionArea,CardActions,CardContent,CardMedia,Typography,} from "@mui/material";
import "./ProductItem.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import Fade from 'react-reveal/Fade';
function ProductItem(props) {
  let  params = useParams();
  const { id,img, name, priceNew, priceOld } = props;
  // console.log(id);

  //submit 
  const history = useNavigate();
  const onSubmit = () =>{
    
    history(`/phone/${id}`);
  }
  // const {data: dataProductItem,isLoading,isError,} = useFetch(`http://localhost:3006/productitem/`);
  return (
    <>
    <Fade bottom>
      <Card  className="titleitem align-self-stretch" sx={{ maxWidth: 345, height:460 }}>
        <CardActionArea>
        <Link to={`/phone/${id}`}>
        {/* {console.log(params.id)} */}
          <CardMedia
            className="imgmedia"
            component="img"
            height="250px"
            width="210px"
            image={img}
            alt="green iguana"
          />
          </Link>
          <CardContent className=" align-self-stretch">
            <Typography className="name-product" gutterBottom variant="h6" component="div">    
                {name}
            </Typography>
            <div className="strike-price">
              <strike>{priceOld.toLocaleString()} đ</strike>
            </div>
            <Typography
              className="price"
              variant="body2"
              color="text.secondary"
            >
              {priceNew.toLocaleString()} đ
            </Typography>
           
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" color="success" onClick={() => onSubmit()}>
            Mua ngay 
          </Button>
        </CardActions>
      </Card>
      </Fade>
    </>
  );
}

export default ProductItem;
