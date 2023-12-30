import { useState, useEffect,useRef } from "react";
import React from "react";
import { useParams } from "react-router-dom";
const İnsideCardCostumer = () => {
  const { id } = useParams();

  const customerName=useRef(null);
  const customerNumber=useRef(null);
  const keepingImgSource = [
    "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
    "https://tjh.com/wp-content/uploads/2023/04/denver-new-home-Meade2.webp",
    "https://nh.rdcpix.com/0ca5883f9bf997505d554633ca1e8aa9l-f3652169346od-w480_h360.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRSAAg1MOr6nFfMv7L131kZl7O3se-oYEf0V0ZLW7jDUVmh7vtnwLZ1uJHUI7Ji_-pTE&usqp=CAU",
    "https://photos.zillowstatic.com/fp/99e328626c7284a24c908e885ecb489e-cc_ft_960.jpg",
    "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
    "https://tjh.com/wp-content/uploads/2023/04/denver-new-home-Meade2.webp",
    "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
    "https://nh.rdcpix.com/0ca5883f9bf997505d554633ca1e8aa9l-f3652169346od-w480_h360.jpg",
    "https://photos.zillowstatic.com/fp/99e328626c7284a24c908e885ecb489e-cc_ft_960.jpg",
  ];
  const [state, setstate] = useState(true);
  const [ImgSourceIndex, setImgSourceIndex] = useState(0);
  const btnLeftIcon = () => {
    if (ImgSourceIndex < keepingImgSource.length - 1) {
      setImgSourceIndex(ImgSourceIndex + 1);
    } else {
      setImgSourceIndex(0);
    }
  };

  const btnRightIcon = () => {
    if (ImgSourceIndex > 0) {
      setImgSourceIndex(ImgSourceIndex - 1);
    } else {
      setImgSourceIndex(keepingImgSource.length - 1);
    }
  };
  var [getById, setGetById] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5224/api/RentHome/Admin/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGetById(data);
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    };
    fetchData();
  }, [id,state]);

  const price = "Aze";
  const teratory = "m²";
  const convertDate = (x) => {
    return x.toString().replace("T", " ").substring(0, 16);
  };

  const addCustomer=()=>{
    setstate(!state);
    const customerObject={
        SecondStepCustomerForeignId:id,
        FullName:customerName.current.value,
        Number:customerNumber.current.value
    }
  
    fetch("http://localhost:5224/api/RentHomeCustomer", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerObject),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response;
        })
        .then((responseData) => {
          console.log("Data uploaded successfully:", responseData);
        })
        .catch((error) => {
          console.error("Error uploading data:", error);
        });
  }


  return (
    <div>
      <div className=" col-12 p-2 mt-4 ps-2">
        <div className="insideCard-home">
          <div className="overflow-hidden">
            <div>
              <span onClick={btnLeftIcon}>
                <i className="fa-solid fa-angle-left"></i>
              </span>
              <span onClick={btnRightIcon}>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </div>
            <div>
              <img
                src={keepingImgSource[ImgSourceIndex]}
                alt=""
                className="w-100 h-100"
              />
            </div>
          </div>
          {getById && (
            <div className="pb-2 mt-3">
              <p>
                Qiymet:<span className="price-home">{getById.price}</span>
                <span>{price}</span>
              </p>
              <p>
                Ev sahibi:<span className="price-home">{getById.fullname}</span>
              </p>
              <p>
                Nömrəsi:<span className="price-home">{getById.number}</span>
              </p>
              <p>
                Kod:<span className="price-home">{getById.id}</span>
              </p>
              <p>
                Ünvan:<span className="address-home">{getById.address}</span>
              </p>
              <p>
                Metro:<span className="address-home">{getById.metro}</span>
              </p>
              <p>
                Otaq sayi:<span className="room-home">{getById.room}</span>
              </p>
              <p>
                Sahe:
                <span className="measure-home">
                  {getById.area}
                  <span>{teratory}</span>
                </span>
              </p>
              {getById.addition && (
                <p>
                  Ətraflı:
                  <span className="measure-home">{getById.addition}</span>
                </p>
              )}
              <p>
                Əşya:<span className="time-home">{getById.item}</span>
              </p>
              <p>
                Təmir:<span className="time-home">{getById.repair}</span>
              </p>
              <p>
                Mərtəbə:<span className="time-home">{getById.floor}</span>
              </p>
              <p>
                Bina:<span className="time-home">{getById.building}</span>
              </p>

              <p>
                Evi aldığınız halda əmlakçıya verəcəyiniz ödəniş:
                <span className="time-home">
                  {(getById.price * 20) / 100}
                  <span>{price}</span>
                </span>
              </p>
              <p>
                Ev kimə verilir:
                <span className="time-home">
                  {[
                    getById.family && "Ailə",
                    getById.boy && "Oğlan tələbələrə",
                    getById.girl && "Xanım tələbələrə",
                    getById.workingBoy && "İşləyən bəylərə",
                  ]
                    .filter(Boolean)
                    .join(", ")
                    .replace(/, (?=[^,]*$)/, " və ")}
                </span>
              </p>
              <p>
                Evdə olan Əşyalar:
                <span className="time-home">
                  {[
                    getById.bed && "Yataq",
                    getById.wardrobe && "Dolab",
                    getById.tableChair && "Masa və Stol",
                    getById.centralHeating && "Mərkəzi İstilik sistemi",
                    getById.gasHeating && "Qaz İstilik sistemi",
                    getById.combi && "Kombi",
                    getById.tv && "Televizor",
                    getById.washingClothes && "Paltar Yuyan",
                    getById.airConditioning && "Kondisioner",
                    getById.sofa && "Divan",
                    getById.wifi && "Wi-Fi",
                  ]
                    .filter(Boolean)
                    .join(", ")
                    .replace(/, (?=[^,]*$)/, " və ")}
                </span>
              </p>
              <p>
                Tarix:
                <span className="time-home">{convertDate(getById.date)}</span>
              </p>
              {/* <div className="height-for-coordiante mt-2 mb-2 p-4">
             <Coordinate />
           </div> */}
            </div>
          )}
          <div className="col-12 d-flex justify-content-center h-auto">
            <div className="col-6 d-flex ">
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th>Müştərinin adı soyadı</th>
                    <th>Nömrə</th>
                    <th>Tarix</th>
                  </tr>
                </thead>
                <tbody>
                  {getById &&
                    getById.customer.map((x, index) => (
                      <tr key={index}>
                        <td>{x.fullName}</td>
                        <td>{x.number}</td>
                        <td>{convertDate(x.directCustomerDate)}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-12 d-flex justify-content-center mt-2 h-auto">
            <div className="h-25 ">
              <input type="Text" placeholder="Müştərinin adı soyadı:" ref={customerName}/>
              <input type="number" placeholder="Nömrəs:" ref={customerNumber}/>
              <button className="btn btn-success" onClick={addCustomer}> Əlavə etmək</button>
            </div>
          </div>
          {/* <div className="height-for-coordiante mt-2 mb-2 p-4">
                            <Coordinate />
                        </div> */}
        </div>
      </div>
    </div>
  );
};

export default İnsideCardCostumer;
