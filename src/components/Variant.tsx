import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { downloadAsPDF } from '../pdfUtils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

export default function Variant() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  return (
    <div className="p-8 bg-[#FAFAFA] min-h-full flex flex-col">
      <div id="variant-report" className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#fdf2f8] px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Penjualan Per Variant</h2>
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
              onClick={() => downloadAsPDF('variant-report', 'Penjualan_Per_Variant')}
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
                <th className="py-2.5 px-4 font-medium text-gray-800 w-12 text-center">No.</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Nama</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Qty</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Refund Qty</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Gross Sales</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Diskon</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Refund</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Net Sales</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">COGS</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Gross Profit</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Gross Margin</th>
              </tr>
            </thead>
            <tbody>
              {/* Empty state */}
            </tbody>
          </table>
          <div className="flex-1 flex items-center justify-center text-sm text-gray-500 py-20">
            No records to display
          </div>
        </div>
        
        <div className="p-4 flex justify-end text-sm text-gray-500 items-center gap-4 border-t border-gray-100">
          <span>5 rows &nbsp; ▾</span>
          <div className="flex gap-2">
            <span className="cursor-not-allowed text-gray-300">{'|<'}</span>
            <span className="cursor-not-allowed text-gray-300">{'<'}</span>
            <span>0-0 of 0</span>
            <span className="cursor-not-allowed text-gray-300">{'>'}</span>
            <span className="cursor-not-allowed text-gray-300">{'>|'}</span>
          </div>
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
