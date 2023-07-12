import SettingSvg from "../assets/resource/setting.svg";
import Image from "next/image";
import LinkImg1 from "../assets/resource/grid (1) 1.svg";
import LinkImg2 from "../assets/resource/linkimg2.svg";
import LinkImg3 from "../assets/resource/linkimg3.svg";
import LinkImg4 from "../assets/resource/linkimg4.svg";
import LinkImg5 from "../assets/resource/linkimg5.svg";
import LinkImg6 from "../assets/resource/linkimg6.svg";
import LinkImg7 from "../assets/resource/linkimg7.svg";
import ObjectImg from "../assets/resource/object.svg";
import { useRouter } from "next/router";

const Saidbar = ({ isHide, setIsHide }) => {
  const router = useRouter();

  const asideLinks = [
    {
      img: LinkImg1,
      title: "Dashboard",
      href: "/main",
    },
    {
      img: LinkImg2,
      title: "Teams",
      href: "/teams",
    },
    {
      img: LinkImg3,
      title: "Employees",
      href: "/employees",
    },
    {
      img: LinkImg4,
      title: "Projects",
      href: "/projects",
    },
  ];
  const asideLinks2 = [
    {
      img: LinkImg5,
      title: "Meetings",
      href: "/meetings",
    },
    {
      img: LinkImg6,
      title: "Tasks",
      href: "/tasks",
    },
    {
      img: LinkImg7,
      title: "Settings",
      href: "/settings",
    },
  ];

  return (
    <aside className={`${!isHide ? "hidden" : ""}`}>
      <div className="aside_title">
        <Image src={SettingSvg} alt="My Image" width={33} />
        <span>Teamify</span>
      </div>
      <button onClick={setIsHide} className="close">
        Close
      </button>
      <ul className="aside_links">
        {asideLinks.map((i, index) => (
          <li
            className={router.asPath.startsWith(i.href) ? "active" : ""}
            style={{ cursor: "pointer" }}
            onClick={() => router.push(i.href)}
            key={index}
          >
            <a>
              <Image src={i.img} width={22} alt="img6" />
              <span>{i.title}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="dr"></div>

      <ul className="aside_links aside_links2">
        {asideLinks2.map((i, index) => (
          <li
            className={router.asPath.startsWith(i.href) ? "active" : ""}
            style={{ cursor: "pointer" }}
            onClick={() => router.push(i.href)}
            key={index}
          >
            <a>
              <Image src={i.img} alt="img3" width={22} />
              <span>{i.title}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="aside_bottom">
        <div className="aside_bottom_content">
          <Image
            className="aside_bottom_content_img"
            alt="img"
            src={ObjectImg}
          />
          <button>Share Your Thoughts</button>
        </div>
      </div>
    </aside>
  );
};

export default Saidbar;
