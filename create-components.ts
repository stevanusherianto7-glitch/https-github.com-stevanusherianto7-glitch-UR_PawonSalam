import fs from 'fs';
import path from 'path';

const files = {
  'src/components/Kategori.tsx': `import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { formatRupiah } from '../utils';
import { downloadAsPDF } from '../pdfUtils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

export default function Kategori() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  return (
    <div className="p-8 bg-[#F8F9FB] min-h-full flex flex-col">
      <div id="kategori-report" className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#fdf2f8] px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-[28px] font-medium text-[#3B415A]">Penjualan Per Kategori</h2>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Tanggal :</span>
              <div 
                className="bg-white border text-sm font-medium text-gray-600 border-gray-200 px-4 py-2 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50"
                onClick={() => setIsModalOpen(true)}
              >
                {dateRange}
              </div>
            </div>
            <button 
              onClick={() => downloadAsPDF('kategori-report', 'Penjualan_Per_Kategori')}
              className="bg-white border border-gray-200 text-sm font-medium text-gray-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors no-print"
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
                <th className="py-2.5 px-4 font-medium text-[#3B415A] w-12 text-center">No.</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Name</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Qty</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Refund Qty</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Gross Sales</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Discount</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Refund</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Tax</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Service</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Extra<br/>Charge</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Net Sales</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Total<br/>Collected</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">COGS</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Gross Profit<br/>With Tax &<br/>Service</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Gross<br/>Profit</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Gross<br/>Margin</th>
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
`,
  'src/components/Produk.tsx': `import React, { useState } from 'react';
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
    <div className="p-8 bg-[#F8F9FB] min-h-full flex flex-col">
      <div id="produk-report" className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#fdf2f8] px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-[28px] font-medium text-[#3B415A]">Penjualan Per Produk</h2>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Tanggal :</span>
              <div 
                className="bg-white border text-sm font-medium text-gray-600 border-gray-200 px-4 py-2 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50"
                onClick={() => setIsModalOpen(true)}
              >
                {dateRange}
              </div>
            </div>
            <button 
              onClick={() => downloadAsPDF('produk-report', 'Penjualan_Per_Produk')}
              className="bg-white border border-gray-200 text-sm font-medium text-gray-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors no-print"
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
                <th className="py-2.5 px-4 font-medium text-[#3B415A] w-12 text-center">No.</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Name</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Category</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">SKU</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Qty</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Refund<br/>Qty</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Gross<br/>Sales</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Discount</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Refund</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Tax</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Service</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Extra<br/>Charge</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Net Sales</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Total<br/>Collected</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">COGS</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Gross<br/>Profit<br/>After Tax</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Gross<br/>Profit</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Gross<br/>Margin</th>
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
`,
  'src/components/Variant.tsx': `import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { formatRupiah } from '../utils';
import { downloadAsPDF } from '../pdfUtils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

export default function Variant() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  return (
    <div className="p-8 bg-[#F8F9FB] min-h-full flex flex-col">
      <div id="variant-report" className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#fdf2f8] px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-[28px] font-medium text-[#3B415A]">Penjualan Per Variant</h2>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Tanggal :</span>
              <div 
                className="bg-white border text-sm font-medium text-gray-600 border-gray-200 px-4 py-2 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50"
                onClick={() => setIsModalOpen(true)}
              >
                {dateRange}
              </div>
            </div>
            <button 
              onClick={() => downloadAsPDF('variant-report', 'Penjualan_Per_Variant')}
              className="bg-white border border-gray-200 text-sm font-medium text-gray-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors no-print"
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
                <th className="py-2.5 px-4 font-medium text-[#3B415A] w-12 text-center">No.</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Nama</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Qty</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Refund Qty</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Gross Sales</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Diskon</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Refund</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Net Sales</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">COGS</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Gross Profit</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Gross Margin</th>
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
`,
  'src/components/Bundle.tsx': `import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { formatRupiah } from '../utils';
import { downloadAsPDF } from '../pdfUtils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

export default function Bundle() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  return (
    <div className="p-8 bg-[#F8F9FB] min-h-full flex flex-col">
      <div id="bundle-report" className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#fdf2f8] px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-[28px] font-medium text-[#3B415A]">Penjualan Per Bundle</h2>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Tanggal :</span>
              <div 
                className="bg-white border text-sm font-medium text-gray-600 border-gray-200 px-4 py-2 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50"
                onClick={() => setIsModalOpen(true)}
              >
                {dateRange}
              </div>
            </div>
            <button 
              onClick={() => downloadAsPDF('bundle-report', 'Penjualan_Per_Bundle')}
              className="bg-white border border-gray-200 text-sm font-medium text-gray-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors no-print"
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
                <th className="py-2.5 px-4 font-medium text-[#3B415A] w-12 text-center">No.</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Name</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Category</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">SKU</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Qty</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Refund<br/>Qty</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Gross<br/>Sales</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Discount</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Refund</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Tax</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Service</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Extra<br/>Charge</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Net Sales</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Total<br/>Collected</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">COGS</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Gross<br/>Profit</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Gross<br/>Profit<br/>After Tax</th>
                <th className="py-2.5 px-4 font-medium text-[#3B415A]">Gross<br/>Margin</th>
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

        <div className="p-6 border-t border-gray-200">
          <h3 className="font-bold text-[#3B415A] mb-4 text-[15px]">Ringkasan</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left text-[13px] text-gray-700">
              <thead>
                <tr className="border-y border-gray-200">
                  <th className="py-2.5 px-2 font-bold text-[#3B415A] w-16">No</th>
                  <th className="py-2.5 px-2 font-bold text-[#3B415A]">Nama</th>
                  <th className="py-2.5 px-2 font-bold text-[#3B415A]">Jumlah</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2.5 px-2"></td>
                  <td className="py-2.5 px-2 font-bold text-[#3B415A]">Total</td>
                  <td className="py-2.5 px-2 font-bold text-[#3B415A]">Rp0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-[#3B415A] mb-4 text-[15px]">Rincian</h3>
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
`,
  'src/components/Meja.tsx': `import React, { useState } from 'react';
import { formatRupiah } from '../utils';
import { downloadAsPDF } from '../pdfUtils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

export default function Meja() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  const PENJUALAN_DATA = [
    { no: 1, nama: 'A7', jumlah: 191545 },
    { no: 2, nama: 'Delivery / Takeaway', jumlah: 144909 },
    { no: 3, nama: 'A9', jumlah: 101545 },
    { no: 4, nama: 'A6', jumlah: 73409 },
    { no: 5, nama: 'A4', jumlah: 73000 },
    { no: 6, nama: 'A1', jumlah: 130000 },
  ];

  const TRANSAKSI_DATA = [
    { no: 1, nama: 'A1', jumlah: 3 },
    { no: 2, nama: 'Delivery / Takeaway', jumlah: 2 },
    { no: 3, nama: 'A4', jumlah: 1 },
    { no: 4, nama: 'A9', jumlah: 1 },
    { no: 5, nama: 'A6', jumlah: 1 },
    { no: 6, nama: 'A7', jumlah: 1 },
  ];

  const totalPenjualan = PENJUALAN_DATA.reduce((acc, curr) => acc + curr.jumlah, 0);
  const totalTransaksi = TRANSAKSI_DATA.reduce((acc, curr) => acc + curr.jumlah, 0);

  return (
    <div className="p-8 bg-[#F8F9FB] min-h-full flex flex-col">
      <div id="meja-report" className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#fdf2f8] px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-[28px] font-medium text-[#3B415A]">Penjualan Per Meja</h2>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Tanggal :</span>
              <div 
                className="bg-white border text-sm font-medium text-gray-600 border-gray-200 px-4 py-2 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50"
                onClick={() => setIsModalOpen(true)}
              >
                {dateRange}
              </div>
            </div>
            <button 
              onClick={() => downloadAsPDF('meja-report', 'Penjualan_Per_Meja')}
              className="bg-white border border-gray-200 text-sm font-medium text-gray-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors no-print"
            >
              Download
            </button>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-bold text-[14px] text-[#3B415A] mb-4">Berdasarkan Penjualan</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left text-[13px] text-gray-700">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2.5 px-4 font-bold text-[#3B415A] w-12 text-center">No</th>
                  <th className="py-2.5 px-4 font-bold text-[#3B415A]">Nama</th>
                  <th className="py-2.5 px-4 font-bold text-[#3B415A]">Penjualan</th>
                </tr>
              </thead>
              <tbody>
                {PENJUALAN_DATA.map((item) => (
                  <tr key={item.no} className="border-b border-gray-100">
                    <td className="py-2.5 px-4 text-[13px] text-center">{item.no}</td>
                    <td className="py-2.5 px-4 text-[13px]">{item.nama}</td>
                    <td className="py-2.5 px-4 text-[13px]">{formatRupiah(item.jumlah)}</td>
                  </tr>
                ))}
                <tr className="border-b border-gray-200">
                  <td className="py-2.5 px-4"></td>
                  <td className="py-2.5 px-4 font-bold text-[#3B415A]">Total</td>
                  <td className="py-2.5 px-4 font-bold text-[#3B415A]">{formatRupiah(totalPenjualan)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-[14px] text-[#3B415A] mb-4">Berdasarkan Jumlah Transaksi</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] text-gray-700">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2.5 px-4 font-bold text-[#3B415A] w-12 text-center">No</th>
                  <th className="py-2.5 px-4 font-bold text-[#3B415A]">Nama</th>
                  <th className="py-2.5 px-4 font-bold text-[#3B415A]">Jumlah</th>
                </tr>
              </thead>
              <tbody>
                {TRANSAKSI_DATA.map((item) => (
                  <tr key={item.no} className="border-b border-gray-100">
                    <td className="py-2.5 px-4 text-[13px] text-center">{item.no}</td>
                    <td className="py-2.5 px-4 text-[13px]">{item.nama}</td>
                    <td className="py-2.5 px-4 text-[13px]">{item.jumlah}</td>
                  </tr>
                ))}
                <tr className="border-b border-gray-200">
                  <td className="py-2.5 px-4"></td>
                  <td className="py-2.5 px-4 font-bold text-[#3B415A]">Total</td>
                  <td className="py-2.5 px-4 font-bold text-[#3B415A]">{totalTransaksi}</td>
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
  )
}
`,
  'src/components/PemasukanService.tsx': `import React, { useState } from 'react';
import { formatRupiah } from '../utils';
import { downloadAsPDF } from '../pdfUtils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

export default function PemasukanService() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  return (
    <div className="p-8 bg-[#F8F9FB] min-h-full flex flex-col">
      <div id="service-report" className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex-1 flex flex-col items-start w-full">
        {/* Header */}
        <div className="bg-[#fdf2f8] w-full px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-[28px] font-medium text-[#3B415A]">Service</h2>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Tanggal :</span>
              <div 
                className="bg-white border text-sm font-medium text-gray-600 border-gray-200 px-4 py-2 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50"
                onClick={() => setIsModalOpen(true)}
              >
                {dateRange}
              </div>
            </div>
            <button 
              onClick={() => downloadAsPDF('service-report', 'Laporan_Service')}
              className="bg-white border border-gray-200 text-sm font-medium text-gray-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors no-print"
            >
              Download
            </button>
          </div>
        </div>

        <div className="p-6 w-full">
          <table className="w-full text-left text-[13px] text-gray-700">
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-4 font-bold text-[#3B415A] w-64">Persentase Service</td>
                <td className="py-4 px-4">0%</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-4 font-bold text-[#3B415A]">Jumlah Kena Service</td>
                <td className="py-4 px-4">{formatRupiah(711408)}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-4 font-bold text-[#3B415A]">Service dipungut</td>
                <td className="py-4 px-4">Rp0</td>
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
`,
  'src/components/PemasukanPajak.tsx': `import React, { useState } from 'react';
import { formatRupiah } from '../utils';
import { downloadAsPDF } from '../pdfUtils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

export default function PemasukanPajak() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  return (
    <div className="p-8 bg-[#F8F9FB] min-h-full flex flex-col">
      <div id="pajak-report" className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex-1 flex flex-col items-start w-full">
        {/* Header */}
        <div className="bg-[#fdf2f8] w-full px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-[28px] font-medium text-[#3B415A]">Pajak</h2>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Tanggal :</span>
              <div 
                className="bg-white border text-sm font-medium text-gray-600 border-gray-200 px-4 py-2 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50"
                onClick={() => setIsModalOpen(true)}
              >
                {dateRange}
              </div>
            </div>
            <button 
              onClick={() => downloadAsPDF('pajak-report', 'Laporan_Pajak')}
              className="bg-white border border-gray-200 text-sm font-medium text-gray-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors no-print"
            >
              Download
            </button>
          </div>
        </div>

        <div className="p-6 w-full">
          <table className="w-full text-left text-[13px] text-gray-700">
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-4 font-bold text-[#3B415A] w-64">Persentase Pajak</td>
                <td className="py-4 px-4">10%</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-4 font-bold text-[#3B415A]">Jumlah Kena Pajak</td>
                <td className="py-4 px-4">{formatRupiah(711408)}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-4 font-bold text-[#3B415A]">Pajak dipungut</td>
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
`,
  'src/components/Surcharge.tsx': `import React, { useState } from 'react';
import { downloadAsPDF } from '../pdfUtils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

export default function Surcharge() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  return (
    <div className="p-8 bg-[#F8F9FB] min-h-full flex flex-col">
      <div id="surcharge-report" className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#fdf2f8] px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-[28px] font-medium text-[#3B415A]">Laporan Surcharge</h2>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Tanggal :</span>
              <div 
                className="bg-white border text-sm font-medium text-gray-600 border-gray-200 px-4 py-2 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50"
                onClick={() => setIsModalOpen(true)}
              >
                {dateRange}
              </div>
            </div>
            <button 
              onClick={() => downloadAsPDF('surcharge-report', 'Laporan_Surcharge')}
              className="bg-white border border-gray-200 text-sm font-medium text-gray-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors no-print"
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
                <th className="py-2.5 px-4 font-bold text-[#3B415A] w-12 text-center">#</th>
                <th className="py-2.5 px-4 font-bold text-[#3B415A]">Nama</th>
                <th className="py-2.5 px-4 font-bold text-[#3B415A]">Persen</th>
                <th className="py-2.5 px-4 font-bold text-[#3B415A]">Harga diubah</th>
                <th className="py-2.5 px-4 font-bold text-[#3B415A]">Total Transaksi</th>
                <th className="py-2.5 px-4 font-bold text-[#3B415A]">Surcharge</th>
                <th className="py-2.5 px-4 font-bold text-[#3B415A]">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2.5 px-4" colSpan={4}></td>
                <td className="py-2.5 px-4 font-bold text-[#3B415A]">Total</td>
                <td className="py-2.5 px-4 font-bold text-[#3B415A]">Rp 0</td>
                <td className="py-2.5 px-4 font-bold text-[#3B415A]">Rp 0</td>
                <td className="py-2.5 px-4 font-bold text-[#3B415A]">Rp 0</td>
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
`
};

for (const [filepath, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(process.cwd(), filepath), content);
  console.log(`Created ${filepath}`);
}
