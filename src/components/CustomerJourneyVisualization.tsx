import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  ArrowRight, 
  Eye, 
  Search, 
  CreditCard, 
  TrendingUp, 
  Rocket,
  CheckCircle,
  XCircle,
  AlertCircle,
  Users,
  DollarSign,
  Briefcase
} from 'lucide-react'

interface JourneyStage {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  engagementType: string
  filter: string
  funding: string
  salesOwnership: string
  nextStage?: string
  rejectPath?: string
  rejectLabel?: string
}

const journeyStages: JourneyStage[] = [
  {
    id: 'awareness',
    name: 'Awareness & Interest',
    icon: <Eye className="w-6 h-6" />,
    color: 'bg-blue-500',
    engagementType: 'Demo, workshop, cold call, event-based campaign',
    filter: 'Intent signal, use case clarity, avoid GenAI window shoppers',
    funding: 'AWS CEI / FR',
    salesOwnership: 'SDR + ISR',
    nextStage: 'evaluation',
    rejectPath: 'resell-nurture',
    rejectLabel: 'Qualified or Window Shopper?'
  },
  {
    id: 'evaluation',
    name: 'Solution Evaluation',
    icon: <Search className="w-6 h-6" />,
    color: 'bg-indigo-500',
    engagementType: 'ROI conversations, initial solutioning, POC scoping',
    filter: 'Sales-qualified lead, business case alignment',
    funding: 'AWS PoC Funding',
    salesOwnership: 'ISR → BDM',
    nextStage: 'adoption',
    rejectPath: 'resell-support',
    rejectLabel: 'Sales Qualified?'
  },
  {
    id: 'adoption',
    name: 'Adoption & Deployment',
    icon: <CreditCard className="w-6 h-6" />,
    color: 'bg-purple-500',
    engagementType: 'Production rollout of point solution',
    filter: 'Customer commitment, MSP or recurring potential',
    funding: 'Customer + AWS',
    salesOwnership: 'BDM + Pre-sales overlay',
    nextStage: 'monetization',
    rejectPath: 'support-only',
    rejectLabel: 'Monetizable?'
  },
  {
    id: 'monetization',
    name: 'Monetization & Scaling',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'bg-green-500',
    engagementType: 'Platform resale, support layer, bundled managed services',
    filter: 'Usage depth, post-deploy success, ARR expansion',
    funding: 'Customer',
    salesOwnership: 'BDM + CSM/MSP Teams',
    nextStage: 'transformation',
    rejectPath: 'maintain-relationship',
    rejectLabel: 'Transformation Intent?'
  },
  {
    id: 'transformation',
    name: 'Strategic Transformation',
    icon: <Rocket className="w-6 h-6" />,
    color: 'bg-orange-500',
    engagementType: 'MAP-based modernization or GenAI-native transformation',
    filter: 'CXO intent, BU-wide vision, strategic co-ownership',
    funding: 'MAP + Customer',
    salesOwnership: 'CXOs, Architects, Country Leaders',
    rejectLabel: 'Success'
  }
]

const rejectPaths = [
  { id: 'resell-nurture', label: 'Resell / Nurture', color: 'bg-gray-400' },
  { id: 'resell-support', label: 'Resell / Support', color: 'bg-gray-400' },
  { id: 'support-only', label: 'Support Only', color: 'bg-gray-400' },
  { id: 'maintain-relationship', label: 'Maintain Relationship', color: 'bg-gray-400' }
]

export default function CustomerJourneyVisualization() {
  const [selectedStage, setSelectedStage] = useState<JourneyStage>(journeyStages[0])
  
  const getStageProgress = (stageId: string) => {
    const stageIndex = journeyStages.findIndex(s => s.id === stageId)
    return ((stageIndex + 1) / journeyStages.length) * 100
  }
  
  return (
    <div className="w-full space-y-8">
      {/* Journey Flow Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Customer Journey with 1CloudHub</CardTitle>
          <CardDescription>
            5-stage journey with qualification filters at each stage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Main Journey Path */}
            <div className="flex items-start justify-between mb-8">
              {journeyStages.map((stage, index) => (
                <div key={stage.id} className="flex-1 relative">
                  <button
                    onClick={() => setSelectedStage(stage)}
                    className={`relative z-10 flex flex-col items-center p-4 rounded-lg transition-all ${
                      selectedStage.id === stage.id
                        ? 'bg-primary/10 scale-105 shadow-lg'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <div className={`p-3 rounded-full ${stage.color} text-white mb-2`}>
                      {stage.icon}
                    </div>
                    <span className="font-semibold text-sm text-center">{stage.name}</span>
                  </button>
                  
                  {/* Arrow to next stage */}
                  {index < journeyStages.length - 1 && (
                    <div className="absolute top-1/3 left-full w-full flex items-center -ml-4 z-0">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                  
                  {/* Filter/Decision Point */}
                  {stage.rejectPath && (
                    <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center">
                      <div className="text-xs text-muted-foreground mb-1">{stage.rejectLabel}</div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
                          Yes
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <XCircle className="w-3 h-3 mr-1 text-red-600" />
                          No
                        </Badge>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Reject Paths */}
            <div className="mt-24 flex justify-around">
              {rejectPaths.map((path) => (
                <div key={path.id} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 border border-red-200">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  <span className="text-sm text-red-700">{path.label}</span>
                </div>
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
                <CardTitle>{selectedStage.name}</CardTitle>
                <Progress value={getStageProgress(selectedStage.id)} className="h-2 mt-2" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Engagement Type
              </h4>
              <p className="text-sm text-muted-foreground">{selectedStage.engagementType}</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Filter to Progress
              </h4>
              <p className="text-sm text-muted-foreground">{selectedStage.filter}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Stage Ownership & Funding</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Sales Ownership
              </h4>
              <Badge variant="secondary" className="text-sm">
                {selectedStage.salesOwnership}
              </Badge>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Funding Source
              </h4>
              <Badge variant="outline" className="text-sm">
                {selectedStage.funding}
              </Badge>
            </div>
            
            {selectedStage.nextStage && (
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Success at this stage leads to:{' '}
                  <span className="font-medium text-foreground">
                    {journeyStages.find(s => s.id === selectedStage.nextStage)?.name}
                  </span>
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      {/* Key Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Journey Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">5</div>
              <p className="text-sm text-muted-foreground">Journey Stages</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">4</div>
              <p className="text-sm text-muted-foreground">Qualification Filters</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">3</div>
              <p className="text-sm text-muted-foreground">Funding Sources</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}