"use client";

import { FaBars, FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { VscHistory } from "react-icons/vsc";
import { useState, useEffect } from "react";

interface ChatHistory {
  id: string;
  title: string;
  timestamp: Date;
}

const ChatBotAside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const chatHistory: ChatHistory[] = [
    { id: "1", title: "Tips latihan untuk pemula", timestamp: new Date() },
    {
      id: "2",
      title: "Program nutrisi untuk definisi otot",
      timestamp: new Date(Date.now() - 86400000),
    },
    {
      id: "3",
      title: "Cara meningkatkan stamina",
      timestamp: new Date(Date.now() - 172800000),
    },
  ];

  return (
    <aside className="fixed top-0 right-0 h-screen z-50">
      {!isOpen && (
        <button
          onClick={handleToggle}
          className="absolute top-6 right-6 z-50 p-3 cursor-pointer bg-gradient-to-br from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/30"
        >
          <FaBars size={20} />
        </button>
      )}

      {isOpen && (
        <>
          <div className="absolute top-0 right-0 h-full w-80 bg-gradient-to-b from-slate-900 to-slate-950 border-l border-slate-700/50 backdrop-blur-xl flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center p-6 border-b border-slate-700/50">
              <h2 className="text-xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Chat History
              </h2>
              <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors duration-300 text-gray-400 hover:text-white cursor-pointer">
                <IoMdClose size={24} onClick={handleOverlayClick} />
              </button>
            </div>

            <div className="flex-1 flex flex-col overflow-hidden p-6 space-y-4">
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 group cursor-pointer">
                <FaPlus className="group-hover:scale-110 transition-transform" />
                <span>Obrolan Baru</span>
              </button>

              <input
                type="text"
                placeholder="Cari percakapan..."
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all duration-300"
              />

              <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 sticky top-0">
                  <VscHistory className="inline mr-2" />
                  Riwayat Percakapan
                </p>

                {chatHistory.length > 0 ? (
                  chatHistory.map((chat) => (
                    <button
                      key={chat.id}
                      className="w-full text-left p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 group cursor-pointer"
                    >
                      <p className="text-sm font-medium text-white group-hover:text-red-400 transition-colors truncate">
                        {chat.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {chat.timestamp.toLocaleDateString("id-ID", {
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </button>
                  ))
                ) : (
                  <p className="text-sm text-gray-400 text-center py-8">
                    Tidak ada riwayat percakapan
                  </p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </aside>
  );
};

export default ChatBotAside;
