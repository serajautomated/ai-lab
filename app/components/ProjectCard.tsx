export default function ProjectCard({ title, description, status, sno, category }: {
    title: string;
    description: string;
    status: string;
    sno: string
    category: string;
}) {
    return (
        <div className="border border-gray-700 rounded-lg p-6 bg-gray-900 hover:border-green-500 transition-colors">
            <span className="text-xs text-gray-500 font-mono mb-1 block">{sno}</span>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 mb-3">{description}</p>
            <span className="text-sm text-green-400 font-mono">{status}</span>
        </div>
    );
}