import React from 'react';
import { Search, ChevronDown, ListFilter, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export default function Surcharges() {
  const data = [
    { no: 1, nama: 'Gofood', surcharge: '30%' },
    { no: 2, nama: 'Shopeefood', surcharge: '30%' },
    { no: 3, nama: 'Grabfood', surcharge: '30%' },
  ];

  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)]">
        <div className="p-4 border-b border-gray-200 bg-pink-50 rounded-t-lg flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-700">Data Surcharge</h2>
          <button className="bg-pink-600 text-white px-4 py-2 rounded font-medium hover:bg-pink-700">Tambah Data</button>
        </div>

        <div className="p-4 flex justify-end border-b border-gray-200">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full pl-10 pr-8 py-1.5 border-b border-gray-300 focus:outline-none focus:border-pink-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
              <span className="text-sm">×</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-700 uppercase bg-white border-b border-gray-200">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold w-24">No</th>
                <th scope="col" className="px-6 py-4 font-semibold">Nama</th>
                <th scope="col" className="px-6 py-4 font-semibold">Surcharge</th>
              </tr>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-2">
                  <div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={18} className="text-gray-700 mb-1" />
                    <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                  </div>
                </th>
                <th className="px-6 py-2">
                  <div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={18} className="text-gray-700 mb-1" />
                    <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                  </div>
                </th>
                <th className="px-6 py-2">
                  <div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={18} className="text-gray-700 mb-1" />
                    <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="bg-white border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4">{item.no}</td>
                  <td className="px-6 py-4">{item.nama}</td>
                  <td className="px-6 py-4">{item.surcharge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Setup */}
        <div className="p-4 flex items-center justify-end text-sm text-gray-500 space-x-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <span>5 rows</span>
            <ChevronDown size={16} />
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-1 text-gray-400 hover:text-gray-600"><ChevronsLeft size={16} /></button>
            <button className="p-1 text-gray-400 hover:text-gray-600"><ChevronLeft size={16} /></button>
            <span>1-3 of 3</span>
            <button className="p-1 text-gray-400 hover:text-gray-600"><ChevronRight size={16} /></button>
            <button className="p-1 text-gray-400 hover:text-gray-600"><ChevronsRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
