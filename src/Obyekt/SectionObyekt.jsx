
import { Link } from "react-router-dom";
import UseFetchData from "../MyComponents/FetchImg";
import TurnImg from "../MyComponents/TurnImg";
import Shopping from "../MyComponents/Shopping";
import InfoObyekt from "../MyComponents/InfoObyekt";
const SectionObyekt = (props) => {
  if(props.imgNames.length!==0){
    var keepingImgSource =UseFetchData(props.imgNames,"RentHomeImg"); 
  }else{
    keepingImgSource=[];
  }
  return (
    <div className="col-md-4 col-sm-6 col-12 col-lg-3">
      <div className=" p-2 mt-4">
        <div className="card-home">
          <div className="overflow-hidden">
          <TurnImg keepingImgSource={keepingImgSource}/>
            <Shopping props={props} keepingImgSource={keepingImgSource}/>
          </div>
          <div className="pb-2">
            <Link to={`/Obyekt/Kart/${props.id}`}>
            <InfoObyekt props={props}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionObyekt;
