export type MainComplaint =
  | 'weight-stall'
  | 'fatigue'
  | 'sweet-craving'
  | 'hair-loss'
  | 'irregular-cycle'
  | 'sleepy-after-meal'
  | 'weight-gain'
  | 'edema'

export type BinaryAnswer = 'yes' | 'no'
export type CycleAnswer = 'yes' | 'no' | 'na'
export type RecentLabsAnswer = 'yes' | 'no'

export interface AnswerOption {
  id: string
  label: string
}

export interface Question {
  id: string
  text: string
  options: AnswerOption[]
}

export type NeedAnalysesAnswerMap = Record<string, AnswerOption>

export type LabGroupKey =
  | 'base'
  | 'metabolic'
  | 'thyroidDeficiency'
  | 'reproductive'
  | 'edema'

export interface LabItem {
  name: string
  note?: string
}

export interface LabGroupConfig {
  title: string
  emoji: string
  color: string
  tagColor: string
  why: string
  labs: LabItem[]
}

export interface NeedAnalysesResult {
  groups: LabGroupKey[]
  reasons: string[]
  avoidWithoutDoctor: string[]
  hadRecentLabs: boolean
}
