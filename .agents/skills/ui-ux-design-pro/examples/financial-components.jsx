import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Plus, 
  X, 
  AlertCircle, 
  FileText, 
  MoreVertical 
} from 'lucide-react';

// تابع استاندارد فرمت‌بندی اعداد به ریال / تومان فارسی
export const formatCurrency = (amount, unit = 'تومان') => {
  if (amount === null || amount === undefined || isNaN(Number(amount))) return '۰ ' + unit;
  return `${new Intl.NumberFormat('fa-IR').format(amount)} ${unit}`;
};

/**
 * ۱. کامپوننت کارت شاخص کلیدی (KPI Stat Card)
 */
export const StatCard = ({ title, amount, unit = 'تومان', changePercent, isPositive, icon: Icon, color = 'indigo' }) => {
  const colorMap = {
    indigo: 'bg-indigo-50 text-indigo-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    rose: 'bg-rose-50 text-rose-600',
    amber: 'bg-amber-50 text-amber-600',
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{title}</span>
        <div className={`p-2.5 rounded-xl ${colorMap[color] || colorMap.indigo}`}>
          {Icon ? <Icon className="w-5 h-5" /> : <Wallet className="w-5 h-5" />}
        </div>
      </div>

      <div className="flex items-baseline justify-between">
        <div className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums tracking-tight">
          {formatCurrency(amount, unit)}
        </div>
      </div>

      {changePercent !== undefined && (
        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs">
          <span className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full font-medium ${
            isPositive ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400' : 'bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400'
          }`}>
            {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
            {Math.abs(changePercent)}٪
          </span>
          <span className="text-slate-400 dark:text-slate-500">نسبت به ماه گذشته</span>
        </div>
      )}
    </div>
  );
};

/**
 * ۲. کامپوننت بج وضعیت معنایی (Status Badge)
 */
export const StatusBadge = ({ type = 'info', children }) => {
  const styles = {
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800',
    danger: 'bg-rose-50 text-rose-700 border-rose-200/60 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-800',
    warning: 'bg-amber-50 text-amber-700 border-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800',
    info: 'bg-sky-50 text-sky-700 border-sky-200/60 dark:bg-sky-950/40 dark:text-sky-400 dark:border-sky-800',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${styles[type] || styles.info}`}>
      {children}
    </span>
  );
};

/**
 * ۳. کامپوننت حالت خالی (Empty State)
 */
export const EmptyState = ({ title, description, actionText, onAction, icon: Icon = FileText }) => {
  return (
    <div className="text-center py-12 px-4 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto mb-4 shadow-xs">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-1">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-5 leading-relaxed">{description}</p>
      {actionText && onAction && (
        <button
          onClick={onAction}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white text-sm font-medium rounded-xl shadow-xs hover:shadow-md transition-all duration-150"
        >
          <Plus className="w-4 h-4" />
          {actionText}
        </button>
      )}
    </div>
  );
};

/**
 * ۴. کامپوننت مودال استاندارد (Modal Dialog)
 */
export const Modal = ({ isOpen, onClose, title, children, footer }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Box */}
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-2xl w-full max-w-lg overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">{title}</h3>
          <button 
            onClick={onClose}
            aria-label="بستن"
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-4 max-h-[75vh] overflow-y-auto">
          {children}
        </div>

        {footer && (
          <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
