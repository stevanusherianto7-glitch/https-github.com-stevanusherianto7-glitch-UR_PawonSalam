import React, { useState } from 'react';
import { Search, ListFilter } from 'lucide-react';
import { downloadAsPDF } from '../pdfUtils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

export default function LaporanShift() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  const MOCK_DATA = [
    { no: 1, cabang: 'Pawon Salam', mulai: '6 Mei 2026, 10.01.57', selesai: '6 Mei 2026, 21.07.04', pic: 'Sansan', karyawan: 1, kasAwal: 'Rp 664.149', pemasukanTunai: 'Rp 159.400', tunaiAktual: 'Rp 159.400' }
  ];

  return (
    <div className="p-8 bg-[#FAFAFA] min-h-full flex flex-col">
      <div id="shift-report" className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#fdf2f8] px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Laporan Shift</h2>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Tanggal :</span>
              <div 
                className="bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all cursor-pointer hover:bg-gray-50"
                onClick={() => setIsModalOpen(true)}
              >
                {dateRange}
              </div>
            </div>
            <button 
              onClick={() => downloadAsPDF('shift-report', 'Laporan_Shift')}
              className="bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all hover:bg-gray-50 transition-colors no-print"
            >
              Download
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-100 flex justify-end">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search" 
              className="pl-9 pr-4 py-1.5 border-b border-gray-300 text-sm focus:outline-none focus:border-[#e11d48] w-64"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto flex-1 flex flex-col">
          <table className="w-full text-left text-[13px] text-gray-700">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2.5 px-4 font-bold text-gray-800">No</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Nama Cabang</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Mulai</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Selesai</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">PIC</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Karyawan</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Kas Awal</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Pemasukan Tunai</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Tunai Aktual</th>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-2">
                  <div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={18} className="text-gray-700 mb-1" />
                    <div className="border-b border-black w-full"></div>
                  </div>
                </th>
                <th className="px-4 py-2">
                  <div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={18} className="text-gray-700 mb-1" />
                    <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                  </div>
                </th>
                <th className="px-4 py-2">
                  <div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={18} className="text-gray-700 mb-1" />
                    <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                  </div>
                </th>
                <th className="px-4 py-2">
                  <div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={18} className="text-gray-700 mb-1" />
                    <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                  </div>
                </th>
                <th className="px-4 py-2">
                  <div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={18} className="text-gray-700 mb-1" />
                    <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                  </div>
                </th>
                <th className="px-4 py-2">
                  <div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={18} className="text-gray-700 mb-1" />
                    <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                  </div>
                </th>
                <th className="px-4 py-2">
                  <div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={18} className="text-gray-700 mb-1" />
                    <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                  </div>
                </th>
                <th className="px-4 py-2">
                  <div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={18} className="text-gray-700 mb-1" />
                    <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                  </div>
                </th>
                <th className="px-4 py-2">
                  <div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={18} className="text-gray-700 mb-1" />
                    <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {MOCK_DATA.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="py-2.5 px-4 text-[13px]">{item.no}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.cabang}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.mulai}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.selesai}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.pic}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.karyawan}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.kasAwal}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.pemasukanTunai}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.tunaiAktual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      <UbahRangeTanggalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSelectRange={(range) => setDateRange(range)} 
      />
    </div>
  )
}