import React from 'react'
import { useState,useEffect } from 'react';
const Shopping = (props) => {
    var data=props.props;

  const [changeColor, setchangeColor] = useState(false);
  const [CheckRptrData, setCheckRptrData] = useState(true);
  const newData = [
    [
      data.id,
      data.type,
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
          const updatedData = LastinfoLocal;
          const indexToRemove = updatedData.findIndex(
            (item) => item[0] === data.id && item[1] === data.type
          );
            setCheckRptrData(true);
          if (indexToRemove !== -1) {
            updatedData.splice(indexToRemove, 1);
            localStorage.setItem("Section", JSON.stringify(updatedData));
          }
        }
      };
      useEffect(() => {
        const isHave = (JSON.parse(localStorage.getItem("Section")) || []).some(
          (x) => x[0] === props.props.id && x[1] === props.props.type
        );
        if (isHave) {
          setchangeColor(true);
          setCheckRptrData(false);
        }
      }, []);
      const mybasketOnImg = {
        display:data.deleteButton? "none": "block"
      };
      const MyTrashonImg={
        display:data.deleteButton? "block": "none"
      }
  return (
    <>
            <span
              className={"mybasketOnImg " + (changeColor ? "HomeLandColor" : "")}
              style={mybasketOnImg}
              onClick={SendBasket}
            >
              <i className="fa-solid fa-basket-shopping"></i>
            </span>
            <span className="mydeleteOnImg" style={MyTrashonImg} onClick={data.deleteBasket}>
              <i className="fa-solid fa-trash"></i>
            </span>
    </>
  )
}

export default Shopping