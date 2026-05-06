import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import NilaiStok from './components/NilaiStok';
import PenjualanMeja from './components/PenjualanMeja';
import Summary from './components/Summary';
import Pemasukan from './components/Pemasukan';
import LabaBersih from './components/LabaBersih';
import Diskon from './components/Diskon';
import SmartWaiter from './components/SmartWaiter';
import Departemen from './components/Departemen';

export default function App() {
  const [activeTab, setActiveTab] = useState('lap_penj_summary');
  
  return (
    <div className="flex h-screen bg-[#F8F9FB] font-sans text-gray-800 overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Topbar />
        <div className="flex-1 overflow-auto flex flex-col">
          <div className="flex-1">
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'laporan_nilai_stok' && <NilaiStok />}
            {activeTab === 'lap_penj_meja' && <PenjualanMeja />}
            {activeTab === 'lap_penj_summary' && <Summary />}
            {activeTab === 'lap_penj_pemasukan' && <Pemasukan />}
            {activeTab === 'lap_penj_laba_bersih' && <LabaBersih />}
            {activeTab === 'lap_penj_diskon' && <Diskon />}
            {activeTab === 'laporan_smart_waiter' && <SmartWaiter />}
            {activeTab === 'lap_penj_departemen' && <Departemen />}
            
            {![
              'dashboard', 'laporan_nilai_stok', 'lap_penj_meja', 'lap_penj_summary',
              'lap_penj_pemasukan', 'lap_penj_laba_bersih', 'lap_penj_diskon',
              'laporan_smart_waiter', 'lap_penj_departemen'
            ].includes(activeTab) && (
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Maintenance / Coming Soon</h2>
                <p className="text-gray-500">Halaman {activeTab} sedang dalam pengembangan. Silakan pilih menu lain dari sidebar.</p>
              </div>
            )}
          </div>
          
          <div className="py-4 text-center text-xs font-semibold text-gray-500 w-full">
            © 2021 <span className="text-[#10b981] hover:underline cursor-pointer">PT HARMONI RASA PRIMA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
