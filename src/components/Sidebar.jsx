import profile from "../images/profile.jpg";
// data
import { sidebarData } from "../data/data";
import { useState } from "react";

const Sidebar = () => {
  const [data, setData] = useState(sidebarData);

  return (
    <section className="flex container-fluid ">
      <div className="w-2/5 bg-white-300 shadow-lg p-2">
        {data.map((ele) => (
          <>
            <div className="flex py-2" key={ele.id}>
              <div>
                <img
                  className="w-16 h-16 rounded-full"
                  src={ele.img}
                  alt={ele.title}
                />
              </div>
              <div className="mx-3">
                <h6 className="mb-0">{ele.title}</h6>
                <p>{ele.para}</p>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="w-4/5 bg-orange-50 p-3">
        <div className="flex">
          <div>
            <img className="w-16 h-16 rounded-full" src={profile} />
          </div>
          <div className="px-3">
            <h4 className="text-blue-500 mb-0">Mahabur Rahman Annur</h4>
            <p>What are you doing today?</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div>
            <img className="w-16 h-16 rounded-full" src={profile} />
          </div>
          <div className="px-3">
            <h4 className="text-blue-500 mb-0">Gokul</h4>
            <p>Yes, I am fine</p>
          </div>
        </div>

        <div className="flex">
          <div>
            <img className="w-16 h-16 rounded-full" src={profile} />
          </div>
          <div className="px-3">
            <h4 className="text-blue-500 mb-0">Mahabur Rahman Annur</h4>
            <p>???</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div>
            <img className="w-16 h-16 rounded-full" src={profile} />
          </div>
          <div className="px-3">
            <h4 className="text-blue-500 mb-0">Gokul</h4>
            <p>Type meta thek suggest show company name</p>
          </div>
        </div>

        <div className="flex">
          <div>
            <img className="w-16 h-16 rounded-full" src={profile} />
          </div>
          <div className="px-3">
            <h4 className="text-blue-500 mb-0">Mahabur Rahman Annur</h4>
            <p>Metawebix.com</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div>
            <img className="w-16 h-16 rounded-full" src={profile} />
          </div>
          <div className="px-3">
            <h4 className="text-blue-500 mb-0">Mahabur Rahman Annur</h4>
            <p>Type meta thek suggest show company name</p>
          </div>
        </div>

        <div className="flex">
          <div>
            <img className="w-16 h-16 rounded-full" src={profile} />
          </div>
          <div className="px-3">
            <h4 className="text-blue-500 mb-0">Mahabur Rahman Annur</h4>
            <p>Type meta thek suggest show company name</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div>
            <img className="w-16 h-16 rounded-full" src={profile} />
          </div>
          <div className="px-3">
            <h4 className="text-blue-500 mb-0">Mahabur Rahman Annur</h4>
            <p>Type meta thek suggest show company name</p>
          </div>
        </div>

        <div className="flex">
          <div>
            <img className="w-16 h-16 rounded-full" src={profile} />
          </div>
          <div className="px-3">
            <h4 className="text-blue-500 mb-0">Mahabur Rahman Annur</h4>
            <p>Type meta thek suggest show company name</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div>
            <img className="w-16 h-16 rounded-full" src={profile} />
          </div>
          <div className="px-3">
            <h4 className="text-blue-500 mb-0">Mahabur Rahman Annur</h4>
            <p>Type meta thek suggest show company name</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
