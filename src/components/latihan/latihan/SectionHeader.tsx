export default function SectionHeader() {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-1 w-10 bg-gradient-to-r from-red-600 to-orange-600 rounded-full"></div>
        <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
          Mulai Sekarang
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
        Pilih Latihan Anda
      </h2>
      <p className="text-gray-400 text-lg">
        Raih tubuh impian dengan program latihan yang dirancang khusus untuk
        Anda
      </p>
    </div>
  );
}
