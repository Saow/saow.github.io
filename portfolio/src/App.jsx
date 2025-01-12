import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Code,
  ScrollShadow,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import svg from "../public/github.svg";
import svg2 from "../public/linkedin.svg";
import svg3 from "../public/email.svg";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [popoverMessage, setPopoverMessage] = useState("");
  const menuItems = ["Profile", "Projects", "Contact"];

  const handleClick = (event) => {
    event.preventDefault();
    const email = "samuelnummela06@gmail.com";

    navigator.clipboard
      .writeText(email)
      .then(() => {
        setPopoverMessage("Email address copied to clipboard!");
        setIsPopoverVisible(true);
        setTimeout(() => setIsPopoverVisible(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy email to clipboard: ", err);
      });
  };

  useEffect(() => {
    fetch("./projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="md:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="md:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">Samuel Nummela</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-4" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">SN</p>
          </NavbarBrand>
          <NavbarItem>
            <Link
              color="foreground"
              href="#profile"
              className="hover:text-purple-500 hover:opacity-85"
            >
              Profile
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#projects"
              className="hover:text-purple-500 hover:opacity-85"
            >
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#contact"
              className="hover:text-purple-500 hover:opacity-85"
            >
              Contact me
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full items-center flex flex-col p-3 text-xl font-main font-semibold"
                color={
                  index === 1
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={`#${item.toLowerCase()}`}
                size="lg"
                onClick={() => setIsMenuOpen(false)} // Close the menu after selection
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <div className="h-24" id="profile"></div>
      <div className="flex flex-col items-center justify-center mb-12 gap-4 px-4 sm:px-6 md:px-12 lg:px-24">
        <Code
          className="p-4 border-3 border-transparent hover:opacity-85 transition-all duration-300 ease-in-out hover:border-yellow-500"
          color="warning"
        >
          <p className="text-xl md:text-3xl">
            <span className="font-main">Hello</span>, I am
          </p>
        </Code>
        <Code
          className="p-4 border-3 border-transparent hover:opacity-85 transition-all duration-300 ease-in-out hover:border-purple-500"
          color="secondary"
        >
          <p className="text-xl md:text-2xl">Samuel Nummela</p>
        </Code>
        <Code
          className="p-4 border-3 border-transparent hover:opacity-85 transition-all duration-300 ease-in-out hover:border-blue-500"
          color="primary"
        >
          <p className="text-xl md:text-2xl">18 years old</p>
        </Code>
        <Code
          className="p-4 border-3 border-transparent hover:opacity-85 transition-all duration-300 ease-in-out hover:border-green-500"
          color="success"
        >
          <p className="text-lg md:text-xl">A Fullstack Developer</p>
        </Code>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-8 px-4 sm:px-6 md:px-12 lg:px-24">
        <a
          href="https://www.github.com/saow"
          target="_blank"
          className="bg-slate-300 p-3 rounded-2xl border-4 border-transparent hover:opacity-85 transition-all duration-300 ease-in-out hover:border-purple-500"
        >
          <img src={svg} alt="github" className="w-10 h-10" />
        </a>
        <a
          href="https://www.linkedin.com/in/samuelnummela"
          target="_blank"
          className="bg-slate-300 p-3 rounded-2xl border-4 border-transparent hover:opacity-85 transition-all duration-300 ease-in-out hover:border-purple-500"
        >
          <img src={svg2} alt="linkedin" className="w-10 h-10" />
        </a>
        <Popover placement="right" showArrow={false} isOpen={isPopoverVisible}>
          <PopoverTrigger>
            <a
              href="mailto:samuelnummela06@gmail.com"
              onClick={handleClick}
              className="bg-slate-300 p-3 rounded-2xl border-4 border-transparent hover:opacity-85 transition-all duration-300 ease-in-out hover:border-purple-500"
            >
              <img src={svg3} alt="email" className="w-10 h-10" />
            </a>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-3 py-2">
              <div className="text-small font-bold">Notification</div>
              <div className="text-tiny">{popoverMessage}</div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div
        className="flex flex-col items-center my-32  sm:px-6 md:px-12 lg:px-24"
        id="projects"
      >
        <div className="mb-12 mt-24">
          <p className="text-3xl md:text-4xl font-semibold font-main text-purple-500">
            Projects
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-[5rem] flex-col">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div
                key={project.id}
                className="w-full md:w-[25rem] md:h-[100%] rounded-xl border-3 p-4 sm:p-6"
              >
                <div className="font-main font-bold text-lg sm:text-xl">
                  {project.name}
                </div>
                <br />
                <div className="">
                  <a
                    className=""
                    href={project.demo ? project.demo : project.github}
                  >
                    <img
                      src={
                        project.image
                          ? project.image
                          : "https://via.placeholder.com/200"
                      }
                      alt={project.name}
                      className="rounded-md w-full h-[180px] sm:h-[220px] mb-4 hover:opacity-85 transition-all duration-300 ease-in-out object-contain"
                    />
                  </a>
                </div>
                <div className="h-24 w-62 text-base">{project.description}</div>
                <br />
                <div className="font-main font-bold text-md sm:text-lg">
                  Tech stack:
                </div>
                <div className="text-md">{project.techStack.join(", ")}</div>
                <div className="flex gap-2 sm:gap-4 ">
                  {project.github && (
                    <Button
                      color="secondary"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      Github
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      color="success"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>Loading projects...</p>
          )}
        </div>
        <div className="mt-24">
          <div className="flex flex-col">
            <p className="text-3xl font-main font-semibold text-purple-500 text-center mb-8">
              Skialls
            </p>
          </div>
          <table className="w-52 rounded-2xl shadow-2xl overflow-hidden items-center justify-center">
            <thead>
              <tr className="bg-gradient-to-r from-purple-500 to-purple-400 text-white">
                <th className="text-2xl font-bold py-4 px-6 text-left border-b-4 border-purple-400">
                  Category
                </th>
                <th className="text-2xl font-bold py-4 px-6 text-left border-b-4 border-purple-400">
                  Technologies
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-purple-50 even:bg-white hover:bg-purple-200 transition-colors duration-300">
                <td className="text-lg font-semibold py-4 px-6 border border-purple-500 rounded-l-xl">
                  Frontend
                </td>
                <td className="text-lg py-4 px-6 border border-purple-500 rounded-r-xl">
                  React, JavaScript, Tailwind CSS, React Native
                </td>
              </tr>
              <tr className="odd:bg-purple-50 even:bg-white hover:bg-purple-200 transition-colors duration-300">
                <td className="text-lg font-semibold py-4 px-6 border border-purple-500 rounded-l-xl">
                  Backend
                </td>
                <td className="text-lg py-4 px-6 border border-purple-500 rounded-r-xl">
                  PHP, Python, C#, Node.js, MySQL
                </td>
              </tr>
              <tr className="odd:bg-purple-50 even:bg-white hover:bg-purple-200 transition-colors duration-300">
                <td className="text-lg font-semibold py-4 px-6 border border-purple-500 rounded-l-xl">
                  Testing
                </td>
                <td className="text-lg py-4 px-6 border border-purple-500 rounded-r-xl">
                  Cypress, Jest
                </td>
              </tr>
              <tr className="odd:bg-purple-50 even:bg-white hover:bg-purple-200 transition-colors duration-300">
                <td className="text-lg font-semibold py-4 px-6 border border-purple-500 rounded-l-xl">
                  Others
                </td>
                <td className="text-lg py-4 px-6 border border-purple-500 rounded-r-xl">
                  Git, Docker, Unity, AWS, Azure, Linux, Windows, MacOS
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-24">
          <p className="text-3xl font-main font-bold text-purple-400 mb-8 text-center">
            Contact me
          </p>
        </div>
        <div className="flex flex-col" id="contact">
          <p className="text-xl font-semibold text-center items-center">
            Samuelnummela06@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}
