import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import NilaiStok from './components/NilaiStok';
import Summary from './components/Summary';
import Pemasukan from './components/Pemasukan';
import LabaKotor from './components/LabaKotor';
import LabaBersih from './components/LabaBersih';
import Tipe from './components/Tipe';
import Diskon from './components/Diskon';
import SmartWaiter from './components/SmartWaiter';
import Departemen from './components/Departemen';
import BiayaOperasional from './components/BiayaOperasional';
import BiayaKategori from './components/BiayaKategori';
import BiayaOpsAuto from './components/BiayaOpsAuto';
import DaftarKaryawan from './components/DaftarKaryawan';
import PolaKerja from './components/PolaKerja';
import LaporanKehadiran from './components/LaporanKehadiran';
import HakAkses from './components/HakAkses';
import PengaturanAkun from './components/PengaturanAkun';
import PengaturanPartner from './components/PengaturanPartner';
import PengaturanSelforder from './components/PengaturanSelforder';
import PengaturanPrinter from './components/PengaturanPrinter';
import Surcharges from './components/Surcharges';
import PengirimanToko from './components/PengirimanToko';
import SliderGambar from './components/SliderGambar';
import JamOperasional from './components/JamOperasional';
import MetodePembayaran from './components/MetodePembayaran';
import TambahCabang from './components/TambahCabang';
import Tagihan from './components/Tagihan';
import DaftarTransaksi from './components/DaftarTransaksi';
import BahanBakuWarning from './components/BahanBakuWarning';
import Kategori from './components/Kategori';
import Produk from './components/Produk';
import Variant from './components/Variant';
import Bundle from './components/Bundle';
import Meja from './components/Meja';
import PemasukanService from './components/PemasukanService';
import PemasukanPajak from './components/PemasukanPajak';
import Surcharge from './components/Surcharge';
import LaporanShift from './components/LaporanShift';
import StockMovement from './components/StockMovement';
import TransaksiVoid from './components/TransaksiVoid';
import RepeatCustomers from './components/RepeatCustomers';
import DaftarMeja from './components/DaftarMeja';
import GrupMeja from './components/GrupMeja';
import InvKategori from './components/InvKategori';
import BahanBaku from './components/BahanBaku';
import BahanSetengahJadi from './components/BahanSetengahJadi';
import ProduksiSetengahJadi from './components/ProduksiSetengahJadi';
import Supplier from './components/Supplier';
import PurchaseOrder from './components/PurchaseOrder';
import PenerimaanBarang from './components/PenerimaanBarang';
import Adjustment from './components/Adjustment';
import ProdDepartemen from './components/ProdDepartemen';
import ProdKategori from './components/ProdKategori';
import ProdDaftar from './components/ProdDaftar';
import ProdVarian from './components/ProdVarian';
import ProdBundle from './components/ProdBundle';
import ProdPOProduk from './components/ProdPOProduk';
import ProdPOJadwal from './components/ProdPOJadwal';
import ProdUbah from './components/ProdUbah';

export default function App() {
  const [activeTab, setActiveTab] = useState('lap_penj_summary');
  
  return (
    <div className="flex h-screen bg-[#F8F9FB] font-sans text-gray-800 overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Topbar />
        <div className="flex-1 overflow-auto flex flex-col">
          <div className="flex-1">
            {activeTab === 'dashboard' && <Dashboard setActiveTab={setActiveTab} />}
            {activeTab === 'laporan_nilai_stok' && <NilaiStok />}
            {/* activeTab === 'lap_penj_meja' previously used PenjualanMeja but now Meja, using Meja */}
            {activeTab === 'lap_penj_meja' && <Meja />}
            {activeTab === 'lap_penj_summary' && <Summary />}
            {activeTab === 'lap_penj_pemasukan' && <Pemasukan />}
            {activeTab === 'lap_penj_laba_kotor' && <LabaKotor />}
            {activeTab === 'lap_penj_laba_bersih' && <LabaBersih />}
            {activeTab === 'lap_penj_tipe' && <Tipe />}
            {activeTab === 'lap_penj_diskon' && <Diskon />}
            {activeTab === 'laporan_smart_waiter' && <SmartWaiter />}
            {activeTab === 'lap_penj_departemen' && <Departemen />}
            {activeTab === 'lap_penj_kategori' && <Kategori />}
            {activeTab === 'lap_penj_produk' && <Produk />}
            {activeTab === 'lap_penj_variant' && <Variant />}
            {activeTab === 'lap_penj_bundle' && <Bundle />}
            {activeTab === 'lap_penj_pemasukan_service' && <PemasukanService />}
            {activeTab === 'lap_penj_pemasukan_pajak' && <PemasukanPajak />}
            {activeTab === 'lap_penj_surcharge' && <Surcharge />}
            {activeTab === 'biaya_kategori' && <BiayaKategori />}
            {activeTab === 'biaya_ops' && <BiayaOperasional />}
            {activeTab === 'biaya_ops_auto' && <BiayaOpsAuto />}
            {activeTab === 'kar_daftar' && <DaftarKaryawan />}
            {activeTab === 'kar_pola_kerja' && <PolaKerja />}
            {activeTab === 'kar_laporan_kehadiran' && <LaporanKehadiran />}
            {activeTab === 'kar_hak_akses' && <HakAkses />}
            {activeTab === 'pengaturan_akun' && <PengaturanAkun />}
            {activeTab === 'pengaturan_partner' && <PengaturanPartner />}
            {activeTab === 'pengaturan_selforder' && <PengaturanSelforder />}
            {activeTab === 'pengaturan_printer' && <PengaturanPrinter />}
            {activeTab === 'pengaturan_surcharges' && <Surcharges />}
            {activeTab === 'pengaturan_pengiriman' && <PengirimanToko />}
            {activeTab === 'pengaturan_slider' && <SliderGambar />}
            {activeTab === 'pengaturan_jam' && <JamOperasional />}
            {activeTab === 'pengaturan_metode_bayar' && <MetodePembayaran />}
            {activeTab === 'pengaturan_tambah_cabang' && <TambahCabang />}
            {activeTab === 'pengaturan_tagihan' && <Tagihan />}
            {activeTab === 'laporan_daftar_transaksi' && <DaftarTransaksi />}
            {activeTab === 'dashboard_bahan_baku' && <BahanBakuWarning />}
            {activeTab === 'laporan_shift' && <LaporanShift />}
            {activeTab === 'laporan_stock_movement' && <StockMovement />}
            {activeTab === 'laporan_transaksi_void' && <TransaksiVoid />}
            {activeTab === 'laporan_repeat_customers' && <RepeatCustomers />}
            {activeTab === 'meja_daftar' && <DaftarMeja />}
            {activeTab === 'meja_group' && <GrupMeja />}
            {activeTab === 'inv_kategori' && <InvKategori />}
            {activeTab === 'inv_bahan_baku' && <BahanBaku />}
            {activeTab === 'inv_bahan_setengah_jadi' && <BahanSetengahJadi />}
            {activeTab === 'inv_produksi' && <ProduksiSetengahJadi />}
            {activeTab === 'inv_supplier' && <Supplier />}
            {activeTab === 'inv_po' && <PurchaseOrder />}
            {activeTab === 'inv_penerimaan' && <PenerimaanBarang />}
            {activeTab === 'inv_adjustment' && <Adjustment />}
            {activeTab === 'prod_departemen' && <ProdDepartemen />}
            {activeTab === 'prod_kategori' && <ProdKategori />}
            {activeTab === 'prod_daftar' && <ProdDaftar setActiveTab={setActiveTab} />}
            {activeTab === 'prod_varian' && <ProdVarian />}
            {activeTab === 'prod_bundle' && <ProdBundle />}
            {activeTab === 'prod_po_produk' && <ProdPOProduk />}
            {activeTab === 'prod_po_jadwal' && <ProdPOJadwal />}
            {activeTab === 'prod_ubah' && <ProdUbah setActiveTab={setActiveTab} />}
            
            {![
              'dashboard', 'laporan_nilai_stok', 'lap_penj_meja', 'lap_penj_summary',
              'lap_penj_pemasukan', 'lap_penj_laba_kotor', 'lap_penj_laba_bersih', 'lap_penj_tipe', 'lap_penj_diskon',
              'laporan_smart_waiter', 'lap_penj_departemen', 'biaya_kategori', 'biaya_ops', 'biaya_ops_auto', 'kar_daftar', 'kar_pola_kerja', 'kar_laporan_kehadiran', 'kar_hak_akses', 'pengaturan_akun', 'pengaturan_partner', 'pengaturan_selforder', 'pengaturan_printer', 'pengaturan_surcharges', 'pengaturan_pengiriman', 'pengaturan_slider', 'pengaturan_jam', 'pengaturan_metode_bayar', 'pengaturan_tambah_cabang', 'pengaturan_tagihan', 'laporan_daftar_transaksi', 'dashboard_bahan_baku',
              'lap_penj_kategori', 'lap_penj_produk', 'lap_penj_variant', 'lap_penj_bundle',
              'lap_penj_pemasukan_service', 'lap_penj_pemasukan_pajak', 'lap_penj_surcharge',
              'laporan_shift', 'laporan_stock_movement', 'laporan_transaksi_void', 'laporan_repeat_customers',
              'meja_daftar', 'meja_group', 'inv_kategori', 'inv_bahan_baku', 'inv_bahan_setengah_jadi',
              'inv_produksi', 'inv_supplier', 'inv_po', 'inv_penerimaan', 'inv_adjustment',
              'prod_departemen', 'prod_kategori', 'prod_daftar', 'prod_varian', 'prod_bundle',
              'prod_po_produk', 'prod_po_jadwal', 'prod_ubah'
            ].includes(activeTab) && (
              <div className="p-8">
                <h2 className="text-2xl font-medium mb-4">Maintenance / Coming Soon</h2>
                <p className="text-gray-500">Halaman {activeTab} sedang dalam pengembangan. Silakan pilih menu lain dari sidebar.</p>
              </div>
            )}
          </div>
          
          <div className="py-4 text-center text-xs font-light text-gray-500 w-full">
            © 2021 <span className="text-[#e11d48] hover:underline cursor-pointer">PT. Harmoni Rasa Prima</span>
          </div>
        </div>
      </div>
    </div>
  );
}
