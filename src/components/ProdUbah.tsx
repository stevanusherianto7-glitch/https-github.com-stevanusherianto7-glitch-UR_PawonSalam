import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function ProdUbah({ setActiveTab }: { setActiveTab?: (tab: string) => void }) {
  const [otomatisHPP, setOtomatisHPP] = useState(false);
  const [punyaVarian, setPunyaVarian] = useState(false);
  const [recommended, setRecommended] = useState(true);
  const [tampilSelfOrder, setTampilSelfOrder] = useState(true);
  const [tampilWaiter, setTampilWaiter] = useState(true);
  const [aktif, setAktif] = useState(true);
  const [hargaBerbeda, setHargaBerbeda] = useState(false);
  const [resep, setResep] = useState('tidak_pakai');

  return (
    <div className="bg-white min-h-full pb-20">
      <div className="p-4 border-b border-gray-200">
        <button 
          onClick={() => setActiveTab && setActiveTab('prod_daftar')}
          className="text-pink-600 text-sm flex items-center hover:underline mb-2"
        >
          <ArrowLeft className="w-3 h-3 mr-1" /> Kembali
        </button>
        <h2 className="text-xl font-bold text-slate-800">Ubah Produk</h2>
      </div>

      <div className="max-w-5xl mx-auto p-6 mt-4 border border-gray-200 rounded-lg shadow-sm">
        <div className="space-y-6">
          {/* Gambar */}
          <div className="grid grid-cols-12 gap-4 items-start border-b border-gray-100 pb-6">
            <div className="col-span-3">
              <label className="text-sm font-medium text-gray-700">Gambar</label>
            </div>
            <div className="col-span-9">
              <div className="flex flex-col border border-gray-200 rounded overflow-hidden w-64 bg-gray-50">
                <img 
                  src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=200&h=200" 
                  alt="Product preview" 
                  className="w-full h-48 object-cover"
                />
                <button className="bg-pink-600 text-white py-2 text-sm font-medium hover:bg-pink-700 transition-colors">
                  Ubah Gambar
                </button>
              </div>
            </div>
          </div>

          {/* SKU */}
          <div className="grid grid-cols-12 gap-4 items-center border-b border-gray-100 pb-6">
            <div className="col-span-3 flex items-center">
              <label className="text-sm font-medium text-gray-700 mr-2">SKU</label>
            </div>
            <div className="col-span-9">
              <input type="text" placeholder="Masukan SKU" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-pink-500" />
            </div>
          </div>

          {/* Kategori */}
          <div className="grid grid-cols-12 gap-4 items-center border-b border-gray-100 pb-6">
            <div className="col-span-3 flex items-center">
              <label className="text-sm font-medium text-gray-700 mr-2">Kategori</label>
              <span className="bg-yellow-400 text-yellow-900 text-[10px] px-1.5 py-0.5 rounded font-bold">Wajib</span>
            </div>
            <div className="col-span-9">
              <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-pink-500 bg-white">
                <option>Makanan</option>
                <option>Minuman</option>
              </select>
            </div>
          </div>

          {/* Nama */}
          <div className="grid grid-cols-12 gap-4 items-center border-b border-gray-100 pb-6">
            <div className="col-span-3 flex items-center">
              <label className="text-sm font-medium text-gray-700 mr-2">Nama</label>
              <span className="bg-yellow-400 text-yellow-900 text-[10px] px-1.5 py-0.5 rounded font-bold">Wajib</span>
            </div>
            <div className="col-span-9">
              <input type="text" defaultValue="Nasi Pindang" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-pink-500" />
            </div>
          </div>

          {/* Deskripsi */}
          <div className="grid grid-cols-12 gap-4 items-start border-b border-gray-100 pb-6">
            <div className="col-span-3">
              <label className="text-sm font-medium text-gray-700">Deskripsi</label>
            </div>
            <div className="col-span-9">
              <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-pink-500"></textarea>
            </div>
          </div>

          {/* HPP */}
          <div className="grid grid-cols-12 gap-4 items-start border-b border-gray-100 pb-6">
            <div className="col-span-3">
              <label className="text-sm font-medium text-gray-700">HPP</label>
            </div>
            <div className="col-span-9">
              <p className="text-xs text-gray-400 mb-1">HPP otomatis dihitung dari jumlah biaya bahan baku dalam resep.</p>
              <div className="flex items-center space-x-3">
                <div className="flex-1 flex rounded border border-gray-300 overflow-hidden bg-gray-50">
                  <span className="px-3 py-2 bg-gray-100 text-gray-500 border-r border-gray-300">Rp</span>
                  <input type="text" disabled={otomatisHPP} defaultValue="27.960" className="flex-1 px-3 py-2 bg-transparent focus:outline-none" />
                  <span className="px-3 py-2 bg-gray-100 text-gray-500 border-l border-gray-300">.00</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div 
                    className={`w-10 h-5 rounded-full relative cursor-pointer ${otomatisHPP ? 'bg-pink-500' : 'bg-gray-300'}`}
                    onClick={() => setOtomatisHPP(!otomatisHPP)}
                  >
                    <div className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${otomatisHPP ? 'transform translate-x-5' : ''}`}></div>
                  </div>
                  <span className="text-sm text-gray-600">Otomatis</span>
                </div>
                <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded font-bold">62.77% dari Harga Jual</span>
              </div>
            </div>
          </div>

          {/* Harga Jual */}
          <div className="grid grid-cols-12 gap-4 items-center border-b border-gray-100 pb-6">
            <div className="col-span-3 flex items-center">
              <label className="text-sm font-medium text-gray-700 mr-2">Harga Jual</label>
              <span className="bg-yellow-400 text-yellow-900 text-[10px] px-1.5 py-0.5 rounded font-bold">Wajib</span>
            </div>
            <div className="col-span-9">
              <div className="flex rounded border border-gray-300 overflow-hidden w-full max-w-2xl">
                <span className="px-3 py-2 bg-gray-100 text-gray-500 border-r border-gray-300">Rp</span>
                <input type="text" defaultValue="44.545" className="flex-1 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-pink-500" />
                <span className="px-3 py-2 bg-gray-100 text-gray-500 border-l border-gray-300">.00</span>
              </div>
            </div>
          </div>

          {/* Harga Diskon */}
          <div className="grid grid-cols-12 gap-4 items-center border-b border-gray-100 pb-6">
            <div className="col-span-3">
              <label className="text-sm font-medium text-gray-700">Harga Diskon</label>
            </div>
            <div className="col-span-9">
              <div className="flex rounded border border-gray-300 overflow-hidden w-full max-w-2xl">
                <span className="px-3 py-2 bg-gray-100 text-gray-500 border-r border-gray-300">Rp</span>
                <input type="text" defaultValue="0" className="flex-1 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-pink-500" />
                <span className="px-3 py-2 bg-gray-100 text-gray-500 border-l border-gray-300">.00</span>
              </div>
            </div>
          </div>

          {/* Toggles */}
          {[
            { label: 'Punya Varian', state: punyaVarian, setter: setPunyaVarian },
            { label: 'Recommended', state: recommended, setter: setRecommended },
            { label: 'Tampilkan di Self Order', state: tampilSelfOrder, setter: setTampilSelfOrder },
            { label: 'Tampilkan di Waiter App', state: tampilWaiter, setter: setTampilWaiter },
            { label: 'Aktif', state: aktif, setter: setAktif },
            { label: 'Gunakan Harga Berbeda Untuk Berbagai Tipe Penjualan', state: hargaBerbeda, setter: setHargaBerbeda }
          ].map((toggle, idx) => (
            <div key={idx} className="grid grid-cols-12 gap-4 items-center pb-4">
              <div className="col-span-3">
                <label className="text-sm font-medium text-gray-700">{toggle.label}</label>
              </div>
              <div className="col-span-9">
                <div 
                  className={`w-10 h-5 rounded-full relative cursor-pointer ${toggle.state ? 'bg-pink-500' : 'bg-gray-300'}`}
                  onClick={() => toggle.setter(!toggle.state)}
                >
                  <div className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${toggle.state ? 'transform translate-x-5' : ''}`}></div>
                </div>
              </div>
            </div>
          ))}

          {/* Resep */}
          <div className="grid grid-cols-12 gap-4 items-center border-t border-gray-100 pt-6 pb-6">
            <div className="col-span-3">
              <label className="text-sm font-medium text-gray-700">Resep</label>
            </div>
            <div className="col-span-9 flex space-x-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="resep" 
                  checked={resep === 'tidak_pakai'} 
                  onChange={() => setResep('tidak_pakai')}
                  className="text-pink-600 focus:ring-pink-500"
                />
                <span className="text-sm text-gray-700">Tidak pakai resep</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="resep" 
                  checked={resep === 'pakai_resep'} 
                  onChange={() => setResep('pakai_resep')}
                  className="text-pink-600 focus:ring-pink-500"
                />
                <span className="text-sm text-gray-700">Pakai Resep</span>
              </label>
            </div>
          </div>

          {/* Stok */}
          <div className="grid grid-cols-12 gap-4 items-center border-t border-gray-100 pt-6">
            <div className="col-span-3 flex items-center">
              <label className="text-sm font-medium text-gray-700 mr-2">Stok</label>
              <span className="bg-yellow-400 text-yellow-900 text-[10px] px-1.5 py-0.5 rounded font-bold">Wajib</span>
            </div>
            <div className="col-span-9">
              <input type="text" defaultValue="581" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-pink-500" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-8 left-64 right-0 border-t border-gray-200 bg-white p-4 shadow-md flex justify-end space-x-2 px-8">
        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors text-sm font-medium">Batal</button>
        <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm font-medium">Hapus</button>
        <button className="px-6 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors text-sm font-medium">Simpan</button>
      </div>
    </div>
  );
}
