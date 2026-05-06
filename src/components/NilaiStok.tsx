import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Label
} from 'recharts';
import { formatRupiah } from '../utils';

const TOP_ITEMS_DATA = [
  { name: 'Nasi Putih', value: 6.8 },
  { name: 'Soto Ayam', value: 6.8 },
  { name: 'Teh Tawar', value: 6.8 },
  { name: 'Air Mineral', value: 4.8 },
  { name: 'Emping', value: 4.8 },
];

const PENJUALAN_HARIAN_DATA = [
  { name: '05-05-2026', value: 1267548.0 },
];

const PENJUALAN_BULANAN_DATA = [
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

const JAM_RAMAI_DATA = [
  { name: '17:00', value: 30000 },
  { name: '18:00', value: 310000 },
  { name: '19:00', value: 120000 },
];

const HARI_RAMAI_DATA = [
  { name: 'Monday', value: 1250000 },
];

const PIE_DATA = [
  { name: 'Data', value: 100 }
];

export default function NilaiStok() {
  return (
    <div className="p-6 bg-[#F8F9FB] min-h-full space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Placeholder Pie Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] h-[350px] flex items-center justify-center">
           <ResponsiveContainer width="100%" height="100%">
             <PieChart>
               <Pie data={PIE_DATA} cx="50%" cy="50%" outerRadius={120} innerRadius={0} dataKey="value" stroke="none" fill="#10b981" />
             </PieChart>
           </ResponsiveContainer>
        </div>

        {/* Top Items Bar Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] h-[350px] flex flex-col">
          <div className="flex-1 min-h-0 relative mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={TOP_ITEMS_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} angle={0} dy={10} />
                <RechartsTooltip cursor={{ fill: 'transparent' }} />
                <Bar dataKey="value" fill="#10b981" radius={[0, 0, 0, 0]} maxBarSize={60} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Penjualan Harian */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] h-[400px] flex flex-col">
          <h3 className="text-base font-bold text-gray-800 mb-6">Penjualan Harian</h3>
          <div className="flex-1 min-h-0 relative">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PENJUALAN_HARIAN_DATA} margin={{ top: 10, right: 10, left: 30, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <YAxis domain={['auto', 'auto']} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} width={80} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dy={10} />
                <RechartsTooltip cursor={{ fill: 'transparent' }} formatter={(val) => val} />
                <Bar dataKey="value" fill="#10b981" radius={[0, 0, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Penjualan Bulanan */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base font-bold text-gray-800">Penjualan Bulanan</h3>
            <select className="border border-gray-200 rounded-md px-3 py-1.5 text-sm outline-none text-gray-700 bg-white">
              <option>2026</option>
            </select>
          </div>
          <div className="flex-1 min-h-0 relative -ml-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PENJUALAN_BULANAN_DATA} margin={{ top: 10, right: 10, left: 40, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#6B7280' }} tickFormatter={(val) => { return val === 0 ? 'Rp 0' : `Rp ${val/1000000}.000.000`}} width={80} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#6B7280' }} angle={-30} textAnchor="end" dy={10} />
                <RechartsTooltip cursor={{ fill: 'transparent' }} formatter={(val: number) => formatRupiah(val)} />
                <Bar dataKey="value" fill="#10b981" radius={[0, 0, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Jam Ramai */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] h-[350px] flex flex-col">
          <h3 className="text-base font-bold text-gray-800 mb-6">Jam Ramai</h3>
          <div className="flex-1 min-h-0 relative">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={JAM_RAMAI_DATA} margin={{ top: 10, right: 10, left: 30, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <YAxis domain={[0, 350000]} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} tickFormatter={(val) => `Rp ${val/1000}.000`} width={80} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dy={10} />
                <RechartsTooltip cursor={{ fill: 'transparent' }} formatter={(val: number) => formatRupiah(val)} />
                <Bar dataKey="value" fill="#10b981" radius={[0, 0, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Hari Ramai */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] h-[350px] flex flex-col">
          <h3 className="text-base font-bold text-gray-800 mb-6">Hari Ramai</h3>
          <div className="flex-1 min-h-0 relative">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={HARI_RAMAI_DATA} margin={{ top: 10, right: 10, left: 30, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <YAxis domain={[0, 1400000]} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} tickFormatter={(val) => val === 0 ? 'Rp 0' : `Rp ${(val/1000000).toFixed(1).replace('.0', '')}.000.000`} width={80} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dy={10} />
                <RechartsTooltip cursor={{ fill: 'transparent' }} formatter={(val: number) => formatRupiah(val)} />
                <Bar dataKey="value" fill="#10b981" radius={[0, 0, 0, 0]} maxBarSize={60} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

    </div>
  )
}
