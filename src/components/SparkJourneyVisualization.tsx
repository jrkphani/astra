import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChevronRight, Zap, Flame, Flame as Fire, Rocket, Star } from 'lucide-react'

interface StageData {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  description: string
  cloudSpend: string
  workloads: string
  maturity: string
  activities: string[]
  outcomes: string[]
  progress: number
}

const sparkStages: StageData[] = [
  {
    id: 'spark',
    name: 'Spark',
    icon: <Zap className="w-6 h-6" />,
    color: 'bg-yellow-500',
    description: 'Initial evaluation and proof of concept',
    cloudSpend: '$5K - $25K',
    workloads: 'POC Only',
    maturity: 'Exploring cloud',
    activities: [
      'Initial discovery workshops',
      'Technical proof of concept',
      'Single use-case validation',
      'Stakeholder buy-in'
    ],
    outcomes: [
      'Technical feasibility proven',
      'Business value identified',
      'POC successfully completed',
      'Decision to proceed secured'
    ],
    progress: 20
  },
  {
    id: 'kindle',
    name: 'Kindle',
    icon: <Flame className="w-6 h-6" />,
    color: 'bg-orange-500',
    description: 'Extended POC with multiple use cases',
    cloudSpend: '$25K - $100K',
    workloads: 'Multiple POCs',
    maturity: 'Validating approach',
    activities: [
      'Expanding POC scope',
      'Testing multiple scenarios',
      'Early team enablement',
      'Building business case'
    ],
    outcomes: [
      'Multiple use cases validated',
      'ROI clearly demonstrated',
      'Production roadmap defined',
      'Budget approval for production'
    ],
    progress: 40
  },
  {
    id: 'flare',
    name: 'Flare',
    icon: <Fire className="w-6 h-6" />,
    color: 'bg-orange-600',
    description: 'First production implementations',
    cloudSpend: '$100K - $500K',
    workloads: '3-10 production workloads',
    maturity: 'Production ready',
    activities: [
      'Production workload migration',
      'Establishing best practices',
      'Implementing governance',
      'Scaling operations'
    ],
    outcomes: [
      'Production systems live',
      'Operational excellence achieved',
      'Cost optimization realized',
      'Team fully enabled'
    ],
    progress: 60
  },
  {
    id: 'ignite',
    name: 'Ignite',
    icon: <Rocket className="w-6 h-6" />,
    color: 'bg-red-500',
    description: 'Enterprise-scale production deployments',
    cloudSpend: '$500K - $2M',
    workloads: '10-50 production workloads',
    maturity: 'Enterprise adoption',
    activities: [
      'Mission-critical migrations',
      'Complex integrations',
      'Advanced service adoption',
      'Innovation initiatives'
    ],
    outcomes: [
      'Core business systems migrated',
      'Significant cost savings',
      'Innovation pipeline active',
      'Strategic transformation visible'
    ],
    progress: 80
  },
  {
    id: 'blaze',
    name: 'Blaze',
    icon: <Star className="w-6 h-6" />,
    color: 'bg-red-600',
    description: 'Strategic transformation at scale',
    cloudSpend: '$2M+',
    workloads: '50+ production workloads',
    maturity: 'Cloud-first enterprise',
    activities: [
      'Cloud-native innovation',
      'AI/ML at scale',
      'Global operations',
      'Market differentiation'
    ],
    outcomes: [
      'Industry leadership achieved',
      'Continuous innovation culture',
      'Strategic AWS partnership',
      'Competitive advantage secured'
    ],
    progress: 100
  }
]

export default function SparkJourneyVisualization() {
  const [selectedStage, setSelectedStage] = useState<StageData>(sparkStages[0])
  
  return (
    <div className="w-full space-y-8">
      {/* Journey Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">SPARK Customer Journey</CardTitle>
          <CardDescription>
            Progressive journey from proof of concepts to enterprise-scale production implementations
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* POC vs Production Indicator */}
          <div className="mb-6 p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">Journey Progression</span>
              <span className="text-xs text-muted-foreground">Increasing complexity & deal value →</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-yellow-100 p-2 rounded text-center">
                <Badge variant="outline" className="bg-yellow-50">POC Phase</Badge>
                <p className="text-xs mt-1">Spark & Kindle</p>
              </div>
              <div className="flex-1 bg-gradient-to-r from-orange-100 to-red-100 p-2 rounded text-center">
                <Badge variant="outline" className="bg-orange-50">Production Phase</Badge>
                <p className="text-xs mt-1">Flare, Ignite & Blaze</p>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-muted">
              <div 
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${selectedStage.progress}%` }}
              />
            </div>
            
            {/* Stages */}
            <div className="relative grid grid-cols-5 gap-4">
              {sparkStages.map((stage) => (
                <HoverCard key={stage.id}>
                  <HoverCardTrigger asChild>
                    <button
                      onClick={() => setSelectedStage(stage)}
                      className={`relative flex flex-col items-center p-4 rounded-lg transition-all ${
                        selectedStage.id === stage.id
                          ? 'bg-primary/10 scale-105'
                          : 'hover:bg-muted'
                      }`}
                    >
                      <div className={`p-3 rounded-full ${stage.color} text-white mb-2`}>
                        {stage.icon}
                      </div>
                      <span className="font-semibold">{stage.name}</span>
                      <span className="text-xs text-muted-foreground mt-1">
                        {stage.workloads}
                      </span>
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-semibold">{stage.name} Stage</h4>
                      <p className="text-sm text-muted-foreground">{stage.description}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{stage.cloudSpend}</Badge>
                        <Badge variant="outline">{stage.maturity}</Badge>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Stage Details */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-full ${selectedStage.color} text-white`}>
                {selectedStage.icon}
              </div>
              <div>
                <CardTitle>{selectedStage.name} Stage</CardTitle>
                <CardDescription>{selectedStage.description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="metrics">Metrics</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Stage Characteristics</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className="text-sm">{selectedStage.workloads}</Badge>
                    <Badge variant="outline">{selectedStage.maturity}</Badge>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Average Deal Value</p>
                    <p className="text-lg font-bold text-primary">{selectedStage.cloudSpend}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Complexity & Scale</h4>
                  <Progress value={selectedStage.progress} className="h-3" />
                  <p className="text-sm text-muted-foreground mt-1">
                    {selectedStage.progress}% complexity level
                  </p>
                  {selectedStage.id === 'spark' || selectedStage.id === 'kindle' ? (
                    <Badge variant="secondary" className="mt-2">Proof of Concept Phase</Badge>
                  ) : (
                    <Badge variant="default" className="mt-2">Production Implementation</Badge>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="metrics" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">{selectedStage.workloads.split(' ')[0]}</p>
                    <p className="text-sm text-muted-foreground">Workloads</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">{selectedStage.progress}%</p>
                    <p className="text-sm text-muted-foreground">Maturity</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Key Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {selectedStage.activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-sm">{activity}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Expected Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {selectedStage.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Complexity and Deal Value Progression */}
      <Card>
        <CardHeader>
          <CardTitle>Complexity & Deal Value Progression</CardTitle>
          <CardDescription>How engagement complexity and average deal values increase through the journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Deal Value Progression */}
            <div>
              <h4 className="font-semibold text-sm mb-3">Average Deal Value by Stage</h4>
              <div className="space-y-2">
                {sparkStages.map((stage) => (
                  <div key={stage.id} className="flex items-center gap-3">
                    <div className={`p-2 rounded ${stage.color} text-white`}>
                      {stage.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{stage.name}</span>
                        <span className="font-bold text-primary">{stage.cloudSpend}</span>
                      </div>
                      <Progress value={stage.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Key Insights Grid */}
            <div className="grid gap-4 md:grid-cols-3 pt-4 border-t">
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-700">2 Stages</div>
                <p className="text-sm text-muted-foreground">POC Phase</p>
                <p className="text-xs mt-1">Validation & Testing</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-700">3 Stages</div>
                <p className="text-sm text-muted-foreground">Production Phase</p>
                <p className="text-xs mt-1">Implementation & Scale</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-700">400x</div>
                <p className="text-sm text-muted-foreground">Deal Growth</p>
                <p className="text-xs mt-1">From Spark to Blaze</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}