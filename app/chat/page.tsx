"use client";
import { useState } from "react";

const responses: { [key: string]: string } = {
    hello: "Hey there! I'm Seraj's AI Lab assistant. Ask me anything about his projects, skills, or journey.",
    hi: "Hey! Welcome to AI Lab. What would you like to know about Seraj's work?",
    projects: "Seraj has built 3 main projects so far:\n\n1. WA Audit System — AI-powered WhatsApp chat auditor handling 40+ daily audits at Ditto. Live in production.\n\n2. QA Feedback Classifier — Few-shot complaint classifier with severity ratings and batch processing.\n\n3. QA Coaching Assistant — System prompt that generates constructive coaching notes for advisors.",
    audit: "The WA Audit System is Seraj's flagship project. It's an AI-powered WhatsApp chat auditor built for QA compliance at Ditto Insurance. It handles 40+ daily audits, detects SLA breaches, flags wrong information, and generates compliance dashboards automatically.",
    classifier: "The QA Feedback Classifier uses few-shot prompting to categorize customer complaints by type, severity, and recommended action. It handles batch processing across multiple channels including Twitter, CSAT forms, and Google reviews.",
    coaching: "The QA Coaching Assistant takes completed audit results and generates constructive, SOP-referenced coaching notes for advisors. It acknowledges what the advisor did well before addressing violations.",
    skills: "Seraj's current skill set includes: Prompt Engineering, System Prompts, Few-Shot & Chain-of-Thought techniques, Claude & GPT, AI Automation, Next.js, Tailwind CSS, Git & GitHub, QA & Operations, and Data Analytics fundamentals.",
    background: "Seraj started in Quality Assurance, moved to Sales for a couple of years, then returned to QA at Ditto Insurance. He also has experience in technical analysis and trading on NASDAQ and Forex markets.",
    journey: "Seraj is on a structured 6-month AI roadmap. Currently in Phase 1 — mastering prompt engineering fundamentals, building production AI tools, and learning web development. The goal: go from someone who uses AI to someone who builds AI-powered systems.",
    ditto: "Ditto is a licensed digital insurance platform where Seraj works as a QA analyst. He audits customer conversations for compliance and has built AI tools that automate much of the QA process.",
    website: "This website was built from scratch in 7 days using Next.js, Tailwind CSS, and TypeScript. It features file-system routing, reusable components, dynamic rendering, interactive filters, smooth scrolling, and is deployed on Vercel.",
    contact: "You can reach Seraj on LinkedIn at linkedin.com/in/seraj-habib-49a099174 or check out his code on GitHub at github.com/serajautomated.",
    help: "You can ask me about:\n• Seraj's projects (audit system, classifier, coaching assistant)\n• His skills and tools\n• His background and journey\n• This website\n• How to contact him\n\nTry typing: projects, skills, journey, or website!",
};

function getResponse(input: string): string {
    const lower = input.toLowerCase().trim();
    for (const key in responses) {
        if (lower.includes(key)) {
            return responses[key];
        }
    }
    return "I'm not sure about that one. Try asking about projects, skills, journey, background, or website. Or type 'help' to see everything I can answer!";
}

export default function Chat() {
    const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([
        { text: "Hey! I'm the AI Lab assistant. Ask me anything about Seraj's work, projects, or journey. Type 'help' to see what I can answer!", sender: "bot" },
    ]);
    const [input, setInput] = useState("");

    function handleSend() {
        if (!input.trim()) return;
        const userMsg = { text: input, sender: "user" as const };
        const botMsg = { text: getResponse(input), sender: "bot" as const };
        setMessages((prev) => [...prev, userMsg, botMsg]);
        setInput("");
    }

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <div className="max-w-2xl w-full mx-auto flex flex-col flex-1 p-4 pt-8">
                <div className="mb-6">
                    <div className="w-16 h-1 bg-green-500 rounded-full mb-4"></div>
                    <h1 className="text-3xl font-bold text-green-400">Let's Chat</h1>
                    <p className="text-zinc-500 text-sm mt-1">Ask me anything about Seraj's projects, skills, or journey.</p>
                </div>
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                    {messages.map((msg, i) => (
                        <div key={i} className={msg.sender === "user" ? "flex justify-end" : "flex justify-start"}>
                            <div className={msg.sender === "user" ? "bg-green-600 text-white px-4 py-3 rounded-2xl rounded-br-sm max-w-sm" : "bg-gray-800 text-zinc-300 px-4 py-3 rounded-2xl rounded-bl-sm max-w-sm whitespace-pre-line"}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex gap-3 pb-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Type a message..."
                        className="flex-1 bg-gray-900 border border-gray-700 rounded-full px-5 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-green-500 transition-colors"
                    />
                    <button onClick={handleSend} className="bg-green-500 text-black font-bold px-6 py-3 rounded-full hover:bg-green-400 transition-colors whitespace-nowrap">Send</button>
                </div>
            </div>
        </div>
    );
}