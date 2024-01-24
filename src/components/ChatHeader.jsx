import profile from "../images/profile.jpg";
import { IoIosPeople } from "react-icons/io";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

const ChatHeader = () => {
  return (
    <>
      <header className="flex justify-between container-fluid bg-slate-100 position-fixed top-0 left-0 w-full z-20">
        <div className="flex justify-between w-2/5 ">
          <div className="">
            <img
              src={profile}
              alt="profile"
              className="w-16 h-16 rounded-full "
            />
          </div>
          <div className="flex items-center">
            <span className="text-3xl">
              <IoIosPeople />
            </span>
            <span className="text-3xl mx-7">
              <IoIosPeople />
            </span>
            <span className="text-3xl mr-7">
              <IoIosPeople />
            </span>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space style={{ cursor: "pointer" }}>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>

        <div className="flex justify-between  items-center w-full ">
          <div className="flex  items-center px-16">
            <img
              src={profile}
              alt="profile"
              className="w-16 h-16 rounded-full"
            />
            <span className="pl-5">Group</span>
          </div>
          <div className="flex">
            <span className="text-3xl">
              <IoIosPeople />
            </span>
            <span className="text-3xl px-4">
              <IoIosPeople />
            </span>
            <span className="text-3xl">
              <IoIosPeople />
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default ChatHeader;
