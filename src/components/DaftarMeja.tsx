import React from 'react';
import { Search, X, ListFilter } from 'lucide-react';

export default function DaftarMeja() {
  return (
    <div className="p-6">
      <div className="bg-white border flex flex-col justify-between flex-col border-gray-200 rounded-lg shadow-sm">
        <div className="w-full flex justify-between items-center p-4 border-b border-gray-100 bg-[#fdf2f8] rounded-t-lg">
          <h2 className="text-2xl font-bold text-gray-800">Data Meja</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-[#e11d48] text-white rounded font-medium text-sm hover:bg-[#be123c] transition-colors">
              Tambah Data
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-800 bg-white rounded font-medium text-sm hover:bg-gray-50 transition-colors">
              Upload
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-800 bg-white rounded font-medium text-sm hover:bg-gray-50 transition-colors">
              Download
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-800 bg-white rounded font-medium text-sm hover:bg-gray-50 transition-colors">
              Download QR
            </button>
          </div>
        </div>

        <div className="w-full p-4">
          <div className="flex justify-end mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search" 
                className="w-64 pl-9 pr-8 py-2 border-b border-gray-300 focus:outline-none focus:border-[#e11d48] text-sm transition-colors"
              />
              <X className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 w-4 h-4 cursor-pointer hover:text-gray-500" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-gray-800 font-medium border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-medium">No</th>
                  <th className="px-4 py-3 font-medium">No Meja</th>
                  <th className="px-4 py-3 font-medium">Meja Antrian</th>
                </tr>
                <tr>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><ListFilter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><ListFilter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><ListFilter className="w-4 h-4 text-gray-500" /></div></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-gray-600">1</td>
                  <td className="px-4 py-4 text-gray-600">A1</td>
                  <td className="px-4 py-4 text-gray-600">Tidak</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50/50">
                  <td className="px-4 py-4 text-gray-600">2</td>
                  <td className="px-4 py-4 text-gray-600">A2</td>
                  <td className="px-4 py-4 text-gray-600">Tidak</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-gray-600">3</td>
                  <td className="px-4 py-4 text-gray-600">A3</td>
                  <td className="px-4 py-4 text-gray-600">Tidak</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50/50">
                  <td className="px-4 py-4 text-gray-600">4</td>
                  <td className="px-4 py-4 text-gray-600">A4</td>
                  <td className="px-4 py-4 text-gray-600">Tidak</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-gray-600">5</td>
                  <td className="px-4 py-4 text-gray-600">A5</td>
                  <td className="px-4 py-4 text-gray-600">Tidak</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-end mt-4 text-sm text-gray-500 border-t border-gray-100 pt-4">
            <div className="flex items-center space-x-2">
              <span>5 rows</span>
              <div className="flex p-1 border rounded bg-white mt-[-2px]">
                 <span className="text-gray-600 transform scale-75 mt-[2px]">▼</span>
              </div>
            </div>
            <div className="flex items-center ml-4 space-x-1">
              <button className="p-1 px-2 text-gray-400 hover:text-gray-600">{"|<"}</button>
              <button className="p-1 px-2 text-gray-400 hover:text-gray-600">{"<"}</button>
              <span className="px-2 text-xs">1-5 of 10</span>
              <button className="p-1 px-2 text-gray-400 hover:text-gray-600">{">"}</button>
              <button className="p-1 px-2 text-gray-400 hover:text-gray-600">{">|"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}