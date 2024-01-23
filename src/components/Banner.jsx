import { FaArrowRotateLeft } from "react-icons/fa6";
import CustomBtn from "../components/CustomBtn";
import Para from "./Para";
import Heading from "./Heading";

const Banner = () => {
  const backgroundImageUrl =
    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1KwbIRp_24cBf2lyu11SNj5EWdNdx18ucoi4vY3T&s')";

  return (
    <>
      <section
        className="container-fluid h-[85vh] flex items-center mt-4"
        style={{
          backgroundImage: backgroundImageUrl,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* content  */}
        <div className="px-96 text-white">
          <Heading label="Message privately" />

          <Para
            text={`Simple, reliable, private messaging and calling for free*, available
            all over the world.`}
          />

          <div>
            <CustomBtn text="Download" icon={<FaArrowRotateLeft />} />
          </div>
        </div>
      </section>

      <p className="text-end text-xs fw-normal text-black pr-5">
        Data charges may apply. Contact your provider for details.
      </p>
    </>
  );
};

export default Banner;
