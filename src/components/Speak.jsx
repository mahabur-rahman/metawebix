import Heading from "./Heading";
import LearnMore from "./LearnMore";
import Para from "./Para";

const Speak = () => {
  const url =
    "https://scontent.whatsapp.net/v/t39.8562-34/316036583_870096634427722_4468595013887544943_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=fXtbHwhtzdEAX9Lv72x&_nc_ht=scontent.whatsapp.net&oh=01_AdSSj9p2umIqqeg2Ag3NCIKZRaiwIx26FJVjn-jo90ppTA&oe=65B46EB1";

  return (
    <>
      <section className="container-full bg-black">
        <div className="container py-48 flex items-center justify-around">
          <div className="pl-28">
            <img src={url} className="object-cover w-full" alt="img" />
          </div>
          <div className="ml-16">
            <Heading label="Speak freely" />

            <Para text="With end-to-end encryption, your personal messages and calls are secured. Only you and the person you're talking to can read or listen to them, and nobody in between, not even WhatsApp." />

            <LearnMore learnMore={"Learn More"} icon=">" url={`/learn`} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Speak;
