import React from 'react'
import StringCutting from "./StringCutting";
import DateCutting from "./DateCutting";
import AddPrice from './AddPrice';
import AddTerritory from './AddTerritory';
const InfoOffice = ({props}) => {
  return (
    <>
    <p>
      Qiymet:<span>{AddPrice(props.Price)}</span>
    </p>
    <p>
      Ünvan:<span>{StringCutting(props.Address, 20)}</span>
    </p>
    <p>
      Metro:<span>{props.Metro}</span>
    </p>
    <p>
      Otaq sayi:<span>{props.Room}</span>
    </p>
    <p>
      Rayon:<span>{props.Region}</span>
    </p>
    <p>
      Sahe:
      <span>
        {AddTerritory(props.Area)}
      </span>
    </p>
    <p>
      Ofis:<span>{props.SellOrRent}</span>
    </p>
    <p>
      Tarix:<span>{DateCutting(props.Date)}</span>
    </p>
  </>
  )
}

export default InfoOffice