import React, { useState } from 'react';
import { downloadAsPDF } from '../pdfUtils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

export default function Tipe() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  const handleDownload = () => {
    downloadAsPDF('tipe-report', 'Tipe_Transaksi_Report');
  };

  const MOCK_DATA = [
    { name: 'Dine In', value: 7 },
    { name: 'Takeaway', value: 2 },
    { name: 'Delivery', value: 0 },
    { name: 'Preorder', value: 0 },
  ];

  const total = MOCK_DATA.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="p-8 bg-[#FAFAFA] min-h-full flex flex-col">
      <div id="tipe-report" className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#fdf2f8] px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Tipe Transaksi</h2>
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
              onClick={handleDownload}
              className="bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all hover:bg-gray-50 transition-colors no-print"
            >
              Download
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-left text-[13px] text-gray-600">
              <tbody>
                {MOCK_DATA.map((item, i) => (
                  <tr key={i} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium">{item.name}</td>
                    <td className="px-6 py-4 w-1">{item.value}</td>
                  </tr>
                ))}
                {/* Total */}
                <tr className="border-t-2 border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-800">Total</td>
                  <td className="px-6 py-4 font-bold text-gray-800 w-1">{total}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <UbahRangeTanggalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSelectRange={(range) => setDateRange(range)} 
      />
    </div>
  );
}
