import React from 'react';
import { formatRupiah } from '../utils';

export default function PenjualanMeja() {
  return (
    <div className="p-8 bg-[#F8F9FB] min-h-full flex flex-col">
      <div className="bg-[#d1fae5] border border-[#a7f3d0] rounded-xl p-5 flex justify-between items-center mb-6">
        <h2 className="text-[28px] font-bold text-[#3B415A]">Penjualan Per Meja</h2>
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

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6 flex-1">
        <div className="p-6">
          
          <h3 className="text-lg font-bold text-[#3B415A] mb-4">Berdasarkan Penjualan</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left text-sm text-gray-700">
              <thead>
                <tr className="border-y border-gray-200">
                  <th className="py-4 px-2 tracking-wide font-bold w-16">No</th>
                  <th className="py-4 px-2 tracking-wide font-bold">Nama</th>
                  <th className="py-4 px-2 tracking-wide font-bold">Penjualan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-2">1</td>
                  <td className="py-4 px-2 text-[#3B415A]">A1</td>
                  <td className="py-4 px-2">{formatRupiah(1037316)}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-2">2</td>
                  <td className="py-4 px-2 text-[#3B415A]">Delivery / Takeaway</td>
                  <td className="py-4 px-2">{formatRupiah(115000)}</td>
                </tr>
                <tr>
                  <td className="py-4 px-2"></td>
                  <td className="py-4 px-2 font-bold text-[#3B415A]">Total</td>
                  <td className="py-4 px-2 font-bold text-[#3B415A]">{formatRupiah(1152316)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-[#3B415A] mb-4">Berdasarkan Jumlah Transaksi</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700">
              <thead>
                <tr className="border-y border-gray-200">
                  <th className="py-4 px-2 tracking-wide font-bold w-16">No</th>
                  <th className="py-4 px-2 tracking-wide font-bold">Nama</th>
                  <th className="py-4 px-2 tracking-wide font-bold">Jumlah</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-2">1</td>
                  <td className="py-4 px-2 text-[#3B415A]">A1</td>
                  <td className="py-4 px-2">10</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-2">2</td>
                  <td className="py-4 px-2 text-[#3B415A]">Delivery / Takeaway</td>
                  <td className="py-4 px-2">2</td>
                </tr>
                <tr>
                  <td className="py-4 px-2"></td>
                  <td className="py-4 px-2 font-bold text-[#3B415A]">Total</td>
                  <td className="py-4 px-2 font-bold text-[#3B415A]">12</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
      
    </div>
  )
}
