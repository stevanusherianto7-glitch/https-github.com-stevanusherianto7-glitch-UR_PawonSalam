import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import UbahRangeTanggalModal from './UbahRangeTanggalModal';

function StatBox({ title, value }: { title: string, value: string | number }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-[13px] text-gray-500 mb-3">{title}</div>
      <div className="text-[15px] font-bold text-gray-800">{value}</div>
    </div>
  );
}

function DemographicCard({ title, data, colors }: { title: string, data: { name: string; value: number }[], colors: string[] }) {
  const hasData = data && data.length > 0;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col h-64">
      <div className="p-4 border-b border-gray-100 bg-[#fdf2f8] rounded-t-lg">
        <h3 className="text-[14px] font-bold text-gray-800">{title}</h3>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        {hasData ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <RechartsTooltip />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="text-[13px] text-gray-400 text-center">Data Tidak Ada</div>
        )}
      </div>
    </div>
  );
}

export default function RepeatCustomers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState("May 6, 2026 - May 6, 2026");

  return (
    <div className="p-8 bg-[#FAFAFA] min-h-full flex flex-col gap-8">
      {/* Header */}
      <div className="bg-[#fdf2f8] px-6 py-4 border border-gray-200 rounded-xl shadow-sm flex justify-between items-center shrink-0">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Repeat Customers</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600">Tanggal :</span>
          <div 
            className="bg-white border border-gray-100 text-sm font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm hover:border-gray-200 hover:shadow-md transition-all cursor-pointer hover:bg-gray-50"
            onClick={() => setIsModalOpen(true)}
          >
            {dateRange}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[20px] font-bold text-gray-800 mb-4">Statistik Pelanggan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-3">
            <StatBox title="Total Customers (Self Order)" value="0" />
          </div>
          <StatBox title="Repeat Customers (Self Order)" value="0" />
          <StatBox title="Non Repeat Customers" value="0" />
          <StatBox title="Customer Dengan Transaksi Pertama (Self Order)" value="0" />
          
          <StatBox title="Persentase Repeat Customers" value="0%" />
          <StatBox title="Persentase Non Repeat Customers" value="0%" />
          <StatBox title="Persentase Customer Dengan Transaksi Pertama Per Bulan" value="0%" />
        </div>
      </div>

      <div>
        <h3 className="text-[20px] font-bold text-gray-800 mb-4">Statistik Transaksi</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-3">
            <StatBox title="Jumlah Transaksi" value="0" />
          </div>
          <StatBox title="Transaksi Oleh Repeat Customers" value="0" />
          <StatBox title="Transaksi Oleh Non Repeat Customers" value="0" />
          <StatBox title="Jumlah Transaksi Customer Dengan Transaksi Pertama Per Bulan" value="0" />

          <StatBox title="Persentase Transaksi Repeat Customers" value="0%" />
          <StatBox title="Persentase Transaksi Non Repeat Customers" value="0%" />
          <StatBox title="Persentase Transaksi Customer Dengan Transaksi Pertama Per Bulan" value="0%" />

          <StatBox title="Rata-rata Transaksi Repeat Customers" value="0 Transaksi" />
          <StatBox title="Rata-rata Transaksi Non Repeat Customers" value="0 Transaksi" />
          <StatBox title="Rata-rata Transaksi Customer Dengan Transaksi Pertama Per Bulan" value="0 Transaksi" />

          <div className="md:col-span-3">
            <StatBox title="Rata-rata Transaksi Per Pelanggan" value="0 Transaksi" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[20px] font-bold text-gray-800 mb-4">Demografi</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DemographicCard 
            title="Usia Repeater Bulanan" 
            data={[{name: '18-24', value: 30}, {name: '25-34', value: 45}, {name: '35+', value: 25}]} 
            colors={['#e11d48', '#f43f5e', '#fb7185']}
          />
          <DemographicCard 
            title="Usia Non Repeat Customers Bulanan" 
            data={[{name: '18-24', value: 40}, {name: '25-34', value: 40}, {name: '35+', value: 20}]}
            colors={['#0284c7', '#38bdf8', '#7dd3fc']}
          />
          <DemographicCard 
            title="Usia Customer Dengan Transaksi Pertama Per Bulan" 
            data={[{name: '18-24', value: 50}, {name: '25-34', value: 30}, {name: '35+', value: 20}]}
            colors={['#059669', '#34d399', '#6ee7b7']}
          />

          <DemographicCard 
            title="Gender Repeat Customers Bulanan" 
            data={[{name: 'Pria', value: 45}, {name: 'Wanita', value: 55}]}
            colors={['#e11d48', '#f43f5e']}
          />
          <DemographicCard 
            title="Gender Non Repeat Customers Bulanan" 
            data={[{name: 'Pria', value: 50}, {name: 'Wanita', value: 50}]}
            colors={['#0284c7', '#38bdf8']}
          />
          <DemographicCard 
            title="Gender Customer Dengan Transaksi Pertama Per Bulan" 
            data={[{name: 'Pria', value: 48}, {name: 'Wanita', value: 52}]}
            colors={['#059669', '#34d399']}
          />
        </div>
      </div>

      <UbahRangeTanggalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSelectRange={(range) => setDateRange(range)} 
      />
    </div>
  )
}