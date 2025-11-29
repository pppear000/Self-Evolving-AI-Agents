import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import ParadigmTimeline from './components/ParadigmTimeline';
import FrameworkDiagram from './components/FrameworkDiagram';
import ThreeLaws from './components/ThreeLaws';
import OptimizationTabs from './components/OptimizationTabs';
import FutureDirections from './components/FutureDirections';
import { SectionId } from './types';
import { Menu, BarChart2 } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (id: SectionId) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'intro':
        return (
            <div className="space-y-12">
                <HeroSection />
                <ThreeLaws />
            </div>
        );
      case 'paradigm':
        return <ParadigmTimeline />;
      case 'framework':
        return <FrameworkDiagram />;
      case 'single-agent':
      case 'multi-agent':
      case 'domain':
        // We use the same component but ideally it could be pre-selected. 
        // For simplicity in this demo, the component handles tabs itself, 
        // but we render it here as the main view for these sections.
        return <OptimizationTabs />;
      case 'evaluation':
        return (
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <BarChart2 /> 评估与基准 (Evaluation)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h3 className="font-bold text-brand-700">基准测试 (Benchmarks)</h3>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                            <li><strong>Tool/API:</strong> ToolBench, API-Bank, AppWorld</li>
                            <li><strong>Web Agent:</strong> WebArena, VisualWebArena, AgentBench</li>
                            <li><strong>Multi-Agent:</strong> MultiAgentBench, GAIA, AgentBench</li>
                            <li><strong>Safety:</strong> AgentHarm, RedCode, SafetyBench</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold text-brand-700">评估方法</h3>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                            <li><strong>LLM-as-a-Judge:</strong> 使用GPT-4等模型打分 (Pairwise / Pointwise)。</li>
                            <li><strong>Agent-as-a-Judge:</strong> 使用完整智能体系统进行多步推理评估 (DevAI)。</li>
                            <li><strong>Dynamic Eval:</strong> 评估不仅看结果，还看过程 (Endure/Excel)。</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
      case 'future':
        return <FutureDirections />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar (Desktop) */}
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full bg-white border-b border-slate-200 z-20 px-4 py-3 flex items-center justify-between">
        <span className="font-bold text-slate-800">EvoAgent Survey</span>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-600">
            <Menu />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-30 pt-16 px-6 overflow-y-auto">
              <ul className="space-y-4">
                  {/* Re-using logic from Sidebar simpler here */}
                  {[
                      {id: 'intro', label: '1. 简介'},
                      {id: 'paradigm', label: '2. 范式演变'},
                      {id: 'framework', label: '3. 概念框架'},
                      {id: 'single-agent', label: '4. 单智能体优化'},
                      {id: 'multi-agent', label: '5. 多智能体优化'},
                      {id: 'domain', label: '6. 领域优化'},
                      {id: 'evaluation', label: '7. 评估'},
                      {id: 'future', label: '8. 展望'},
                  ].map(item => (
                      <li key={item.id}>
                          <button 
                            onClick={() => handleNavigate(item.id as SectionId)}
                            className="text-lg font-medium text-slate-800 w-full text-left py-2 border-b border-slate-100"
                          >
                              {item.label}
                          </button>
                      </li>
                  ))}
              </ul>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 w-full py-3 bg-slate-100 rounded-lg text-slate-600 font-bold"
              >
                  Close
              </button>
          </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 lg:p-12 pt-20 md:pt-12 max-w-7xl mx-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;