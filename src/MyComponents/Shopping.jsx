import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../Redux/DeleteBasket';
const Shopping = ({props,type}) => {
  const dispatch = useDispatch();
  const [changeColor, setchangeColor] = useState(false);
  const [CheckRptrData, setCheckRptrData] = useState(true);
  const newData = [
    [
      props.Id,
      type,
    ],
  ];
    const SendBasket = () => {
        setchangeColor(true);
        const LastinfoLocal = JSON.parse(localStorage.getItem("Section")) || [];
        if (CheckRptrData) {
          localStorage.setItem(
            "Section",
            JSON.stringify([...LastinfoLocal, ...newData])
          );
          setCheckRptrData(false);
        } else {
          setchangeColor(false);
          const indexToRemove = LastinfoLocal.findIndex(
            (item) => item[0] === props.Id && item[1] === type
          );
            setCheckRptrData(true);
          if (indexToRemove !== -1) {
            LastinfoLocal.splice(indexToRemove, 1);
            localStorage.setItem("Section", JSON.stringify(LastinfoLocal));
          }
        }
        dispatch(setData(JSON.parse(localStorage.getItem("Section")) || []));
      };
      useEffect(() => {
        const isHave = (JSON.parse(localStorage.getItem("Section")) || []).some(
          (x) => x[0] === props.Id && x[1] === type
        );
        if (isHave) {
          setchangeColor(true);
          setCheckRptrData(false);
        }
      }, [props]);
      const mybasketOnImg = {
        display:changeColor? "none": "block"
      };
      const MyTrashonImg={
        display:changeColor? "block": "none"
      }
  return (
    <>
            <span
              className={"mybasketOnImg "}
              style={mybasketOnImg}
              onClick={SendBasket}
            >
              <i className="fa-solid fa-basket-shopping"></i>
            </span>
            <span className="mydeleteOnImg" style={MyTrashonImg} onClick={SendBasket}>
              <i className="fa-solid fa-trash"></i>
            </span>
    </>
  )
}

export default Shopping