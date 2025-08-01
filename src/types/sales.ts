// Stage type for SPARK framework
export interface SparkStage {
  name: string
  description: string
  color: string
  activities: string[]
  velocity: 'Expressway' | 'City Traffic'
}

// Territory information
export interface Territory {
  name: string
  maturity: 'High' | 'Medium' | 'Early' | 'Emerging'
  segments: ('Scale' | 'Focused' | 'Deep')[]
  team: {
    bdms: string[]
    isrs: boolean
    sdrs: boolean
  }
}

// Sales metrics
export interface SalesMetric {
  label: string
  value: string | number
  trend?: 'up' | 'down' | 'stable'
  description?: string
}

// KPI Category
export interface KpiCategory {
  name: string
  metrics: string[]
}

// Interlock stage
export interface InterlockStage {
  stage: string
  functions: {
    preSales: string
    alliances: string
    marketing: string
    delivery: string
    platform: string
  }
}
