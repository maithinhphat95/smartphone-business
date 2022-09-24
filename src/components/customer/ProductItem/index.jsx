import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./ProductItem.scss";
function ProductItem() {
    return (
        <Card className='titleitem' sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia className='imgmedia'
            component="img"
            height="280px"
            width="100%"
            image="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/25/637970354555201931_iphone-13-bh-2nam-dac-quyen.jpg"
            alt="green iguana"
          />
          <CardContent>
          
            <Typography gutterBottom variant="h6" component="div">	
            <a href="" className='name-product'>Nokia G21 6GB-128GB</a>
            </Typography>
            <Typography className='price' variant="body2" color="text.secondary">
            7.490.000đ
            </Typography>
            <div className="strike-price"><strike>2.990.000 ₫</strike></div>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button variant="contained" color="success">Mua ngay</Button>
        </CardActions>
      </Card>
    );
}

export default ProductItem;