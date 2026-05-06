import React from 'react';
import { Search } from 'lucide-react';
import { formatRupiah } from '../utils';

export default function Departemen() {
  return (
    <div className="p-8 bg-[#F8F9FB] min-h-full flex flex-col">
      <div className="bg-[#d1fae5] border border-[#a7f3d0] rounded-xl p-5 flex justify-between items-center mb-6 shrink-0">
        <h2 className="text-[28px] font-bold text-[#3B415A]">Penjualan Per Departemen</h2>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600">Tanggal :</span>
            <div className="bg-white border text-sm font-medium text-gray-600 border-gray-200 px-4 py-2 rounded-lg shadow-sm">
              May 5, 2026 - May 5, 2026
            </div>
          </div>
          <button className="bg-white border border-gray-200 text-sm font-medium text-gray-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            Download
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6 flex-1 flex flex-col">
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
          <table className="w-full text-left text-xs text-gray-700 whitespace-nowrap">
            <thead>
              <tr className="border-b border-gray-200 bg-white">
                <th className="py-4 px-4 font-bold text-[#3B415A]">No.</th>
                <th className="py-4 px-4 font-bold text-[#3B415A]">Name</th>
                <th className="py-4 px-4 font-bold text-[#3B415A]">Qty</th>
                <th className="py-4 px-4 font-bold text-[#3B415A]">Refund Qty</th>
                <th className="py-4 px-4 font-bold text-[#3B415A]">Gross Sales</th>
                <th className="py-4 px-4 font-bold text-[#3B415A]">Discount</th>
                <th className="py-4 px-4 font-bold text-[#3B415A]">Refund</th>
                <th className="py-4 px-4 font-bold text-[#3B415A]">Tax</th>
                <th className="py-4 px-4 font-bold text-[#3B415A]">Service</th>
                <th className="py-4 px-4 font-bold text-[#3B415A]">Extra<br/>Charge</th>
                <th className="py-4 px-4 font-bold text-[#3B415A]">Net Sales</th>
                <th className="py-4 px-4 font-bold text-[#3B415A]">Total<br/>Collected</th>
                <th className="py-4 px-4 font-bold text-[#3B415A]">COGS</th>
                <th className="py-4 px-4 font-bold text-[#3B415A]">Gross Profit<br/>With Tax &<br/>Service</th>
                <th className="py-4 px-4 font-bold text-[#3B415A]">Gross<br/>Profit</th>
                <th className="py-4 px-4 font-bold text-[#3B415A]">Gross<br/>Margin</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-4">1</td>
                <td className="py-4 px-4">Kitchen</td>
                <td className="py-4 px-4">50</td>
                <td className="py-4 px-4">0</td>
                <td className="py-4 px-4">{formatRupiah(987816)}</td>
                <td className="py-4 px-4">Rp 0</td>
                <td className="py-4 px-4">Rp 0</td>
                <td className="py-4 px-4">{formatRupiah(98782)}</td>
                <td className="py-4 px-4">Rp 0</td>
                <td className="py-4 px-4">Rp 0</td>
                <td className="py-4 px-4">{formatRupiah(987816)}</td>
                <td className="py-4 px-4">{formatRupiah(1086598)}</td>
                <td className="py-4 px-4">{formatRupiah(499445)}</td>
                <td className="py-4 px-4">{formatRupiah(587152)}</td>
                <td className="py-4 px-4">{formatRupiah(488371)}</td>
                <td className="py-4 px-4">97.78%</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-4">2</td>
                <td className="py-4 px-4">Bar</td>
                <td className="py-4 px-4">22</td>
                <td className="py-4 px-4">0</td>
                <td className="py-4 px-4">{formatRupiah(164500)}</td>
                <td className="py-4 px-4">Rp 0</td>
                <td className="py-4 px-4">Rp 0</td>
                <td className="py-4 px-4">{formatRupiah(16450)}</td>
                <td className="py-4 px-4">Rp 0</td>
                <td className="py-4 px-4">Rp 0</td>
                <td className="py-4 px-4">{formatRupiah(164500)}</td>
                <td className="py-4 px-4">{formatRupiah(180950)}</td>
                <td className="py-4 px-4">{formatRupiah(6000)}</td>
                <td className="py-4 px-4">{formatRupiah(174950)}</td>
                <td className="py-4 px-4">{formatRupiah(158500)}</td>
                <td className="py-4 px-4">2641.67%</td>
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

        <div className="p-6 border-t border-gray-200">
          <h3 className="font-bold text-[#3B415A] mb-4">Ringkasan</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left text-sm text-gray-700">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-2 font-bold text-[#3B415A] w-16">No</th>
                  <th className="py-3 px-2 font-bold text-[#3B415A]">Nama</th>
                  <th className="py-3 px-2 font-bold text-[#3B415A]">Jumlah</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2">1</td>
                  <td className="py-3 px-2">Kitchen</td>
                  <td className="py-3 px-2">{formatRupiah(987816)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2">2</td>
                  <td className="py-3 px-2">Bar</td>
                  <td className="py-3 px-2">{formatRupiah(164500)}</td>
                </tr>
                <tr>
                  <td className="py-3 px-2"></td>
                  <td className="py-3 px-2 font-bold text-[#3B415A]">Total</td>
                  <td className="py-3 px-2 font-bold text-[#3B415A]">{formatRupiah(1152316)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-[#3B415A] mb-4">Rincian</h3>
          <div className="font-bold text-sm text-[#3B415A] mb-2">Kitchen</div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-2 font-bold text-[#3B415A] w-16">No</th>
                  <th className="py-3 px-2 font-bold text-[#3B415A]">Kategori</th>
                  <th className="py-3 px-2 font-bold text-[#3B415A]">Nama</th>
                  <th className="py-3 px-2 font-bold text-[#3B415A]">Volume</th>
                  <th className="py-3 px-2 font-bold text-[#3B415A]">Jumlah</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2">1</td>
                  <td className="py-3 px-2">Makanan</td>
                  <td className="py-3 px-2">Nasi Pindang</td>
                  <td className="py-3 px-2">4</td>
                  <td className="py-3 px-2">{formatRupiah(178180)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2">2</td>
                  <td className="py-3 px-2">Makanan</td>
                  <td className="py-3 px-2">Soto Ayam</td>
                  <td className="py-3 px-2">9</td>
                  <td className="py-3 px-2">{formatRupiah(171000)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2">3</td>
                  <td className="py-3 px-2">Makanan</td>
                  <td className="py-3 px-2">Nasi Goreng Kampung</td>
                  <td className="py-3 px-2">4</td>
                  <td className="py-3 px-2">{formatRupiah(120000)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}
