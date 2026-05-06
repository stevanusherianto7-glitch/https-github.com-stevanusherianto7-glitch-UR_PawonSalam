import React from 'react';
import { UserCircle } from 'lucide-react';

export default function Topbar() {
  return (
    <div className="h-[72px] bg-white border-b border-[#eaecf0] flex items-center justify-between px-8 shrink-0 print:hidden z-10 w-full relative -ml-[1px]">
      <div className="flex-1 flex justify-center max-w-2xl mx-auto">
        <input 
          type="text" 
          placeholder="Cari..." 
          className="w-full bg-white border border-gray-200 rounded-full px-5 py-2 text-sm outline-none focus:border-gray-300 transition-colors shadow-sm text-center"
        />
      </div>
      <div className="flex items-center gap-3 ml-4">
        <UserCircle size={32} className="text-[#10b981]" />
        <span className="text-sm font-medium text-gray-700">Anto</span>
      </div>
    </div>
  )
}
