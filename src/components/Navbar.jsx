import { Link } from "react-router-dom";
import CustomBtn from "./CustomBtn";
import { menuLink } from "../data/data";
import { FaArrowUp19 } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <header className="flex items-center justify-between mt-3 container-fluid">
        {/* logo  */}
        <div className="w-48">
          <img
            src="https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png"
            alt="whatsapp"
            className="object-cover"
          />
        </div>

        {/* middle part  */}
        <div>
          {menuLink.map((link) => (
            <>
              <Link
                key={link.id}
                to={link.url}
                className="text-xl px-3 no-underline text-black"
              >
                {link.label}
              </Link>
            </>
          ))}
        </div>
        {/* right part  */}
        <div>
          <CustomBtn text={`Download`} icon={<FaArrowUp19 />} />
        </div>
      </header>
    </>
  );
};

export default Navbar;
