import React from 'react';
import { Plus } from 'lucide-react';

export default function ProdKategori() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)]">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-pink-50 rounded-t-lg">
          <h2 className="text-2xl font-bold text-slate-700">Data Kategori</h2>
          <div className="flex space-x-2">
            <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors font-medium">
              Tambah Data
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium">
              Download
            </button>
          </div>
        </div>
        
        <div className="p-6 border-b border-gray-200">
          <p className="text-gray-600 mb-2 text-sm">
            *untuk mengubah urutan silahkan drag kategori sesuai urutan yang di inginkan, lalu simpan
          </p>
          <p className="text-gray-600 mb-6 text-sm">
            *untuk mengubah urutan produk didalam kategori silahkan klik nama kategori
          </p>
          <div className="flex justify-end space-x-2">
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium">
              Reset
            </button>
            <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors font-medium">
              Simpan
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-sm font-medium text-gray-500">Nama</th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-500">Departemen</th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-pink-600 font-medium">1. Makanan</td>
                  <td className="py-4 px-4 text-gray-700">Kitchen</td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="bg-white border border-gray-300 text-gray-500 p-2 rounded hover:bg-gray-50">
                        <Plus className="w-4 h-4" />
                      </button>
                      <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 text-sm font-medium">
                        Ubah
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-pink-600 font-medium">2. Minuman</td>
                  <td className="py-4 px-4 text-gray-700">Bar</td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="bg-white border border-gray-300 text-gray-500 p-2 rounded hover:bg-gray-50">
                        <Plus className="w-4 h-4" />
                      </button>
                      <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 text-sm font-medium">
                        Ubah
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
