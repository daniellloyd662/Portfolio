import "./about.css";
import award from "../../img/award.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/368893/pexels-photo-368893.jpeg?cs=srgb&dl=pexels-mohamed-almari-368893.jpg&fm=jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be d... readable
          content
        </p>
        <p className="a-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi totam
          sapiente non. Itaque, aliquid nihil ex optio non officiis nisi!
        </p>
        <div className="a-award">
          <img src={award} alt="" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Award</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              recusandae possimus doloribus quod officiis quo?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
