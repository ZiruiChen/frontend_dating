import "./FilterContainer.css";
import FilterForm from "./FilterForm";

const FilterContainer = (props) => {
  const onFilter = (filterObj) => {
    props.onFilter(filterObj);
  };
  return (
    <div className="filter-container">
      <FilterForm onFilter={onFilter} />
    </div>
  );
};

export default FilterContainer;
