import React from 'react';
import { Search, ListFilter, Settings } from 'lucide-react';

export default function ProdDaftar({ setActiveTab }: { setActiveTab?: (tab: string) => void }) {
  const products = [
    { id: 1, sku: '', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=100&h=100', nama: 'Nasi Soto Ayam', kategori: 'Makanan', harga: 'Rp 20.909', recommended: 'Ya', status: 'Aktif' },
    { id: 2, sku: '', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=100&h=100', nama: 'Nasi Pindang', kategori: 'Makanan', harga: 'Rp 44.545', recommended: 'Ya', status: 'Aktif' },
    { id: 3, sku: '', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=100&h=100', nama: 'Nasi Rawon', kategori: 'Makanan', harga: 'Rp 42.000', recommended: 'Ya', status: 'Aktif' },
    { id: 4, sku: '', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=100&h=100', nama: 'Nasi Ayam Goreng PS', kategori: 'Makanan', harga: 'Rp 30.000', recommended: 'Ya', status: 'Aktif' },
    { id: 5, sku: '', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=100&h=100', nama: 'Nasi Ayam', kategori: 'Makanan', harga: 'Rp 31.818', recommended: 'Tidak', status: 'Nonaktif' },
  ];

  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)]">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-pink-50 rounded-t-lg">
          <h2 className="text-2xl font-bold text-slate-700">Produk</h2>
          <div className="flex space-x-2">
            <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors font-medium">
              Tambah Data
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium">
              Upload
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium">
              Download
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors">
              <Settings className="w-5 h-5 text-gray-600" />
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
                  <th className="py-2 px-4 font-semibold text-gray-700 text-sm">
                    <div className="flex flex-col">
                      <span>Pilih</span>
                      <div className="flex flex-col mt-2 group cursor-pointer" title="Filter">
                      <ListFilter className="w-4 h-4 text-gray-700 mb-1" />
                      <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                    </div>
                    </div>
                  </th>
                  <th className="py-2 px-4 font-semibold text-gray-700 text-sm">
                    <div className="flex flex-col">
                      <span>No</span>
                      <div className="flex flex-col mt-2 group cursor-pointer" title="Filter">
                      <ListFilter className="w-4 h-4 text-gray-700 mb-1" />
                      <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                    </div>
                    </div>
                  </th>
                  <th className="py-2 px-4 font-semibold text-gray-700 text-sm">
                    <div className="flex flex-col">
                      <span>SKU</span>
                      <div className="flex flex-col mt-2 group cursor-pointer" title="Filter">
                      <ListFilter className="w-4 h-4 text-gray-700 mb-1" />
                      <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                    </div>
                    </div>
                  </th>
                  <th className="py-2 px-4 font-semibold text-gray-700 text-sm">
                    <div className="flex flex-col">
                      <span>Gambar</span>
                      <div className="h-px w-full mt-7"></div>
                    </div>
                  </th>
                  <th className="py-2 px-4 font-semibold text-gray-700 text-sm">
                    <div className="flex flex-col">
                      <span>Nama</span>
                      <div className="flex flex-col mt-2 group cursor-pointer" title="Filter">
                      <ListFilter className="w-4 h-4 text-gray-700 mb-1" />
                      <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                    </div>
                    </div>
                  </th>
                  <th className="py-2 px-4 font-semibold text-gray-700 text-sm">
                    <div className="flex flex-col">
                      <span>Kategori</span>
                      <div className="flex flex-col mt-2 group cursor-pointer" title="Filter">
                      <ListFilter className="w-4 h-4 text-gray-700 mb-1" />
                      <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                    </div>
                    </div>
                  </th>
                  <th className="py-2 px-4 font-semibold text-gray-700 text-sm">
                    <div className="flex flex-col">
                      <span>Harga</span>
                      <div className="flex flex-col mt-2 group cursor-pointer" title="Filter">
                      <ListFilter className="w-4 h-4 text-gray-700 mb-1" />
                      <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                    </div>
                    </div>
                  </th>
                  <th className="py-2 px-4 font-semibold text-gray-700 text-sm">
                    <div className="flex flex-col">
                      <span>Recommended</span>
                      <div className="flex flex-col mt-2 group cursor-pointer" title="Filter">
                      <ListFilter className="w-4 h-4 text-gray-700 mb-1" />
                      <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                    </div>
                    </div>
                  </th>
                  <th className="py-2 px-4 font-semibold text-gray-700 text-sm">
                    <div className="flex flex-col">
                      <span>Status</span>
                      <div className="flex flex-col mt-2 group cursor-pointer" title="Filter">
                      <ListFilter className="w-4 h-4 text-gray-700 mb-1" />
                      <div className="border-b border-gray-300 w-full group-hover:border-black"></div>
                    </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.map((product, index) => (
                  <tr key={product.id} className={`hover:bg-gray-50 transition-colors ${index % 2 !== 0 ? 'bg-gray-50' : ''}`}>
                    <td className="py-3 px-4">
                      <input type="checkbox" className="w-4 h-4 text-pink-600 rounded border-gray-300 focus:ring-pink-500" />
                    </td>
                    <td className="py-3 px-4 text-gray-600 text-sm">{product.id}</td>
                    <td className="py-3 px-4 text-gray-600 text-sm">{product.sku}</td>
                    <td className="py-3 px-4">
                      <img src={product.image} alt={product.nama} className="w-12 h-16 object-cover rounded shadow-sm" />
                    </td>
                    <td className="py-3 px-4 text-gray-800 text-sm font-medium">
                      <button 
                        onClick={() => setActiveTab && setActiveTab('prod_ubah')} 
                        className="hover:text-pink-600 hover:underline focus:outline-none"
                      >
                        {product.nama}
                      </button>
                    </td>
                    <td className="py-3 px-4 text-gray-600 text-sm">{product.kategori}</td>
                    <td className="py-3 px-4 text-gray-800 text-sm">{product.harga}</td>
                    <td className="py-3 px-4 text-gray-600 text-sm">{product.recommended}</td>
                    <td className="py-3 px-4 text-gray-600 text-sm">{product.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex justify-between items-center mt-6">
            <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded-md font-medium text-sm cursor-not-allowed">
              Copy Ke Produk Pre Order
            </button>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <span>5 rows</span>
                <span className="text-gray-400 select-none">▼</span>
              </div>
              <div className="flex items-center space-x-4 ml-6">
                <button disabled className="text-gray-300">|&lt;</button>
                <button disabled className="text-gray-300">&lt;</button>
                <span>1-5 of 79</span>
                <button className="text-gray-500 hover:text-gray-700">&gt;</button>
                <button className="text-gray-500 hover:text-gray-700">&gt;|</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
