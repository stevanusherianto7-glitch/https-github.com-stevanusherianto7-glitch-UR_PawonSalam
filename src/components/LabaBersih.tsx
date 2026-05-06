import React, { useState } from 'react';
import { formatRupiah } from '../utils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';
import { downloadAsPDF } from '../pdfUtils';

export default function LabaBersih() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  return (
    <div className="p-8 bg-[#FAFAFA] min-h-full">
      <div id="laba-bersih-report" className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden mb-6">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Laba Bersih</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">Tanggal :</span>
             <div 
              className="bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all cursor-pointer hover:bg-gray-50"
              onClick={() => setIsModalOpen(true)}
            >
              {dateRange}
            </div>
            <button 
              className="bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all hover:bg-gray-50 transition-colors no-print"
              onClick={() => downloadAsPDF('laba-bersih-report', 'Laporan_Laba_Bersih')}
            >
              Download
            </button>
          </div>
        </div>

        <div className="p-6">
          <table className="w-full text-left border-collapse font-sans text-[13px]">
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 px-6 font-medium text-gray-800">Laba Kotor</td>
                <td className="py-2.5 px-6 font-medium text-gray-800 text-right">{formatRupiah(342895)}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 px-6 text-gray-600">Pemasukan</td>
                <td className="py-2.5 px-6 font-medium text-gray-800 text-right">Rp0</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 px-6 text-gray-600">Pengeluaran</td>
                <td className="py-2.5 px-6 font-medium text-gray-800 text-right">{formatRupiah(195800)}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 px-6 text-gray-600">Service</td>
                <td className="py-2.5 px-6 font-medium text-gray-800 text-right">Rp0</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 px-6 text-gray-600">Laba Kotor Setelah Service</td>
                <td className="py-2.5 px-6 font-medium text-gray-800 text-right">{formatRupiah(147095)}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 px-6 text-gray-600">Pajak</td>
                <td className="py-2.5 px-6 font-medium text-gray-800 text-right">{formatRupiah(60510)}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 px-6 text-gray-600">Laba Kotor Setelah Pajak dan Service</td>
                <td className="py-2.5 px-6 font-medium text-gray-800 text-right">{formatRupiah(86585)}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 px-6 text-gray-600">Operasional</td>
                <td className="py-2.5 px-6 font-medium text-gray-800 text-right">Rp0</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 px-6 text-gray-600">Biaya Layanan UR</td>
                <td className="py-2.5 px-6 font-medium text-gray-800 text-right">Rp0</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 px-6 text-gray-600">Biaya Ewallet</td>
                <td className="py-2.5 px-6 font-medium text-gray-800 text-right">Rp0</td>
              </tr>
              <tr className="bg-gray-100/50">
                <td className="py-2.5 px-6 font-medium text-gray-800">Laba Bersih</td>
                <td className="py-2.5 px-6 font-bold text-gray-800 text-right">{formatRupiah(86585)}</td>
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
