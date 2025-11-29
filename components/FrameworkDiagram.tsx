import React from 'react';
import { ArrowRight, Settings, Database, Activity, Search } from 'lucide-react';

const FrameworkDiagram: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">MASE 统一概念框架</h2>
      <p className="text-slate-600 mb-8 max-w-3xl">
        该框架抽象了自进化智能体设计背后的反馈闭环，由四个核心组件构成：系统输入、智能体系统、环境和优化器。
      </p>

      <div className="relative bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column: Inputs & Optimiser */}
            <div className="space-y-8 flex flex-col justify-center">
                <div className="bg-white p-5 rounded-xl border border-blue-200 shadow-sm relative">
                    <span className="absolute -top-3 left-4 bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">1. 系统输入 (System Inputs)</span>
                    <div className="flex items-center gap-3 text-slate-700">
                        <Database size={20} />
                        <div>
                            <div className="font-bold">任务描述 & 数据集</div>
                            <div className="text-xs text-slate-500">Task-level / Instance-level</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-purple-200 shadow-sm relative">
                    <span className="absolute -top-3 left-4 bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded">4. 优化器 (Optimisers)</span>
                    <div className="flex items-center gap-3 text-slate-700 mb-2">
                        <Search size={20} />
                        <div>
                            <div className="font-bold">搜索空间 & 算法</div>
                            <div className="text-xs text-slate-500">Prompt, Tool, Topology, Params</div>
                        </div>
                    </div>
                    <div className="text-xs bg-slate-50 p-2 rounded text-slate-600">
                        Algorithm: RL, Evolution, Gradient Descent
                    </div>
                </div>
            </div>

            {/* Right Column: Agent & Environment */}
            <div className="space-y-8 flex flex-col justify-center">
                <div className="bg-white p-5 rounded-xl border border-brand-200 shadow-sm relative">
                    <span className="absolute -top-3 left-4 bg-brand-100 text-brand-800 text-xs font-bold px-2 py-1 rounded">2. 智能体系统 (Agent System)</span>
                    <div className="flex items-center gap-3 text-slate-700 mb-3">
                        <Settings size={20} />
                        <div className="font-bold">Single / Multi-Agent Architecture</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs text-slate-500">
                        <div className="bg-slate-50 p-1 rounded">Prompt</div>
                        <div className="bg-slate-50 p-1 rounded">Memory</div>
                        <div className="bg-slate-50 p-1 rounded">Tools</div>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-green-200 shadow-sm relative">
                    <span className="absolute -top-3 left-4 bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">3. 环境 (Environment)</span>
                    <div className="flex items-center gap-3 text-slate-700 mb-2">
                        <Activity size={20} />
                        <div>
                            <div className="font-bold">执行与反馈</div>
                            <div className="text-xs text-slate-500">Code Execution, Simulation, Real-world</div>
                        </div>
                    </div>
                    <div className="text-xs text-green-700 bg-green-50 p-2 rounded">
                        Feedback: Metrics, Proxy Rewards, Error Logs
                    </div>
                </div>
            </div>
        </div>

        {/* Connecting Arrows (Visual Only) */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center animate-pulse">
                <ArrowRight className="text-slate-500" />
            </div>
        </div>
        
        {/* Cycle Lines SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{zIndex: 0}}>
            <path d="M 300 130 C 450 130, 450 130, 600 130" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)" fill="none" />
            <path d="M 600 350 C 450 350, 450 350, 300 350" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)" fill="none" />
            <path d="M 650 180 L 650 280" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow)" />
            <path d="M 250 280 L 250 180" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow)" />
            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#94a3b8" />
                </marker>
            </defs>
        </svg>

      </div>
    </div>
  );
};

export default FrameworkDiagram;