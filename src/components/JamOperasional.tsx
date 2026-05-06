import React from 'react';

export default function JamOperasional() {
  const days = [
    { name: 'Senin', defaultOpen: '07:00', defaultClose: '17:00', defaultLastOrder: '16:30' },
    { name: 'Selasa', defaultOpen: '07:00', defaultClose: '17:00', defaultLastOrder: '16:30' },
    { name: 'Rabu', defaultOpen: '07:00', defaultClose: '17:00', defaultLastOrder: '16:30' },
    { name: 'Kamis', defaultOpen: '07:00', defaultClose: '17:00', defaultLastOrder: '16:30' },
    { name: 'Jumat', defaultOpen: '07:00', defaultClose: '17:00', defaultLastOrder: '16:30' },
    { name: 'Sabtu', defaultOpen: '06:00', defaultClose: '17:00', defaultLastOrder: '16:30' },
    { name: 'Minggu', defaultOpen: '06:00', defaultClose: '17:00', defaultLastOrder: '16:30' },
  ];

  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)]">
        <div className="p-4 border-b border-gray-200 bg-pink-50 rounded-t-lg">
          <h2 className="text-2xl font-bold text-slate-700">Atur Jam Buka</h2>
        </div>

        <div className="p-6 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-gray-200 text-gray-700 font-semibold">
                <th className="py-4 w-12"><input type="checkbox" className="rounded border-gray-300" /></th>
                <th className="py-4 w-32">Hari</th>
                <th className="py-4 w-24">Libur</th>
                <th className="py-4">Buka</th>
                <th className="py-4">Tutup</th>
                <th className="py-4">Last Order</th>
              </tr>
            </thead>
            <tbody>
              {days.map((day, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-b-0 space-y-4">
                  <td className="py-4"><input type="checkbox" className="rounded border-gray-300" /></td>
                  <td className="py-4 text-gray-700">{day.name}</td>
                  <td className="py-4"><input type="checkbox" className="rounded border-gray-300" /></td>
                  <td className="py-4 pr-4">
                    <div className="relative">
                      <input type="text" defaultValue={day.defaultOpen} className="border border-gray-300 rounded px-3 py-2 w-full text-gray-600 focus:outline-none focus:border-pink-500" />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 pr-4">
                    <div className="relative">
                      <input type="text" defaultValue={day.defaultClose} className="border border-gray-300 rounded px-3 py-2 w-full text-gray-600 focus:outline-none focus:border-pink-500" />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="relative">
                      <input type="text" defaultValue={day.defaultLastOrder} className="border border-gray-300 rounded px-3 py-2 w-full text-gray-600 focus:outline-none focus:border-pink-500" />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-200 flex justify-end">
          <button className="bg-pink-600 text-white px-6 py-2 rounded font-medium hover:bg-pink-700 transition">Simpan</button>
        </div>
      </div>
    </div>
  );
}
