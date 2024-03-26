import React from 'react'
import StringCutting from './StringCutting';
import DateCutting from './DateCutting';
import AddPrice from './AddPrice';
import AddTeriitory from './AddTerritory';
const InfoLand = ({props}) => {
  return (
    <>
      <p>
        Qiymet:<span>{AddPrice(props.Price)}</span>
      </p>
      <p>
        Ünvan:<span>{StringCutting(props.Address, 20)}</span>
      </p>
      <p>
        Rayon:<span>{props.Region}</span>
      </p>
      <p>
        Sənəd:<span>{props.Document}</span>
      </p>
      <p>
        Sahe:
        <span>
          {AddTeriitory(props.Area,true) }
        </span>
      </p>
      <p>
        Əlavə:<span>{StringCutting(props.Addition, 20)}</span>
      </p>
      <p>
        Tarix:<span>{DateCutting(props.Date)}</span>
      </p>
    </>
  )
}

export default InfoLand