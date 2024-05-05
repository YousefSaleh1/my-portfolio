import "./MeCard.css";
type TCard = {
  img: string;
  title: string;
  sub: string;
};
function MeCard({ img, title, sub }: TCard) {
  return (
    <div className="colom col-lg-4 col-md-6">
      <div className="cards card d-flex flex-column align-items-center justify-content-center">
        <img
          src={img}
          className="w-50 h-50 pt-5 rounded mx-auto d-block"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-center pt-2">{title}</h5>
          <p className="card-text text-center">{sub}</p>
        </div>
      </div>
    </div>
  );
}

export default MeCard;


