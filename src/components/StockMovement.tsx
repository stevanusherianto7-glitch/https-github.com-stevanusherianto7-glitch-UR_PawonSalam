import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { downloadAsPDF } from '../pdfUtils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

export default function StockMovement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  return (
    <div className="p-8 bg-[#FAFAFA] min-h-full flex flex-col">
      <div id="stock-movement-report" className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#fdf2f8] px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Stock Movement</h2>
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
              onClick={() => downloadAsPDF('stock-movement-report', 'Stock_Movement')}
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
                <th className="py-2.5 px-4 font-bold text-gray-800">Jenis</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Kategori</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Nama</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Stok Awal</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">PO</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Pemakaian</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Penyesuaian</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Void</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Produksi</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Stok Akhir</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Satuan</th>
              </tr>
            </thead>
            <tbody>
              {/* Empty state */}
            </tbody>
          </table>
          <div className="flex-1 flex items-center justify-center text-sm text-gray-500 py-10">
            No records to display
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