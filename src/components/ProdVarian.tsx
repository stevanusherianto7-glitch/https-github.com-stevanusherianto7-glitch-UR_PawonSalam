import React from 'react';
import { Search, ListFilter } from 'lucide-react';

export default function ProdVarian() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)]">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-pink-50 rounded-t-lg">
          <h2 className="text-2xl font-bold text-slate-700">Data Varian</h2>
          <div className="flex space-x-2">
            <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors font-medium">
              Tambah Data
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium">
              Download
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-end mb-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
              />
              <button className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                <span className="sr-only">Clear</span>
                ✕
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 font-semibold text-gray-700 text-sm">
                    <div className="flex flex-col">
                      <span>No</span>
                      <div className="flex flex-col mt-2 group cursor-pointer" title="Filter">
                      <ListFilter className="w-4 h-4 text-gray-700 mb-1" />
                      <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                    </div>
                    </div>
                  </th>
                  <th className="py-3 px-4 font-semibold text-gray-700 text-sm">
                    <div className="flex flex-col">
                      <span>Nama</span>
                      <div className="flex flex-col mt-2 group cursor-pointer" title="Filter">
                      <ListFilter className="w-4 h-4 text-gray-700 mb-1" />
                      <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                    </div>
                    </div>
                  </th>
                  <th className="py-3 px-4 font-semibold text-gray-700 text-sm">
                    <div className="flex flex-col">
                      <span>Item</span>
                      <div className="flex flex-col mt-2 group cursor-pointer" title="Filter">
                      <ListFilter className="w-4 h-4 text-gray-700 mb-1" />
                      <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                    </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-gray-600 text-sm">1</td>
                  <td className="py-4 px-4 text-gray-800 text-sm font-medium">Jeruk Panas / Dingin</td>
                  <td className="py-4 px-4 text-gray-600 text-sm">Panas, Dingin,</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="flex justify-end items-center mt-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <span>5 rows</span>
              <span className="text-gray-400 select-none">▼</span>
            </div>
            <div className="flex items-center space-x-4 ml-6">
              <button disabled className="text-gray-300">|&lt;</button>
              <button disabled className="text-gray-300">&lt;</button>
              <span>1-1 of 1</span>
              <button disabled className="text-gray-300">&gt;</button>
              <button disabled className="text-gray-300">&gt;|</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
