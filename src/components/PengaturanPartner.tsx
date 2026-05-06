import React from 'react';

export default function PengaturanPartner() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)]">
        <div className="p-4 border-b border-gray-200 bg-pink-50 rounded-t-lg">
          <h2 className="text-2xl font-bold text-slate-700">Data Bisnis</h2>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Images Section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-2">Gambar</label>
              <div className="border border-gray-200 rounded-md p-4 flex flex-col items-center justify-center min-h-[300px]">
                <div className="w-1/2 aspect-[3/4] bg-gray-100 rounded mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <span className="text-white text-xl font-bold tracking-widest absolute">Pawon<br/>Salam</span>
                    <div className="opacity-40 w-full h-full" style={{ backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(255,255,255,.1) 50%), linear-gradient(rgba(255,255,255,.1) 50%, transparent 50%)', backgroundSize: '20px 20px'}}></div>
                  </div>
                </div>
                <button className="w-full bg-pink-600 text-white font-medium py-2 rounded shadow-sm hover:bg-pink-700">Ubah Gambar</button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-2">Logo</label>
              <div className="border border-gray-200 rounded-md p-4 flex flex-col items-center justify-center min-h-[300px]">
                <div className="h-40 mb-4 flex items-center justify-center">
                  <div className="text-gray-400 flex items-center justify-center border-2 border-dashed border-gray-300 w-32 h-32 rounded-full overflow-hidden relative">
                    <span className="text-sm">logo</span>
                  </div>
                </div>
                <button className="w-full bg-pink-600 text-white font-medium py-2 rounded shadow-sm hover:bg-pink-700 mt-auto">Ubah Gambar</button>
              </div>
            </div>
          </div>

          {/* Form Fields Section */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Nama Bisnis</label>
              <input type="text" defaultValue="Pawon Salam" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Nomor Telepon Bisnis</label>
              <input type="tel" defaultValue="082320336007" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500" />
            </div>

            <div className="col-span-1">
              <label className="block text-xs font-medium text-gray-500 mb-1">Deskripsi</label>
              <textarea rows={2} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500 resize-none"></textarea>
            </div>
            <div className="col-span-1">
              <label className="block text-xs font-medium text-gray-500 mb-1">Alamat</label>
              <textarea rows={2} defaultValue="Ruko Beryl Commercial, Summarecon, Jl. Bulevar Selatan No.7B, Cisaranten Kidul, Kec. Gedebage, Kota Bandung, Jawa Barat 40295" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500 resize-none"></textarea>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Nama WIFI</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Password WIFI</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500" />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Tax(%)</label>
              <div className="flex">
                <input type="number" defaultValue="10.00" className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-pink-500" />
                <span className="inline-flex items-center px-3 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 rounded-r text-sm">%</span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Service Charge(%)</label>
              <div className="flex">
                <input type="number" defaultValue="0" className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-pink-500" />
                <span className="inline-flex items-center px-3 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 rounded-r text-sm">%</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Kelurahan</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500 appearance-none bg-white">
                <option></option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Detail Tipe Bisnis</label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded focus-within:border-pink-500 flex items-center">
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded flex items-center mr-1">
                  Bistro <button className="ml-1 text-gray-500 hover:text-gray-700">&times;</button>
                </span>
                <input type="text" className="flex-1 outline-none text-sm min-w-[10px]" />
                <button className="text-gray-400 hover:text-gray-600">&times;</button>
                <div className="border-l border-gray-300 mx-2 h-4"></div>
                <div className="text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Longitude</label>
              <input type="text" defaultValue="107.70136029729068" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Latitude</label>
              <input type="text" defaultValue="-6.9530617329593535" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500" />
            </div>
          </div>

          {/* Toggles Section */}
          <div className="pt-6 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-6">
              <label className="flex items-center justify-between cursor-pointer border-b border-gray-100 pb-4">
                <span className="text-sm text-gray-600 font-medium">Aktifkan Pesan Antar</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-pink-500" style={{ right: 0 }} />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-pink-500 cursor-pointer"></label>
                </div>
              </label>
              <label className="flex items-center justify-between cursor-pointer border-b border-gray-100 pb-4">
                <span className="text-sm text-gray-600 font-medium">Aktifkan Takeaway</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-pink-500" style={{ right: 0 }} />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-pink-500 cursor-pointer"></label>
                </div>
              </label>
              <label className="flex items-center justify-between cursor-pointer border-b border-gray-100 pb-4">
                <span className="text-sm text-gray-600 font-medium">Aktifkan Temporary QR</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300" />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </label>

              <label className="flex items-center justify-between cursor-pointer border-b border-gray-100 pb-4">
                <span className="text-sm text-gray-600 font-medium">HPP dari Rata-rata pembelian</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300" />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </label>
              <label className="flex items-center justify-between cursor-pointer border-b border-gray-100 pb-4">
                <span className="text-sm text-gray-600 font-medium">Tutup Sementara</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300" />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </label>
              <label className="flex items-center justify-between cursor-pointer border-b border-gray-100 pb-4">
                <span className="text-sm text-gray-600 font-medium">Aktifkan Panggil Waiter di Selforder</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-pink-500" style={{ right: 0 }} />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-pink-500 cursor-pointer"></label>
                </div>
              </label>

              <label className="flex items-center justify-between cursor-pointer border-b border-gray-100 pb-4">
                <span className="text-sm text-gray-600 font-medium">Aktifkan Pembulatan</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300" />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </label>
              <div></div> {/* Empty grids */}
              <label className="flex items-center justify-between cursor-pointer border-b border-gray-100 pb-4">
                <span className="text-sm text-gray-600 font-medium">Aktifkan Minta Bill di Selforder</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-pink-500" style={{ right: 0 }} />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-pink-500 cursor-pointer"></label>
                </div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-200 flex justify-end">
          <button className="bg-pink-600 text-white px-6 py-2 rounded font-medium hover:bg-pink-700">Simpan</button>
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
