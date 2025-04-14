import { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ExternalLink,
  Code2,
} from "lucide-react";
import "./index.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [activeTab, setActiveTab] = useState("frontend");
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipTimeout = useRef(null);

  const menuItems = ["Profiili", "Projektit", "Taidot", "Yhteystiedot"];

  const handleCopyEmail = (event) => {
    event.preventDefault();
    const email = "samuelnummela06@gmail.com";

    navigator.clipboard
      .writeText(email)
      .then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      })
      .catch((err) => {
        console.error("Failed to copy email to clipboard: ", err);
      });
  };

  const handleShowTooltip = (content, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipContent(content);
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.bottom + window.scrollY + 10,
    });

    clearTimeout(tooltipTimeout.current);
    setShowTooltip(true);
  };

  const handleHideTooltip = () => {
    tooltipTimeout.current = setTimeout(() => {
      setShowTooltip(false);
    }, 100);
  };

  useEffect(() => {
    fetch("./projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/" className="font-bold text-xl">
              SN
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium transition-colors hover:text-purple-600"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="container mx-auto px-4 md:hidden py-4 border-t">
            <nav className="grid gap-2">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="flex items-center py-2 text-sm font-medium transition-colors hover:text-purple-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-10 md:py-16">
        {/* Profile Section */}
        <section id="profiili" className="py-12 space-y-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-gray-100">
              <img
                src="/kuva.jpeg"
                alt="Samuel Nummela"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tight">
                Samuel Nummela
              </h1>
              <p className="text-gray-500">Ohjelmistokehittäjä</p>
            </div>

            <p className="max-w-2xl text-center text-gray-500">
              Olen kolmannen vuoden{" "}
              <span className="font-medium">Ohjelmistokehittäjäopiskelija</span>
              , erityisesti kiinnostunut Web-kehityksestä. Olen tehnyt useita
              projekteja, joista osa on nähtävissä alapuolella.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://www.github.com/saow"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-100"
                onMouseEnter={(e) => handleShowTooltip("GitHub", e)}
                onMouseLeave={handleHideTooltip}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/samuelnummela"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-100"
                onMouseEnter={(e) => handleShowTooltip("LinkedIn", e)}
                onMouseLeave={handleHideTooltip}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href="mailto:samuelnummela06@gmail.com"
                onClick={handleCopyEmail}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-100"
                onMouseEnter={(e) => handleShowTooltip("Kopioi sähköposti", e)}
                onMouseLeave={handleHideTooltip}
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projektit" className="py-12">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Projektit</h2>
            </div>

            {projects.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={
                          project.image ||
                          "/placeholder.svg?height=200&width=400"
                        }
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="px-6 pb-6 pt-0 flex gap-3">
                      {project.github && (
                        <button
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-3 border border-gray-200 shadow-sm hover:bg-gray-100"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </button>
                      )}
                      {project.demo && (
                        <button
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-3 bg-purple-600 text-white hover:bg-purple-700"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-40 rounded-md border border-dashed">
                <p className="text-gray-500">Ladataan projekteja...</p>
              </div>
            )}
          </div>
        </section>

        {/* Skills Section */}
        <section id="taidot" className="py-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Taidot</h2>

            <div className="w-full">
              <div className="flex border-b">
                <button
                  onClick={() => setActiveTab("frontend")}
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === "frontend"
                      ? "border-b-2 border-purple-600 text-purple-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Frontend
                </button>
                <button
                  onClick={() => setActiveTab("backend")}
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === "backend"
                      ? "border-b-2 border-purple-600 text-purple-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Backend
                </button>
                <button
                  onClick={() => setActiveTab("testing")}
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === "testing"
                      ? "border-b-2 border-purple-600 text-purple-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Testaus
                </button>
                <button
                  onClick={() => setActiveTab("other")}
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === "other"
                      ? "border-b-2 border-purple-600 text-purple-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Muut
                </button>
              </div>

              <div className="mt-4 space-y-4">
                {activeTab === "frontend" && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      "React",
                      "JavaScript",
                      "Tailwind CSS",
                      "React Native",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 rounded-lg border p-3"
                      >
                        <Code2 className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "backend" && (
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {["PHP", "Python", "C#", "Node.js", "MySQL"].map(
                      (skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 rounded-lg border p-3"
                        >
                          <Code2 className="h-4 w-4 text-purple-600" />
                          <span className="text-sm font-medium">{skill}</span>
                        </div>
                      )
                    )}
                  </div>
                )}

                {activeTab === "testing" && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["Cypress", "Jest"].map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 rounded-lg border p-3"
                      >
                        <Code2 className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "other" && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      "Git",
                      "Docker",
                      "Unity",
                      "AWS",
                      "Azure",
                      "Linux",
                      "Windows",
                      "MacOS",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 rounded-lg border p-3"
                      >
                        <Code2 className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="yhteystiedot" className="py-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Yhteystiedot</h2>

            <div className="rounded-lg border bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
                <Mail className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Ota yhteyttä</h3>
              <p className="mt-2 text-gray-500">
                Voit ottaa minuun yhteyttä sähköpostitse
              </p>
              <button
                className="mt-4 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 h-10"
                onClick={handleCopyEmail}
              >
                samuelnummela06@gmail.com
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Samuel Nummela. Kaikki oikeudet
            pidätetään.
          </p>
        </div>
      </footer>

      {/* Custom Tooltip */}
      {showTooltip && (
        <div
          className="absolute z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md shadow-sm"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
            transform: "translateX(-50%)",
          }}
        >
          {tooltipContent}
          <div className="absolute -top-1 left-1/2 w-2 h-2 bg-gray-900 transform -translate-x-1/2 rotate-45" />
        </div>
      )}

      {/* Custom Toast */}
      {showToast && (
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-lg bg-white p-4 shadow-md border border-gray-200">
          <div className="grid gap-1">
            <h5 className="text-sm font-semibold">Email kopioitu</h5>
            <p className="text-sm text-gray-500">
              Sähköpostiosoite kopioitu leikepöydälle
            </p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="ml-4 rounded-md p-1 text-gray-400 hover:text-gray-500"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
