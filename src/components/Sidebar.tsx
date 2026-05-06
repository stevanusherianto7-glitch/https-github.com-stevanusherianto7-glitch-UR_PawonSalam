import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  FileText,
  Monitor,
  Package,
  Box,
  Receipt,
  Users,
  Settings,
  LogOut,
  UserCircle,
  ChevronDown,
} from "lucide-react";

const UrLogo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const img = new window.Image();
    img.crossOrigin = "Anonymous";
    img.src = "/logo.png";
    img.onload = () => {
      // Draw at a smaller scale for performance (e.g. 300px)
      const scale = 300 / img.width;
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        // Luminance mapping
        const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        let alpha = 255 - lum;

        // Sharpen and clamp alpha
        alpha = Math.min(255, Math.max(0, alpha * 1.8));
        if (a === 0) alpha = 0;

        data[i] = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;
        data[i + 3] = alpha;
      }
      ctx.putImageData(imageData, 0, 0);
    };
  }, []);

  return (
    <div className="bg-[#10b981] p-2.5 rounded-2xl shadow-sm flex items-center justify-center mx-4 w-14 h-14">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain drop-shadow-sm"
      />
    </div>
  );
};

export default function Sidebar({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (t: string) => void;
}) {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    laporan: true,
    laporan_penjualan: true,
  });

  const toggleMenu = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedMenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };


  const menuGroups = [
    {
      title: "MENU UTAMA",
      items: [
        { id: "dashboard", label: "Dashboard", icon: Home },
      ]
    },
    {
      title: "OPERASIONAL",
      items: [
        {
          id: "laporan",
          label: "Laporan",
          icon: FileText,
          subItems: [
            {
              id: "laporan_penjualan",
              label: "Penjualan",
              subItems: [
                { id: "lap_penj_summary", label: "Summary" },
                { id: "lap_penj_pemasukan", label: "Pemasukan" },
                { id: "lap_penj_laba_kotor", label: "Laba Kotor" },
                { id: "lap_penj_laba_bersih", label: "Laba Bersih" },
                { id: "lap_penj_tipe", label: "Tipe" },
                { id: "lap_penj_departemen", label: "Departemen" },
                { id: "lap_penj_kategori", label: "Kategori" },
                { id: "lap_penj_produk", label: "Produk" },
                { id: "lap_penj_variant", label: "Variant" },
                { id: "lap_penj_bundle", label: "Bundle" },
                { id: "lap_penj_meja", label: "Meja" },
                { id: "lap_penj_diskon", label: "Diskon" },
                { id: "lap_penj_pemasukan_service", label: "Pemasukan Service" },
                { id: "lap_penj_pemasukan_pajak", label: "Pemasukan Pajak" },
                { id: "lap_penj_surcharge", label: "Surcharge" },
              ],
            },
            { id: "laporan_shift", label: "Shift" },
            { id: "laporan_daftar_transaksi", label: "Daftar Transaksi" },
            { id: "laporan_nilai_stok", label: "Nilai Stok" },
            { id: "laporan_smart_waiter", label: "Smart Waiter" },
            { id: "laporan_pembayaran_piutang", label: "Pembayaran Piutang" },
            { id: "laporan_stock_movement", label: "Stock Movement" },
            { id: "laporan_transaksi_void", label: "Transaksi Void" },
            { id: "laporan_repeat_customers", label: "Repeat Customers" },
          ],
        },
        {
          id: "meja",
          label: "Meja",
          icon: Monitor,
          subItems: [
            { id: "meja_daftar", label: "Daftar Meja" },
            { id: "meja_group", label: "Group Meja" },
          ],
        },
      ]
    },
    {
      title: "INVENTORY & PRODUKSI",
      items: [
        {
          id: "inventory",
          label: "Inventory",
          icon: Package,
          subItems: [
            { id: "inv_kategori", label: "Kategori" },
            { id: "inv_bahan_baku", label: "Bahan Baku" },
            { id: "inv_bahan_setengah_jadi", label: "Bahan Setengah Jadi" },
            { id: "inv_produksi", label: "Produksi Setengah Jadi" },
            { id: "inv_supplier", label: "Supplier" },
            { id: "inv_po", label: "Purchase Order" },
            { id: "inv_penerimaan", label: "Penerimaan Barang" },
            { id: "inv_adjustment", label: "Adjustment" },
          ],
        },
        {
          id: "produk",
          label: "Produk",
          icon: Box,
          subItems: [
            { id: "prod_departemen", label: "Departemen" },
            { id: "prod_kategori", label: "Kategori Produk" },
            { id: "prod_daftar", label: "Produk" },
            { id: "prod_varian", label: "Varian" },
            { id: "prod_bundle", label: "Bundle" },
            {
              id: "prod_preorder",
              label: "Preorder",
              subItems: [
                { id: "prod_po_produk", label: "Produk" },
                { id: "prod_po_jadwal", label: "Jadwal" },
              ],
            },
          ],
        },
      ]
    },
    {
      title: "MANAJEMEN",
      items: [
        {
          id: "biaya_operasional",
          label: "Biaya Operasional",
          icon: Receipt,
          subItems: [
            { id: "biaya_kategori", label: "Kategori" },
            { id: "biaya_ops", label: "Biaya Operasional" },
            { id: "biaya_ops_auto", label: "Biaya Operasional Otomatis" },
          ],
        },
        {
          id: "karyawan",
          label: "Karyawan",
          icon: Users,
          subItems: [
            { id: "kar_daftar", label: "Daftar Karyawan" },
            { id: "kar_pola_kerja", label: "Pola Kerja" },
            { id: "kar_laporan_kehadiran", label: "Laporan Kehadiran" },
            { id: "kar_hak_akses", label: "Hak Akses" },
          ],
        },
      ]
    },
    {
      title: "PENGATURAN",
      items: [
        {
          id: "pengaturan",
          label: "Pengaturan",
          icon: Settings,
          subItems: [
            { id: "pengaturan_akun", label: "Pengaturan Akun" },
            { id: "pengaturan_partner", label: "Pengaturan Partner" },
            { id: "pengaturan_selforder", label: "Pengaturan Selforder" },
            { id: "pengaturan_printer", label: "Pengaturan Printer" },
            { id: "pengaturan_surcharges", label: "Surcharges" },
            { id: "pengaturan_pengiriman", label: "Pengiriman Toko" },
            { id: "pengaturan_slider", label: "Slider Gambar" },
            { id: "pengaturan_jam", label: "Jam Operasional" },
            { id: "pengaturan_metode_bayar", label: "Metode Pembayaran" },
            { id: "pengaturan_tambah_cabang", label: "Tambah Cabang" },
            { id: "pengaturan_tagihan", label: "Tagihan" },
          ],
        },
      ]
    }
  ];

  return (
    <div className="w-64 bg-white border-r border-[#eaecf0] flex flex-col h-screen shrink-0 print:hidden overflow-hidden">
      <div className="flex justify-center py-6 shrink-0">
        <div className="flex items-center justify-center">
          <UrLogo />
        </div>
      </div>

      <div className="px-5 mb-6 shrink-0">
        <div className="bg-[#ecfdf5] rounded-2xl p-3 flex items-center gap-3">
          <UserCircle size={36} className="text-[#10b981]" />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-medium text-[#10b981] text-sm">Anto</span>
              <span className="bg-[#10b981] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-sm">
                MANAGER
              </span>
            </div>
            <p className="text-xs text-gray-500">Pawon Salam</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto w-full pb-4 scrollbar-thin space-y-6">
        {menuGroups.map((group, gIdx) => (
          <div key={gIdx} className="flex flex-col">
            <h3 className="px-6 mb-2 text-xs font-bold text-orange-500 uppercase tracking-wider">
              {group.title}
            </h3>
            <div className="flex flex-col space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isExpanded = expandedMenus[item.id];
                const hasSubItems = item.subItems && item.subItems.length > 0;
                const isActive = activeTab === item.id;

                return (
                  <div key={item.id} className="flex flex-col">
                    <button
                      onClick={(e) => {
                        if (hasSubItems) {
                          toggleMenu(item.id, e);
                        } else {
                          setActiveTab(item.id);
                        }
                      }}
                      className={`w-full flex items-center gap-3 px-6 py-2 transition-colors relative ${isActive ? "text-[#10b981] font-medium" : "text-gray-600 hover:text-gray-900"}`}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#10b981] rounded-r-md" />
                      )}
                      <Icon
                        size={18}
                        className={isActive ? "text-[#10b981]" : "text-gray-500"}
                        strokeWidth={isActive ? 2.5 : 2}
                      />
                      <span className="flex-1 text-left text-[14px]">{item.label}</span>
                      {hasSubItems && (
                        <ChevronDown
                          size={14}
                          className={`text-gray-400 transition-transform ${isExpanded ? "" : "-rotate-90"}`}
                        />
                      )}
                    </button>

                    {hasSubItems && isExpanded && (
                      <div className="flex flex-col mt-1 mb-2 space-y-1">
                        {item.subItems.map((sub) => {
                          const isSubActive = activeTab === sub.id;
                          const isSubExpanded = expandedMenus[sub.id];
                          const hasDeepSub = sub.subItems && sub.subItems.length > 0;

                          return (
                            <div key={sub.id} className="flex flex-col">
                              <button
                                onClick={(e) => {
                                  if (hasDeepSub) {
                                    toggleMenu(sub.id, e);
                                  } else {
                                    setActiveTab(sub.id);
                                  }
                                }}
                                className={`w-full flex items-center pl-[48px] pr-6 py-2 transition-colors relative ${
                                  isSubActive
                                    ? "text-[#10b981] font-medium"
                                    : "text-gray-500 hover:text-gray-800"
                                }`}
                              >
                                {isSubActive && (
                                  <div className="absolute left-0 top-[20%] bottom-[20%] w-1 bg-[#10b981] rounded-r-md" />
                                )}
                                <span className="flex-1 text-left text-[13px]">{sub.label}</span>
                                {hasDeepSub && (
                                  <ChevronDown
                                    size={14}
                                    className={`text-gray-400 transition-transform ${isSubExpanded ? "" : "-rotate-90"}`}
                                  />
                                )}
                              </button>

                              {hasDeepSub && isSubExpanded && (
                                <div className="flex flex-col py-1 space-y-1">
                                  {sub.subItems.map((deepSub) => {
                                    const isDeepActive = activeTab === deepSub.id;
                                    return (
                                      <button
                                        key={deepSub.id}
                                        onClick={() => setActiveTab(deepSub.id)}
                                        className={`w-full flex items-center pl-[64px] pr-6 py-2 transition-colors relative ${
                                          isDeepActive
                                            ? "text-[#10b981] font-medium"
                                            : "text-gray-500 hover:text-gray-800"
                                        }`}
                                      >
                                        {isDeepActive && (
                                          <div className="absolute left-0 top-[20%] bottom-[20%] w-1 bg-[#10b981] rounded-r-md" />
                                        )}
                                        <span className="flex-1 text-left text-[13px]">
                                          {deepSub.label}
                                        </span>
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-[#eaecf0] shrink-0 bg-white">
        <button className="w-full flex items-center gap-4 px-6 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
          <LogOut size={20} className="text-gray-500" />
          Keluar
        </button>
      </div>
    </div>
  );
}
