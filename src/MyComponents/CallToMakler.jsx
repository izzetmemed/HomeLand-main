import React from 'react'

const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("0705715610");
      alert('Text copied');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
const CallToMakler = ({id}) => {
  return (
    <div className="d-flex flex-column bg-success w-auto h-auto rounded-1 ">
    <p className="text-white mt-1">Əmlakçının nömrəsi: 070 571 56 10  </p>
    <p onClick={copyToClipboard} className='px-3 py-1  rounded-3 bg-info text-center'>Copy number</p>
    <p className="text-white text-center">Elan kodu: {id}</p>
    <p className="text-danger">Elan kodunu yaddınızda saxlayın.</p>
  </div>
  )
}

export default CallToMakler