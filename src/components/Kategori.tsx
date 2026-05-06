import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { formatRupiah } from '../utils';
import { downloadAsPDF } from '../pdfUtils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

export default function Kategori() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  return (
    <div className="p-8 bg-[#FAFAFA] min-h-full flex flex-col">
      <div id="kategori-report" className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#fdf2f8] px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Penjualan Per Kategori</h2>
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
              onClick={() => downloadAsPDF('kategori-report', 'Penjualan_Per_Kategori')}
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
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] text-gray-700">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2.5 px-4 font-medium text-gray-800 w-12 text-center">No.</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Name</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Qty</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Refund Qty</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Gross Sales</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Discount</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Refund</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Tax</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Service</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Extra<br/>Charge</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Net Sales</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Total<br/>Collected</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">COGS</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Gross Profit<br/>With Tax &<br/>Service</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Gross<br/>Profit</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Gross<br/>Margin</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 px-4 text-[13px] text-center">1</td>
                <td className="py-2.5 px-4 text-[13px]">Makanan</td>
                <td className="py-2.5 px-4 text-[13px]">27</td>
                <td className="py-2.5 px-4 text-[13px]">0</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(657908)}</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(3000)}</td>
                <td className="py-2.5 px-4 text-[13px]">Rp 0</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(65490)}</td>
                <td className="py-2.5 px-4 text-[13px]">Rp 0</td>
                <td className="py-2.5 px-4 text-[13px]">Rp 0</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(654908)}</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(720398)}</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(373795)}</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(346603)}</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(281113)}</td>
                <td className="py-2.5 px-4 text-[13px]">75.21%</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 px-4 text-[13px] text-center">2</td>
                <td className="py-2.5 px-4 text-[13px]">Minuman</td>
                <td className="py-2.5 px-4 text-[13px]">9</td>
                <td className="py-2.5 px-4 text-[13px]">0</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(56500)}</td>
                <td className="py-2.5 px-4 text-[13px]">Rp 0</td>
                <td className="py-2.5 px-4 text-[13px]">Rp 0</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(5650)}</td>
                <td className="py-2.5 px-4 text-[13px]">Rp 0</td>
                <td className="py-2.5 px-4 text-[13px]">Rp 0</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(56500)}</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(62150)}</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(3000)}</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(59150)}</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(53500)}</td>
                <td className="py-2.5 px-4 text-[13px]">1783.33%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="p-4 flex justify-end text-sm text-gray-500 items-center gap-4">
          <span>5 rows &nbsp; ▾</span>
          <div className="flex gap-2">
            <span className="cursor-not-allowed text-gray-300">{'|<'}</span>
            <span className="cursor-not-allowed text-gray-300">{'<'}</span>
            <span>1-2 of 2</span>
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
