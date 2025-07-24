import { FaDumbbell } from "react-icons/fa";

// Data contoh untuk suggestion cards
const suggestions = [
  { title: "Program Latihan", description: "Buat jadwal latihan untuk pemula" },
  { title: "Nutrisi", description: "Rekomendasi makanan setelah olahraga" },
  { title: "Istirahat", description: "Pentingnya istirahat untuk otot" },
];

const ChatSuggestions = () => {
  return (
    // Menggunakan 'flex-wrap' agar item bisa pindah baris
    <div className="flex flex-wrap gap-3 justify-center mx-auto px-4">
      {suggestions.map((item, i) => (
        <div
          key={i}
          className="bg-stone-900/80 p-4 rounded-2xl flex flex-col justify-between
                     w-full sm:w-[220px] h-36 lg:h-40
                     hover:bg-stone-800 transition-colors cursor-pointer"
        >
          <div>
            <FaDumbbell className="text-red-500 mb-2" size={20} />
            <h3 className="font-bold text-white">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatSuggestions;
