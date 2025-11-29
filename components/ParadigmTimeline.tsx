import React from 'react';
import { Database, Zap, Users, RotateCw } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const evolutionData = [
  { stage: 'MOP', autonomy: 20, complexity: 10, adaptability: 10 },
  { stage: 'MOA', autonomy: 40, complexity: 30, adaptability: 30 },
  { stage: 'MAO', autonomy: 60, complexity: 60, adaptability: 50 },
  { stage: 'MASE', autonomy: 90, complexity: 85, adaptability: 95 },
];

const ParadigmTimeline: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">从静态模型到终身自进化系统的演变</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-100 -z-0"></div>

            {/* Stage 1: MOP */}
            <div className="relative bg-white p-4 rounded-xl border border-slate-200 hover:border-brand-300 transition-all group z-0">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-brand-50 transition-colors">
                    <Database className="text-slate-500 group-hover:text-brand-600" />
                </div>
                <h3 className="text-center font-bold text-slate-800">MOP</h3>
                <p className="text-center text-xs text-slate-500 font-medium mb-2">Model Offline Pretraining</p>
                <div className="text-xs text-slate-600 bg-slate-50 p-2 rounded">
                    <strong>机制:</strong> 静态数据训练 (Loss/Backprop)<br/>
                    <strong>特征:</strong> 部署后不再更新，知识冻结。
                </div>
            </div>

            {/* Stage 2: MOA */}
            <div className="relative bg-white p-4 rounded-xl border border-slate-200 hover:border-brand-300 transition-all group z-0">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-brand-50 transition-colors">
                    <Zap className="text-slate-500 group-hover:text-brand-600" />
                </div>
                <h3 className="text-center font-bold text-slate-800">MOA</h3>
                <p className="text-center text-xs text-slate-500 font-medium mb-2">Model Online Adaptation</p>
                <div className="text-xs text-slate-600 bg-slate-50 p-2 rounded">
                    <strong>机制:</strong> SFT, RLHF, LoRA<br/>
                    <strong>特征:</strong> 部署后通过反馈微调，单模型适应。
                </div>
            </div>

            {/* Stage 3: MAO */}
            <div className="relative bg-white p-4 rounded-xl border border-slate-200 hover:border-brand-300 transition-all group z-0">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-brand-50 transition-colors">
                    <Users className="text-slate-500 group-hover:text-brand-600" />
                </div>
                <h3 className="text-center font-bold text-slate-800">MAO</h3>
                <p className="text-center text-xs text-slate-500 font-medium mb-2">Multi-Agent Orchestration</p>
                <div className="text-xs text-slate-600 bg-slate-50 p-2 rounded">
                    <strong>机制:</strong> 消息交换, Debate, CoT Ensemble<br/>
                    <strong>特征:</strong> 固定模型，通过多智能体协作解决复杂任务。
                </div>
            </div>

            {/* Stage 4: MASE */}
            <div className="relative bg-blue-50 p-4 rounded-xl border-2 border-brand-500 shadow-md z-0">
                <div className="absolute -top-3 -right-3 bg-brand-600 text-white text-xs px-2 py-1 rounded-full shadow">Target</div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                    <RotateCw className="text-brand-600 animate-spin-slow" />
                </div>
                <h3 className="text-center font-bold text-brand-900">MASE</h3>
                <p className="text-center text-xs text-brand-700 font-medium mb-2">Multi-Agent Self-Evolving</p>
                <div className="text-xs text-brand-800 bg-white/50 p-2 rounded">
                    <strong>机制:</strong> 环境反馈闭环, 元奖励 (Meta-rewards)<br/>
                    <strong>特征:</strong> 持续自主优化 Prompt, 工具, 记忆甚至拓扑结构。
                </div>
            </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
         <h3 className="text-lg font-bold text-slate-800 mb-4">能力演进趋势 (示意图)</h3>
         <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={evolutionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorAdapt" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorAuto" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="stage" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <Tooltip />
                    <Area type="monotone" dataKey="adaptability" stackId="1" stroke="#0ea5e9" fill="url(#colorAdapt)" name="适应性 (Adaptability)" />
                    <Area type="monotone" dataKey="autonomy" stackId="2" stroke="#6366f1" fill="url(#colorAuto)" name="自主性 (Autonomy)" />
                </AreaChart>
            </ResponsiveContainer>
         </div>
      </div>
    </div>
  );
};

export default ParadigmTimeline;