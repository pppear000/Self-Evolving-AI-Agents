import React, { useState } from 'react';
import { Cpu, Network, Stethoscope, ChevronRight, CheckCircle2 } from 'lucide-react';

type TabType = 'single' | 'multi' | 'domain';

const OptimizationTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('single');

  const tabs = [
    { id: 'single', label: '单智能体优化', icon: Cpu },
    { id: 'multi', label: '多智能体优化', icon: Network },
    { id: 'domain', label: '领域特定优化', icon: Stethoscope },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden min-h-[600px]">
      <div className="flex border-b border-slate-100 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-medium text-sm transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-brand-50 text-brand-700 border-b-2 border-brand-500'
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
            }`}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-8">
        {activeTab === 'single' && <SingleAgentContent />}
        {activeTab === 'multi' && <MultiAgentContent />}
        {activeTab === 'domain' && <DomainContent />}
      </div>
    </div>
  );
};

const ContentCard = ({ title, items, color = "blue" }: { title: string, items: string[], color?: string }) => (
    <div className={`rounded-xl border border-${color}-100 bg-${color}-50/30 p-5`}>
        <h4 className={`font-bold text-${color}-800 mb-3 flex items-center`}>
            <div className={`w-2 h-2 rounded-full bg-${color}-500 mr-2`}></div>
            {title}
        </h4>
        <ul className="space-y-2">
            {items.map((item, idx) => (
                <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                    <ChevronRight size={14} className={`mt-1 text-${color}-400 shrink-0`} />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const SingleAgentContent = () => (
    <div className="space-y-6 animate-fade-in">
        <h3 className="text-xl font-bold text-slate-800">单智能体优化 (Single-Agent Optimization)</h3>
        <p className="text-slate-600">主要关注增强单个智能体在LLM行为、提示词、记忆和工具使用方面的能力。</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContentCard 
                title="LLM 行为优化" 
                color="blue"
                items={[
                    "基于训练的优化 (Training-based): SFT (STaR), RL (DeepSeek-R1, DPO)",
                    "测试时优化 (Test-time): Feedback-based (CoT), Search-based (Tree of Thoughts, MCTS)"
                ]}
            />
            <ContentCard 
                title="提示词优化 (Prompt)" 
                color="indigo"
                items={[
                    "基于编辑 (Edit-based): GRIPS, TEMPERA",
                    "基于生成 (Generative): OPRO, MIPRO, APE",
                    "基于梯度 (Gradient-based): TextGrad, ProTeGi",
                    "进化算法 (Evolutionary): EvoPrompt"
                ]}
            />
            <ContentCard 
                title="记忆优化 (Memory)" 
                color="amber"
                items={[
                    "短期记忆: 上下文压缩, Reflexion (反思)",
                    "长期记忆: RAG (Retrieval), Vector Stores, MemGPT (分层记忆)",
                    "记忆结构: 知识图谱 (HippoRAG), 符号化数据库 (ChatDB)"
                ]}
            />
            <ContentCard 
                title="工具优化 (Tool)" 
                color="emerald"
                items={[
                    "工具使用能力: ToolLLM, Gorilla (基于检索的微调)",
                    "推理时工具选择: ToolChain, AnyTool",
                    "工具创造: CREATOR (自动生成新工具代码)"
                ]}
            />
        </div>
    </div>
);

const MultiAgentContent = () => (
    <div className="space-y-6 animate-fade-in">
        <h3 className="text-xl font-bold text-slate-800">多智能体优化 (Multi-Agent Optimization)</h3>
        <p className="text-slate-600">从手动设计的工作流向自动发现协作策略演变。优化目标包括Prompt、拓扑结构和底层模型。</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-xl p-5">
                <h4 className="font-bold text-slate-800 mb-4 border-b pb-2">1. 提示词优化 (Prompt)</h4>
                <p className="text-sm text-slate-600 mb-2">不仅优化单个角色，还需协调多个代理的任务依赖。</p>
                <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-slate-100 text-xs rounded text-slate-600">DSPy Assertions</span>
                    <span className="px-2 py-1 bg-slate-100 text-xs rounded text-slate-600">AutoAgents</span>
                </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-5">
                <h4 className="font-bold text-slate-800 mb-4 border-b pb-2">2. 拓扑结构优化 (Topology)</h4>
                <div className="space-y-3">
                    <div>
                        <span className="font-semibold text-sm text-brand-600 block">代码级工作流 (Code-level)</span>
                        <p className="text-xs text-slate-500">将工作流视为可执行程序 (AutoFlow, AFlow)。</p>
                    </div>
                    <div>
                        <span className="font-semibold text-sm text-brand-600 block">通信图 (Communication-graph)</span>
                        <p className="text-xs text-slate-500">优化代理间的连接边和权重 (GPTSwarm, DynaSwarm)。</p>
                    </div>
                </div>
            </div>

             <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-r from-slate-50 to-white md:col-span-2">
                <h4 className="font-bold text-slate-800 mb-2">3. 统一优化 (Unified Optimization)</h4>
                <p className="text-sm text-slate-600 mb-4">联合优化 Prompt + Topology，甚至 LLM Backbone。</p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> ADAS (Code-based)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> EvoAgent (Search-based)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> MaAS (Learning-based)</li>
                </ul>
            </div>
        </div>
    </div>
);

const DomainContent = () => (
    <div className="space-y-6 animate-fade-in">
        <h3 className="text-xl font-bold text-slate-800">领域特定优化</h3>
        <p className="text-slate-600">不同领域对智能体的安全性、精确性和知识库有不同要求。</p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-800 mb-2">生物医学</h4>
                <p className="text-xs text-red-600 mb-2">Medical Diagnosis, Molecular Discovery</p>
                <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1">
                    <li>MedAgentSim</li>
                    <li>CACTUS (化学)</li>
                    <li>多模态诊断</li>
                </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-800 mb-2">编程工程</h4>
                <p className="text-xs text-blue-600 mb-2">Code Refinement, Debugging</p>
                <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1">
                    <li>Self-Refine</li>
                    <li>AgentCoder</li>
                    <li>LLM-Surgeon</li>
                </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                <h4 className="font-bold text-amber-800 mb-2">金融决策</h4>
                <p className="text-xs text-amber-600 mb-2">Quantitative Trading, Analysis</p>
                <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1">
                    <li>FinRobot</li>
                    <li>FinCon</li>
                    <li>PEER (模块化)</li>
                </ul>
            </div>

            <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-2">法律推理</h4>
                <p className="text-xs text-slate-600 mb-2">Judicial Decision, Argumentation</p>
                <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1">
                    <li>LawLuo</li>
                    <li>AgentCourt</li>
                    <li>LegalGPT</li>
                </ul>
            </div>
        </div>
    </div>
);

export default OptimizationTabs;