import "./WhyMeCard.css";


type TWhyCard = {
  img: string;
  title: string;
  des: string;
};

function WhyMeCard({ img, title, des }: TWhyCard) {

  return (
     
      <div className="card-why card ">
        <img
          src={img}
          className="w-50 h-50 pt-5 rounded mx-auto d-block"
          alt="..."
          loading="lazy"
        />
        <div className="card-body text-center">
          <h5 className="card-title fw-bolder pt-2">{title}</h5>
          <p className="card-text fs-5 pt-2">{des}</p>
        </div>
      </div>
    
  );
}

export default WhyMeCard;
