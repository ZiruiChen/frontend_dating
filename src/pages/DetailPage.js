import { useParams } from "react-router-dom";
import DetailsContainer from "../details/DetailsContainer";

const DetailPage = () => {
  const params = useParams();
  return <DetailsContainer id = {params.id}/>;
};

export default DetailPage;
