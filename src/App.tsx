/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Search, HelpCircle, ChevronLeft, ChevronRight, Ship, GraduationCap, LayoutGrid, Bell, Settings, LogOut } from "lucide-react";
import { motion } from "motion/react";

interface Ders {
  kodu: string;
  adi: string;
  qrup: string;
  kredit: number;
  notlar: (number | null)[];
  araliq: number | null;
  araliqYuzde: string | null;
  final: number | null;
  orta: number | null;
}

const INITIAL_DERSLER: Ders[] = [
  {
    kodu: "MGT 101",
    adi: "Karyera planlaması",
    qrup: "C",
    kredit: 3.0,
    notlar: [null, null, null, null, null],
    araliq: 25.0,
    araliqYuzde: "Aralıq % 30",
    final: null,
    orta: null,
  },
  {
    kodu: "CMS 215",
    adi: "Verilənlərin strukturu (12:30)",
    qrup: "D",
    kredit: 3.0,
    notlar: [null, null, null, null, null],
    araliq: null,
    araliqYuzde: null,
    final: null,
    orta: null,
  },
  {
    kodu: "MATH 310",
    adi: "Tətbiqi diferensial tənliklər (kəsir)",
    qrup: "A",
    kredit: 3.0,
    notlar: [null, null, null, null, null],
    araliq: null,
    araliqYuzde: null,
    final: null,
    orta: null,
  },
  {
    kodu: "MATH 318",
    adi: "Kompleks analiz",
    qrup: "B",
    kredit: 3.0,
    notlar: [null, null, null, null, null],
    araliq: 7.5,
    araliqYuzde: "Aralıq % 30",
    final: null,
    orta: null,
  },
  {
    kodu: "MATH 329",
    adi: "Ədədi təhlil",
    qrup: "B",
    kredit: 3.0,
    notlar: [null, null, null, null, null],
    araliq: 17.0,
    araliqYuzde: "Aralıq % 30",
    final: null,
    orta: null,
  },
  {
    kodu: "CMS 414",
    adi: "Qurğuların (əşyaların) interneti",
    qrup: "B",
    kredit: 3.0,
    notlar: [null, null, null, null, null],
    araliq: null,
    araliqYuzde: null,
    final: null,
    orta: null,
  },
];

export default function App() {
  const [selectedYear, setSelectedYear] = useState<"2025" | "2026">("2026");
  const [selectedSemester, setSelectedSemester] = useState<"payiz" | "yaz" | "mini-yaz" | "yay">("yaz");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dersler, setDersler] = useState<Ders[]>(INITIAL_DERSLER);

  const semesterOptions = [
    { id: "payiz", label: "Payız" },
    { id: "yaz", label: "Yaz" },
    { id: "mini-yaz", label: "Mini Yaz" },
    { id: "yay", label: "Yay" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex font-sans">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-20 md:w-24" : "w-0"
        } bg-[#003366] flex flex-col items-center py-8 transition-all duration-300 relative shrink-0 z-20`}
      >
        {sidebarOpen && (
          <>
            {/* Logo - Khazar University Brand */}
            <div className="mb-8">
              <div className="w-14 h-14 bg-white rounded-full flex flex-col items-center justify-center p-1 shadow-xl border-2 border-[#003366]">
                <Ship className="w-8 h-8 text-[#003366]" />
                <span className="text-[8px] font-black leading-none text-[#003366]">KHAZAR</span>
              </div>
            </div>

            {/* Navigation Icons */}
            <div className="flex flex-col gap-6 items-center">
              <SidebarIcon icon={GraduationCap} label="OBIS" active />
              <SidebarIcon icon={LayoutGrid} label="Panel" />
              <SidebarIcon icon={Bell} label="Bildirişlər" />
              <SidebarIcon icon={Settings} label="Ayarlar" />
            </div>

            <div className="mt-auto flex flex-col gap-6 items-center mb-4">
              <button
                onClick={() => setSidebarOpen(false)}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <SidebarIcon icon={LogOut} label="Çıxış" color="text-red-400" />
            </div>
          </>
        )}

        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#003366] rounded-full flex items-center justify-center text-white hover:bg-[#004488] transition-colors shadow-lg z-30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto flex flex-col h-screen">
        {/* Top bar like in image */}
        <div className="bg-white px-8 py-3 border-b flex justify-between items-center shrink-0">
          <div className="bg-[#8b1a8b] text-white px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase">
            TƏDBİR TƏ
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-[#003366] shadow-sm"></div>
              <div className="w-5 h-5 rounded-full bg-red-600 shadow-sm"></div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-5xl border border-gray-200"
          >
            {/* Card Header */}
            <div className="bg-[#8fa4c0] px-6 py-4 flex items-center justify-between border-b border-gray-300">
              <div className="flex items-center gap-3 text-[#1e3a5f]">
                <div className="bg-white/20 p-1.5 rounded">
                  <ChevronRight className="w-5 h-5 rotate-90" />
                </div>
                <h2 className="font-bold text-lg tracking-tight">Semestralıq Ballar</h2>
              </div>
              <HelpCircle className="w-6 h-6 text-[#1e3a5f] cursor-pointer hover:opacity-70 transition-opacity" />
            </div>

            {/* Filters Section */}
            <div className="p-6 bg-gray-50/50 flex flex-wrap items-center gap-6 border-b border-gray-100">
              <span className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Tədris ili və semestr</span>

              {/* Year Selector */}
              <div className="flex bg-gray-200 p-1 rounded-lg">
                {(["2025", "2026"] as const).map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-5 py-2 rounded-md text-sm font-bold transition-all ${
                      selectedYear === year
                        ? "bg-white text-[#1e3a5f] shadow-md"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>

              {/* Semesters */}
              <div className="flex gap-5 items-center">
                {semesterOptions.map((sem) => (
                  <label
                    key={sem.id}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedSemester === sem.id ? 'border-blue-600 bg-blue-600' : 'border-gray-300 group-hover:border-gray-400'
                    }`}>
                      {selectedSemester === sem.id && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <input
                      type="radio"
                      name="semester"
                      className="hidden"
                      checked={selectedSemester === sem.id}
                      onChange={() => setSelectedSemester(sem.id as any)}
                    />
                    <span className="text-sm font-medium text-gray-700">{sem.label}</span>
                  </label>
                ))}
              </div>

              {/* Search */}
              <button className="ml-auto flex items-center gap-2 bg-black text-white px-8 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-lg shadow-black/10">
                <Search className="w-4 h-4" />
                <span className="text-sm">Sorğula</span>
              </button>
            </div>

            {/* Table Area */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100/80 text-gray-700">
                    <th className="px-4 py-4 text-left font-bold border border-gray-200 uppercase text-[11px] tracking-widest w-24">Dərs kodu</th>
                    <th className="px-4 py-4 text-left font-bold border border-gray-200 uppercase text-[11px] tracking-widest">Dərs adı</th>
                    <th className="px-4 py-4 text-center font-bold border border-gray-200 uppercase text-[11px] tracking-widest w-16">Qrup</th>
                    <th className="px-4 py-4 text-center font-bold border border-gray-200 uppercase text-[11px] tracking-widest w-20">Kredit</th>
                    {[5, 4, 3, 2, 1].map((num) => (
                      <th key={num} className="px-3 py-4 text-center font-bold border border-gray-200 w-12 bg-gray-100/50">{num}</th>
                    ))}
                    <th className="px-4 py-4 text-center font-bold border border-gray-200 uppercase text-[11px] tracking-widest w-24 bg-gray-200/50">Aralıq</th>
                    <th className="px-4 py-4 text-center font-bold border border-gray-200 uppercase text-[11px] tracking-widest w-20">Final</th>
                    <th className="px-4 py-4 text-center font-bold border border-gray-200 uppercase text-[11px] tracking-widest w-20">Orta</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {dersler.map((ders, index) => (
                    <tr
                      key={ders.kodu}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                    >
                      <td className="px-4 py-4 border border-gray-200 font-bold text-[#1e3a5f]">{ders.kodu}</td>
                      <td className="px-4 py-4 border border-gray-200 text-gray-700 font-medium">{ders.adi}</td>
                      <td className="px-4 py-4 border border-gray-200 text-center font-bold text-gray-800">{ders.qrup}</td>
                      <td className="px-4 py-4 border border-gray-200 text-center text-gray-600 font-medium">{ders.kredit.toFixed(1).replace('.', ',')}</td>
                      {[0, 1, 2, 3, 4].map((i) => (
                        <td key={i} className="px-2 py-4 border border-gray-200 text-center bg-gray-300/20"></td>
                      ))}
                      <td className="px-4 py-4 border border-gray-200 text-center bg-gray-200/20">
                        {ders.araliq !== null ? (
                          <div className="flex flex-col items-center">
                            <span className="font-bold text-[#1e3a5f]">{ders.araliq.toFixed(1).replace('.', ',')}</span>
                            {ders.araliqYuzde && (
                              <span className="text-[10px] text-gray-500 font-medium mt-1 leading-tight">
                                {ders.araliqYuzde}
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="text-gray-400 font-bold">-</span>
                        )}
                      </td>
                      <td className="px-4 py-4 border border-gray-200 text-center text-gray-400 font-medium">-</td>
                      <td className="px-4 py-4 border border-gray-200 text-center text-gray-400 font-bold">-</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Footer info */}
        <div className="bg-[#1e3a5f] text-gray-400 text-[10px] py-1.5 px-6 flex justify-between uppercase tracking-wider font-mono shrink-0">
          <span>Khazar University OBIS | System Online</span>
          <span>Sessiya Aktivdir</span>
        </div>
      </div>
    </div>
  );
}

function SidebarIcon({ icon: Icon, label, active, color }: { icon: any, label: string, active?: boolean, color?: string }) {
  return (
    <div className={`p-4 rounded-2xl cursor-pointer transition-all relative group ${
      active ? 'bg-white/15 text-white shadow-lg' : 'text-gray-300 hover:text-white hover:bg-white/10'
    } ${color || ''}`}>
      <Icon size={24} strokeWidth={active ? 2.5 : 2} />
      <span className="absolute left-full ml-4 px-3 py-1.5 bg-gray-900 text-white text-[11px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-xl whitespace-nowrap z-50 pointer-events-none">
        {label}
      </span>
      {active && (
        <motion.div 
          layoutId="sidebar-indicator"
          className="absolute -right-1 top-1/4 h-1/2 w-1.5 bg-white rounded-l-full shadow-[0_0_10px_white]"
        />
      )}
    </div>
  );
}


