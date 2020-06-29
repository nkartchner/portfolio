import React from "react";

const Tasks = [
  "Create list of projects I want to present",
  "Have a couple projects hosted online, but the rest can be integrated right here",
  "Add the ability to filter by technology (USE YOUR ICONS RIGHT HERE)",
  `Repairsage is a kanban based (very
        similar to Trello) production workflow management application targeted
        for the automotive repair industry.`,
  "organize technologies by frameworks. Make the filtering system interactive using canvas? or even drag and drop",
];

interface Project {
  uri: string;
  screenshot: string;
  description: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  React.useEffect(() => {
    document.title = "Nathan's Projects";
  });
  return (
    <div>
      <h1>1 Single project works.</h1>
      <ul>
        {Tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
