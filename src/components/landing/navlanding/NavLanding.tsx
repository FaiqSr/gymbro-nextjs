"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const sections = [
    { id: "Beranda", label: "Beranda" },
    { id: "Tentang", label: "Tentang" },
    { id: "Fitur", label: "Fitur" },
    { id: "Layanan", label: "Layanan" },
    { id: "Kontak", label: "Kontak" },
];

const NavLanding = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("Beranda");
    useEffect(() => {
        const handleScroll = () => {
            let tempat = "Beranda";
            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) {
                        tempat = section.id;
                    }
                }
            }
            setActive(tempat);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-2 sm:top-5 left-[50%] -translate-x-[50%] bg-[#D9D9D9]/20 shadow-amber-50 w-full max-w-[1500px] h-[64px] sm:h-[90px] px-2 sm:px-6 py-2 sm:py-3 rounded-full flex justify-between items-center mx-auto backdrop-blur-lg z-50">
            <div className="flex items-center">
                <Image src="/logo.svg" alt="logo" className="w-20 h-20 sm:w-35 sm:h-35 pl-1 sm:pl-3" width={100} height={100}/>
            </div>
            <div className="hidden md:flex gap-1 items-center">
                {sections.map((section) => (
                    <a key={section.id} href={`#${section.id}`} className={`relative font-medium text-[16px] sm:text-[20px] md:text-[23px] text-[#FFFFFF] flex flex-col items-center justify-center rounded-[50px] w-[90px] sm:w-[120px] md:w-[150px] h-[40px] sm:h-[50px] md:h-[60px] ${active === section.id ? "font-bold bg-[#D9D9D9]/10 border border-[#D9D9D9]/30" : ""}`}>
                        {section.label} <div className={`w-20 h-1 absolute -bottom-2 left-[50%] -translate-x-[50%] rounded-full transition ${active === section.id? "opacity-100" : "opacity-0"}`}></div>
                    </a>
                ))}
            </div>
            <div className="md:hidden flex items-center p-5">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-[30px] focus:outline-none">
                    {menuOpen ? <FaTimes /> : <FaBars />} 
                </button>
            </div>
            <div className="hidden md:block">
                <button className="bg-[#8B8B8B]/70 text-[#FFFFFF] text-[16px] sm:text-[20px] md:text-[25px] font-semibold px-5 sm:px-4 py-1 sm:py-2 w-[100px] sm:w-[140px] md:w-[180px] h-[40px] sm:h-[56px] md:h-[72px] rounded-[50px] transition">Daftar</button>
            </div>
            {menuOpen && (
                <div className="absolute top-[70px] left-0 w-full bg-gradient-to-br from-[#4f0a09] to-[#860305]/95 backdrop-blur-2xl bg-opacity-95 flex flex-col items-center gap-2 py-10 pl-5 rounded-br-[70px] rounded-bl-[70px] rounded-tl-[70px] shadow-lg md:hidden animate-fade-in">
                    {sections.map((section) => (
                        <a onClick={() => setMenuOpen(false)} key={section.id} href={`#${section.id}`} className={`font-medium text-[18px] text-[#FFFFFF] py-2 px-6 w-full text-left ${active === section.id ? "font-bold bg-[#D9D9D9]/10 border border-[#D9D9D9]/30 rounded-l-[50px]" : ""}`}>
                            {section.label} <span className={`ml-2 rounded-full transition ${active === section.id ? "opacity-100" : "opacity-0"}`}></span>
                        </a>
                    ))}
                    <button className="mt-4 bg-[#724040] text-[#FFFFFF] text-[20px] font-semibold px-6 py-2 w-[310px] h-[55px] rounded-br-[50px] rounded-bl-[50px] rounded-tl-[50px] transition">Daftar</button>
                </div>
            )}
        </nav>
    );
};

export default NavLanding;