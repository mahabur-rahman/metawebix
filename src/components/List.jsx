import { Link } from "react-router-dom";
import { listOfSeries } from "../data/data";

const List = () => {
  return (
    <>
      <section>
        <ul className="d-flex series justify-content-between">
          {listOfSeries.map((list) => (
            <>
              <li
                className="bg-warning px-4 py-2"
                style={{ borderRadius: "30px" }}
                key={list.id}
              >
                <Link to={list.url}>{list.seriesName}</Link>
              </li>
            </>
          ))}
        </ul>
      </section>
    </>
  );
};

export default List;
