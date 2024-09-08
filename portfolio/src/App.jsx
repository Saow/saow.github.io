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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [projects, setProjects] = useState([]); // State to store projects
  const [isPopoverVisible, setIsPopoverVisible] = useState(false); // State to control popover visibility
  const [popoverMessage, setPopoverMessage] = useState("");
  const menuItems = ["Profile", "Projects", "Contact"];

  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default mailto action
    const email = "samuelnummela06@gmail.com";

    navigator.clipboard
      .writeText(email)
      .then(() => {
        setPopoverMessage("Email address copied to clipboard!");
        setIsPopoverVisible(true);
        setTimeout(() => setIsPopoverVisible(false), 1500); // Hide popover after 1.5 seconds
      })
      .catch((err) => {
        console.error("Failed to copy email to clipboard: ", err);
      });
  };

  useEffect(() => {
    fetch("./../src/projects.json")
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
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">Samuel Nummela</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
              className="hover:text-yellow-500 hover:opacity-85"
            >
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#contact"
              className="hover:text-green-500 hover:opacity-85"
            >
              Contact me
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem></NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 1
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <ScrollShadow hideScrollBar className="h-[770px] w-full">
        <div
          className="items-center flex justify-center mt-24 mb-12 flex-col gap-2"
          id="profile"
        >
          <Code
            className="p-5 border-3 border-transparent hover:opacity-85 transition-all duration-300 ease-in-out mr-12 hover:border-yellow-500"
            color="warning"
          >
            <p className="text-3xl">
              <span className="font-main">Hello</span>, I am
            </p>
          </Code>
          <Code
            className="p-5 border-3 border-transparent hover:opacity-85 transition-all duration-300 ease-in-out ml-12 hover:border-purple-500"
            color="secondary"
          >
            <p className="text-2xl">Samuel Nummela</p>
          </Code>
          <Code
            className="p-5 border-3 border-transparent hover:opacity-85 transition-all duration-300 ease-in-out mr-44 hover:border-blue-500"
            color="primary"
          >
            <p className="text-2xl">18 yo</p>
          </Code>
          <Code
            className="p-5 border-3 border-transparent hover:opacity-85 transition-all duration-300 ease-in-out ml-24 hover:border-green-500"
            color="success"
          >
            <p className="text-xl">A Fullstack Developer</p>
          </Code>
        </div>

        <div className="flex items-center justify-center flex-row space-x-8">
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
          <Popover
            placement="right"
            showArrow={false}
            isOpen={isPopoverVisible}
          >
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
                <div className="text-small font-bold ">Notification</div>
                <div className="text-tiny">{popoverMessage}</div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col items-center my-32" id="projects">
          <div className="mb-12">
            <p className="flex flex-col items-center text-4xl font-semibold font-main text-yellow-500">
              Projects
            </p>
          </div>
          <div className="grid grid-cols-3 gap-12 mx-48">
            {projects.length > 0 ? (
              projects.map((project) => (
                <div key={project.id} className="rounded-xl border-3 p-6">
                  <div className="font-main font-bold text-xl">
                    {project.name}
                  </div>
                  <br />
                  <div>
                    <a href={project.demo ? project.demo : project.github}>
                      <img
                        src={
                          project.image
                            ? project.image
                            : "https://via.placeholder.com/200"
                        }
                        alt={project.name}
                        className="rounded-md w-full h-[220px] mb-4 hover:opacity-85 transition-all duration-300 ease-in-out"
                      />
                    </a>
                  </div>
                  <div className="">{project.description}</div>
                  <br />
                  <div className="font-main font-bold text-lg ">Tech stack:</div>
                  <div className="">{project.techStack.join(", ")}</div>
                  <br />
                  <div className="flex justify-end gap-4">
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
        </div>
      </ScrollShadow>
    </>
  );
}
