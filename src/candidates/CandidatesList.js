import "./CandidatesList.css";
import Instance from "./Instance.js";

const CandidatesList = (props) => {
  let filteredCandidates;
  if (props.age) {
    filteredCandidates = props.candidates.filter(
      (ins) => +ins.age === +props.age
    );
  }

  return (
    <ul className="candidate-list">
      {!props.age
        ? props.candidates.map((candidate) => (
            <Instance
              id={candidate.id}
              key={candidate.id}
              name={candidate.name}
              age={candidate.age}
              des={candidate.description}
              img={candidate.img}
            />
          ))
        : filteredCandidates.map((candidate) => (
            <Instance
              id={candidate.id}
              key={candidate.id}
              name={candidate.name}
              age={candidate.age}
              des={candidate.description}
              img={candidate.img}
            />
          ))}
    </ul>
  );
};

export default CandidatesList;
