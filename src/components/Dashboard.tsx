import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { formatRupiah } from '../utils';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

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
  { name: 'TUNAI', value: 350, color: '#A855F7' },
  { name: 'CREDIT CARD', value: 120, color: '#0EA5E9' },
  { name: 'QRIS', value: 530, color: '#EF4444' },
];

const AGE_DATA = [
  { name: 'Belum isi', value: 100, color: '#4ADE80' },
];

const GENDER_DATA = [
  { name: 'Belum isi', value: 100, color: '#10b981' },
];

const BEST_SELLER_DATA = [
  { name: 'Nasi Goreng Mawut', value: 4 },
  { name: 'Air Mineral', value: 4 },
  { name: 'Nasi Pindang', value: 2 },
  { name: 'Nasi Rawon', value: 2 },
  { name: 'Mie Godog', value: 2 },
];

const PENJUALAN_HARIAN_DATA = [
  { name: '06-05-2026', value: 665598 },
];

const PENJUALAN_BULANAN_DATA = [
  { name: 'January', value: 32000000 },
  { name: 'February', value: 30000000 },
  { name: 'March', value: 35000000 },
  { name: 'April', value: 27500000 },
  { name: 'May', value: 7000000 },
  { name: 'June', value: 0 },
  { name: 'July', value: 0 },
  { name: 'August', value: 0 },
  { name: 'September', value: 0 },
  { name: 'October', value: 0 },
  { name: 'November', value: 0 },
  { name: 'December', value: 0 },
];

const JAM_RAMAI_DATA = [
  { name: '10:00 - 10:59', value: 20000 },
  { name: '12:00 - 12:59', value: 200000 },
  { name: '13:00 - 13:59', value: 290000 },
  { name: '15:00 - 15:59', value: 35000 },
  { name: '16:00 - 16:59', value: 120000 },
];

const HARI_RAMAI_DATA = [
  { name: 'Senin', value: 0 },
  { name: 'Selasa', value: 0 },
  { name: 'Rabu', value: 665598 },
  { name: 'Kamis', value: 0 },
  { name: 'Jumat', value: 0 },
  { name: 'Sabtu', value: 0 },
  { name: 'Minggu', value: 0 },
];

const KATEGORI_VOLUME_DATA = [
  { name: 'Makanan', value: 21 },
  { name: 'Minuman', value: 8 },
];

const KATEGORI_PENJUALAN_DATA = [
  { name: 'Makanan', value: 555600 },
  { name: 'Minuman', value: 50000 },
];

const StatCard = ({ title, value, isPercentage, onClick }: { title: string, value: number, isPercentage?: boolean, onClick?: () => void }) => (
  <div 
    className={`bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] ${onClick ? 'cursor-pointer hover:bg-gray-50 transition-colors' : ''}`}
    onClick={onClick}
  >
    <h3 className="text-[13px] font-medium text-gray-600 mb-4">{title}</h3>
    <p className="text-lg font-bold text-gray-900 tracking-tight">{isPercentage ? `${value}%` : (value >= 1000 ? formatRupiah(value) : value.toString())}</p>
  </div>
);

const ChartCard = ({ title, children, extraHeader }: { title: string, children: React.ReactNode, extraHeader?: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] h-[350px] flex flex-col">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-[13px] font-bold text-gray-800">{title}</h3>
      {extraHeader}
    </div>
    <div className="flex-1 min-h-0 relative">
      {children}
    </div>
  </div>
);

const AxisTick = (props: { x?: number; y?: number; payload?: { value: string | number } }) => {
  const { x = 0, y = 0, payload = { value: '' } } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#666" fontSize={10}>
        {payload.value}
      </text>
    </g>
  );
};

export default function Dashboard({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  const yAxisRupiahFormatter = (value: number) => {
    if (value === 0) return 'Rp 0';
    return formatRupiah(value).replace(/\s/g, ' ');
  };

  return (
    <div className="p-8 bg-[#FAFAFA] min-h-full space-y-5">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard</h2>
        <div 
          className="bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all cursor-pointer hover:bg-gray-50 flex items-center justify-between"
          onClick={() => setIsModalOpen(true)}
        >
          {dateRange}
        </div>
      </div>

      <UbahRangeTanggalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSelectRange={(range) => setDateRange(range)} 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <StatCard title="Penjualan" value={1152316} onClick={() => setActiveTab('lap_penj_summary')} />
        <StatCard title="Penjualan Bersih" value={1267549} onClick={() => setActiveTab('lap_penj_summary')} />
        <StatCard title="Laba Kotor" value={762104} onClick={() => setActiveTab('lap_penj_laba_kotor')} />
        <StatCard title="Laba Bersih" value={108771} onClick={() => setActiveTab('lap_penj_laba_bersih')} />
        <StatCard title="Biaya Operasional" value={0} onClick={() => setActiveTab('biaya_ops')} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <StatCard title="Transaksi" value={12} onClick={() => setActiveTab('laporan_daftar_transaksi')} />
        <div className="lg:col-span-2">
          <StatCard title="Rata-rata penjualan per transaksi" value={96026} onClick={() => setActiveTab('laporan_daftar_transaksi')} />
        </div>
        <StatCard title="Margin Kotor" value={66} isPercentage />
        <StatCard title="Margin Bersih" value={9} isPercentage />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <StatCard title="Bahan Baku Expired" value={0} onClick={() => setActiveTab('dashboard_bahan_baku')} />
        <StatCard title="Bahan Baku Hampir Habis" value={0} onClick={() => setActiveTab('dashboard_bahan_baku')} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ChartCard title="Metode Pembayaran">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={METHOD_DATA} cx="50%" cy="50%" outerRadius={110} dataKey="value" stroke="#fff" strokeWidth={1}>
                {METHOD_DATA.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
              </Pie>
              <RechartsTooltip />
              <Legend iconType="rect" wrapperStyle={{ fontSize: '11px', paddingBottom: '20px' }} verticalAlign="top" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Usia">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={AGE_DATA} cx="50%" cy="50%" outerRadius={110} dataKey="value" stroke="#fff" strokeWidth={1}>
                {AGE_DATA.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
              </Pie>
              <RechartsTooltip />
              <Legend iconType="rect" wrapperStyle={{ fontSize: '11px', paddingBottom: '20px' }} verticalAlign="top" align="right" />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ChartCard title="Gender">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={GENDER_DATA} cx="50%" cy="50%" outerRadius={110} dataKey="value" stroke="#fff" strokeWidth={1}>
                {GENDER_DATA.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
              </Pie>
              <RechartsTooltip />
              <Legend iconType="rect" wrapperStyle={{ fontSize: '11px', paddingBottom: '20px' }} verticalAlign="top" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Best Seller">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={BEST_SELLER_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 5 }} barSize={60}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="name" tick={<AxisTick />} axisLine={false} tickLine={false} />
              <YAxis tick={{fontSize: 10, fill: '#666'}} axisLine={false} tickLine={false} />
              <RechartsTooltip cursor={{fill: '#f3f4f6'}} />
              <Bar dataKey="value" radius={[0, 0, 0, 0]}>
                {BEST_SELLER_DATA.map((_, index) => <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ChartCard title="Penjualan Harian">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={PENJUALAN_HARIAN_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} barSize={100}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="name" tick={<AxisTick />} axisLine={false} tickLine={false} />
              <YAxis domain={['dataMin - 1.0', 'dataMax + 1.0']} tick={{fontSize: 10, fill: '#666'}} axisLine={false} tickLine={false} />
              <RechartsTooltip cursor={{fill: '#f3f4f6'}} formatter={(value: number) => formatRupiah(value)} />
              <Bar dataKey="value" radius={[0, 0, 0, 0]}>
                {PENJUALAN_HARIAN_DATA.map((_, index) => <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard 
          title="Penjualan Bulanan" 
          extraHeader={
            <div className="relative">
              <select className="border border-gray-300 text-sm text-gray-600 rounded-md px-3 py-1 outline-none appearance-none bg-white font-medium pr-8 w-24">
                <option>2026</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          }
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={PENJUALAN_BULANAN_DATA} margin={{ top: 20, right: 30, left: 60, bottom: 5 }} barSize={30}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="name" tick={<AxisTick />} axisLine={false} tickLine={false} />
              <YAxis tickFormatter={yAxisRupiahFormatter} tick={{fontSize: 10, fill: '#666'}} axisLine={false} tickLine={false} width={80} />
              <RechartsTooltip cursor={{fill: '#f3f4f6'}} formatter={(value: number) => formatRupiah(value)} />
              <Bar dataKey="value" radius={[0, 0, 0, 0]}>
                {PENJUALAN_BULANAN_DATA.map((_, index) => <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ChartCard title="Jam Ramai">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={JAM_RAMAI_DATA} margin={{ top: 20, right: 30, left: 40, bottom: 5 }} barSize={60}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="name" tick={<AxisTick />} axisLine={false} tickLine={false} />
              <YAxis tickFormatter={yAxisRupiahFormatter} tick={{fontSize: 10, fill: '#666'}} axisLine={false} tickLine={false} width={70} />
              <RechartsTooltip cursor={{fill: '#f3f4f6'}} formatter={(value: number) => formatRupiah(value)} />
              <Bar dataKey="value" radius={[0, 0, 0, 0]}>
                {JAM_RAMAI_DATA.map((_, index) => <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Hari Ramai">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={HARI_RAMAI_DATA} margin={{ top: 20, right: 30, left: 40, bottom: 5 }} barSize={60}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="name" tick={<AxisTick />} axisLine={false} tickLine={false} />
              <YAxis tickFormatter={yAxisRupiahFormatter} tick={{fontSize: 10, fill: '#666'}} axisLine={false} tickLine={false} width={70} />
              <RechartsTooltip cursor={{fill: '#f3f4f6'}} formatter={(value: number) => formatRupiah(value)} />
              <Bar dataKey="value" radius={[0, 0, 0, 0]}>
                {HARI_RAMAI_DATA.map((_, index) => <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-10">
        <ChartCard title="Kategori Berdasarkan Volume">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={KATEGORI_VOLUME_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 5 }} barSize={100}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="name" tick={<AxisTick />} axisLine={false} tickLine={false} />
              <YAxis tick={{fontSize: 10, fill: '#666'}} axisLine={false} tickLine={false} />
              <RechartsTooltip cursor={{fill: '#f3f4f6'}} />
              <Bar dataKey="value" radius={[0, 0, 0, 0]}>
                {KATEGORI_VOLUME_DATA.map((_, index) => <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Kategori Berdasarkan Penjualan">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={KATEGORI_PENJUALAN_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} barSize={100}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="name" tick={<AxisTick />} axisLine={false} tickLine={false} />
              <YAxis tick={{fontSize: 10, fill: '#666'}} axisLine={false} tickLine={false} width={60} />
              <RechartsTooltip cursor={{fill: '#f3f4f6'}} formatter={(value: number) => formatRupiah(value)} />
              <Bar dataKey="value" radius={[0, 0, 0, 0]}>
                {KATEGORI_PENJUALAN_DATA.map((_, index) => <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

    </div>
  )
}
