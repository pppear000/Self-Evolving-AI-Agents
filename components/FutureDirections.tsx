import React from 'react';
import { AlertTriangle, Lightbulb } from 'lucide-react';

const FutureDirections: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Challenges */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-100 p-2 rounded-lg">
                <AlertTriangle className="text-red-600" size={24} />
            </div>
            <h2 className="text-xl font-bold text-slate-800">当前挑战</h2>
        </div>
        
        <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-bold text-slate-800 text-sm mb-1">Endure: 安全性与对齐</h3>
                <p className="text-xs text-slate-600">
                    优化过程常优先考虑任务指标而忽视安全约束。需要动态的、感知进化的审计机制。
                </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-bold text-slate-800 text-sm mb-1">Excel: 评估与效率</h3>
                <p className="text-xs text-slate-600">
                    科学领域缺乏Ground Truth。大规模多智能体优化计算成本高昂，且优化结果（Prompt/Topology）往往泛化性差。
                </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-bold text-slate-800 text-sm mb-1">Evolve: 多模态与工具创造</h3>
                <p className="text-xs text-slate-600">
                    大多数优化仍局限于纯文本。缺乏自主发现和创建新工具的能力，仅限于选择现有工具。
                </p>
            </div>
        </div>
      </div>

      {/* Future Directions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand-100 p-2 rounded-lg">
                <Lightbulb className="text-brand-600" size={24} />
            </div>
            <h2 className="text-xl font-bold text-slate-800">未来方向</h2>
        </div>

        <ul className="space-y-4">
            <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-500 text-white text-xs font-bold shrink-0">1</span>
                <div>
                    <h3 className="font-bold text-slate-800 text-sm">全自主进化模拟环境</h3>
                    <p className="text-xs text-slate-600">开发开放式沙盒，让智能体在其中通过长期交互闭环优化Prompt、记忆和工具。</p>
                </div>
            </li>
            <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-500 text-white text-xs font-bold shrink-0">2</span>
                <div>
                    <h3 className="font-bold text-slate-800 text-sm">进阶工具使用与创造</h3>
                    <p className="text-xs text-slate-600">从静态调用转向自主组合、编码和创建工具（Tool Creation）。</p>
                </div>
            </li>
            <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-500 text-white text-xs font-bold shrink-0">3</span>
                <div>
                    <h3 className="font-bold text-slate-800 text-sm">效率-效果权衡 (Efficiency-Effectiveness Trade-off)</h3>
                    <p className="text-xs text-slate-600">设计在有限算力和预算下部署多智能体系统的优化算法。</p>
                </div>
            </li>
            <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-500 text-white text-xs font-bold shrink-0">4</span>
                <div>
                    <h3 className="font-bold text-slate-800 text-sm">领域感知进化</h3>
                    <p className="text-xs text-slate-600">将异构知识源、特定法规和评估标准整合进进化流程。</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default FutureDirections;