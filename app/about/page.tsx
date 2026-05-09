export default function About() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-3xl mx-auto px-8 py-16">
                <div className="mb-16">
                    <div className="w-16 h-1 bg-green-500 rounded-full mb-4"></div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-green-400 mb-4">About Me</h1>
                    <p className="text-xl text-zinc-400 font-light">The short version: QA analyst by day, AI engineer by night.</p>
                </div>
                <div className="space-y-12">
                    <div className="border-l-2 border-green-500 pl-6">
                        <h2 className="text-sm font-mono text-green-400 mb-2">THE MISSION</h2>
                        <p className="text-zinc-400 leading-8">Turning manual, repetitive work into smart, automated systems using prompt engineering and large language models. Not just using AI — building with it.</p>
                    </div>
                    <div className="border-l-2 border-green-500 pl-6">
                        <h2 className="text-sm font-mono text-green-400 mb-2">THE DAY JOB</h2>
                        <p className="text-zinc-400 leading-8">Quality Assurance at Ditto, a digital insurance company. I audit customer conversations for compliance — and I have built an AI system that does most of the heavy lifting for me now.</p>
                    </div>
                    <div className="border-l-2 border-green-500 pl-6">
                        <h2 className="text-sm font-mono text-green-400 mb-2">THE NIGHT SHIFT</h2>
                        <p className="text-zinc-400 leading-8">Deep inside a structured 6-month AI roadmap. Prompt frameworks, few-shot learning, chain-of-thought reasoning, system prompts. Next up: APIs, Python, and full-scale automation pipelines.</p>
                    </div>
                    <div className="border-l-2 border-green-500 pl-6">
                        <h2 className="text-sm font-mono text-green-400 mb-2">THE APPROACH</h2>
                        <p className="text-zinc-400 leading-8">Learn a technique. Break it on purpose. Fix it. Build something real with it. No fluff. No theory-only. Every concept ships as a working tool by the end of the day.</p>
                    </div>
                </div>
                <div className="mt-16 pt-16 border-t border-gray-800">
                    <h2 className="text-sm font-mono text-zinc-600 mb-8">BUILT SO FAR</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        <div>
                            <p className="text-3xl font-bold text-green-400">40+</p>
                            <p className="text-sm text-zinc-500">Daily audits automated</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-green-400">3</p>
                            <p className="text-sm text-zinc-500">AI tools deployed</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-green-400">5</p>
                            <p className="text-sm text-zinc-500">Portfolio pieces</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-green-400">1</p>
                            <p className="text-sm text-zinc-500">Website built from scratch</p>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-16 border-t border-gray-800">
                    <h2 className="text-sm font-mono text-zinc-600 mb-4">THE GOAL</h2>
                    <p className="text-2xl text-zinc-300 font-light leading-relaxed">Go from someone who uses AI to someone who builds AI-powered systems that solve real business problems — and help others do the same.</p>
                </div>
            </div>
        </div>
    );
}