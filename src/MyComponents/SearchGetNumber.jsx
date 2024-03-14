// import React, { useRef } from "react";
// import FetchPostAll from "./FetchPostAll";
// import Swal from "sweetalert2";
// const SearchGetNumber = ({
//   ArrayNewBool,
//   ArrayNewSetHomeOrFlat,
//   ArrayNewSetSendDataRegion,
//   ArrayNewSetSendDataRoom,
//   ArrayNewSetSendDataPrice,
//   setAddNumber
// }) => {
//     const NumberCustomer=useRef(null);
//   const formatPriceRange = (priceArray) => {
//     if (priceArray.length >= 2) {
//       return `${priceArray[0]} və ${priceArray[1]}`;
//     } else if (priceArray.length === 1) {
//       return priceArray[0];
//     } else {
//       return "Qiymət müəyyən edilməyib";
//     }
//   };
//   const formatArrayForDisplay = (array) => {
//     if (array.length === 2) {
//       return `${array[0]} və ${array[1]}`;
//     } else if (array.length > 2) {
//       return `${array.slice(0, -1).join(", ")} və ${array[array.length - 1]}`;
//     } else {
//       return array.join("");
//     }
//   };
//   var joinArrayElements = (array, separator = ' ') => {
//     return array.join(separator);
// };

 
//   const AllowNumber=()=>{
//     var searchData={
//         metro:joinArrayElements(ArrayNewBool),
//         ragion:joinArrayElements(ArrayNewSetSendDataRegion),
//         room:joinArrayElements(ArrayNewSetSendDataRoom),
//         maxPrice:ArrayNewSetSendDataPrice[0],
//         minPrice:ArrayNewSetSendDataPrice[1],
//         building:joinArrayElements(ArrayNewSetHomeOrFlat),
//         number:NumberCustomer.current.value
//       }
//     if(searchData.Number===''){
//         Swal.fire({
//             title: "Diqqət!",
//             text: "Nömrənizi daxil edin",
//             icon: "warning",
//           });
//     }else{
//         FetchPostAll(searchData,"Media");
//         Swal.fire({
//             title: "Uğurlu",
//             text: "Nömrəniz qeyd edildiş",
//             icon: "",
//           });
//     }
   
//   }
//   return (
//     <div className="GetNumberContainer">
//       <div className="GetNumberData">
//         <span>Metro: {formatArrayForDisplay(ArrayNewBool)}</span>
//         <span>Rayon: {formatArrayForDisplay(ArrayNewSetSendDataRegion)}</span>
//         <span>Bina: {formatArrayForDisplay(ArrayNewSetHomeOrFlat)}</span>
//         <span>Otaq: {formatArrayForDisplay(ArrayNewSetSendDataRoom)}</span>
//         <span>Qiymət: {formatPriceRange(ArrayNewSetSendDataPrice)}</span>
//       </div>
//       <div>
//         <p className="fs-5 text-center text-white">
//           ! Bu şərtlərə uyğun yeni evi yüklənsə həmin dəqiqə sizə{" "}
//           <strong>Whatsappda</strong> məlumat verə bilərik. Istəyirsinizsə
//           nömrənizi daxil edin. (Nömrəniz gizlin saxlanılacaq)
//         </p>
//         <div className="audio-div">
//           <audio controls>
//             <source src="horse.mp3" type="audio/mpeg" />
//           </audio>
//         </div>
//       </div>
//       <div className="GetNumberDivInput">
//         <input placeholder=" Number" ref={NumberCustomer}/>
//       </div>
//       <div className="AllowOrNot">
//         <button className="btn" onClick={AllowNumber}>Raziyam</button>
//         <button className="btn" onClick={()=>{setAddNumber(false)}}>İsəmirəm</button>
//       </div>
//     </div>
//   );
// };

// export default SearchGetNumber;
