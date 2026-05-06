const fs = require('fs');

const components = {
  'src/components/DaftarMeja.tsx': `import React from 'react';
import { Search, X, Filter } from 'lucide-react';

export default function DaftarMeja() {
  return (
    <div className="p-6">
      <div className="bg-white border flex flex-col justify-between flex-col border-gray-200 rounded-lg shadow-sm">
        <div className="w-full flex justify-between items-center p-4 border-b border-gray-100 bg-[#fdf2f8] rounded-t-lg">
          <h2 className="text-2xl font-bold text-[#3B415A]">Data Meja</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-[#e11d48] text-white rounded font-medium text-sm hover:bg-[#be123c] transition-colors">
              Tambah Data
            </button>
            <button className="px-4 py-2 border border-gray-300 text-[#3B415A] bg-white rounded font-medium text-sm hover:bg-gray-50 transition-colors">
              Upload
            </button>
            <button className="px-4 py-2 border border-gray-300 text-[#3B415A] bg-white rounded font-medium text-sm hover:bg-gray-50 transition-colors">
              Download
            </button>
            <button className="px-4 py-2 border border-gray-300 text-[#3B415A] bg-white rounded font-medium text-sm hover:bg-gray-50 transition-colors">
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
              <thead className="text-[#3B415A] font-medium border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-medium">No</th>
                  <th className="px-4 py-3 font-medium">No Meja</th>
                  <th className="px-4 py-3 font-medium">Meja Antrian</th>
                </tr>
                <tr>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
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
}`,

  'src/components/GrupMeja.tsx': `import React from 'react';
import { Search, X, Filter } from 'lucide-react';

export default function GrupMeja() {
  return (
    <div className="p-6">
      <div className="bg-white border flex flex-col justify-between flex-col border-gray-200 rounded-lg shadow-sm">
        <div className="w-full flex justify-between items-center p-4 border-b border-gray-100 bg-[#fdf2f8] rounded-t-lg">
          <h2 className="text-2xl font-bold text-[#3B415A]">Grup Meja</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-[#e11d48] text-white rounded font-medium text-sm hover:bg-[#be123c] transition-colors">
              Tambah Data
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

          <div className="overflow-x-auto min-h-[300px]">
            <table className="w-full text-sm text-left">
              <thead className="text-[#3B415A] font-medium border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-medium">No</th>
                  <th className="px-4 py-3 font-medium">Nama Grup</th>
                  <th className="px-4 py-3 font-medium">Jumlah Meja</th>
                  <th className="px-4 py-3 font-medium">Aksi</th>
                </tr>
              </thead>
            </table>
            <div className="flex items-center justify-center h-48 text-gray-500 text-sm">
              No records to display
            </div>
          </div>

          <div className="flex items-center justify-end mt-4 text-sm text-gray-500 border-t border-gray-100 pt-4">
            <div className="flex items-center space-x-2">
              <span>5 rows</span>
              <div className="flex p-1 border rounded bg-white mt-[-2px]">
                 <span className="text-gray-600 transform scale-75 mt-[2px]">▼</span>
              </div>
            </div>
            <div className="flex items-center ml-4 space-x-1">
              <button className="p-1 px-2 text-gray-300">{"|<"}</button>
              <button className="p-1 px-2 text-gray-300">{"<"}</button>
              <span className="px-2 text-xs">0-0 of 0</span>
              <button className="p-1 px-2 text-gray-300">{">"}</button>
              <button className="p-1 px-2 text-gray-300">{">|"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  'src/components/InvKategori.tsx': `import React from 'react';
import { Search, X, Filter } from 'lucide-react';

export default function InvKategori() {
  return (
    <div className="p-6">
      <div className="bg-white border flex flex-col justify-between flex-col border-gray-200 rounded-lg shadow-sm">
        <div className="w-full flex justify-between items-center p-4 border-b border-gray-100 bg-[#fdf2f8] rounded-t-lg">
          <h2 className="text-2xl font-bold text-[#3B415A]">Daftar Kategori Bahan Baku</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-[#e11d48] text-white rounded font-medium text-sm hover:bg-[#be123c] transition-colors">
              Tambah Data
            </button>
            <button className="px-4 py-2 border border-gray-300 text-[#3B415A] bg-white rounded font-medium text-sm hover:bg-gray-50 transition-colors">
              Download
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

          <div className="overflow-x-auto min-h-[300px]">
            <table className="w-full text-sm text-left">
              <thead className="text-[#3B415A] font-medium border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-medium">No</th>
                  <th className="px-4 py-3 font-medium">Nama</th>
                  <th className="px-4 py-3 font-medium">Urutan</th>
                  <th className="px-4 py-3 font-medium">Aksi</th>
                </tr>
                <tr>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                </tr>
              </thead>
            </table>
            <div className="flex items-center justify-center h-48 text-gray-500 text-sm">
              No records to display
            </div>
          </div>

          <div className="flex items-center justify-end mt-4 text-sm text-gray-500 border-t border-gray-100 pt-4">
            <div className="flex items-center space-x-2">
              <span>5 rows</span>
              <div className="flex p-1 border rounded bg-white mt-[-2px]">
                 <span className="text-gray-600 transform scale-75 mt-[2px]">▼</span>
              </div>
            </div>
            <div className="flex items-center ml-4 space-x-1">
              <button className="p-1 px-2 text-gray-300">{"|<"}</button>
              <button className="p-1 px-2 text-gray-300">{"<"}</button>
              <span className="px-2 text-xs">0-0 of 0</span>
              <button className="p-1 px-2 text-gray-300">{">"}</button>
              <button className="p-1 px-2 text-gray-300">{">|"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  'src/components/BahanBaku.tsx': `import React from 'react';
import { Search, X, Filter } from 'lucide-react';

export default function BahanBaku() {
  return (
    <div className="p-6">
      <div className="bg-white border flex flex-col justify-between flex-col border-gray-200 rounded-lg shadow-sm">
        <div className="w-full flex justify-between items-center p-4 border-b border-gray-100 bg-[#fdf2f8] rounded-t-lg">
          <h2 className="text-2xl font-bold text-[#3B415A]">Daftar Bahan Baku</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-[#e11d48] text-white rounded font-medium text-sm hover:bg-[#be123c] transition-colors">
              Tambah Data
            </button>
            <button className="px-4 py-2 border border-gray-300 text-[#3B415A] bg-white rounded font-medium text-sm hover:bg-gray-50 transition-colors">
              Download
            </button>
            <button className="px-4 py-2 border border-gray-300 text-[#3B415A] bg-white rounded font-medium text-sm hover:bg-gray-50 transition-colors">
              Upload
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

          <div className="overflow-x-auto min-h-[300px]">
            <table className="w-full text-sm text-left">
              <thead className="text-[#3B415A] font-medium border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-medium">No</th>
                  <th className="px-4 py-3 font-medium">Kategori</th>
                  <th className="px-4 py-3 font-medium">Nama</th>
                  <th className="px-4 py-3 font-medium">Stok<br/>Peringatan</th>
                  <th className="px-4 py-3 font-medium">Satuan Stok<br/>Peringatan</th>
                  <th className="px-4 py-3 font-medium">Stok</th>
                  <th className="px-4 py-3 font-medium">Yield</th>
                  <th className="px-4 py-3 font-medium">Satuan Stok</th>
                  <th className="px-4 py-3 font-medium">Harga Satuan</th>
                </tr>
                <tr>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                </tr>
              </thead>
            </table>
            <div className="flex items-center justify-center h-48 text-gray-500 text-sm">
              No records to display
            </div>
          </div>

          <div className="flex items-center justify-end mt-4 text-sm text-gray-500 border-t border-gray-100 pt-4">
            <div className="flex items-center space-x-2">
              <span>5 rows</span>
              <div className="flex p-1 border rounded bg-white mt-[-2px]">
                 <span className="text-gray-600 transform scale-75 mt-[2px]">▼</span>
              </div>
            </div>
            <div className="flex items-center ml-4 space-x-1">
              <button className="p-1 px-2 text-gray-300">{"|<"}</button>
              <button className="p-1 px-2 text-gray-300">{"<"}</button>
              <span className="px-2 text-xs">0-0 of 0</span>
              <button className="p-1 px-2 text-gray-300">{">"}</button>
              <button className="p-1 px-2 text-gray-300">{">|"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  'src/components/BahanSetengahJadi.tsx': `import React from 'react';
import { Search, X, Filter } from 'lucide-react';

export default function BahanSetengahJadi() {
  return (
    <div className="p-6">
      <div className="bg-white border flex flex-col justify-between flex-col border-gray-200 rounded-lg shadow-sm">
        <div className="w-full flex justify-between items-center p-4 border-b border-gray-100 bg-[#fdf2f8] rounded-t-lg">
          <h2 className="text-2xl font-bold text-[#3B415A]">Daftar Bahan Setengah Jadi</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-[#e11d48] text-white rounded font-medium text-sm hover:bg-[#be123c] transition-colors">
              Tambah Data
            </button>
            <button className="px-4 py-2 border border-gray-300 text-[#3B415A] bg-white rounded font-medium text-sm hover:bg-gray-50 transition-colors">
              Download
            </button>
            <button className="px-4 py-2 border border-gray-300 text-[#3B415A] bg-white rounded font-medium text-sm hover:bg-gray-50 transition-colors">
              Upload Resep
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

          <div className="overflow-x-auto min-h-[300px]">
            <table className="w-full text-sm text-left">
              <thead className="text-[#3B415A] font-medium border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-medium">No</th>
                  <th className="px-4 py-3 font-medium">Kategori</th>
                  <th className="px-4 py-3 font-medium">Nama</th>
                  <th className="px-4 py-3 font-medium">Stok Peringatan</th>
                  <th className="px-4 py-3 font-medium">Stok</th>
                  <th className="px-4 py-3 font-medium">Harga Satuan</th>
                </tr>
                <tr>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                </tr>
              </thead>
            </table>
            <div className="flex items-center justify-center h-48 text-gray-500 text-sm">
              No records to display
            </div>
          </div>

          <div className="flex items-center justify-end mt-4 text-sm text-gray-500 border-t border-gray-100 pt-4">
            <div className="flex items-center space-x-2">
              <span>5 rows</span>
              <div className="flex p-1 border rounded bg-white mt-[-2px]">
                 <span className="text-gray-600 transform scale-75 mt-[2px]">▼</span>
              </div>
            </div>
            <div className="flex items-center ml-4 space-x-1">
              <button className="p-1 px-2 text-gray-300">{"|<"}</button>
              <button className="p-1 px-2 text-gray-300">{"<"}</button>
              <span className="px-2 text-xs">0-0 of 0</span>
              <button className="p-1 px-2 text-gray-300">{">"}</button>
              <button className="p-1 px-2 text-gray-300">{">|"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  'src/components/ProduksiSetengahJadi.tsx': `import React from 'react';
import { Search, X, Filter } from 'lucide-react';

export default function ProduksiSetengahJadi() {
  return (
    <div className="p-6">
      <div className="bg-white border flex flex-col justify-between flex-col border-gray-200 rounded-lg shadow-sm">
        <div className="w-full flex justify-between items-center p-4 border-b border-gray-100 bg-[#fdf2f8] rounded-t-lg">
          <h2 className="text-2xl font-bold text-[#3B415A]">Produksi Bahan Setengah Jadi</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 text-[#3B415A] bg-white rounded font-medium text-sm hover:bg-gray-50 transition-colors">
              Download
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

          <div className="overflow-x-auto min-h-[300px]">
            <table className="w-full text-sm text-left">
              <thead className="text-[#3B415A] font-medium border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-medium">No</th>
                  <th className="px-4 py-3 font-medium">Nama</th>
                  <th className="px-4 py-3 font-medium">Stok Peringatan</th>
                  <th className="px-4 py-3 font-medium">Stok</th>
                  <th className="px-4 py-3 font-medium">Harga Satuan</th>
                </tr>
                <tr>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                </tr>
              </thead>
            </table>
            <div className="flex items-center justify-center h-48 text-gray-500 text-sm">
              No records to display
            </div>
          </div>

          <div className="flex items-center justify-end mt-4 text-sm text-gray-500 border-t border-gray-100 pt-4">
            <div className="flex items-center space-x-2">
              <span>5 rows</span>
              <div className="flex p-1 border rounded bg-white mt-[-2px]">
                 <span className="text-gray-600 transform scale-75 mt-[2px]">▼</span>
              </div>
            </div>
            <div className="flex items-center ml-4 space-x-1">
              <button className="p-1 px-2 text-gray-300">{"|<"}</button>
              <button className="p-1 px-2 text-gray-300">{"<"}</button>
              <span className="px-2 text-xs">0-0 of 0</span>
              <button className="p-1 px-2 text-gray-300">{">"}</button>
              <button className="p-1 px-2 text-gray-300">{">|"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  'src/components/Supplier.tsx': `import React from 'react';
import { Search, X, Filter } from 'lucide-react';

export default function Supplier() {
  return (
    <div className="p-6">
      <div className="bg-white border flex flex-col justify-between flex-col border-gray-200 rounded-lg shadow-sm">
        <div className="w-full flex justify-between items-center p-4 border-b border-gray-100 bg-[#fdf2f8] rounded-t-lg">
          <h2 className="text-2xl font-bold text-[#3B415A]">Daftar Supplier</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-[#e11d48] text-white rounded font-medium text-sm hover:bg-[#be123c] transition-colors">
              Tambah Data
            </button>
            <button className="px-4 py-2 border border-gray-300 text-[#3B415A] bg-white rounded font-medium text-sm hover:bg-gray-50 transition-colors">
              Download
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

          <div className="overflow-x-auto min-h-[300px]">
            <table className="w-full text-sm text-left">
              <thead className="text-[#3B415A] font-medium border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-medium">No</th>
                  <th className="px-4 py-3 font-medium">Nama</th>
                  <th className="px-4 py-3 font-medium">Nomor HP</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Alamat</th>
                  <th className="px-4 py-3 font-medium">Aksi</th>
                </tr>
                <tr>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                </tr>
              </thead>
            </table>
            <div className="flex items-center justify-center h-48 text-gray-500 text-sm">
              No records to display
            </div>
          </div>

          <div className="flex items-center justify-end mt-4 text-sm text-gray-500 border-t border-gray-100 pt-4">
            <div className="flex items-center space-x-2">
              <span>5 rows</span>
              <div className="flex p-1 border rounded bg-white mt-[-2px]">
                 <span className="text-gray-600 transform scale-75 mt-[2px]">▼</span>
              </div>
            </div>
            <div className="flex items-center ml-4 space-x-1">
              <button className="p-1 px-2 text-gray-300">{"|<"}</button>
              <button className="p-1 px-2 text-gray-300">{"<"}</button>
              <span className="px-2 text-xs">0-0 of 0</span>
              <button className="p-1 px-2 text-gray-300">{">"}</button>
              <button className="p-1 px-2 text-gray-300">{">|"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  'src/components/PurchaseOrder.tsx': `import React from 'react';
import { Search, X, Filter } from 'lucide-react';

export default function PurchaseOrder() {
  return (
    <div className="p-6">
      <div className="bg-white border flex flex-col justify-between flex-col border-gray-200 rounded-lg shadow-sm">
        <div className="w-full flex justify-between items-center p-4 border-b border-gray-100 bg-[#fdf2f8] rounded-t-lg">
          <h2 className="text-2xl font-bold text-[#3B415A]">Purchase Order</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 bg-white rounded text-gray-600 text-sm">
              May 6, 2026 - May 6, 2026
            </button>
            <button className="px-4 py-2 bg-[#e11d48] text-white rounded font-medium text-sm hover:bg-[#be123c] transition-colors">
              Buat PO
            </button>
            <button className="px-4 py-2 border border-gray-300 text-[#3B415A] bg-white rounded font-medium text-sm hover:bg-gray-50 transition-colors">
              Download
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

          <div className="overflow-x-auto min-h-[300px]">
            <table className="w-full text-sm text-left">
              <thead className="text-[#3B415A] font-medium border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-medium">No</th>
                  <th className="px-4 py-3 font-medium">Nomor PO</th>
                  <th className="px-4 py-3 font-medium">Tanggal</th>
                  <th className="px-4 py-3 font-medium">Dibuat oleh</th>
                  <th className="px-4 py-3 font-medium">Supplier</th>
                  <th className="px-4 py-3 font-medium">Total</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Catatan</th>
                </tr>
                <tr>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2 min-w-[120px]">
                    <div className="border-b border-gray-300 flex pb-1 w-full justify-between items-center text-gray-400">
                      <span>&nbsp;</span><span className="text-xs">▼</span>
                    </div>
                  </th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                </tr>
              </thead>
            </table>
            <div className="flex items-center justify-center h-48 text-gray-500 text-sm">
              No records to display
            </div>
          </div>

          <div className="flex items-center justify-end mt-4 text-sm text-gray-500 border-t border-gray-100 pt-4">
            <div className="flex items-center space-x-2">
              <span>5 rows</span>
              <div className="flex p-1 border rounded bg-white mt-[-2px]">
                 <span className="text-gray-600 transform scale-75 mt-[2px]">▼</span>
              </div>
            </div>
            <div className="flex items-center ml-4 space-x-1">
              <button className="p-1 px-2 text-gray-300">{"|<"}</button>
              <button className="p-1 px-2 text-gray-300">{"<"}</button>
              <span className="px-2 text-xs">0-0 of 0</span>
              <button className="p-1 px-2 text-gray-300">{">"}</button>
              <button className="p-1 px-2 text-gray-300">{">|"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  'src/components/PenerimaanBarang.tsx': `import React from 'react';
import { Search, X, Filter } from 'lucide-react';

export default function PenerimaanBarang() {
  return (
    <div className="p-6">
      <div className="bg-white border flex flex-col justify-between flex-col border-gray-200 rounded-lg shadow-sm">
        <div className="w-full flex justify-between items-center p-4 border-b border-gray-100 bg-[#fdf2f8] rounded-t-lg">
          <h2 className="text-2xl font-bold text-[#3B415A]">Penerimaan Barang</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 bg-white rounded text-gray-600 text-sm">
              May 6, 2026 - May 6, 2026
            </button>
            <button className="px-4 py-2 bg-[#e11d48] text-white rounded font-medium text-sm hover:bg-[#be123c] transition-colors">
              Terima Barang
            </button>
            <button className="px-4 py-2 border border-gray-300 text-[#3B415A] bg-white rounded font-medium text-sm hover:bg-gray-50 transition-colors">
              Download
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

          <div className="overflow-x-auto min-h-[300px]">
            <table className="w-full text-sm text-left">
              <thead className="text-[#3B415A] font-medium border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-medium">No</th>
                  <th className="px-4 py-3 font-medium">No. Surat Jalan</th>
                  <th className="px-4 py-3 font-medium">Nomor PO</th>
                  <th className="px-4 py-3 font-medium">Tanggal</th>
                  <th className="px-4 py-3 font-medium">Supplier</th>
                  <th className="px-4 py-3 font-medium">Pengirim</th>
                  <th className="px-4 py-3 font-medium">Penerima</th>
                  <th className="px-4 py-3 font-medium">Catatan</th>
                </tr>
                <tr>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                </tr>
              </thead>
            </table>
            <div className="flex items-center justify-center h-48 text-gray-500 text-sm">
              No records to display
            </div>
          </div>

          <div className="flex items-center justify-end mt-4 text-sm text-gray-500 border-t border-gray-100 pt-4">
            <div className="flex items-center space-x-2">
              <span>5 rows</span>
              <div className="flex p-1 border rounded bg-white mt-[-2px]">
                 <span className="text-gray-600 transform scale-75 mt-[2px]">▼</span>
              </div>
            </div>
            <div className="flex items-center ml-4 space-x-1">
              <button className="p-1 px-2 text-gray-300">{"|<"}</button>
              <button className="p-1 px-2 text-gray-300">{"<"}</button>
              <span className="px-2 text-xs">0-0 of 0</span>
              <button className="p-1 px-2 text-gray-300">{">"}</button>
              <button className="p-1 px-2 text-gray-300">{">|"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  'src/components/Adjustment.tsx': `import React from 'react';
import { Search, X, Filter } from 'lucide-react';

export default function Adjustment() {
  return (
    <div className="p-6">
      <div className="bg-white border flex flex-col justify-between flex-col border-gray-200 rounded-lg shadow-sm">
        <div className="w-full flex justify-between items-center p-4 border-b border-gray-100 bg-[#fdf2f8] rounded-t-lg">
          <h2 className="text-2xl font-bold text-[#3B415A]">Daftar Penyesuaian Stok</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-[#e11d48] text-white rounded font-medium text-sm hover:bg-[#be123c] transition-colors">
              Buat Penyesuaian
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-400 bg-gray-100 rounded font-medium text-sm transition-colors cursor-not-allowed">
              Download
            </button>
            <button className="px-4 py-2 border border-gray-300 text-[#3B415A] bg-white rounded font-medium text-sm hover:bg-gray-50 transition-colors">
              Upload
            </button>
          </div>
        </div>

        <div className="px-4 py-3 bg-[#fdf2f8] border-b border-gray-100 flex items-center gap-2">
          <span className="text-sm font-medium text-[#3B415A]">Tanggal:</span>
          <button className="px-3 py-1 border border-gray-300 bg-white rounded text-gray-600 text-xs">
            May 6, 2026 - May 6, 2026
          </button>
        </div>

        <div className="w-full border-b border-gray-100 text-sm">
          <div className="flex border-b border-gray-100 px-4 py-3 hover:bg-gray-50">
            <div className="w-1/2 font-medium text-[#3B415A]">Jumlah Penyesuaian</div>
            <div className="w-1/2 text-gray-600">0</div>
          </div>
          <div className="flex border-b border-gray-100 px-4 py-3 hover:bg-gray-50">
            <div className="w-1/2 font-medium text-[#3B415A]">Total Income</div>
            <div className="w-1/2 text-gray-600">Rp 0</div>
          </div>
          <div className="flex px-4 py-3 hover:bg-gray-50">
            <div className="w-1/2 font-medium text-[#3B415A]">Total Expense</div>
            <div className="w-1/2 text-gray-600">Rp 0</div>
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

          <div className="overflow-x-auto min-h-[300px]">
            <table className="w-full text-sm text-left">
              <thead className="text-[#3B415A] font-medium border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-medium">No</th>
                  <th className="px-4 py-3 font-medium">Tanggal</th>
                  <th className="px-4 py-3 font-medium">Nama</th>
                  <th className="px-4 py-3 font-medium">Jumlah Sebelum</th>
                  <th className="px-4 py-3 font-medium">Jumlah Sesudah</th>
                  <th className="px-4 py-3 font-medium">Selisih</th>
                  <th className="px-4 py-3 font-medium">Pemasukan /<br/>Pengeluaran</th>
                  <th className="px-4 py-3 font-medium">Alasan</th>
                  <th className="px-4 py-3 font-medium">Dibuat oleh</th>
                </tr>
                <tr>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                  <th className="px-4 py-2"><div className="border-b border-gray-300 flex pb-1"><Filter className="w-4 h-4 text-gray-500" /></div></th>
                </tr>
              </thead>
            </table>
            <div className="flex items-center justify-center h-48 text-gray-500 text-sm">
              No records to display
            </div>
          </div>

          <div className="flex items-center justify-end mt-4 text-sm text-gray-500 border-t border-gray-100 pt-4">
            <div className="flex items-center space-x-2">
              <span>5 rows</span>
              <div className="flex p-1 border rounded bg-white mt-[-2px]">
                 <span className="text-gray-600 transform scale-75 mt-[2px]">▼</span>
              </div>
            </div>
            <div className="flex items-center ml-4 space-x-1">
              <button className="p-1 px-2 text-gray-300">{"|<"}</button>
              <button className="p-1 px-2 text-gray-300">{"<"}</button>
              <span className="px-2 text-xs">0-0 of 0</span>
              <button className="p-1 px-2 text-gray-300">{">"}</button>
              <button className="p-1 px-2 text-gray-300">{">|"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`
};

for (const [filepath, content] of Object.entries(components)) {
  fs.writeFileSync(filepath, content);
  console.log(`Created ${filepath}`);
}
