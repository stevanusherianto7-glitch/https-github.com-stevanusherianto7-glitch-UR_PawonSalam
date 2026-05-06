import React from 'react';
import { formatRupiah } from '../utils';

export default function LabaBersih() {
  return (
    <div className="p-8 bg-[#F8F9FB] min-h-full flex flex-col">
      <div className="bg-[#d1fae5] border border-[#a7f3d0] rounded-xl p-5 flex justify-between items-center mb-6 shrink-0">
        <h2 className="text-[28px] font-bold text-[#3B415A]">Laba Bersih</h2>
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
        <div className="p-2">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700">
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-bold text-[#3B415A]">Laba Kotor</td>
                  <td className="py-4 px-4">{formatRupiah(762104)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-bold text-[#3B415A]">Pemasukan</td>
                  <td className="py-4 px-4">Rp 0</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-100">
                  <td className="py-4 px-4 font-bold text-[#3B415A]">Pengeluaran</td>
                  <td className="py-4 px-4">{formatRupiah(538100)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-bold text-[#3B415A]">Service</td>
                  <td className="py-4 px-4">Rp 0</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-bold text-[#3B415A]">Laba Kotor Setelah Service</td>
                  <td className="py-4 px-4">{formatRupiah(224004)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-bold text-[#3B415A]">Pajak</td>
                  <td className="py-4 px-4">{formatRupiah(115233)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-bold text-[#3B415A]">Laba Kotor Setelah Pajak dan Service</td>
                  <td className="py-4 px-4">{formatRupiah(108771)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-bold text-[#3B415A]">Operasional</td>
                  <td className="py-4 px-4">Rp 0</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-bold text-[#3B415A]">Biaya Layanan UR</td>
                  <td className="py-4 px-4">Rp 0</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-bold text-[#3B415A]">Biaya Ewallet</td>
                  <td className="py-4 px-4">Rp 0</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#3B415A]">Laba Bersih</td>
                  <td className="py-4 px-4">{formatRupiah(108771)}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
      
    </div>
  )
}
