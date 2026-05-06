import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { 
  format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval,
  isSameMonth, isSameDay, startOfWeek, endOfWeek,
  subWeeks, startOfDay, endOfDay, subDays 
} from 'date-fns';

interface UbahRangeTanggalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRange: (range: string) => void;
}

export default function UbahRangeTanggalModal({ isOpen, onClose, onSelectRange }: UbahRangeTanggalModalProps) {
  const [showTimeRange, setShowTimeRange] = useState(false);
  
  const todayDate = new Date();
  const [activePreset, setActivePreset] = useState("Today");
  const [startDate, setStartDate] = useState(startOfDay(todayDate));
  const [endDate, setEndDate] = useState(endOfDay(todayDate));
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(todayDate));

  if (!isOpen) return null;

  const presets = [
    'Today', 'Yesterday', 'This Week', 'Last Week', 'This Month', 'Last Month'
  ];

  const handlePresetClick = (preset: string) => {
    setActivePreset(preset);
    let start = new Date();
    let end = new Date();

    switch(preset) {
      case 'Today':
        start = startOfDay(todayDate);
        end = endOfDay(todayDate);
        break;
      case 'Yesterday':
        start = startOfDay(subDays(todayDate, 1));
        end = endOfDay(subDays(todayDate, 1));
        break;
      case 'This Week':
        start = startOfDay(startOfWeek(todayDate, { weekStartsOn: 1 }));
        end = endOfDay(endOfWeek(todayDate, { weekStartsOn: 1 }));
        break;
      case 'Last Week':
        start = startOfDay(subWeeks(startOfWeek(todayDate, { weekStartsOn: 1 }), 1));
        end = endOfDay(subWeeks(endOfWeek(todayDate, { weekStartsOn: 1 }), 1));
        break;
      case 'This Month':
        start = startOfDay(startOfMonth(todayDate));
        end = endOfDay(endOfMonth(todayDate));
        break;
      case 'Last Month':
        start = startOfDay(startOfMonth(subMonths(todayDate, 1)));
        end = endOfDay(endOfMonth(subMonths(todayDate, 1)));
        break;
    }
    
    setStartDate(start);
    setEndDate(end);
    setCurrentMonth(startOfMonth(start));
  };

  const handlePrevMonth = () => setCurrentMonth(prev => subMonths(prev, 1));
  const handleNextMonth = () => setCurrentMonth(prev => addMonths(prev, 1));

  // Calendar generation
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDateToDisplay = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDateToDisplay = endOfWeek(monthEnd, { weekStartsOn: 1 });
  
  const days = eachDayOfInterval({ start: startDateToDisplay, end: endDateToDisplay });

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center font-sans tracking-tight">
      <div className="absolute inset-0 bg-transparent" onClick={onClose}></div>
      <div className="bg-white rounded-xl shadow-2xl w-[700px] max-w-full overflow-hidden relative z-10 flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-[#fff0f5]">
          <h3 className="text-[17px] font-bold text-gray-800">Ubah Range Tanggal</h3>
        </div>

        {/* Body */}
        <div className="flex bg-white flex-1">
          {/* Left Panel */}
          <div className="w-[220px] border-r border-gray-100 flex flex-col pt-6 pb-4">
            <div className="flex flex-col">
              {presets.map(preset => (
                <button 
                  key={preset}
                  onClick={() => handlePresetClick(preset)}
                  className={`text-left px-6 py-2.5 text-[14px] border-b border-gray-100 transition-colors ${
                    activePreset === preset 
                      ? 'text-[#10b981] font-bold bg-white' 
                      : 'text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  {preset}
                </button>
              ))}
              
              <div className="flex items-center gap-3 px-6 py-4 text-gray-800">
                <input type="text" className="w-8 h-8 border border-gray-200 rounded text-center text-sm focus:outline-none focus:border-emerald-300 transition-colors" placeholder="-" />
                <span className="text-[13px] text-gray-600">days up to today</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-2 text-gray-800">
                <input type="text" className="w-8 h-8 border border-gray-200 rounded text-center text-sm focus:outline-none focus:border-emerald-300 transition-colors" placeholder="-" />
                <span className="text-[13px] text-gray-600">days starting today</span>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex-1 px-8 py-6 flex flex-col items-center">
            {/* Input range wrapper */}
            <div className="bg-[#f4f5f7] p-1.5 rounded-lg flex gap-2 mb-8 w-full max-w-[400px]">
              <div className="flex-1 bg-white rounded border border-[#10b981]">
                <input type="text" value={format(startDate, 'MMM d, yyyy')} className="w-full bg-transparent text-center text-gray-800 rounded px-4 py-2 text-[14px] focus:outline-none" readOnly />
              </div>
              <div className="flex-1 bg-white rounded border border-white">
                <input type="text" value={format(endDate, 'MMM d, yyyy')} className="w-full bg-transparent text-center text-gray-800 rounded px-4 py-2 text-[14px] focus:outline-none" readOnly />
              </div>
            </div>

            {/* Calendar */}
            <div className="w-full max-w-[340px]">
              {/* Header */}
              <div className="flex justify-between items-center mb-6 px-1">
                <button onClick={handlePrevMonth} className="w-7 h-7 flex items-center justify-center hover:bg-gray-200 rounded bg-[#f1f3f5] text-gray-600 transition-colors"><ChevronLeft size={16} /></button>
                <div className="flex gap-4 items-center">
                  <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded">
                    <span className="text-[14px] font-medium text-gray-800">{format(currentMonth, 'MMMM')}</span>
                    <ChevronDown size={14} className="text-gray-500" />
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded">
                    <span className="text-[14px] font-medium text-gray-800">{format(currentMonth, 'yyyy')}</span>
                    <ChevronDown size={14} className="text-gray-500" />
                  </div>
                </div>
                <button onClick={handleNextMonth} className="w-7 h-7 flex items-center justify-center hover:bg-gray-200 rounded bg-[#f1f3f5] text-gray-600 transition-colors"><ChevronRight size={16} /></button>
              </div>
              
              {/* Days Header */}
              <div className="grid grid-cols-7 text-center mb-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <div key={day} className="text-[13px] font-medium text-[#a0a5ba]">{day}</div>
                ))}
              </div>
              
              {/* Dates */}
              <div className="grid grid-cols-7 text-center gap-y-2">
                {days.map(day => {
                  const isSelected = (day >= startOfDay(startDate) && day <= endOfDay(endDate));
                  const isPastOrToday = startOfDay(day) <= startOfDay(todayDate);
                  const isFuture = startOfDay(day) > startOfDay(todayDate);
                  
                  const isTodayDate = isSameDay(day, todayDate);
                  const isCurrentMonth = isSameMonth(day, currentMonth);

                  let bgClass = "bg-transparent";
                  let textClass = "text-gray-800 font-bold";
                  let radiusClass = "";
                  
                  if (!isCurrentMonth && !isSelected) {
                    textClass = "text-[#d1d5db] font-bold";
                  }

                  if (isSelected) {
                    textClass = "text-white font-bold";
                    if (isPastOrToday) {
                      bgClass = "bg-[#10b981]"; 
                    } else {
                      bgClass = "bg-[#8f8f8f]"; 
                    }
                  } else if (isFuture) {
                    textClass = "text-[#b0b0b0] font-bold";
                  }

                  if (isSelected) {
                    const isStart = isSameDay(day, startDate) || day.getDay() === 1;
                    const isEnd = isSameDay(day, endDate) || day.getDay() === 0;   
                    
                    if (isStart && isEnd) radiusClass = "rounded-full";
                    else if (isStart) radiusClass = "rounded-l-full";
                    else if (isEnd) radiusClass = "rounded-r-full";
                  }

                  return (
                    <div 
                      key={day.toISOString()} 
                      className={`h-8 w-full flex items-center justify-center cursor-pointer hover:opacity-90 ${bgClass} ${radiusClass}`}
                      onClick={() => {
                        setStartDate(startOfDay(day));
                        setEndDate(endOfDay(day));
                        setActivePreset("");
                      }}
                    >
                      <span className={`text-[14px] leading-none pb-0.5 ${textClass} ${isTodayDate ? (isSelected ? 'border-b-[2px] border-white' : 'border-b-[2px] border-[#3b82f6]') : 'border-b-[2px] border-transparent'}`}>
                        {format(day, 'd')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Time Settings Bar */}
        <div className="flex border-t border-gray-100 bg-white">
          <div className="w-[220px] px-6 py-4 flex items-center">
            <button 
              className={`px-5 py-2 rounded text-[14px] font-medium border transition-colors ${
                !showTimeRange 
                ? 'border-[#10b981] text-[#10b981] hover:bg-emerald-50' 
                : 'border-gray-200 text-gray-600 hover:border-gray-300 focus:outline-none'
              }`}
              onClick={() => setShowTimeRange(!showTimeRange)}
            >
              All Day
            </button>
          </div>
          
          <div className="flex-1 px-8 py-4 flex items-center gap-6">
            {showTimeRange && (
              <>
                <div className="flex items-center gap-3 text-[14px] text-gray-800">
                  <span className="text-gray-600">From:</span>
                  <div className="relative">
                    <select className="appearance-none border border-gray-300 rounded px-3 py-1.5 pr-8 focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] bg-white text-gray-600 font-medium">
                      <option>-</option>
                      {Array.from({length: 24}).map((_, i) => (
                        <option key={`from-${i}`} value={`${i.toString().padStart(2, '0')}:00`}>
                          {i.toString().padStart(2, '0')}:00
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-[14px] text-gray-800">
                  <span className="text-gray-600">To:</span>
                  <div className="relative">
                    <select className="appearance-none border border-gray-300 rounded px-3 py-1.5 pr-8 focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] bg-white text-gray-600 font-medium">
                      <option>-</option>
                      {Array.from({length: 24}).map((_, i) => (
                        <option key={`to-${i}`} value={`${i.toString().padStart(2, '0')}:00`}>
                          {i.toString().padStart(2, '0')}:00
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4 bg-white flex justify-end">
          <button 
            onClick={() => { 
              const formattedStart = format(startDate, 'MMM d, yyyy');
              const formattedEnd = format(endDate, 'MMM d, yyyy');
              const rangeStr = isSameDay(startDate, endDate) 
                ? `${formattedStart} - ${formattedStart}`
                : `${formattedStart} - ${formattedEnd}`;
              onSelectRange(rangeStr); 
              onClose(); 
            }} 
            className="px-6 py-2 text-[14px] text-gray-800 font-bold hover:bg-gray-50 rounded transition-colors"
          >
            OK
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

