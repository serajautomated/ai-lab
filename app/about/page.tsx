export default function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
            <h1 className="text-4xl font-bold text-green-400 mb-6">About Me</h1>
            <div className="max-w-lg text-center">
                <p className="text-lg text-zinc-400 leading-8 mb-4">
                    I'm an AI practitioner on a mission — turning manual, repetitive work into smart, automated systems using prompt engineering and large language models.
                </p>
                <p className="text-lg text-zinc-400 leading-8 mb-4">
                    By day, I work in Quality Assurance at a digital insurance company, where I audit customer conversations for compliance. By night, I'm deep inside a structured 6-month AI roadmap, learning how to make machines do the heavy lifting. Five days in, I've already built a QA feedback classifier that tags hundreds of customer complaints in seconds, and a WhatsApp audit automation system that's live and running — catching SLA breaches, flagging wrong information, and generating compliance dashboards that used to take hours by hand.
                </p>
                <p className="text-lg text-zinc-400 leading-8">
                    My approach is simple: learn a technique, break it on purpose, fix it, then build something real with it. No fluff. No theory-only. Every concept I learn ships as a working tool by the end of the day.
                </p>
                <p className="text-lg text-zinc-400 leading-8">
                    Right now I'm mastering prompt frameworks, few-shot learning, and chain-of-thought reasoning. Next up: prompt chaining, API integration, and full-scale AI pipelines. The goal? To go from someone who uses AI to someone who builds AI-powered systems that solve real business problems — and help others do the same.
                </p>
            </div>
        </div>
    );
}