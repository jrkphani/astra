// SPARK Framework stages
export const SPARK_STAGES = {
  SPARK: {
    name: 'Spark',
    description: 'First Engagement',
    color: 'spark',
    activities: ['Event-based campaigns', 'CEI-funded workshops', 'GenAI demonstrations'],
    velocity: 'Expressway'
  },
  KINDLE: {
    name: 'Kindle',
    description: 'Nurturing Phase',
    color: 'kindle',
    activities: ['ROI conversations', 'Proof of Concept design', 'Initial solution blueprints'],
    velocity: 'Expressway'
  },
  FLARE: {
    name: 'Flare',
    description: 'Focused Growth',
    color: 'flare',
    activities: ['Multiple stakeholder engagement', 'Statement of Work development', 'TCO and funding support'],
    velocity: 'Expressway'
  },
  IGNITE: {
    name: 'Ignite',
    description: 'High Engagement',
    color: 'ignite',
    activities: ['Platform integration', 'Managed services bundling', 'Usage optimization'],
    velocity: 'City Traffic'
  },
  BLAZE: {
    name: 'Blaze',
    description: 'Strategic Partnership',
    color: 'blaze',
    activities: ['C-level alignment', 'MAP-based programs', 'Co-innovation initiatives'],
    velocity: 'City Traffic'
  }
} as const

// Territory data
export const TERRITORIES = {
  SINGAPORE: {
    name: 'Singapore',
    maturity: 'High',
    segments: ['Scale', 'Focused', 'Deep'],
    team: {
      bdms: ['Shi Zhan', 'Tracy'],
      isrs: true,
      sdrs: true
    }
  },
  PHILIPPINES: {
    name: 'Philippines',
    maturity: 'Medium',
    segments: ['Scale', 'Focused'],
    team: {
      bdms: ['Jason', 'July'],
      isrs: false,
      sdrs: true
    }
  },
  MALAYSIA: {
    name: 'Malaysia',
    maturity: 'Medium',
    segments: ['Scale', 'Focused'],
    team: {
      bdms: ['Menaka', 'Ismail'],
      isrs: false,
      sdrs: true
    }
  },
  INDONESIA: {
    name: 'Indonesia',
    maturity: 'Early',
    segments: ['Scale'],
    team: {
      bdms: ['Olivia'],
      isrs: false,
      sdrs: true
    }
  },
  INDIA: {
    name: 'India',
    maturity: 'Emerging',
    segments: ['Scale'],
    team: {
      bdms: ['Bevin'],
      isrs: false,
      sdrs: true
    }
  },
  THAILAND: {
    name: 'Thailand',
    maturity: 'Emerging',
    segments: ['Scale'],
    team: {
      bdms: ['Pakorn'],
      isrs: false,
      sdrs: false
    }
  }
} as const

// KPI Categories
export const KPI_CATEGORIES = {
  MARKET_COVERAGE: {
    name: 'Market Coverage & White Space Analysis',
    metrics: ['AWS segment penetration', 'White space analysis', 'Territory development', 'Pipeline volume growth']
  },
  CONVERSION_EXCELLENCE: {
    name: 'Funnel Conversion Ratios',
    metrics: ['Stage-to-stage progression', 'Win rates by segment', 'Velocity metrics', 'Bottleneck identification']
  },
  REVENUE_QUALITY: {
    name: 'Revenue Quality & Expansion',
    metrics: ['Recurring vs one-time', 'Customer lifetime value', 'Expansion indicators', 'Margin analysis']
  }
} as const
