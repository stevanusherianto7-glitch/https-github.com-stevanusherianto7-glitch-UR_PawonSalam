import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, LineChart, Line
} from 'recharts';
import { formatRupiah } from '../utils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';
import { downloadAsPDF } from '../pdfUtils';

const CHART_COLORS = [
  '#0ea5e9', // Sky 500
  '#f59e0b', // Amber 500
  '#ec4899', // Pink 500
  '#8b5cf6', // Violet 500
  '#10b981', // Emerald 500
  '#f43f5e', // Rose 500
  '#3b82f6', // Blue 500
  '#14b8a6', // Teal 500
  '#eab308', // Yellow 500
  '#d946ef', // Fuchsia 500
  '#ef4444', // Red 500
  '#a855f7', // Purple 500
];

const METHOD_DATA = [
  { name: 'QRIS', value: 724100, count: 8, color: '#154388' },
  { name: 'TUNAI', value: 425249, count: 3, color: '#8B21D2' },
  { name: 'CREDIT CARD', value: 118200, count: 1, color: '#57D397' },
];

const PEMASUKAN_HARIAN_DATA = [
  { name: '05-05-2026', value: 1267549 },
];

const PEMASUKAN_BULANAN_DATA = [
  { name: 'January', value: 32000000 },
  { name: 'February', value: 30000000 },
  { name: 'March', value: 35000000 },
  { name: 'April', value: 28000000 },
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 5, 2026 - May 5, 2026");

  return (
    <div id="pemasukan-report" className="p-8 bg-[#FAFAFA] min-h-full flex flex-col space-y-6">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] p-6 flex justify-between items-center shrink-0">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Laporan Pemasukan</h2>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600">Tanggal :</span>
            <div 
              className="bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all cursor-pointer hover:bg-gray-50"
              onClick={() => setIsModalOpen(true)}
            >
              {dateRange}
            </div>
          </div>
          <button 
            className="bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all hover:bg-gray-50 transition-colors no-print"
            onClick={() => downloadAsPDF('pemasukan-report', 'Laporan_Pemasukan')}
          >
            Download
          </button>
        </div>
      </div>

      <UbahRangeTanggalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSelectRange={(range) => setDateRange(range)} 
      />

      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] text-gray-700">
            <thead>
              <tr className="border-b border-gray-200 bg-white">
                <th className="py-2.5 px-6 text-[13px] tracking-wide font-medium w-12 text-gray-800">#</th>
                <th className="py-2.5 px-6 text-[13px] tracking-wide font-medium text-gray-800">Nama</th>
                <th className="py-2.5 px-6 text-[13px] tracking-wide font-medium text-gray-800">Penjualan</th>
                <th className="py-2.5 px-6 text-[13px] tracking-wide font-medium text-gray-800">MDR (%)</th>
                <th className="py-2.5 px-6 text-[13px] tracking-wide font-medium text-gray-800">MDR</th>
                <th className="py-2.5 px-6 text-[13px] tracking-wide font-medium text-gray-800">PPn (11%)</th>
                <th className="py-2.5 px-6 text-[13px] tracking-wide font-medium text-gray-800">Pemasukan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 px-6 text-[13px] font-medium">1</td>
                <td className="py-2.5 px-6 text-[13px] font-medium text-gray-800">TUNAI</td>
                <td className="py-2.5 px-6 text-[13px] whitespace-nowrap">{formatRupiah(425249)}</td>
                <td className="py-2.5 px-6 text-[13px] whitespace-nowrap">0%</td>
                <td className="py-2.5 px-6 text-[13px] whitespace-nowrap">Rp 0</td>
                <td className="py-2.5 px-6 text-[13px] whitespace-nowrap">Rp 0</td>
                <td className="py-2.5 px-6 text-[13px] whitespace-nowrap">{formatRupiah(425249)}</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 px-6 text-[13px] font-medium">2</td>
                <td className="py-2.5 px-6 text-[13px] font-medium text-gray-800 uppercase">Credit Card</td>
                <td className="py-2.5 px-6 text-[13px] whitespace-nowrap">{formatRupiah(118200)}</td>
                <td className="py-2.5 px-6 text-[13px] whitespace-nowrap">0%</td>
                <td className="py-2.5 px-6 text-[13px] whitespace-nowrap">Rp 0</td>
                <td className="py-2.5 px-6 text-[13px] whitespace-nowrap">Rp 0</td>
                <td className="py-2.5 px-6 text-[13px] whitespace-nowrap">{formatRupiah(118200)}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2.5 px-6 text-[13px] font-medium">3</td>
                <td className="py-2.5 px-6 text-[13px] font-medium text-gray-800">QRIS</td>
                <td className="py-2.5 px-6 text-[13px] whitespace-nowrap">{formatRupiah(724100)}</td>
                <td className="py-2.5 px-6 text-[13px] whitespace-nowrap">0%</td>
                <td className="py-2.5 px-6 text-[13px] whitespace-nowrap">Rp 0</td>
                <td className="py-2.5 px-6 text-[13px] whitespace-nowrap">Rp 0</td>
                <td className="py-2.5 px-6 text-[13px] whitespace-nowrap">{formatRupiah(724100)}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-6 text-[13px]"></td>
                <td className="py-2.5 px-6 text-[13px] font-medium text-gray-800">Total</td>
                <td className="py-2.5 px-6 text-[13px] font-medium text-gray-800 whitespace-nowrap">{formatRupiah(1267549)}</td>
                <td className="py-2.5 px-6 text-[13px] whitespace-nowrap"></td>
                <td className="py-2.5 px-6 text-[13px] font-medium text-gray-800 whitespace-nowrap">Rp 0</td>
                <td className="py-2.5 px-6 text-[13px] font-medium text-gray-800 whitespace-nowrap">Rp 0</td>
                <td className="py-2.5 px-6 text-[13px] font-medium text-gray-800 whitespace-nowrap">{formatRupiah(1267549)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 bg-white">
        <div className="p-6 border-b lg:border-b-0 lg:border-r border-gray-200 h-[400px] flex flex-col">
          <h3 className="text-sm font-bold text-gray-800 mb-6">Metode Pembayaran (%)</h3>
          <div className="flex-1 min-h-0 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={METHOD_DATA} cx="50%" cy="50%" outerRadius={110} dataKey="value" stroke="#fff" strokeWidth={1}>
                  {METHOD_DATA.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <RechartsTooltip formatter={(val: number) => formatRupiah(val)} />
                <Legend 
                  iconType="rect" 
                  wrapperStyle={{ fontSize: '11px', paddingBottom: '20px' }} 
                  verticalAlign="top" 
                  align="center" 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-6 h-[400px] flex flex-col">
          <h3 className="text-sm font-bold text-gray-800 mb-6">Metode Pembayaran</h3>
          <div className="flex-1 min-h-0 relative mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={METHOD_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6B7280' }} tickFormatter={(val) => val.toString()} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6B7280' }} angle={0} dy={10} textAnchor="middle" />
                <RechartsTooltip cursor={{ fill: 'transparent' }} formatter={(val: number) => val} />
                <Bar dataKey="value" radius={[0, 0, 0, 0]} maxBarSize={180}>
                {METHOD_DATA.map((_, index) => <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />)}
              </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-6 border-t lg:border-r border-gray-200 h-[400px] flex flex-col">
          <h3 className="text-sm font-bold text-gray-800 mb-6">Pemasukan Harian</h3>
          <div className="flex-1 min-h-0 relative mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PEMASUKAN_HARIAN_DATA} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <YAxis width={60} axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#6B7280' }} tickFormatter={(val) => val === 0 ? '0' : val.toString()} domain={[0, 1400000]} ticks={[0, 200000, 400000, 600000, 800000, 1000000, 1200000, 1400000]} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#6B7280' }} angle={0} dy={10} textAnchor="middle" />
                <RechartsTooltip cursor={{ fill: 'transparent' }} formatter={(val: number) => formatRupiah(val)} />
                <Bar dataKey="value" radius={[0, 0, 0, 0]} maxBarSize={180}>
                  {PEMASUKAN_HARIAN_DATA.map((_, index) => <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold text-gray-800">Pemasukan Bulanan</h3>
            <select className="border border-gray-300 rounded px-2 py-1 text-sm bg-white text-gray-700 outline-none">
              <option>2026</option>
            </select>
          </div>
          <div className="flex-1 min-h-0 relative mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={PEMASUKAN_BULANAN_DATA} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <YAxis width={110} axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#6B7280' }} tickFormatter={(val) => val === 0 ? 'Rp\u00A00' : `Rp\u00A0${(val / 1000000)}.000.000`} domain={[0, 40000000]} ticks={[0, 5000000, 10000000, 15000000, 20000000, 25000000, 30000000, 35000000, 40000000]} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6B7280' }} angle={0} dy={10} textAnchor="middle" />
                <RechartsTooltip formatter={(val: number) => formatRupiah(val)} />
                <Line type="linear" dataKey="value" stroke={CHART_COLORS[0]} strokeWidth={2} dot={{ r: 2, fill: CHART_COLORS[0] }} activeDot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

    </div>
  )
}
