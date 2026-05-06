import React, { useState } from 'react';
import { formatRupiah } from '../utils';
import { downloadAsPDF } from '../pdfUtils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

export default function Summary() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  const handleDownload = () => {
    downloadAsPDF('summary-report', 'Summary_Report');
  };

  return (
    <div id="summary-report" className="p-8 bg-[#FAFAFA] min-h-full flex flex-col">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] p-6 flex justify-between items-center mb-6 shrink-0">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Summary</h2>
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
            onClick={handleDownload}
            className="bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all hover:bg-gray-50 transition-colors no-print"
          >
            Download
          </button>
        </div>
      </div>

      <UbahRangeTanggalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSelectRange={(range) => setDateRange(range)} 
      />

      <div className="space-y-6">
        {/* Rincian Penjualan */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
            <h3 className="text-[15px] font-bold text-gray-900">Rincian Penjualan</h3>
          </div>
          <div className="p-6 text-[13px] text-gray-600 space-y-2">
            <div className="flex justify-between items-center"><span className="flex-1">Subtotal</span><span className="whitespace-nowrap font-medium text-gray-800">{formatRupiah(1152316)}</span></div>
            <div className="flex justify-between items-center"><span className="flex-1">Extra Charge</span><span className="whitespace-nowrap">Rp 0</span></div>
            <div className="flex justify-between items-center text-red-500"><span className="flex-1">Diskon Voucher</span><span className="whitespace-nowrap">Rp 0</span></div>
            <div className="flex justify-between items-center text-red-500"><span className="flex-1">Diskon Pelanggan Spesial</span><span className="whitespace-nowrap">Rp 0</span></div>
            <div className="flex justify-between items-center text-red-500"><span className="flex-1">Diskon Karyawan</span><span className="whitespace-nowrap">Rp 0</span></div>
            <div className="flex justify-between items-center text-red-500"><span className="flex-1">Diskon Program</span><span className="whitespace-nowrap">Rp 0</span></div>
            <div className="flex justify-between items-center"><span className="flex-1">Biaya Layanan</span><span className="whitespace-nowrap">Rp 0</span></div>
            <div className="flex justify-between items-center"><span className="flex-1">Service</span><span className="whitespace-nowrap">Rp 0</span></div>
            <div className="flex justify-between items-center"><span className="flex-1">PB1</span><span className="whitespace-nowrap">{formatRupiah(115233)}</span></div>
            <div className="flex justify-between items-center"><span className="flex-1">Pengiriman Toko</span><span className="whitespace-nowrap">Rp 0</span></div>
            <div className="flex justify-between items-center"><span className="flex-1">DP</span><span className="whitespace-nowrap">Rp 0</span></div>
            <div className="flex justify-between items-center font-bold text-gray-800 pt-3 mt-1 border-t border-gray-100"><span className="flex-1">Total (Penjualan Bersih)</span><span className="whitespace-nowrap text-[14px]">{formatRupiah(1267549)}</span></div>
          </div>
        </div>

        {/* Rincian Pemasukan & Pengeluaran */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
            <h3 className="text-[15px] font-bold text-gray-900">Rincian Pemasukan & Pengeluaran</h3>
          </div>
          <div className="p-6 text-[13px] text-gray-600 space-y-2">
            <div className="flex justify-between items-center"><span className="flex-1">Penjualan Bersih</span><span className="whitespace-nowrap">{formatRupiah(1267549)}</span></div>
            <div className="flex justify-between items-center text-red-500"><span className="flex-1">HPP (%)</span><span className="whitespace-nowrap">{formatRupiah(505445)} <span className="ml-1 opacity-80">(39.88%)</span></span></div>
            <div className="flex justify-between items-center font-bold text-gray-800 pt-2 pb-1"><span className="flex-1">Laba Kotor</span><span className="whitespace-nowrap text-[14px]">{formatRupiah(762104)}</span></div>
            <div className="flex justify-between items-center"><span className="flex-1">Pemasukan Kas</span><span className="whitespace-nowrap">Rp 0</span></div>
            <div className="flex justify-between items-center text-red-500"><span className="flex-1">Pengeluaran Kas</span><span className="whitespace-nowrap">{formatRupiah(538100)}</span></div>
            <div className="flex justify-between items-center"><span className="flex-1">Service</span><span className="whitespace-nowrap">Rp 0</span></div>
            <div className="flex justify-between items-center text-red-500"><span className="flex-1">PB1</span><span className="whitespace-nowrap">{formatRupiah(115233)}</span></div>
            <div className="flex justify-between items-center text-red-500"><span className="flex-1">Biaya Layanan</span><span className="whitespace-nowrap">Rp 0</span></div>
            <div className="flex justify-between items-center text-red-500"><span className="flex-1">Total Operasional</span><span className="whitespace-nowrap">Rp 0</span></div>
            <div className="flex justify-between items-center text-red-500"><span className="flex-1">Biaya eWallet (MDR + PPn)</span><span className="whitespace-nowrap">Rp 0</span></div>
            <div className="flex justify-between items-center font-bold text-gray-800 pt-3 mt-1 border-t border-gray-100"><span className="flex-1">Laba Bersih</span><span className="whitespace-nowrap text-[14px]">{formatRupiah(108771)}</span></div>
          </div>
        </div>

        {/* Metode Pembayaran */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
            <h3 className="text-[15px] font-bold text-gray-900">Metode Pembayaran</h3>
          </div>
          <div className="p-6 text-[13px] text-gray-600 space-y-2">
            <div className="font-bold text-gray-800 pb-2">Pembayaran Transaksi</div>
            <div className="flex justify-between items-center"><span className="flex-1">Total QRIS</span><span className="whitespace-nowrap">{formatRupiah(724100)}</span></div>
            <div className="flex justify-between items-center"><span className="flex-1">Total TUNAI</span><span className="whitespace-nowrap">{formatRupiah(425249)}</span></div>
            <div className="flex justify-between items-center"><span className="flex-1">Total CREDIT CARD</span><span className="whitespace-nowrap">{formatRupiah(118200)}</span></div>
            <div className="flex justify-between items-center font-bold text-gray-800 pt-3 mt-1 border-t border-gray-100"><span className="flex-1">Total Pembayaran Transaksi</span><span className="whitespace-nowrap text-[14px]">{formatRupiah(1267549)}</span></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
