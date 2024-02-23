import { useEffect, useState } from "react";
import React from "react";
import FetchGetAll from "../MyComponents/FetchGetAll";
const OnlyMyPage = () => {

const [CountRent,setCountRent]=useState([]);
const [CountSell,setCountSell]=useState([]);
const [CountObyekt,setCountObyekt]=useState([]);
const today = new Date().toISOString().split('T')[0]; 
  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const resp = await FetchGetAll("RentHome/Normal");
        const data = resp.data;

        setCountRent(data.filter((x) => {
        
            let parsed = JSON.parse(x);
            let parsedDate = parsed.Date
              ? new Date(parsed.Date).toISOString().split("T")[0]
              : null;
            return parsedDate === today ;
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const resp = await FetchGetAll("Sell/Normal");
        const data = resp.data;

        setCountSell(data.filter((x) => {
        
            let parsed = JSON.parse(x);
            let parsedDate = parsed.Date
              ? new Date(parsed.Date).toISOString().split("T")[0]
              : null;
            return parsedDate === today ;
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const resp = await FetchGetAll("Obyekt/Normal");
        const data = resp.data;

        setCountObyekt(data.filter((x) => {
        
            let parsed = JSON.parse(x);
            let parsedDate = parsed.Date
              ? new Date(parsed.Date).toISOString().split("T")[0]
              : null;
            return parsedDate === today ;
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  return <div>
    <p>Rent add today: {CountRent? CountRent.length:0}</p>
    <p>Sell add today: {CountSell? CountSell.length:0}</p>
    <p>Obyekt add today: {CountObyekt? CountObyekt.length:0}</p>
    </div>;
};

export default OnlyMyPage;
