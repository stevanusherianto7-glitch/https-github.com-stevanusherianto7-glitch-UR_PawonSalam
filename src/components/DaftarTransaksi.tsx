import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { formatRupiah } from '../utils';
import { downloadAsPDF } from '../pdfUtils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

export default function DaftarTransaksi() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  const MOCK_DATA = [
    { id: 'DI/260506/9063/000007', tanggalPesan: '6 Mei 2026, 20.35', tanggalSelesai: '6 Mei 2026, 20.54', noHp: 'POS/PARTNER', meja: 'A6', surcharge: '', metodePembayaran: 'DEBIT CARD', promo: 0, diskonSpesial: 0, total: 80750, status: 'Pesanan Selesai' },
    { id: 'TA/260506/9063/000002', tanggalPesan: '6 Mei 2026, 20.25', tanggalSelesai: '6 Mei 2026, 20.26', noHp: 'POS/PARTNER', meja: 'Take Away', surcharge: '', metodePembayaran: 'TUNAI', promo: 0, diskonSpesial: 0, total: 36200, status: 'Pesanan Selesai' },
    { id: 'TA/260506/9063/000001', tanggalPesan: '6 Mei 2026, 16.38', tanggalSelesai: '6 Mei 2026, 16.38', noHp: 'POS/PARTNER', meja: 'Take Away', surcharge: '', metodePembayaran: 'TUNAI', promo: 0, diskonSpesial: 0, total: 123200, status: 'Pesanan Selesai' },
    { id: 'DI/260506/9063/000006', tanggalPesan: '6 Mei 2026, 15.38', tanggalSelesai: '6 Mei 2026, 15.38', noHp: 'POS/PARTNER', meja: 'A1', surcharge: '', metodePembayaran: 'QRIS', promo: 0, diskonSpesial: 0, total: 29700, status: 'Pesanan Selesai' },
    { id: 'DI/260506/9063/000005', tanggalPesan: '6 Mei 2026, 13.09', tanggalSelesai: '6 Mei 2026, 13.42', noHp: 'POS/PARTNER', meja: 'A4', surcharge: '', metodePembayaran: 'QRIS', promo: 0, diskonSpesial: 0, total: 80300, status: 'Pesanan Selesai' },
  ];

  return (
    <div className="p-8 bg-[#FAFAFA] min-h-full flex flex-col">
      <div id="transaksi-report" className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#fdf2f8] px-6 py-4 border-b border-gray-200 flex justify-between items-center shrink-0">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Daftar Transaksi</h2>
          
          <div className="flex gap-4 items-center">
            <select className="bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all focus:outline-none focus:border-[#e11d48]">
              <option>Tanggal Bayar</option>
              <option>Tanggal Dibuat</option>
            </select>
            
            <div 
              className="bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all cursor-pointer hover:bg-gray-50"
              onClick={() => setIsModalOpen(true)}
            >
              {dateRange}
            </div>
            
            <button 
              onClick={() => downloadAsPDF('transaksi-report', 'Daftar_Transaksi')}
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
        <div className="overflow-x-auto flex-1 flex flex-col">
          <table className="w-full text-left text-[13px] text-gray-700">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2.5 px-4 font-bold text-gray-800">ID</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Tanggal Pesan</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Tanggal Selesai</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">No HP</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Meja</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Surcharge</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Metode Pembayaran</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Promo</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Diskon Spesial</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Total</th>
                <th className="py-2.5 px-4 font-bold text-gray-800">Status</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_DATA.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="py-2.5 px-4 text-[13px]">{item.id}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.tanggalPesan}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.tanggalSelesai}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.noHp}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.meja}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.surcharge}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.metodePembayaran}</td>
                  <td className="py-2.5 px-4 text-[13px]">{formatRupiah(item.promo)}</td>
                  <td className="py-2.5 px-4 text-[13px]">{formatRupiah(item.diskonSpesial)}</td>
                  <td className="py-2.5 px-4 text-[13px]">{formatRupiah(item.total)}</td>
                  <td className="py-2.5 px-4 text-[13px]">{item.status}</td>
                </tr>
              ))}
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