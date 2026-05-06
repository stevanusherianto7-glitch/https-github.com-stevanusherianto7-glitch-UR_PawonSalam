import React from 'react';
import { formatRupiah } from '../utils';

export default function Summary() {
  return (
    <div className="p-8 bg-[#F8F9FB] min-h-full flex flex-col">
      <div className="bg-[#d1fae5] border border-[#a7f3d0] rounded-xl p-5 flex justify-between items-center mb-6 shrink-0">
        <h2 className="text-[28px] font-bold text-[#3B415A]">Summary</h2>
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

      <div className="space-y-6">
        {/* Rincian Penjualan */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-[#d1fae5] px-6 py-3 border-b border-gray-200">
            <h3 className="text-base font-bold text-[#3B415A]">Rincian Penjualan</h3>
          </div>
          <div className="p-6 text-sm text-gray-600 space-y-2">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatRupiah(1152316)}</span></div>
            <div className="flex justify-between"><span>Extra Charge</span><span>Rp 0</span></div>
            <div className="flex justify-between text-red-500"><span>Diskon Voucher</span><span>Rp 0</span></div>
            <div className="flex justify-between text-red-500"><span>Diskon Pelanggan Spesial</span><span>Rp 0</span></div>
            <div className="flex justify-between text-red-500"><span>Diskon Karyawan</span><span>Rp 0</span></div>
            <div className="flex justify-between text-red-500"><span>Diskon Program</span><span>Rp 0</span></div>
            <div className="flex justify-between"><span>Biaya Layanan</span><span>Rp 0</span></div>
            <div className="flex justify-between"><span>Service</span><span>Rp 0</span></div>
            <div className="flex justify-between"><span>PB1</span><span>{formatRupiah(115233)}</span></div>
            <div className="flex justify-between"><span>Pengiriman Toko</span><span>Rp 0</span></div>
            <div className="flex justify-between"><span>DP</span><span>Rp 0</span></div>
            <div className="flex justify-between font-bold text-[#3B415A] pt-2"><span>Total (Penjualan Bersih)</span><span>{formatRupiah(1267549)}</span></div>
          </div>
        </div>

        {/* Rincian Pemasukan & Pengeluaran */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-[#d1fae5] px-6 py-3 border-b border-gray-200">
            <h3 className="text-base font-bold text-[#3B415A]">Rincian Pemasukan & Pengeluaran</h3>
          </div>
          <div className="p-6 text-sm text-gray-600 space-y-2">
            <div className="flex justify-between"><span>Penjualan Bersih</span><span>{formatRupiah(1267549)}</span></div>
            <div className="flex justify-between text-red-500"><span>HPP (%)</span><span>{formatRupiah(505445)} <span className="ml-2">(39.88%)</span></span></div>
            <div className="flex justify-between font-bold text-[#3B415A]"><span>Laba Kotor</span><span>{formatRupiah(762104)}</span></div>
            <div className="flex justify-between"><span>Pemasukan Kas</span><span>Rp 0</span></div>
            <div className="flex justify-between text-red-500"><span>Pengeluaran Kas</span><span>{formatRupiah(538100)}</span></div>
            <div className="flex justify-between"><span>Service</span><span>Rp 0</span></div>
            <div className="flex justify-between text-red-500"><span>PB1</span><span>{formatRupiah(115233)}</span></div>
            <div className="flex justify-between text-red-500"><span>Biaya Layanan</span><span>Rp 0</span></div>
            <div className="flex justify-between text-red-500"><span>Total Operasional</span><span>Rp 0</span></div>
            <div className="flex justify-between text-red-500"><span>Biaya eWallet (MDR + PPn)</span><span>Rp 0</span></div>
            <div className="flex justify-between font-bold text-[#3B415A] pt-2"><span>Laba Bersih</span><span>{formatRupiah(108771)}</span></div>
          </div>
        </div>

        {/* Metode Pembayaran */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">
          <div className="bg-[#d1fae5] px-6 py-3 border-b border-gray-200">
            <h3 className="text-base font-bold text-[#3B415A]">Metode Pembayaran</h3>
          </div>
          <div className="p-6 text-sm text-gray-600 space-y-2">
            <div className="font-bold text-[#3B415A] pb-1">Pembayaran Transaksi</div>
            <div className="flex justify-between"><span>Total QRIS</span><span>{formatRupiah(724100)}</span></div>
            <div className="flex justify-between"><span>Total TUNAI</span><span>{formatRupiah(425249)}</span></div>
            <div className="flex justify-between"><span>Total CREDIT CARD</span><span>{formatRupiah(118200)}</span></div>
            <div className="flex justify-between font-bold text-[#3B415A] pt-2"><span>Total Pembayaran Transaksi</span><span>{formatRupiah(1267549)}</span></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
