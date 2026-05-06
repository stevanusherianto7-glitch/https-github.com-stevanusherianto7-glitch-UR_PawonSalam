import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { formatRupiah } from '../utils';

const METHOD_DATA = [
  { name: 'TUNAI', value: 350, color: '#A855F7' },
  { name: 'CREDIT CARD', value: 120, color: '#0EA5E9' },
  { name: 'QRIS', value: 530, color: '#EF4444' },
];

const AGE_DATA = [
  { name: 'Belum isi', value: 100, color: '#4ADE80' },
];

const StatCard = ({ title, value, isPercentage }: { title: string, value: number, isPercentage?: boolean }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)]">
    <h3 className="text-[13px] font-medium text-gray-600 mb-4">{title}</h3>
    <p className="text-[22px] font-bold text-gray-900 tracking-tight">{isPercentage ? `${value}%` : (value >= 1000 ? formatRupiah(value) : value.toString())}</p>
  </div>
);

export default function Dashboard() {
  return (
    <div className="p-8 bg-[#F8F9FB] min-h-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[28px] font-bold text-[#202224]">Dashboard</h2>
        <div className="bg-white border text-sm font-medium text-gray-600 border-gray-200 px-4 py-2 rounded-lg shadow-sm">
          May 5, 2026 - May 5, 2026
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-5">
        <StatCard title="Penjualan" value={1152316} />
        <StatCard title="Penjualan Bersih" value={1267549} />
        <StatCard title="Laba Kotor" value={762104} />
        <StatCard title="Laba Bersih" value={108771} />
        <StatCard title="Biaya Operasional" value={0} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-5">
        <StatCard title="Transaksi" value={12} />
        <div className="lg:col-span-2">
          <StatCard title="Rata-rata penjualan per transaksi" value={96026} />
        </div>
        <StatCard title="Margin Kotor" value={66} isPercentage />
        <StatCard title="Margin Bersih" value={9} isPercentage />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <StatCard title="Bahan Baku Expired" value={0} />
        <StatCard title="Bahan Baku Hampir Habis" value={0} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] h-[350px] flex flex-col">
          <h3 className="text-sm font-bold text-gray-700 mb-6">Metode Pembayaran</h3>
          <div className="flex-1 min-h-0 relative -ml-8">
            <ResponsiveContainer width="110%" height="100%">
              <PieChart>
                <Pie data={METHOD_DATA} cx="50%" cy="50%" outerRadius={110} dataKey="value" stroke="none">
                  {METHOD_DATA.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <RechartsTooltip />
                <Legend iconType="rect" wrapperStyle={{ fontSize: '11px', paddingTop: '20px' }} verticalAlign="top" align="center" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] h-[350px] flex flex-col">
          <h3 className="text-sm font-bold text-gray-700 mb-6">Usia</h3>
          <div className="flex-1 min-h-0 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={AGE_DATA} cx="50%" cy="50%" outerRadius={110} dataKey="value" stroke="#fff" strokeWidth={1}>
                  {AGE_DATA.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <RechartsTooltip />
                <Legend iconType="rect" wrapperStyle={{ fontSize: '11px', paddingTop: '20px' }} verticalAlign="top" align="right" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
