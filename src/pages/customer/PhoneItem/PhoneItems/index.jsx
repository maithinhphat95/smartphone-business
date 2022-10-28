import {
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Banner from "../../../../components/customer/Banner";

import SideBar from "../../../../components/customer/SideBar";
import TitleTogglePhone from "../../../../components/customer/TitleTogglePhone";
import TogglePhoneItem from "../../../../components/customer/TogglePhoneItem";
import useFetch from "../../../../components/customize/fetch";
function PhoneItems(props) {
  const { data: dataProductItem} =
  useFetch(`http://localhost:3006/phoneItem/`);
  const [filters,setFilters] = useState({
    branch: [],
    producer: []
  });
  const handleFilters = (filters,category) =>{
    alert(filters)
    const newFilters = {...filters}
    newFilters[category] = filters;
    if(category ==="producer"){

    }
  }
const [sortArray,setSortArray] = useState([])
const [arrayShow, setArrayShow] = useState([])

  useEffect(()=>{
    setArrayShow([...dataProductItem])
    },[sortArray]);

let newList= [];

const requestSort = (type,value) =>{
  setSortArray([...sortArray, {type: type, value: value}]);
  updateArray();
  // console.log(newList);

  }


const updateArray = () =>{
  sortArray.forEach((item,index)=>{
    switch (item.type) {
      case "producer":
        newList = arrayShow.filter((e)=>{return e.producer.toLowerCase()===item.value});
  
        break;
  
      default: newList=[...arrayShow]
        break;
    }

  
  })
  
  
}


  return (
    <>
      <Banner />
      <div className="container-fluid profuid">
        <div className="container">
          {/* <div>Loading...{params.producer}</div> */}
          <Grid container>
            {/* <SideBar  handleFilters = {filters => handleFilters(filters, "branch")}/> */}
            <SideBar  requestSort = { requestSort}/>
            <Grid item={true} xs={12} sm={6} md={9}>
              {/* <TitleTogglePhone /> */}
              <TogglePhoneItem />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default PhoneItems;
