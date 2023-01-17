import "./DetailsContainer.css";
import Details from "./Details";

const DetailsContainer = (props) => {
  return (
    <div className="details-container">
      <Details id={props.id} />
    </div>
  );
};

export default DetailsContainer;
