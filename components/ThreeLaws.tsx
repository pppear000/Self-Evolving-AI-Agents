import React from 'react';
import { ShieldCheck, TrendingUp, Cpu } from 'lucide-react';

const ThreeLaws: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Law 1 */}
      <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-red-50 rounded-lg">
            <ShieldCheck className="text-red-500" size={24} />
          </div>
          <h3 className="font-bold text-slate-800">第一定律: 坚韧 (Endure)</h3>
        </div>
        <p className="text-sm text-slate-600">
          <strong>安全适应原则：</strong> 自进化AI智能体在任何修改过程中必须保持安全性和稳定性。这是最高优先级。
        </p>
      </div>

      {/* Law 2 */}
      <div className="bg-white p-6 rounded-xl border-l-4 border-amber-500 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-amber-50 rounded-lg">
            <TrendingUp className="text-amber-500" size={24} />
          </div>
          <h3 className="font-bold text-slate-800">第二定律: 卓越 (Excel)</h3>
        </div>
        <p className="text-sm text-slate-600">
          <strong>性能保持原则：</strong> 在遵守第一定律的前提下，自进化智能体必须保持或提升现有的任务性能。
        </p>
      </div>

      {/* Law 3 */}
      <div className="bg-white p-6 rounded-xl border-l-4 border-brand-500 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-brand-50 rounded-lg">
            <Cpu className="text-brand-500" size={24} />
          </div>
          <h3 className="font-bold text-slate-800">第三定律: 进化 (Evolve)</h3>
        </div>
        <p className="text-sm text-slate-600">
          <strong>自主进化原则：</strong> 在遵守前两定律的前提下，智能体应能自主优化其内部组件以应对变化的任务和环境。
        </p>
      </div>
    </div>
  );
};

export default ThreeLaws;