import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function PengaturanAkun() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  return (
    <div className="p-6">
      <div className="flex gap-6">
        {/* Data Diri Section */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)]">
          <div className="p-4 border-b border-gray-200 bg-pink-50 rounded-t-lg">
            <h2 className="text-2xl font-bold text-slate-700">Data Diri</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-3 items-center gap-4">
              <label className="text-sm font-medium text-gray-700">NIK</label>
              <div className="col-span-2">
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500" />
              </div>
            </div>
            
            <div className="grid grid-cols-3 items-center gap-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700">Nama</label>
                <span className="bg-yellow-400 text-yellow-900 text-xs px-1.5 py-0.5 rounded font-bold">Wajib</span>
              </div>
              <div className="col-span-2">
                <input type="text" defaultValue="Anto" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500" />
              </div>
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <span className="bg-yellow-400 text-yellow-900 text-xs px-1.5 py-0.5 rounded font-bold">Wajib</span>
              </div>
              <div className="col-span-2">
                <input type="email" defaultValue="stevanusherianto7@gmail.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500" />
              </div>
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700">No. Telepon</label>
                <span className="bg-yellow-400 text-yellow-900 text-xs px-1.5 py-0.5 rounded font-bold">Wajib</span>
              </div>
              <div className="col-span-2">
                <input type="tel" defaultValue="082125265827" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500" />
              </div>
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <label className="text-sm font-medium text-gray-700">Jenis Kelamin</label>
              <div className="col-span-2 flex space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="gender" defaultChecked className="text-pink-600 focus:ring-pink-500" />
                  <span className="text-sm text-gray-700">Laki-laki</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="gender" className="text-pink-600 focus:ring-pink-500" />
                  <span className="text-sm text-gray-700">Perempuan</span>
                </label>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 flex justify-end">
            <button className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors font-medium">
              Simpan
            </button>
          </div>
        </div>

        {/* Password & Hapus Akun Section */}
        <div className="flex-1 space-y-6">
          {/* Password Section */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)]">
            <div className="p-4 border-b border-gray-200 bg-pink-50 rounded-t-lg">
              <h2 className="text-2xl font-bold text-slate-700">Password</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-3 items-center gap-4">
                <label className="text-sm font-medium text-gray-700">Password Lama</label>
                <div className="col-span-2 relative">
                  <input 
                    type={showOldPassword ? "text" : "password"} 
                    defaultValue="password123"
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 bg-blue-50" 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    className="absolute right-0 top-0 h-full px-3 bg-pink-600 text-white rounded-r-md flex items-center justify-center hover:bg-pink-700"
                  >
                    {showOldPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 items-center gap-4">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <div className="col-span-2 relative">
                  <input 
                    type={showNewPassword ? "text" : "password"} 
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500" 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-0 top-0 h-full px-3 bg-pink-600 text-white rounded-r-md flex items-center justify-center hover:bg-pink-700"
                  >
                    {showNewPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 flex justify-end">
              <button className="bg-pink-400 text-white px-6 py-2 rounded-md hover:bg-pink-500 transition-colors font-medium">
                Simpan
              </button>
            </div>
          </div>

          {/* Hapus Akun Section */}
          <div className="bg-white rounded-lg shadow-sm border border-red-500">
            <div className="p-6 flex items-center justify-between">
              <div>
                <h3 className="text-red-500 font-bold mb-2">Hapus Akun Ini</h3>
                <p className="text-red-400 text-sm">Akun yang telah dihapus tidak dapat dikembalikan, mohon berhati-hati</p>
              </div>
              <button className="bg-[#e55353] text-white px-10 py-2 rounded border border-[#d93737] hover:bg-red-600 font-medium">
                Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
