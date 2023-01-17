import { Fragment, useState } from "react";
import CandidatesContainer from "../candidates/CandidatesContainer";
import FilterContainer from "../components/Filter/FilterContainer";

const CandidatesPage = (props) => {
  const [age, setAge] = useState(null);
  const onFilter = (filterObj) => {
    setAge(filterObj);
  };
  return (
    <Fragment>
      <FilterContainer onFilter={onFilter} />
      <CandidatesContainer candidates={props.src} age={age} />
    </Fragment>
  );
};

export default CandidatesPage;
