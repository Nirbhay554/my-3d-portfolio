import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Full-Stack Developer</h4>
                <h5>Self-Employed · Azamgarh, UP</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Identified and pitched local businesses with no digital presence; delivered modern React-based websites deployed on Vercel. Owned the full project lifecycle — requirement gathering, design, development, deployment, and ongoing maintenance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in ECE</h4>
                <h5>Indian Institute of Information Technology, Dharwad</h5>
              </div>
              <h3>2024–28</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Electronics & Communication Engineering (ECE).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
