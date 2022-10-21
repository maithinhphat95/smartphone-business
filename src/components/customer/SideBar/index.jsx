import { Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material';
import React, { useContext, useInsertionEffect, useState } from 'react';
import useFetch from '../../customize/fetch';
import ThemeContext from '../Context/ThemeContext';


function SideBar(props) {
   //API
  //componentDidMount
  const { data: dataProductItem, isLoading, isError } =
    useFetch("http://localhost:3006/branch/");
    // const {checkedBox,setCheckBox} = useContext(ThemeContext);
    const [checkedBox,setCheckBox] = useState([]);

    // const handleToggle = (item) =>{
    //   // check [0,1,2..]
    //   const currentIndex = checkedBox.indexOf(item);  // 0 1 2 3 .... output
    //   const newChecked = [...checkedBox];

    //   if(currentIndex === -1){
    //     newChecked.push(item); //-1
    //   }else{
    //     newChecked.splice(currentIndex, 1); //0 1 2 3
    //   }
    //   setCheckBox(newChecked);
    //   props.handleFilters(newChecked);

    //   //update parent infomation in component
    // }

const handleToggle=(item) =>{
  if (item.target.checked === true) {
    props.requestSort("producer",item.target.value)
  }
}
    return (
        <>
             <Grid item={true} xs={12} sm={6} md={3}>
              <Typography variant="h5" gutterBottom>
                Hãng sản xuất
              </Typography>
              <Grid container>
                <Grid item={true} md={12} xs={12} sm={12}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox type="checkbox" defaultChecked />}
                      label="Tất cả"
                    />
                    {/* <FormControlLabel control={<Checkbox />} label="Sam sung" />
                    <FormControlLabel control={<Checkbox />} label="Vivo" />
                    <FormControlLabel control={<Checkbox />} label="Xiaomi" /> */}
                  </FormGroup>
                  {dataProductItem.map((item,index) =>{
                   return(
                    <Grid key={item.id} item={true} md={12} xs={12} sm={12}>
                  <FormGroup>
                  <FormControlLabel control={<Checkbox value={item.producer.toLowerCase()}  onChange={(e) => {handleToggle(e)}}
                  type="checkbox"
                  // checked={checkedBox.indexOf(item.id) === -1 ? false :  true }

                  />} label={item.producer} />
                {/* <span>{item.producer}</span> */}
                  </FormGroup>
                </Grid>
                )
                  })}
                </Grid>
                {/* <Grid item={true} md={6} xs={12} sm={12}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Apple"
                    />
                    <FormControlLabel control={<Checkbox />} label="Oppo" />
                    <FormControlLabel control={<Checkbox />} label="Nokia" />
                  </FormGroup>
                </Grid> */}
                <Grid container>
                  <FormGroup>
                    <Typography variant="h5" gutterBottom>
                      Mức giá
                    </Typography>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Tất cả"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Dưới 2 triệu"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Từ 2-4 triệu"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Từ 4-7 triệu"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Từ 7-13 triệu"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Trên 13 triệu"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
            </Grid>
        </>
    );
}

export default SideBar;