import React, { useState } from 'react';
import { downloadAsPDF } from '../pdfUtils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

export default function Surcharge() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  return (
    <div className="p-8 bg-[#FAFAFA] min-h-full flex flex-col">
      <div id="surcharge-report" className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#fdf2f8] px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Laporan Surcharge</h2>
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
              onClick={() => downloadAsPDF('surcharge-report', 'Laporan_Surcharge')}
              className="bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all hover:bg-gray-50 transition-colors no-print"
            >
              Download
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] text-gray-700">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2.5 px-4 font-bold text-gray-800 w-12 text-center">#</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Nama</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Persen</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Harga diubah</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Total Transaksi</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Surcharge</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2.5 px-4" colSpan={4}></td>
                <td className="py-2.5 px-4 font-bold text-gray-800">Total</td>
                <td className="py-2.5 px-4 font-bold text-gray-800">Rp 0</td>
                <td className="py-2.5 px-4 font-bold text-gray-800">Rp 0</td>
                <td className="py-2.5 px-4 font-bold text-gray-800">Rp 0</td>
              </tr>
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
