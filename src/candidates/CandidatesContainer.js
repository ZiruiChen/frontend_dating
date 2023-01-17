import "./CandidatesContainer.css";
// import Card from "../components/UI/Card";
import CandidatesList from "./CandidatesList";

const CandidatesContainer = (props) => {
  return (
    <div className="can-container">
      <CandidatesList candidates={props.candidates} age = {props.age}/>
    </div>
  );
};

export default CandidatesContainer;
