import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { formatRupiah } from '../utils';

const METHOD_DATA = [
  { name: 'QRIS', value: 724100, color: '#EA4335' },
  { name: 'TUNAI', value: 425249, color: '#5D0F2E' },
  { name: 'CREDIT CARD', value: 118200, color: '#6A3E00' },
];

const PEMASUKAN_HARIAN_DATA = [
  { name: '05-05-2026', value: 1267549 },
];

const PEMASUKAN_BULANAN_DATA = [
  { name: 'January', value: 32000000 },
  { name: 'February', value: 30000000 },
  { name: 'March', value: 35000000 },
  { name: 'April', value: 27500000 },
  { name: 'May', value: 6000000 },
  { name: 'June', value: 0 },
  { name: 'July', value: 0 },
  { name: 'August', value: 0 },
  { name: 'September', value: 0 },
  { name: 'October', value: 0 },
  { name: 'November', value: 0 },
  { name: 'December', value: 0 },
];

export default function Pemasukan() {
  return (
    <div className="p-8 bg-[#F8F9FB] min-h-full flex flex-col space-y-6">
      <div className="bg-[#d1fae5] border border-[#a7f3d0] rounded-xl p-5 flex justify-between items-center shrink-0">
        <h2 className="text-[28px] font-bold text-[#3B415A]">Laporan Pemasukan</h2>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600">Tanggal :</span>
            <div className="bg-white border text-sm font-medium text-gray-600 border-gray-200 px-4 py-2 rounded-lg shadow-sm">
              May 5, 2026 - May 5, 2026
            </div>
          </div>
          <button className="bg-white border border-gray-200 text-sm font-medium text-gray-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            Download
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-700">
            <thead>
              <tr className="border-b border-gray-200 bg-white">
                <th className="py-4 px-6 tracking-wide font-bold w-12 text-[#3B415A]">#</th>
                <th className="py-4 px-6 tracking-wide font-bold text-[#3B415A]">Nama</th>
                <th className="py-4 px-6 tracking-wide font-bold text-[#3B415A]">Penjualan</th>
                <th className="py-4 px-6 tracking-wide font-bold text-[#3B415A]">MDR (%)</th>
                <th className="py-4 px-6 tracking-wide font-bold text-[#3B415A]">MDR</th>
                <th className="py-4 px-6 tracking-wide font-bold text-[#3B415A]">PPn (11%)</th>
                <th className="py-4 px-6 tracking-wide font-bold text-[#3B415A]">Pemasukan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-6 font-bold">1</td>
                <td className="py-4 px-6 font-bold text-[#3B415A]">TUNAI</td>
                <td className="py-4 px-6">{formatRupiah(425249)}</td>
                <td className="py-4 px-6">0%</td>
                <td className="py-4 px-6">Rp 0</td>
                <td className="py-4 px-6">Rp 0</td>
                <td className="py-4 px-6">{formatRupiah(425249)}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-6 font-bold">2</td>
                <td className="py-4 px-6 font-bold text-[#3B415A] uppercase">Credit Card</td>
                <td className="py-4 px-6">{formatRupiah(118200)}</td>
                <td className="py-4 px-6">0%</td>
                <td className="py-4 px-6">Rp 0</td>
                <td className="py-4 px-6">Rp 0</td>
                <td className="py-4 px-6">{formatRupiah(118200)}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 font-bold">3</td>
                <td className="py-4 px-6 font-bold text-[#3B415A]">QRIS</td>
                <td className="py-4 px-6">{formatRupiah(724100)}</td>
                <td className="py-4 px-6">0%</td>
                <td className="py-4 px-6">Rp 0</td>
                <td className="py-4 px-6">Rp 0</td>
                <td className="py-4 px-6">{formatRupiah(724100)}</td>
              </tr>
              <tr>
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6 font-bold text-[#3B415A]">Total</td>
                <td className="py-4 px-6 font-bold text-[#3B415A]">{formatRupiah(1267549)}</td>
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6 font-bold text-[#3B415A]">Rp 0</td>
                <td className="py-4 px-6 font-bold text-[#3B415A]">Rp 0</td>
                <td className="py-4 px-6 font-bold text-[#3B415A]">{formatRupiah(1267549)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-[400px] flex flex-col">
          <h3 className="text-sm font-bold text-gray-800 mb-6">Metode Pembayaran (%)</h3>
          <div className="flex-1 min-h-0 relative -ml-8">
            <ResponsiveContainer width="110%" height="100%">
              <PieChart>
                <Pie data={METHOD_DATA} cx="50%" cy="50%" outerRadius={110} dataKey="value" stroke="#fff" strokeWidth={2}>
                  {METHOD_DATA.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <RechartsTooltip formatter={(val: number) => formatRupiah(val)} />
                <Legend iconType="rect" wrapperStyle={{ fontSize: '11px', paddingTop: '20px' }} verticalAlign="top" align="center" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-[400px] flex flex-col">
          <h3 className="text-sm font-bold text-gray-800 mb-6">Metode Pembayaran</h3>
          <div className="flex-1 min-h-0 relative mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={METHOD_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} tickFormatter={(val) => val === 0 ? '0' : val.toString()} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#6B7280' }} angle={0} dy={10} />
                <RechartsTooltip cursor={{ fill: 'transparent' }} formatter={(val: number) => formatRupiah(val)} />
                <Bar dataKey="value" radius={[0, 0, 0, 0]} maxBarSize={120}>
                   {METHOD_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                   ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

    </div>
  )
}
