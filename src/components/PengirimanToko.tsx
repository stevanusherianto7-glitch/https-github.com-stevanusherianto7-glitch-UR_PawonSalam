import React from 'react';
import { Search, ChevronDown, ListFilter, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export default function PengirimanToko() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)]">
        <div className="p-4 border-b border-gray-200 bg-pink-50 rounded-t-lg flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-700">Daftar Kurir Pribadi</h2>
          <div className="flex space-x-2">
            <button className="bg-pink-600 text-white px-4 py-2 rounded font-medium hover:bg-pink-700">Tambah Data</button>
            <button className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded font-medium hover:bg-gray-50">Download</button>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6 flex items-center justify-between max-w-sm">
            <span className="text-sm text-gray-700">Aktifkan Kurir Pribadi</span>
            <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-pink-500" style={{ right: 0 }} />
              <label className="toggle-label block overflow-hidden h-6 rounded-full bg-pink-500 cursor-pointer"></label>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-4 flex justify-end border-b border-gray-200 bg-white">
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
                <thead className="text-xs text-gray-700 bg-white border-b border-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-semibold w-24">No</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Jarak</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Biaya</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Aksi</th>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="px-6 py-2">
                      <div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={16} className="text-gray-700 mb-1" />
                    <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                  </div>
                    </th>
                    <th className="px-6 py-2">
                      <div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={16} className="text-gray-700 mb-1" />
                    <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                  </div>
                    </th>
                    <th className="px-6 py-2">
                      <div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={16} className="text-gray-700 mb-1" />
                    <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                  </div>
                    </th>
                    <th className="px-6 py-2">
                      <div className="flex flex-col group cursor-pointer" title="Filter">
                    <ListFilter size={16} className="text-gray-700 mb-1" />
                    <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                  </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={4} className="px-6 py-16 text-center text-gray-500">
                      No records to display
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination Setup */}
            <div className="p-4 flex items-center justify-end text-sm text-gray-500 space-x-4 border-t border-gray-200 bg-white">
              <div className="flex items-center space-x-2">
                <span>5 rows</span>
                <ChevronDown size={16} />
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-1 text-gray-400 hover:text-gray-600"><ChevronsLeft size={16} /></button>
                <button className="p-1 text-gray-400 hover:text-gray-600"><ChevronLeft size={16} /></button>
                <span>0-0 of 0</span>
                <button className="p-1 text-gray-400 hover:text-gray-600"><ChevronRight size={16} /></button>
                <button className="p-1 text-gray-400 hover:text-gray-600"><ChevronsRight size={16} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .toggle-checkbox:checked { right: 0; border-color: #db2777; }
        .toggle-checkbox:checked + .toggle-label { background-color: #db2777; }
        .toggle-checkbox { right: 16px; transition: all 0.3s; }
      `}</style>
    </div>
  );
}
