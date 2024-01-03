import { useParams } from "react-router-dom";

const Movies = () => {
  const params = useParams();
  const { gokula } = params;

  return (
    <div>
      <h1>
        This is the <span className="text-primary">{gokula}</span> page
      </h1>
    </div>
  );
};

export default Movies;
