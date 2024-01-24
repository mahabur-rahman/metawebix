import imgOne from "../images/private.png";
import imgTwo from "../images/private2.png";
import Para from "./Para";

const Private = () => {
  const paragraph = `With private messaging and calling, you can be yourself, speak
    freely and feel close to the most important people in your life no
    matter where they are.`;

  return (
    <>
      <section className="private container h-[100vh] flex items-center mt-4 overflow-hidden">
        {/* img 1  */}
        <div>
          <img src={imgOne} alt="private  profile" className="img1" />
        </div>

        {/* content  */}
        <div className="px-96 text-white">
          <Para text={paragraph} />
        </div>

        {/* img 2  */}
        <div>
          <img src={imgTwo} alt="private  profile" className="img2" />
        </div>
      </section>
    </>
  );
};

export default Private;
