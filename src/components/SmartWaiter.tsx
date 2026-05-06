import React from 'react';
import { formatRupiah } from '../utils';

export default function SmartWaiter() {
  return (
    <div className="p-8 bg-[#F8F9FB] min-h-full flex flex-col">
      <div className="bg-[#d1fae5] border border-[#a7f3d0] rounded-xl p-5 flex justify-between items-center mb-6 shrink-0">
        <h2 className="text-[28px] font-bold text-[#3B415A]">Performa Smart Waiter</h2>
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

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">
        <div className="p-2">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700">
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-bold text-[#3B415A]">Jumlah Transaksi</td>
                  <td className="py-4 px-4 text-right">12</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-bold text-[#3B415A]">Transaksi dengan Smart Waiter</td>
                  <td className="py-4 px-4 text-right">0</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-bold text-[#3B415A]">Persentase</td>
                  <td className="py-4 px-4 text-right font-bold text-[#3B415A]">0%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-bold text-[#3B415A]">Jumlah Item Pesanan</td>
                  <td className="py-4 px-4 text-right">72</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-bold text-[#3B415A]">Item Pesanan Smart Waiter</td>
                  <td className="py-4 px-4 text-right">0</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#3B415A]">Persentase</td>
                  <td className="py-4 px-4 text-right font-bold text-[#3B415A]">0%</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
      
    </div>
  )
}
