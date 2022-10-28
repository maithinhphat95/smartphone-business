import { Container, Typography } from '@mui/material';
import React from 'react';
import useFetch from '../../customize/fetch';


function TitleTogglePhone(props) {
   const {data: dataProductItem,isLoading,isError,} = useFetch(`http://localhost:3006/phoneItem/`);
    return (
        <Container className="title-list" sx={{ marginBottom: 4 }}>
        <Typography variant="h5" gutterBottom>
          Điện thoại ({dataProductItem.length} sản phẩm)
        </Typography>
      </Container>
    );
}

export default TitleTogglePhone;