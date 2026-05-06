import React, { useState } from 'react';
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
    <div className="p-8 bg-[#FAFAFA] min-h-full flex flex-col">
      <div id="meja-report" className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#fdf2f8] px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Penjualan Per Meja</h2>
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
              onClick={() => downloadAsPDF('meja-report', 'Penjualan_Per_Meja')}
              className="bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all hover:bg-gray-50 transition-colors no-print"
            >
              Download
            </button>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-bold text-[14px] text-gray-800 mb-4">Berdasarkan Penjualan</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left text-[13px] text-gray-700">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2.5 px-4 font-bold text-gray-800 w-12 text-center">No</th>
                  <th className="py-2.5 px-4 font-bold text-gray-800">Nama</th>
                  <th className="py-2.5 px-4 font-bold text-gray-800">Penjualan</th>
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
                  <td className="py-2.5 px-4 font-bold text-gray-800">Total</td>
                  <td className="py-2.5 px-4 font-bold text-gray-800">{formatRupiah(totalPenjualan)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-[14px] text-gray-800 mb-4">Berdasarkan Jumlah Transaksi</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] text-gray-700">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2.5 px-4 font-bold text-gray-800 w-12 text-center">No</th>
                  <th className="py-2.5 px-4 font-bold text-gray-800">Nama</th>
                  <th className="py-2.5 px-4 font-bold text-gray-800">Jumlah</th>
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
                  <td className="py-2.5 px-4 font-bold text-gray-800">Total</td>
                  <td className="py-2.5 px-4 font-bold text-gray-800">{totalTransaksi}</td>
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
