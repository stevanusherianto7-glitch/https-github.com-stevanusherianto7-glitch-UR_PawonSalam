import React, { useState } from 'react';
import { formatRupiah } from '../utils';
import { downloadAsPDF } from '../pdfUtils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

export default function PemasukanPajak() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  return (
    <div className="p-8 bg-[#FAFAFA] min-h-full flex flex-col">
      <div id="pajak-report" className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden flex-1 flex flex-col items-start w-full">
        {/* Header */}
        <div className="bg-[#fdf2f8] w-full px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Pajak</h2>
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
              onClick={() => downloadAsPDF('pajak-report', 'Laporan_Pajak')}
              className="bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all hover:bg-gray-50 transition-colors no-print"
            >
              Download
            </button>
          </div>
        </div>

        <div className="p-6 w-full">
          <table className="w-full text-left text-[13px] text-gray-700">
            <tbody>
              <tr className="border-b border-t border-gray-200">
                <td className="py-4 px-4 font-bold text-gray-800 w-64">Persentase Pajak</td>
                <td className="py-4 px-4">10%</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-4 font-bold text-gray-800">Jumlah Kena Pajak</td>
                <td className="py-4 px-4">{formatRupiah(711408)}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-4 font-bold text-gray-800">Pajak dipungut</td>
                <td className="py-4 px-4">{formatRupiah(71142)}</td>
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
