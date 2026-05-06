import React from 'react';
import { Search } from 'lucide-react';

export default function BahanBakuWarning() {
  return (
    <div className="p-8 bg-[#FAFAFA] min-h-full">
      <div className="flex gap-6">
        {/* Expired Section */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col h-[600px]">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-2xl font-semibold text-gray-800">Data Bahan Baku Expired</h2>
          </div>
          
          <div className="p-4 border-b border-gray-100 flex justify-end">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={14} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-8 py-1.5 border-b border-gray-300 text-sm outline-none w-64 focus:border-[#10b981] transition-colors"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                 <button className="text-gray-400 hover:text-gray-600">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                 </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto flex-1 flex flex-col">
            <table className="w-full text-left text-[13px] text-gray-700 whitespace-nowrap">
              <thead>
                <tr className="border-b border-gray-200 bg-white">
                  <th className="py-3 px-4 font-medium text-gray-800 w-16">
                    <div className="flex flex-col gap-1">
                      <span>No</span>
                      <div className="flex items-center gap-1 border-b border-gray-300 pb-1 mt-1 cursor-pointer hover:border-gray-400">
                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>
                      </div>
                    </div>
                  </th>
                  <th className="py-3 px-4 font-medium text-gray-800">
                    <div className="flex flex-col gap-1">
                      <span>Nama</span>
                      <div className="flex items-center gap-1 border-b border-gray-300 pb-1 mt-1 cursor-pointer hover:border-gray-400">
                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>
                      </div>
                    </div>
                  </th>
                  <th className="py-3 px-4 font-medium text-gray-800">
                    <div className="flex flex-col gap-1">
                      <span>Qty</span>
                      <div className="flex items-center gap-1 border-b border-gray-300 pb-1 mt-1 cursor-pointer hover:border-gray-400">
                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>
                      </div>
                    </div>
                  </th>
                  <th className="py-3 px-4 font-medium text-gray-800">
                    <div className="flex flex-col gap-1">
                      <span>Satuan</span>
                      <div className="flex items-center gap-1 border-b border-gray-300 pb-1 mt-1 cursor-pointer hover:border-gray-400">
                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>
                      </div>
                    </div>
                  </th>
                  <th className="py-3 px-4 font-medium text-gray-800">
                    <div className="flex flex-col gap-1">
                      <span>Tanggal Kadaluarsa</span>
                      <div className="flex items-center gap-1 border-b border-gray-300 pb-1 mt-1 cursor-pointer hover:border-gray-400">
                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5} className="py-20 text-center text-sm text-gray-500">
                    No records to display
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-auto border-t border-gray-200">
              <div className="flex items-center justify-end px-4 py-3">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span>5 rows</span>
                    <select className="border border-gray-300 rounded px-1 outline-none text-xs">
                      <option>5</option>
                      <option>10</option>
                      <option>20</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded text-gray-400 disabled:opacity-50">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded text-gray-400 disabled:opacity-50">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <span>0-0 of 0</span>
                    <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50 text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50 text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hampir Habis Section */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col h-[600px]">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-2xl font-semibold text-gray-800">Data Bahan Baku Hampir Habis</h2>
          </div>
          
          <div className="p-4 border-b border-gray-100 flex justify-end">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={14} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-8 py-1.5 border-b border-gray-300 text-sm outline-none w-64 focus:border-[#10b981] transition-colors"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                 <button className="text-gray-400 hover:text-gray-600">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                 </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto flex-1 flex flex-col">
            <table className="w-full text-left text-[13px] text-gray-700 whitespace-nowrap">
              <thead>
                <tr className="border-b border-gray-200 bg-white">
                  <th className="py-3 px-4 font-medium text-gray-800 w-16">
                    <div className="flex flex-col gap-1">
                      <span>No</span>
                      <div className="flex items-center gap-1 border-b border-gray-300 pb-1 mt-1 cursor-pointer hover:border-gray-400">
                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>
                      </div>
                    </div>
                  </th>
                  <th className="py-3 px-4 font-medium text-gray-800">
                    <div className="flex flex-col gap-1">
                      <span>Nama</span>
                      <div className="flex items-center gap-1 border-b border-gray-300 pb-1 mt-1 cursor-pointer hover:border-gray-400">
                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>
                      </div>
                    </div>
                  </th>
                  <th className="py-3 px-4 font-medium text-gray-800">
                    <div className="flex flex-col gap-1">
                      <span>Qty</span>
                      <div className="flex items-center gap-1 border-b border-gray-300 pb-1 mt-1 cursor-pointer hover:border-gray-400">
                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>
                      </div>
                    </div>
                  </th>
                  <th className="py-3 px-4 font-medium text-gray-800">
                    <div className="flex flex-col gap-1">
                      <span>Satuan</span>
                      <div className="flex items-center gap-1 border-b border-gray-300 pb-1 mt-1 cursor-pointer hover:border-gray-400">
                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="py-20 text-center text-sm text-gray-500">
                    No records to display
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-auto border-t border-gray-200">
              <div className="flex items-center justify-end px-4 py-3">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span>5 rows</span>
                    <select className="border border-gray-300 rounded px-1 outline-none text-xs">
                      <option>5</option>
                      <option>10</option>
                      <option>20</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded text-gray-400 disabled:opacity-50">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded text-gray-400 disabled:opacity-50">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <span>0-0 of 0</span>
                    <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50 text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50 text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
