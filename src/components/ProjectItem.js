import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies)

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        
    {technologies.map((item,key)=> <span key={key}>{item}</span>)}
      </div>
    </div>
  );
}

export default ProjectItem;