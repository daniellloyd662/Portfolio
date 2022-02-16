import "./about.css";
import jobsearch from "../../img/jobsearch.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/196658/pexels-photo-196658.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub"></p>
        <p className="a-desc">
          I picked up a passion for software as an electrical engineer where I
          wrote code for circuit simulation and test automation. Wanting to
          share the tools I had built with the world, I launched my first
          website using html, css and javascript, 'Smith Match', a web
          application for modeling circuit performance.
        </p>
        <div className="a-seeking">
          <img src={jobsearch} alt="" />
          <div className="a-seeking-texts">
            <h4 className="a-seeking-title">Seeking</h4>
            <p className="a-seeking-desc">
              I am seeking front end development positions using modern
              javascript or a javascript framework.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
