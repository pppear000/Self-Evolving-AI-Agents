import React from 'react';

export type SectionId = 
  | 'intro' 
  | 'paradigm' 
  | 'framework' 
  | 'single-agent' 
  | 'multi-agent' 
  | 'domain' 
  | 'evaluation' 
  | 'future';

export interface NavItem {
  id: SectionId;
  label: string;
  icon: React.ComponentType<any>;
}

export interface PaperMetadata {
  title: string;
  authors: string[];
  institutions: string[];
  arxiv: string;
}