// import { useEffect, useState } from "react";
// import axios from "axios";
import MeCard from "../MeCard/MeCard";
import "./WhyMeCard.css";

const data = [
  {
    img: "https://abdalrhman80.github.io/My-Portfolio/assets/images/Search.svg",
    title: " Continuous learning",
    sub: "I obsess over every pixel and detail, ensuring seamless user experiences , honed to perfection in every project.",
  },
  {
    img: "https://abdalrhman80.github.io/My-Portfolio/assets/images/Learning.svg",
    title: "Continuous learning",
    sub: "I'm trying to stay up-to-date with latest trends, technologies, and best practices in frontend development.",
  },
  {
    img: "https://abdalrhman80.github.io/My-Portfolio/assets/images/Responsive.svg",
    title: "Responsive design",
    sub: "I specialize in developing websites that seamlessly adapt across diverse screen sizes and devices.",
  },
  {
    img: "https://abdalrhman80.github.io/My-Portfolio/assets/images/Development.svg",
    title: "Web development",
    sub: "Now, I study Backend development, and I am excited to develop my skills in it, My journey in development continues.",
  },
];

// type TCardData = {
//   img?: string;
//   title?: string;
//   sub?: string;
// };
// type TCards = Array<TCardData>;

function WhyMeCard() {
  // const [card, setCard] = useState<TCards>([]);
  // useEffect(()=>{
  //   axios.get("").then((res) => {
  //     setCard(res.data);
  //     });
  // })
  return (
    <>
      <div className="container mt-5">
        <div className="row text-center color-gray fs-2 fw-bolder mb-5">
          <ins>Why me?</ins>
        </div>
        <div className="row row-gap-4 m-lg-5">
        {/* {data.map((element:TCardData, index) => {
          return (
            <div key={index}>
              <MeCard
                img={element.img}
                title={element.title}
                sub={element.sub}
              />
            </div>
          );
        })} */}
        {data.map((element) => {
          return (
              <MeCard
                img={element.img}
                title={element.title}
                sub={element.sub}
              />
          );
        })}
        </div>
      </div>
    </>
  );
}

export default WhyMeCard;
