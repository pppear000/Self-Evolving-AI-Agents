import React from 'react';
import { PaperMetadata } from '../types';
import { FileText, Users, Link as LinkIcon, Download } from 'lucide-react';

const metadata: PaperMetadata = {
  title: "A Comprehensive Survey of Self-Evolving AI Agents",
  authors: ["Jinyuan Fang*", "Yanwen Peng*", "Xi Zhang*", "Yingxu Wang", "Xinhao Yi", "Guibin Zhang", "Yi Xu", "Bin Wu", "Siwei Liu", "Zihao Li", "Zhaochun Ren", "Nikos Aletras", "Xi Wang", "Han Zhou", "Zaiqiao Meng✉"],
  institutions: ["University of Glasgow", "University of Sheffield", "MBZUAI", "NUS", "University of Cambridge", "UCL", "University of Aberdeen", "Leiden University"],
  arxiv: "arXiv:2508.07407v2"
};

const HeroSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Title Header */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-medium mb-4">
              <FileText size={14} className="mr-1" />
              {metadata.arxiv} | 31 Aug 2025
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              自进化AI智能体综述：<br />
              <span className="text-brand-600">连接基础模型与终身智能体系统的新范式</span>
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6">
              A Comprehensive Survey of Self-Evolving AI Agents
            </p>
          </div>
          <div className="hidden lg:block">
            <a 
              href="https://arxiv.org/abs/2508.07407" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-600"
            >
              <Download size={20} />
            </a>
          </div>
        </div>

        {/* Authors */}
        <div className="flex items-start gap-3 text-sm text-slate-500 border-t border-slate-100 pt-6">
          <Users size={16} className="mt-0.5 shrink-0" />
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {metadata.authors.map((author, idx) => (
              <span key={idx} className={author.includes('✉') ? 'text-brand-600 font-semibold' : ''}>
                {author}
              </span>
            ))}
          </div>
        </div>
        
        {/* Institutions */}
        <div className="flex items-start gap-3 text-xs text-slate-400 mt-3">
          <div className="w-4 shrink-0" />
          <p>{metadata.institutions.join(", ")}</p>
        </div>
      </div>

      {/* Abstract & Definition */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-brand-500 rounded-full"></span>
            核心定义
          </h2>
          <blockquote className="text-lg leading-relaxed font-light italic opacity-90">
            "自进化AI智能体是能够通过与环境交互，持续且系统地优化其内部组件（如提示词、记忆、工具、工作流）的自主系统，旨在适应不断变化的任务、语境和资源，同时保持安全性并提升性能。"
          </blockquote>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-center">
            <h3 className="font-bold text-slate-800 mb-4 border-b pb-2">关键贡献</h3>
            <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2">
                    <span className="text-brand-500 font-bold">1.</span>
                    提出"自进化AI智能体三大定律" (Endure, Excel, Evolve)
                </li>
                <li className="flex gap-2">
                    <span className="text-brand-500 font-bold">2.</span>
                    梳理从 MOP 到 MASE 的范式演变
                </li>
                <li className="flex gap-2">
                    <span className="text-brand-500 font-bold">3.</span>
                    提出统一的概念框架与反馈闭环
                </li>
                <li className="flex gap-2">
                    <span className="text-brand-500 font-bold">4.</span>
                    系统性综述单智能体、多智能体及特定领域的优化技术
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;