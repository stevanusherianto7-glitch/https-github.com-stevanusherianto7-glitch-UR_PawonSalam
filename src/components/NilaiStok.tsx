import React from 'react';
import { Search } from 'lucide-react';
import { formatRupiah } from '../utils';

export default function NilaiStok() {
  const MENU_DATA = [
    { no: 1, nama: 'Pisgor Original', stok: 9911, hpp: 10000, total: 99110000 },
    { no: 2, nama: 'Nasi Ayam', stok: 1000, hpp: 21365.55, total: 21365550 },
    { no: 3, nama: 'Nasi Garang Asem', stok: 999, hpp: 20675.63, total: 20654954.37 },
    { no: 4, nama: 'Roti Bakar Cheese Choco Crunchy', stok: 993, hpp: 20250, total: 20108250 },
    { no: 5, nama: 'Tahu Gimbal Semarang', stok: 833, hpp: 24100, total: 20075300 },
  ];

  return (
    <div className="p-8 bg-[#FAFAFA] min-h-full flex flex-col gap-6">
      
      {/* Top Banner Total */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] p-6 text-center shrink-0">
        <h2 className="text-[32px] font-bold text-gray-800">Total: Rp 336.582.678,37</h2>
      </div>

      <div className="flex gap-6 flex-1">
        {/* Left Panel */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden flex-1 flex flex-col w-1/2">
          <div className="bg-[#fdf2f8] px-6 py-4 border-b border-gray-200">
            <h2 className="text-[24px] font-medium text-gray-800">Nilai Stok Menu</h2>
            <div className="text-sm text-gray-500 mt-1">Total Nilai Stok & Menu: Rp 336.582.678,37</div>
          </div>
          
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

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] text-gray-700">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2.5 px-4 font-bold text-gray-800 w-12">No</th>
                  <th className="py-2.5 px-4 font-bold text-gray-800">Nama</th>
                  <th className="py-2.5 px-4 font-bold text-gray-800">Stok</th>
                  <th className="py-2.5 px-4 font-bold text-gray-800">HPP</th>
                  <th className="py-2.5 px-4 font-bold text-gray-800">Total</th>
                </tr>
              </thead>
              <tbody>
                {MENU_DATA.map((item) => (
                  <tr key={item.no} className="border-b border-gray-100">
                    <td className="py-2.5 px-4 text-[13px]">{item.no}</td>
                    <td className="py-2.5 px-4 text-[13px]">{item.nama}</td>
                    <td className="py-2.5 px-4 text-[13px]">{item.stok}</td>
                    <td className="py-2.5 px-4 text-[13px]">{formatRupiah(item.hpp)}</td>
                    <td className="py-2.5 px-4 text-[13px]">{formatRupiah(item.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden flex-1 flex flex-col w-1/2">
          <div className="bg-[#fdf2f8] px-6 py-4 border-b border-gray-200">
            <h2 className="text-[24px] font-medium text-gray-800">Nilai Bahan Baku</h2>
            <div className="text-sm text-gray-500 mt-1">Total Nilai Bahan Baku: Rp 0</div>
          </div>
          
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

          <div className="overflow-x-auto flex-1 flex flex-col">
            <table className="w-full text-left text-[13px] text-gray-700">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2.5 px-4 font-bold text-gray-800 w-12">No</th>
                  <th className="py-2.5 px-4 font-bold text-gray-800">Nama</th>
                  <th className="py-2.5 px-4 font-bold text-gray-800">Stok</th>
                  <th className="py-2.5 px-4 font-bold text-gray-800">Satuan</th>
                  <th className="py-2.5 px-4 font-bold text-gray-800">Harga/Satuan</th>
                  <th className="py-2.5 px-4 font-bold text-gray-800">Total</th>
                </tr>
              </thead>
              <tbody>
                {/* Empty */}
              </tbody>
            </table>
            <div className="flex-1 min-h-[200px] flex items-center justify-center text-sm text-gray-500 border-b border-gray-100">
              No records to display
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}