import React from 'react';
import { formatRupiah } from '../utils';
import { downloadAsPDF } from '../pdfUtils';

export default function PenjualanMeja() {
  return (
    <div id="penjualan-meja-report" className="p-8 bg-[#FAFAFA] min-h-full flex flex-col">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] p-6 flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Penjualan Per Meja</h2>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600">Tanggal :</span>
            <div className="bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all">
              May 5, 2026 - May 5, 2026
            </div>
          </div>
          <button 
            className="bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all hover:bg-gray-50 transition-colors no-print"
            onClick={() => downloadAsPDF('penjualan-meja-report', 'Penjualan_Per_Meja')}
          >
            Download
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden mb-6 flex-1">
        <div className="p-6">
          
          <h3 className="text-lg font-medium text-gray-800 mb-4">Berdasarkan Penjualan</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left text-[13px] text-gray-700">
              <thead>
                <tr className="border-y border-gray-200">
                  <th className="py-2.5 px-2 text-[13px] tracking-wide font-medium w-16">No</th>
                  <th className="py-2.5 px-2 text-[13px] tracking-wide font-medium">Nama</th>
                  <th className="py-2.5 px-2 text-[13px] tracking-wide font-medium">Penjualan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2 text-[13px]">1</td>
                  <td className="py-2.5 px-2 text-[13px] text-gray-800">A1</td>
                  <td className="py-2.5 px-2 text-[13px]">{formatRupiah(1037316)}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2.5 px-2 text-[13px]">2</td>
                  <td className="py-2.5 px-2 text-[13px] text-gray-800">Delivery / Takeaway</td>
                  <td className="py-2.5 px-2 text-[13px]">{formatRupiah(115000)}</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-2 text-[13px]"></td>
                  <td className="py-2.5 px-2 text-[13px] font-medium text-gray-800">Total</td>
                  <td className="py-2.5 px-2 text-[13px] font-medium text-gray-800">{formatRupiah(1152316)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-medium text-gray-800 mb-4">Berdasarkan Jumlah Transaksi</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] text-gray-700">
              <thead>
                <tr className="border-y border-gray-200">
                  <th className="py-2.5 px-2 text-[13px] tracking-wide font-medium w-16">No</th>
                  <th className="py-2.5 px-2 text-[13px] tracking-wide font-medium">Nama</th>
                  <th className="py-2.5 px-2 text-[13px] tracking-wide font-medium">Jumlah</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2.5 px-2 text-[13px]">1</td>
                  <td className="py-2.5 px-2 text-[13px] text-gray-800">A1</td>
                  <td className="py-2.5 px-2 text-[13px]">10</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2.5 px-2 text-[13px]">2</td>
                  <td className="py-2.5 px-2 text-[13px] text-gray-800">Delivery / Takeaway</td>
                  <td className="py-2.5 px-2 text-[13px]">2</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-2 text-[13px]"></td>
                  <td className="py-2.5 px-2 text-[13px] font-medium text-gray-800">Total</td>
                  <td className="py-2.5 px-2 text-[13px] font-medium text-gray-800">12</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
      
    </div>
  )
}
