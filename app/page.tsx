"use client";
import ProjectCard from "./components/ProjectCard";
git--version
const projects = [
  {
    title: "WA Audit System",
    description: "AI-powered WhatsApp chat auditor for QA compliance. Handles 40+ audits daily with automated violation detection and scoring.",
    status: "LIVE IN PRODUCTION",
    sno: "001",
    category: "live",
  },
  {
    title: "QA Feedback Classifier",
    description: "Few-shot complaint classifier with severity ratings, batch processing, and tone detection across multiple channels.",
    status: "PORTFOLIO PIECE 3",
    sno: "002",
    category: "portfolio",

  },
  {
    title: "QA Coaching Assistant",
    description: "System prompt that generates constructive, SOP-referenced coaching notes for advisors after audit completion.",
    status: "IN PROGRESS",
    sno: "003",
    category: "progress",
  }
];
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-black font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-black dark:bg-black sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div className="w-24 h-1 bg-green-500 rounded-full mb-2"></div>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-10 tracking-tight text-green-400">
            AI Lab.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-400">
            QA analyst at{" "}
            <a
              href="https://joinditto.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline hover:text-green-300 transition-colors"
            >
              Ditto
            </a>{" "}
            building AI-powered audit systems and automated Ops.
            <br />
            Currently on a 6-month journey from zero to Automation engineer.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-300">

          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <button
            onClick={() => document.getElementById("my-work")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-green-500 px-5 text-black font-bold transition-colors hover:bg-green-400 whitespace-nowrap"
          >
            View My Work
          </button>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-green-500/[.3] px-5 text-green-400 transition-colors hover:bg-green-500/[.1] whitespace-nowrap text-md"
            href="https://www.linkedin.com/in/seraj-habib-49a099174/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect With Me
          </a>
        </div>
        <div id="my-work" className="w-full max-w-4xl mt-128">
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                status={project.status}
                sno={project.sno}
                category={project.category}
              />
            ))}
          </div>
        </div>
      </main >
    </div >
  );
}
