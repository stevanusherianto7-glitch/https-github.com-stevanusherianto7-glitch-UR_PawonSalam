import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { formatRupiah } from '../utils';
import { downloadAsPDF } from '../pdfUtils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

export default function Produk() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  const MOCK_DATA = [
    { name: 'Nasi Goreng Mawut', category: 'Makanan', sku: '', qty: 4, refundQty: 0, gross: 120000, discount: 3000, refund: 0, tax: 11700, service: 0, extra: 0, net: 117000, total: 128700, cogs: 74000, profitAfterTop: 54700, grossProfit: 43000, margin: '58.11%' },
    { name: 'Air Mineral', category: 'Minuman', sku: '', qty: 4, refundQty: 0, gross: 24000, discount: 0, refund: 0, tax: 2400, service: 0, extra: 0, net: 24000, total: 26400, cogs: 0, profitAfterTop: 26400, grossProfit: 24000, margin: '100%' },
    { name: 'Emping', category: 'Makanan', sku: '', qty: 4, refundQty: 0, gross: 24000, discount: 0, refund: 0, tax: 2400, service: 0, extra: 0, net: 24000, total: 26400, cogs: 0, profitAfterTop: 26400, grossProfit: 24000, margin: '100%' },
    { name: 'Nasi Rawon', category: 'Makanan', sku: '', qty: 3, refundQty: 0, gross: 126000, discount: 0, refund: 0, tax: 12600, service: 0, extra: 0, net: 126000, total: 138600, cogs: 77880, profitAfterTop: 60720, grossProfit: 48120, margin: '61.79%' },
    { name: 'Teh Tawar', category: 'Minuman', sku: '', qty: 3, refundQty: 0, gross: 13500, discount: 0, refund: 0, tax: 1350, service: 0, extra: 0, net: 13500, total: 14850, cogs: 0, profitAfterTop: 14850, grossProfit: 13500, margin: '100%' },
  ];

  return (
    <div className="p-8 bg-[#FAFAFA] min-h-full flex flex-col">
      <div id="produk-report" className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#fdf2f8] px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Penjualan Per Produk</h2>
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
              onClick={() => downloadAsPDF('produk-report', 'Penjualan_Per_Produk')}
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
                <th className="py-2.5 px-4 font-medium text-gray-800">Category</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">SKU</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Qty</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Refund<br/>Qty</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Gross<br/>Sales</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Discount</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Refund</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Tax</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Service</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Extra<br/>Charge</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Net Sales</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Total<br/>Collected</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">COGS</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Gross<br/>Profit<br/>After Tax</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Gross<br/>Profit</th>
                <th className="py-2.5 px-4 font-medium text-gray-800">Gross<br/>Margin</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_DATA.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="py-2.5 px-4 text-[13px] text-center">{idx + 1}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.name}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.category}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.sku}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.qty}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.refundQty}</td>
                  <td className="py-2.5 px-4 text-[13px]">{formatRupiah(item.gross)}</td>
                  <td className="py-2.5 px-4 text-[13px]">{formatRupiah(item.discount)}</td>
                  <td className="py-2.5 px-4 text-[13px]">Rp {item.refund}</td>
                  <td className="py-2.5 px-4 text-[13px]">{formatRupiah(item.tax)}</td>
                  <td className="py-2.5 px-4 text-[13px]">Rp {item.service}</td>
                  <td className="py-2.5 px-4 text-[13px]">Rp {item.extra}</td>
                  <td className="py-2.5 px-4 text-[13px]">{formatRupiah(item.net)}</td>
                  <td className="py-2.5 px-4 text-[13px]">{formatRupiah(item.total)}</td>
                  <td className="py-2.5 px-4 text-[13px]">{formatRupiah(item.cogs)}</td>
                  <td className="py-2.5 px-4 text-[13px]">{formatRupiah(item.profitAfterTop)}</td>
                  <td className="py-2.5 px-4 text-[13px]">{formatRupiah(item.grossProfit)}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.margin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 flex justify-end text-sm text-gray-500 items-center gap-4">
          <span>5 rows &nbsp; ▾</span>
          <div className="flex gap-2">
            <span className="cursor-not-allowed text-gray-300">{'|<'}</span>
            <span className="cursor-not-allowed text-gray-300">{'<'}</span>
            <span>1-5 of 18</span>
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
