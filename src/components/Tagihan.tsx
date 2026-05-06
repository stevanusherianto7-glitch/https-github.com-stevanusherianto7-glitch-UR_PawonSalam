import React from 'react';

export default function Tagihan() {
  return (
    <div className="p-6">
      <div className="flex gap-8">
        {/* Detail Tagihan Left Side */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-700 mb-6 border-b pb-4">Tagihan</h2>
          
          <div className="space-y-3 text-sm text-gray-700 mb-8">
            <h3 className="font-semibold text-gray-600 text-xs mb-2">PAKETMU SAAT INI</h3>
            <p>Paketmu saat ini : <span className="text-pink-600">Business</span></p>
            <p>Paket tambahanmu : <span className="text-pink-600">-</span></p>
            <p>Pembayaran Terakhir : 28-06-2025</p>
            <p>Aktif Sampai : 01-12-2026</p>
            <p>Mau ganti paket? <span className="text-pink-600 cursor-pointer">Hubungi kami</span></p>
          </div>

          <table className="w-full text-sm text-left text-gray-700 border border-gray-200 shadow-sm rounded-md overflow-hidden">
            <thead className="text-xs text-gray-700 bg-white border-b border-gray-200">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Nama Partner</th>
                <th scope="col" className="px-4 py-3 font-semibold">Jenis Langganan</th>
                <th scope="col" className="px-4 py-3 font-semibold">Tanggal Pembayaran</th>
                <th scope="col" className="px-4 py-3 font-semibold">Masa Aktif Langganan</th>
                <th scope="col" className="px-4 py-3 font-semibold">Total Payment</th>
                <th scope="col" className="px-4 py-3 font-semibold">Download</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-500 bg-gray-50">Belum ada riwayat tagihan</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Form Pembayaran Right Side */}
        <div className="w-[450px]">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] flex flex-col">
            <div className="bg-gray-300 h-2 rounded-t-lg"></div>
            <div className="p-6 space-y-6">
              
              <div className="flex justify-between items-center border border-gray-300 p-3 rounded">
                <span className="text-sm text-gray-600">Durasi Berlangganan</span>
                <select className="border border-gray-300 rounded px-2 py-1 text-sm outline-none">
                  <option>Tahunan</option>
                </select>
              </div>

              <div className="flex justify-between items-center border border-gray-300 p-3 rounded">
                <span className="text-sm text-gray-600">Metode Pembayaran</span>
                <select className="border border-gray-300 rounded px-2 py-1 text-sm outline-none">
                  <option>QRIS UR</option>
                </select>
              </div>

              <div>
                <h4 className="text-sm text-gray-600 mb-3">Paket Add-on :</h4>
                <div className="space-y-4">
                  {[
                    { name: 'Reservasi', price: 'Rp 1.200.000' },
                    { name: 'Reservasi + Booking', price: 'Rp 1.800.000' },
                    { name: 'Down Payment', price: 'Rp 1.200.000' },
                    { name: 'Piutang', price: 'Rp 1.200.000' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">{item.name}</span>
                      <div className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded border-gray-300 text-pink-600 focus:ring-pink-500" />
                        <span className="text-gray-600 w-24 text-right">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 pb-2">
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <div className="text-gray-700">Pawon Salam</div>
                    <div className="text-xs text-gray-400">Business</div>
                  </div>
                  <div className="text-gray-700">Rp 314.000</div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl text-pink-600">Total</div>
                  <div className="text-xl text-pink-600">Rp 314.000</div>
                </div>
                <div className="text-[10px] text-gray-500 italic">Masa berlangganan anda akan diperpanjang hingga</div>
                <div className="text-[10px] text-gray-700 font-bold">01-12-2027</div>
              </div>

              <button className="w-full bg-pink-600 text-white font-medium py-3 rounded-md hover:bg-pink-700 transition">
                Bayar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
