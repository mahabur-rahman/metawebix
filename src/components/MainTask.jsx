import { FaRegTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const MainTask = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <div>
          <h3>something</h3>
        </div>

        <div className="d-flex align-items-center">
          <div className="mx-3">
            <FaRegTrashCan />
          </div>
          <div>
            <FaEdit />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTask;
