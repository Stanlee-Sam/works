import React from "react";
import "./works.css";
import worksData from "./workData.js";
const Works = () => {
  return (
    <section className="works-section">
      
      <div className="works">
        <h2>Work</h2>
        {worksData.map((work, index) => (
          <React.Fragment key={index}>
            <div className="work">
              <div className="work-img">
                <img src={work.imgSrc} alt={work.title} />
              </div>
              <div className="work-details">
                <div className="title">{work.title}</div>
                <div className="sub">
                  <div className="year">
                    <p>{work.year}</p>
                  </div>
                  <div className="add">
                    <p>{work.category}</p>
                  </div>
                </div>
                <div className="work-description">
                  <p>{work.description}</p>
                </div>
              </div>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Works;
