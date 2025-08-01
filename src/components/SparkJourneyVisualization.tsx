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
    cloudSpend: '$0 - $10K',
    workloads: '1-2 workloads',
    maturity: 'Exploring cloud',
    activities: [
      'Initial meetings and discovery',
      'Technical proof of concept',
      'Cost-benefit analysis',
      'Stakeholder alignment'
    ],
    outcomes: [
      'Technical validation completed',
      'Business case approved',
      'Initial migration plan',
      'Executive sponsorship secured'
    ],
    progress: 20
  },
  {
    id: 'kindle',
    name: 'Kindle',
    icon: <Flame className="w-6 h-6" />,
    color: 'bg-orange-500',
    description: 'Production implementation and early adoption',
    cloudSpend: '$10K - $50K',
    workloads: '3-5 workloads',
    maturity: 'Early production',
    activities: [
      'First production workload migration',
      'Team training and enablement',
      'Initial governance setup',
      'Performance optimization'
    ],
    outcomes: [
      'Production workloads running',
      'Cost optimization achieved',
      'Team capabilities enhanced',
      'Governance framework established'
    ],
    progress: 40
  },
  {
    id: 'flare',
    name: 'Flare',
    icon: <Fire className="w-6 h-6" />,
    color: 'bg-orange-600',
    description: 'Multiple workload expansion and scaling',
    cloudSpend: '$50K - $250K',
    workloads: '6-15 workloads',
    maturity: 'Scaling adoption',
    activities: [
      'Multi-workload migration',
      'Advanced service adoption',
      'Automation implementation',
      'Security hardening'
    ],
    outcomes: [
      'Multiple business units engaged',
      'Automation reducing manual effort',
      'Advanced services leveraged',
      'Security posture strengthened'
    ],
    progress: 60
  },
  {
    id: 'ignite',
    name: 'Ignite',
    icon: <Rocket className="w-6 h-6" />,
    color: 'bg-red-500',
    description: 'Mission-critical deployment and transformation',
    cloudSpend: '$250K - $1M',
    workloads: '16-50 workloads',
    maturity: 'Strategic adoption',
    activities: [
      'Mission-critical migrations',
      'Enterprise-wide standards',
      'Innovation initiatives',
      'Partner ecosystem integration'
    ],
    outcomes: [
      'Core systems modernized',
      'Innovation culture established',
      'Partner ecosystem integrated',
      'Measurable business transformation'
    ],
    progress: 80
  },
  {
    id: 'blaze',
    name: 'Blaze',
    icon: <Star className="w-6 h-6" />,
    color: 'bg-red-600',
    description: 'Full optimization and strategic partnership',
    cloudSpend: '$1M+',
    workloads: '50+ workloads',
    maturity: 'Cloud-first',
    activities: [
      'Cloud-native development',
      'Advanced analytics and AI/ML',
      'Global scale operations',
      'Strategic co-innovation'
    ],
    outcomes: [
      'Industry leadership position',
      'Continuous innovation',
      'Strategic AWS partnership',
      'Market differentiation achieved'
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
            Navigate through the 5-stage journey from cloud exploration to strategic partnership
          </CardDescription>
        </CardHeader>
        <CardContent>
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
                  <h4 className="font-semibold mb-2">Key Characteristics</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>{selectedStage.cloudSpend}</Badge>
                    <Badge variant="secondary">{selectedStage.workloads}</Badge>
                    <Badge variant="outline">{selectedStage.maturity}</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Journey Progress</h4>
                  <Progress value={selectedStage.progress} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-1">
                    {selectedStage.progress}% of cloud journey completed
                  </p>
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
    </div>
  )
}