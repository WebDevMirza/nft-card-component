import "./Card.css";
import Dice from "../images/image-equilibrium.jpg";
import IconCoin from "../images/icon-ethereum.svg";
import IconTime from "../images/icon-clock.svg";
import Avatar from "../images/image-avatar.jpg";

const Card = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card-img mb-16">
            <img src={Dice} alt="image-eduilibrium" />
          </div>

          <div className="card-body">
            <h1 className="card-title mb-16">Equilibrium #3429</h1>
            <p className="card-text mb-16">Our Equilibrium collection promotes balance and calm.</p>
            <ul className="card-feature mb-16">
              <li className="coin">
                <img src={IconCoin} alt="" role="presentation" />
                <strong>0.041 ETH</strong>
              </li>
              <li className="time">
                <img src={IconTime} alt="" role="presentation" />
                <strong>3 days left</strong>
              </li>
            </ul>

            <div className="line mb-16"></div>
            <div className="footer">
              <div className="avatar">
                <img src={Avatar} alt="Avatar" width={45} height={45} />
              </div>
              <div className="avatar-desc">
                Creation of <span>WebDev Mirza</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
