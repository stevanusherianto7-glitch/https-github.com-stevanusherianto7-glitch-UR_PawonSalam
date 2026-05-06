import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { formatRupiah } from '../utils';
import { downloadAsPDF } from '../pdfUtils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

export default function Departemen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  return (
    <div className="p-8 bg-[#FAFAFA] min-h-full flex flex-col">
      <div id="departemen-report" className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#fdf2f8] px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Penjualan Per Departemen</h2>
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
              onClick={() => downloadAsPDF('departemen-report', 'Penjualan_Per_Departemen')}
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
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-64 outline-none focus:border-gray-300 transition-colors"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] text-gray-700 whitespace-nowrap">
            <thead>
              <tr className="border-b border-gray-200 bg-white">
                <th className="py-2.5 px-4 text-[13px] font-medium text-gray-800">No.</th>
                <th className="py-2.5 px-4 text-[13px] font-medium text-gray-800">Name</th>
                <th className="py-2.5 px-4 text-[13px] font-medium text-gray-800">Qty</th>
                <th className="py-2.5 px-4 text-[13px] font-medium text-gray-800">Refund Qty</th>
                <th className="py-2.5 px-4 text-[13px] font-medium text-gray-800">Gross Sales</th>
                <th className="py-2.5 px-4 text-[13px] font-medium text-gray-800">Discount</th>
                <th className="py-2.5 px-4 text-[13px] font-medium text-gray-800">Refund</th>
                <th className="py-2.5 px-4 text-[13px] font-medium text-gray-800">Tax</th>
                <th className="py-2.5 px-4 text-[13px] font-medium text-gray-800">Service</th>
                <th className="py-2.5 px-4 text-[13px] font-medium text-gray-800">Extra<br/>Charge</th>
                <th className="py-2.5 px-4 text-[13px] font-medium text-gray-800">Net Sales</th>
                <th className="py-2.5 px-4 text-[13px] font-medium text-gray-800">Total<br/>Collected</th>
                <th className="py-2.5 px-4 text-[13px] font-medium text-gray-800">COGS</th>
                <th className="py-2.5 px-4 text-[13px] font-medium text-gray-800">Gross Profit<br/>With Tax &<br/>Service</th>
                <th className="py-2.5 px-4 text-[13px] font-medium text-gray-800">Gross<br/>Profit</th>
                <th className="py-2.5 px-4 text-[13px] font-medium text-gray-800">Gross<br/>Margin</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 px-4 text-[13px]">1</td>
                <td className="py-2.5 px-4 text-[13px]">Kitchen</td>
                <td className="py-2.5 px-4 text-[13px]">27</td>
                <td className="py-2.5 px-4 text-[13px]">0</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(657908)}</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(3000)}</td>
                <td className="py-2.5 px-4 text-[13px]">Rp 0</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(65491)}</td>
                <td className="py-2.5 px-4 text-[13px]">Rp 0</td>
                <td className="py-2.5 px-4 text-[13px]">Rp 0</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(654908)}</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(720399)}</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(373795)}</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(346603)}</td>
                <td className="py-2.5 px-4 text-[13px]">{formatRupiah(281113)}</td>
                <td className="py-2.5 px-4 text-[13px]">75.21%</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 px-4 text-[13px]">2</td>
                <td className="py-2.5 px-4 text-[13px]">Bar</td>
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
        
        <div className="p-4 flex justify-end text-sm text-gray-500 items-center gap-4 border-b border-gray-100">
          <span>5 rows &nbsp; ▾</span>
          <div className="flex gap-2">
            <span className="cursor-not-allowed text-gray-300">{'|<'}</span>
            <span className="cursor-not-allowed text-gray-300">{'<'}</span>
            <span>1-2 of 2</span>
            <span className="cursor-not-allowed text-gray-300">{'>'}</span>
            <span className="cursor-not-allowed text-gray-300">{'>|'}</span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-bold text-gray-800 mb-4 text-[15px]">Ringkasan</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left text-[13px] text-gray-700">
              <thead>
                <tr className="border-y border-gray-200">
                  <th className="py-2.5 px-2 font-bold text-gray-800 w-16">No</th>
                  <th className="py-2.5 px-2 font-bold text-gray-800">Nama</th>
                  <th className="py-2.5 px-2 font-bold text-gray-800">Jumlah</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">1</td>
                  <td className="py-2.5 px-2">Kitchen</td>
                  <td className="py-2.5 px-2">{formatRupiah(657908)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">2</td>
                  <td className="py-2.5 px-2">Bar</td>
                  <td className="py-2.5 px-2">{formatRupiah(56500)}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2.5 px-2"></td>
                  <td className="py-2.5 px-2 font-bold text-gray-800">Total</td>
                  <td className="py-2.5 px-2 font-bold text-gray-800">{formatRupiah(714408)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-gray-800 mb-4 text-[15px]">Rincian</h3>
          <div className="font-bold text-[14px] text-gray-800 mb-2">Kitchen</div>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left text-[13px] text-gray-700">
              <thead>
                <tr className="border-y border-gray-200">
                  <th className="py-2.5 px-2 font-bold text-gray-800 w-16">No</th>
                  <th className="py-2.5 px-2 font-bold text-gray-800">Kategori</th>
                  <th className="py-2.5 px-2 font-bold text-gray-800">Nama</th>
                  <th className="py-2.5 px-2 font-bold text-gray-800">Volume</th>
                  <th className="py-2.5 px-2 font-bold text-gray-800">Jumlah</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">1</td>
                  <td className="py-2.5 px-2">Makanan</td>
                  <td className="py-2.5 px-2">Nasi Rawon</td>
                  <td className="py-2.5 px-2">3</td>
                  <td className="py-2.5 px-2">{formatRupiah(126000)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">2</td>
                  <td className="py-2.5 px-2">Makanan</td>
                  <td className="py-2.5 px-2">Nasi Goreng Mawut</td>
                  <td className="py-2.5 px-2">4</td>
                  <td className="py-2.5 px-2">{formatRupiah(120000)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">3</td>
                  <td className="py-2.5 px-2">Makanan</td>
                  <td className="py-2.5 px-2">Nasi Pindang</td>
                  <td className="py-2.5 px-2">2</td>
                  <td className="py-2.5 px-2">{formatRupiah(89090)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">4</td>
                  <td className="py-2.5 px-2">Makanan</td>
                  <td className="py-2.5 px-2">Mie Godog</td>
                  <td className="py-2.5 px-2">2</td>
                  <td className="py-2.5 px-2">{formatRupiah(64000)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">5</td>
                  <td className="py-2.5 px-2">Makanan</td>
                  <td className="py-2.5 px-2">Nasi Soto Ayam</td>
                  <td className="py-2.5 px-2">2</td>
                  <td className="py-2.5 px-2">{formatRupiah(41818)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">6</td>
                  <td className="py-2.5 px-2">Makanan</td>
                  <td className="py-2.5 px-2">Tahu Gimbal Semarang</td>
                  <td className="py-2.5 px-2">1</td>
                  <td className="py-2.5 px-2">{formatRupiah(39000)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">7</td>
                  <td className="py-2.5 px-2">Makanan</td>
                  <td className="py-2.5 px-2">Nasi Ayam Goreng PS</td>
                  <td className="py-2.5 px-2">1</td>
                  <td className="py-2.5 px-2">{formatRupiah(30000)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">8</td>
                  <td className="py-2.5 px-2">Makanan</td>
                  <td className="py-2.5 px-2">Nasi Goreng Kampung</td>
                  <td className="py-2.5 px-2">1</td>
                  <td className="py-2.5 px-2">{formatRupiah(30000)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">9</td>
                  <td className="py-2.5 px-2">Makanan</td>
                  <td className="py-2.5 px-2">Mie Goreng Jawa</td>
                  <td className="py-2.5 px-2">1</td>
                  <td className="py-2.5 px-2">{formatRupiah(29000)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">10</td>
                  <td className="py-2.5 px-2">Makanan</td>
                  <td className="py-2.5 px-2">Emping</td>
                  <td className="py-2.5 px-2">4</td>
                  <td className="py-2.5 px-2">{formatRupiah(24000)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">11</td>
                  <td className="py-2.5 px-2">Makanan</td>
                  <td className="py-2.5 px-2">Pisgor Original</td>
                  <td className="py-2.5 px-2">1</td>
                  <td className="py-2.5 px-2">{formatRupiah(22000)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">12</td>
                  <td className="py-2.5 px-2">Makanan</td>
                  <td className="py-2.5 px-2">Soto Ayam</td>
                  <td className="py-2.5 px-2">1</td>
                  <td className="py-2.5 px-2">{formatRupiah(19000)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">13</td>
                  <td className="py-2.5 px-2">Makanan</td>
                  <td className="py-2.5 px-2">Nasi Putih</td>
                  <td className="py-2.5 px-2">2</td>
                  <td className="py-2.5 px-2">{formatRupiah(12000)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">14</td>
                  <td className="py-2.5 px-2">Makanan</td>
                  <td className="py-2.5 px-2">Kerupuk Udang</td>
                  <td className="py-2.5 px-2">2</td>
                  <td className="py-2.5 px-2">{formatRupiah(12000)}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td colSpan={4} className="py-2.5 px-2 font-bold text-gray-800 text-right">Total</td>
                  <td className="py-2.5 px-2 font-bold text-gray-800 text-right">{formatRupiah(657908)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="font-bold text-[14px] text-gray-800 mb-2">Bar</div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] text-gray-700">
              <thead>
                <tr className="border-y border-gray-200">
                  <th className="py-2.5 px-2 font-bold text-gray-800 w-16">No</th>
                  <th className="py-2.5 px-2 font-bold text-gray-800">Kategori</th>
                  <th className="py-2.5 px-2 font-bold text-gray-800">Nama</th>
                  <th className="py-2.5 px-2 font-bold text-gray-800">Volume</th>
                  <th className="py-2.5 px-2 font-bold text-gray-800">Jumlah</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">1</td>
                  <td className="py-2.5 px-2">Minuman</td>
                  <td className="py-2.5 px-2">Air Mineral</td>
                  <td className="py-2.5 px-2">4</td>
                  <td className="py-2.5 px-2">{formatRupiah(24000)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">2</td>
                  <td className="py-2.5 px-2">Minuman</td>
                  <td className="py-2.5 px-2">Teh Tawar</td>
                  <td className="py-2.5 px-2">3</td>
                  <td className="py-2.5 px-2">{formatRupiah(13500)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">3</td>
                  <td className="py-2.5 px-2">Minuman</td>
                  <td className="py-2.5 px-2">Lychee Tea</td>
                  <td className="py-2.5 px-2">1</td>
                  <td className="py-2.5 px-2">{formatRupiah(10000)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2">4</td>
                  <td className="py-2.5 px-2">Minuman</td>
                  <td className="py-2.5 px-2">Es Teh</td>
                  <td className="py-2.5 px-2">1</td>
                  <td className="py-2.5 px-2">{formatRupiah(9000)}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td colSpan={4} className="py-2.5 px-2 font-bold text-gray-800 text-right">Total</td>
                  <td className="py-2.5 px-2 font-bold text-gray-800 text-right">{formatRupiah(56500)}</td>
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

