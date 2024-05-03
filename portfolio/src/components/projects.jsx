import React, { useState, useEffect } from "react";

function Projects({ projects }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const defaultImage = "src/assets/Project.png";


  const openDialog = (project) => {
    setSelectedProject(project);
  };

  const closeDialog = () => {
    setSelectedProject(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        closeDialog();
      }
    };

    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dialog")) {
        closeDialog();
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [selectedProject]);

  return (
    <div className="bg-gradient-to-t from-slate-800 to-slate-950 h-screen">
      <nav>
        <div className="flex justify-between p-8">
          <div className="p-5">
            <h1 className="text-4xl text-white font-bold">Samuel Nummela</h1>
            <p className="text-white text-xl font-semibold">Portfolio</p>
          </div>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-white focus:outline-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } flex justify-between float-right flex-col p-5 font-semibold w-56 mr-3 rounded-md bg-slate-800 text-white`}
        >
          <div className="float-left flex flex-col">
            <li className="hover:cursor-pointer">
              <a href="/projektit" className="text-white">
                Projektit
              </a>
              <svg
                className="float-right"
                width="24"
                height="24"
                clipRule="evenodd"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m11.3 13.7c0-.53-.47-1-1-1h-7.3c-.53 0-1 .47-1 1v5.3c0 .53.47 1 1 1h7.3c.53 0 1-.47 1-1zm10.7 0c0-.53-.47-1-1-1h-7.3c-.53 0-1 .47-1 1v5.3c0 .53.47 1 1 1h7.3c.53 0 1-.47 1-1zm0-8.7c0-.53-.47-1-1-1h-7.3c-.53 0-1 .47-1 1v5.3c0 .53.47 1 1 1h7.3c.53 0 1-.47 1-1zm-10.7 0c0-.53-.47-1-1-1h-7.3c-.53 0-1 .47-1 1v5.3c0 .53.47 1 1 1h7.3c.53 0 1-.47 1-1z"
                  fillRule="nonzero"
                />
              </svg>
            </li>
            <li className="hover:cursor-pointer">
              <a href="#" className="text-white">
                Github
              </a>
              <svg
                className="float-right"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
              </svg>
            </li>
            <li className="hover:cursor-pointer">
              <a href="#" className="text-white">
                LinkedIn
              </a>
              <svg
                className="float-right"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
              </svg>
            </li>
          </div>
        </ul>
      </nav>
      <div>
        <div className="p-12 grid grid-cols-4 gap-14 place-items-center text-white">
          {projects.map((project) => (
            <div key={project.id} className="col-span-1">
              <img
                src={project.image || defaultImage} // Use defaultImage if project.image is falsy
                alt={project.title}
                onClick={() => openDialog(project)}
                className="cursor-pointer h-72 w-84 rounded-lg object-cover hover:opacity-80 transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg dialog">
            <h2 className=" font">{selectedProject.title}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="h-54 w-54 object-cover rounded-lg mt-4"
            />
            <p className="mt-3">{selectedProject.description}</p>
            <div className="flex justify-end mt-2">
              <a
                href={selectedProject.githubLink}
                className="bg-slate-900 text-white p-3 rounded-md m-1"
              >
                GitHub
              </a>
              {selectedProject.demoLink && (
                <a
                  href={selectedProject.demoLink}
                  className="bg-slate-900 text-white p-3 rounded-md m-1"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
