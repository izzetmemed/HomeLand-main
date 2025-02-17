import React from "react";

const InfoObyekt = (props) => {
  var data = props.props;
  function cutString(inputString, maxLength) {
    if (typeof inputString !== "string") {
      console.error("Error: Input is not a string");
      return inputString;
    }
    if (inputString.length <= maxLength) {
      return inputString;
    }
    return inputString.slice(0, maxLength) + "...";
  }
  const price = "Azn";
  const teratory = "m²";
  return (
    <>
      <p>
        Qiymet:<span>{data.priceHome}</span>
        <span>{price}</span>
      </p>
      <p>
        Ünvan:<span>{cutString(data.address, 20)}</span>
      </p>
      <p>
        Metro:<span>{data.MetroHome}</span>
      </p>
      <p>
        Otaq sayi:<span>{data.roomHome}</span>
      </p>
      <p>
        Rayon:<span>{data.Region}</span>
      </p>
      <p>
        Sahe:
        <span>
          {data.measureHome}
          <span>{teratory}</span>
        </span>
      </p>
      <p>
        Obyekt:<span>{data.SellorRent}</span>
      </p>
      <p>
        Tarix:<span>{data.dateTime}</span>
      </p>
    </>
  );
};

export default InfoObyekt;
