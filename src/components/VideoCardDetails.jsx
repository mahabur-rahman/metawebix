import { useParams } from "react-router-dom";

const VideoCardDetails = () => {
  const params = useParams();
  const { cardItem } = params;
  return <div>VideoCardDetails ID: {cardItem}</div>;
};

export default VideoCardDetails;
