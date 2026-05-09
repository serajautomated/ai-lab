"use client";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";

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
    },
];

export default function Projects() {
    const [filter, setFilter] = useState("all");

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter);

    return (
        <div className="flex flex-col items-center min-h-screen bg-black text-white p-8 pt-16">
            <h1 className="text-4xl font-bold text-green-400 mb-8">My Projects</h1>
            <div className="flex gap-3 mb-8">
                <button onClick={() => setFilter("all")} className={filter === "all" ? "bg-green-500 text-black px-4 py-2 rounded-full font-bold text-sm" : "border border-gray-600 text-gray-400 px-4 py-2 rounded-full text-sm hover:border-green-500 hover:text-green-400 transition-colors"}>
                    All
                </button>
                <button onClick={() => setFilter("live")} className={filter === "live" ? "bg-green-500 text-black px-4 py-2 rounded-full font-bold text-sm" : "border border-gray-600 text-gray-400 px-4 py-2 rounded-full text-sm hover:border-green-500 hover:text-green-400 transition-colors"}>
                    Live
                </button>
                <button onClick={() => setFilter("progress")} className={filter === "progress" ? "bg-green-500 text-black px-4 py-2 rounded-full font-bold text-sm" : "border border-gray-600 text-gray-400 px-4 py-2 rounded-full text-sm hover:border-green-500 hover:text-green-400 transition-colors"}>
                    In Progress
                </button>
                <button onClick={() => setFilter("portfolio")} className={filter === "portfolio" ? "bg-green-500 text-black px-4 py-2 rounded-full font-bold text-sm" : "border border-gray-600 text-gray-400 px-4 py-2 rounded-full text-sm hover:border-green-500 hover:text-green-400 transition-colors"}>
                    Portfolio
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                {filteredProjects.map((project, index) => (
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
    );
}
