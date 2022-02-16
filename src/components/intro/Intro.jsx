import "./intro.css";
import Me from "../../img/me.png";
const Intro = () => {
  const scrollColor = "black";
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Daniel Lloyd</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front End Engineer</div>
              <div className="i-title-item">Javascript Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
            </div>
          </div>
          <p className="i-desc">
            I design aesthetic and user friendly applications while writing
            clean code.
          </p>
        </div>
        <div className="svg-image">
          <svg
            //https://www.svgrepo.com/svg/315470/scroll-v
            // Open file with notepad to get source code
            className="i-scroll"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.17203 16.8182L7.75781 18.2324L12.0005 22.475L16.2431 18.2324L14.8289 16.8182L12.0005 19.6466L9.17203 16.8182Z"
              fill={scrollColor}
            />
            <path
              d="M14.8289 7.182L16.2431 5.76779L12.0005 1.52515L7.75782 5.76779L9.17204 7.182L12.0005 4.35357L14.8289 7.182Z"
              fill={scrollColor}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0005 9.00018C13.6573 9.00018 15.0005 10.3433 15.0005 12.0002C15.0005 13.657 13.6573 15.0002 12.0005 15.0002C10.3436 15.0002 9.00049 13.657 9.00049 12.0002C9.00049 10.3433 10.3436 9.00018 12.0005 9.00018ZM12.0005 11.0002C12.5528 11.0002 13.0005 11.4479 13.0005 12.0002C13.0005 12.5525 12.5528 13.0002 12.0005 13.0002C11.4482 13.0002 11.0005 12.5525 11.0005 12.0002C11.0005 11.4479 11.4482 11.0002 12.0005 11.0002Z"
              fill={scrollColor}
            />
          </svg>
        </div>
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
        {/* <img src={Me} alt="i-img" className="i-img" /> */}
      </div>
    </div>
  );
};

export default Intro;
