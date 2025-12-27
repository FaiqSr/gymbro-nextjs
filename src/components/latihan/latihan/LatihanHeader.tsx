interface HeaderProps {
  title: string;
  subtitle: string;
  date: string;
}

export default function LatihanHeader({ title, subtitle, date }: HeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          {title} <span className="text-red-500">Latihan</span>
        </h1>
        <p className="text-gray-400 text-lg">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-xl px-6 py-3 rounded-full border border-slate-700">
        <span className="text-gray-300 font-medium">Hari ini:</span>
        <span className="text-white font-semibold">{date}</span>
      </div>
    </div>
  );
}
