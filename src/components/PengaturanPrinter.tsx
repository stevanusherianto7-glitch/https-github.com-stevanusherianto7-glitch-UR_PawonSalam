import React from 'react';

export default function PengaturanPrinter() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)]">
        <div className="p-4 border-b border-gray-200 bg-pink-50 rounded-t-lg">
          <h2 className="text-2xl font-bold text-slate-700">Pengaturan Printer</h2>
          <p className="text-sm text-gray-500 mt-1">Pengaturan printer akan berubah setelah aplikasi melakukan relogin terlebih dahulu</p>
        </div>

        <div className="p-6">
          <div className="mb-8 flex items-center">
            <span className="text-sm font-medium text-gray-700 mr-4">Logo</span>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-pink-500" style={{ right: 0 }} />
              <label className="toggle-label block overflow-hidden h-6 rounded-full bg-pink-500 cursor-pointer"></label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { label: 'Nama Bisnis Kamu', checked: true },
                { label: 'Alamat', checked: true },
                { label: 'Kota', checked: true },
                { label: 'Provinsi', checked: true },
                { label: 'Kode Pos', checked: true },
                { label: 'Nomor Telepon Bisnis', checked: true },
                { label: 'Website', checked: true },
                { label: 'Twitter', checked: true },
                { label: 'Facebook', checked: true },
                { label: 'Instagram', checked: true },
                { label: 'Notes', checked: true },
                { label: 'Antrian Below Notes', checked: false },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center justify-between border border-gray-200 rounded p-2">
                    <span className="text-sm text-gray-500">{item.label}</span>
                    <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                      <input 
                        type="checkbox" 
                        defaultChecked={item.checked} 
                        className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer ${item.checked ? 'border-pink-500' : 'border-gray-300'}`} 
                        style={item.checked ? { right: 0 } : {}} 
                      />
                      <label className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${item.checked ? 'bg-pink-500' : 'bg-gray-300'}`}></label>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="border border-gray-200 rounded-md">
                <div className="p-3 bg-pink-50 border-b border-gray-200 rounded-t-md">
                  <h3 className="font-bold text-gray-700 text-sm">Preview Receipt</h3>
                </div>
                <div className="p-4 bg-gray-100 min-h-[400px] flex items-center justify-center relative">
                  {/* Receipt Mockup */}
                  <div className="bg-white p-4 shadow-sm text-[10px] w-64 uppercase text-center font-mono text-gray-800">
                    <h4 className="text-lg font-bold mb-1">PAWON SALAM</h4>
                    <p className="mb-2 leading-tight">
                      Ruko Beryl Commercial, Summarecon, Jl. Bulevar Selatan No.7B, Cisaranten Kidul, Kec. Gedebage, Kota Bandung,<br/>Jawa Barat 40295<br/>082320336007
                    </p>
                    <p className="border-b border-dashed border-gray-400 pb-2 mb-2"></p>
                    <div className="text-left mb-2 space-y-0.5">
                      <div className="flex"><span className="w-16">ID</span><span>: XX-XXXXXX/XXXXXX</span></div>
                      <div className="flex"><span className="w-16">Tanggal</span><span>: 25 Agustus 2025</span></div>
                      <div className="flex"><span className="w-16">Jam</span><span>: 14:30</span></div>
                      <div className="flex"><span className="w-16">Nama</span><span>: John Doe</span></div>
                      <div className="flex"><span className="w-16">Kasir</span><span>: Admin</span></div>
                      <div className="flex"><span className="w-16">Server</span><span>: Server1</span></div>
                      <div className="flex"><span className="w-16">Antrian</span><span>: 1</span></div>
                    </div>
                    <p className="border-b border-dashed border-gray-400 pb-2 mb-2"></p>
                    <div className="text-left mb-2">Pesanan</div>
                    <div className="text-left mb-2 space-y-1">
                      <div>
                        <div>Item 1</div>
                        <div className="flex justify-between"><span>2 x Rp 20.000</span><span>Rp 40.000</span></div>
                      </div>
                      <div>
                        <div>Item 2</div>
                        <div className="flex justify-between"><span>1 x Rp 20.000</span><span>Rp 20.000</span></div>
                      </div>
                    </div>
                    <p className="border-b border-dashed border-gray-400 pb-2 mb-2"></p>
                    <div className="space-y-0.5 text-right">
                      <div className="flex justify-between"><span>Subtotal</span><span>Rp 60.000</span></div>
                      <div className="flex justify-between"><span>Service (5%)</span><span>Rp 3.000</span></div>
                      <div className="flex justify-between"><span>Tax (10%)</span><span>Rp 6.300</span></div>
                      <div className="flex justify-between font-bold"><span>Total</span><span>Rp 69.300</span></div>
                      <div className="flex justify-between mt-1"><span>Metode Bayar</span><span>TUNAI</span></div>
                    </div>
                    <p className="border-t border-dashed border-gray-400 mt-2 pt-2"></p>
                  </div>

                  <div className="absolute bottom-4 flex space-x-2">
                    <button className="bg-pink-600 text-white text-xs px-3 py-1.5 rounded hover:bg-pink-700 font-bold">Zoom In</button>
                    <button className="bg-white text-gray-700 text-xs px-3 py-1.5 rounded border border-gray-300 hover:bg-gray-50 font-bold">Zoom Out</button>
                    <button className="bg-blue-500 text-white text-xs px-3 py-1.5 rounded hover:bg-blue-600 font-bold">Reset</button>
                  </div>
                </div>
              </div>
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
