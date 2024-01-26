import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
//@ts-ignore
import {getCabins} from '../services/apiCabins.js';

export interface ICabinData {
  created_at: string;
  description: string;
  discount: number;
  id: number;
  image: string | null;
  maxCapacity: number;
  name: string;
  regularPrice: number;
}


function Cabins() {

  useEffect(()=>{
    getCabins().then((data: ICabinData)=>console.log(data));
  },[]);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://uoissjjemywyradsunoc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg" alt="" />
    </Row>
  );
}

export default Cabins;
