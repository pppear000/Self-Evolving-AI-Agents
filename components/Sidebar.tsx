import React from 'react';
import { NavItem, SectionId } from '../types';
import { 
  BookOpen, 
  GitMerge, 
  RefreshCw, 
  Cpu, 
  Network, 
  Stethoscope, 
  BarChart2, 
  Compass 
} from 'lucide-react';

interface SidebarProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

export const navItems: NavItem[] = [
  { id: 'intro', label: '1. 简介与背景', icon: BookOpen },
  { id: 'paradigm', label: '2. 范式演变 (MOP->MASE)', icon: GitMerge },
  { id: 'framework', label: '3. 统一概念框架', icon: RefreshCw },
  { id: 'single-agent', label: '4. 单智能体优化', icon: Cpu },
  { id: 'multi-agent', label: '5. 多智能体优化', icon: Network },
  { id: 'domain', label: '6. 领域特定优化', icon: Stethoscope },
  { id: 'evaluation', label: '7. 评估与基准', icon: BarChart2 },
  { id: 'future', label: '8. 挑战与展望', icon: Compass },
];

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 shadow-sm z-10 hidden md:flex flex-col">
      <div className="p-6 border-b border-slate-100">
        <h1 className="font-bold text-xl text-slate-800 tracking-tight">EvoAgent<span className="text-brand-600">Survey</span></h1>
        <p className="text-xs text-slate-500 mt-1">自进化AI智能体综述</p>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-brand-50 text-brand-700' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-brand-600' : 'text-slate-400'} />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 border-t border-slate-100 text-xs text-slate-400">
        Presentation Mode v1.0
      </div>
    </div>
  );
};

export default Sidebar;