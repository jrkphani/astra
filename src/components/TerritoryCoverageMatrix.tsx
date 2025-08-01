import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { CheckCircle, AlertCircle, Clock, TrendingUp, Zap, Rocket, Target, Sparkles } from 'lucide-react'

interface TerritorySegment {
  status: 'strong' | 'mature' | 'active' | 'emerging' | 'early' | 'planning' | 'exploring' | 'none'
  description: string
  details?: string
}

interface Territory {
  id: string
  name: string
  flag: string
  segments: {
    startup: TerritorySegment
    scale: TerritorySegment
    focused: TerritorySegment
    deepTech: TerritorySegment
  }
  keyPartners?: string[]
  notes?: string
}

const territories: Territory[] = [
  {
    id: 'sg',
    name: 'Singapore',
    flag: '🇸🇬',
    segments: {
      startup: {
        status: 'strong',
        description: 'Strong Spark motion with Samuel Harris (GenAI GTM)',
        details: 'Leading the GenAI playbook development'
      },
      scale: {
        status: 'mature',
        description: 'Mature Spark–Kindle motion; high AWS funding utilization',
        details: 'Highest velocity in region'
      },
      focused: {
        status: 'active',
        description: 'Active GTM with focused PSMs via Matthew Khaw',
        details: 'Strong enterprise pipeline'
      },
      deepTech: {
        status: 'active',
        description: 'Engaged via Vimal and Abhishek (GenAI, EKS, Graviton)',
        details: 'Strategic accounts in progress'
      }
    },
    keyPartners: ['Samuel Harris', 'Matthew Khaw', 'Vimal', 'Abhishek Singh']
  },
  {
    id: 'ph',
    name: 'Philippines',
    flag: '🇵🇭',
    segments: {
      startup: {
        status: 'early',
        description: 'Early-stage engagement via Spark motion'
      },
      scale: {
        status: 'strong',
        description: 'High-performing Spark–Flare cycle; CEI velocity improving',
        details: 'Top performing scale segment'
      },
      focused: {
        status: 'active',
        description: "Aligned with Matthew Khaw's focused team"
      },
      deepTech: {
        status: 'emerging',
        description: 'Select deep account plays emerging'
      }
    },
    keyPartners: ['Matthew Khaw', 'Precious (Country Manager)']
  },
  {
    id: 'my',
    name: 'Malaysia',
    flag: '🇲🇾',
    segments: {
      startup: {
        status: 'emerging',
        description: 'Rolling out Spark motion via GenAI events'
      },
      scale: {
        status: 'active',
        description: 'Steady performance; Spark supported by SDR events'
      },
      focused: {
        status: 'active',
        description: 'Working with Matthew on local partnerships'
      },
      deepTech: {
        status: 'planning',
        description: 'Yet to build Deep Tech pipeline'
      }
    },
    keyPartners: ['Matthew Khaw']
  },
  {
    id: 'id',
    name: 'Indonesia',
    flag: '🇮🇩',
    segments: {
      startup: {
        status: 'emerging',
        description: 'Spark motion scaling fast with Bahasa-speaking SDR',
        details: 'Lovena driving local language engagement'
      },
      scale: {
        status: 'emerging',
        description: 'Spark events showing traction; CEI underway'
      },
      focused: {
        status: 'emerging',
        description: 'Focused engagement in progress via Matthew Khaw'
      },
      deepTech: {
        status: 'early',
        description: 'Early exploration through Abhishek Singh'
      }
    },
    keyPartners: ['Matthew Khaw', 'Abhishek Singh']
  },
  {
    id: 'th',
    name: 'Thailand',
    flag: '🇹🇭',
    segments: {
      startup: {
        status: 'planning',
        description: 'Spark motion in plan; local SDR needed'
      },
      scale: {
        status: 'early',
        description: 'Initial CEI traction; Spark just beginning'
      },
      focused: {
        status: 'emerging',
        description: 'Targeting focused plays with Matthew & partners'
      },
      deepTech: {
        status: 'none',
        description: 'No formal Deep engagement yet'
      }
    },
    keyPartners: ['Matthew Khaw'],
    notes: 'Thai-speaking SDR recruitment priority'
  },
  {
    id: 'vn',
    name: 'Vietnam',
    flag: '🇻🇳',
    segments: {
      startup: {
        status: 'planning',
        description: 'Yet to activate Spark motion'
      },
      scale: {
        status: 'early',
        description: 'Initial alignment via CEI and events'
      },
      focused: {
        status: 'emerging',
        description: 'Focused motion with Matthew Khaw underway'
      },
      deepTech: {
        status: 'exploring',
        description: 'Opportunity building via Eric + Abhishek'
      }
    },
    keyPartners: ['Eric (Country Manager)', 'Matthew Khaw', 'Abhishek Singh']
  },
  {
    id: 'in',
    name: 'India',
    flag: '🇮🇳',
    segments: {
      startup: {
        status: 'early',
        description: 'Startup and Spark motions in early stages'
      },
      scale: {
        status: 'emerging',
        description: 'CEI-funded Spark efforts just maturing'
      },
      focused: {
        status: 'emerging',
        description: 'Focused segment emerging with Arka, Deepak'
      },
      deepTech: {
        status: 'early',
        description: 'Entry through Abhishek + Vimal in select verticals'
      }
    },
    keyPartners: ['Arka', 'Deepak', 'Abhishek Singh', 'Vimal']
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'strong':
    case 'mature':
      return 'bg-green-100 text-green-800 border-green-300'
    case 'active':
      return 'bg-blue-100 text-blue-800 border-blue-300'
    case 'emerging':
      return 'bg-amber-100 text-amber-800 border-amber-300'
    case 'early':
      return 'bg-orange-100 text-orange-800 border-orange-300'
    case 'planning':
    case 'exploring':
      return 'bg-purple-100 text-purple-800 border-purple-300'
    case 'none':
      return 'bg-gray-100 text-gray-800 border-gray-300'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300'
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'strong':
    case 'mature':
      return <CheckCircle className="w-4 h-4 text-green-600" />
    case 'active':
      return <TrendingUp className="w-4 h-4 text-blue-600" />
    case 'emerging':
      return <Clock className="w-4 h-4 text-amber-600" />
    case 'early':
    case 'planning':
    case 'exploring':
      return <AlertCircle className="w-4 h-4 text-orange-600" />
    default:
      return null
  }
}

const getSegmentIcon = (segment: string) => {
  switch (segment) {
    case 'startup':
      return <Zap className="w-5 h-5" />
    case 'scale':
      return <Rocket className="w-5 h-5" />
    case 'focused':
      return <Target className="w-5 h-5" />
    case 'deepTech':
      return <Sparkles className="w-5 h-5" />
    default:
      return null
  }
}

export default function TerritoryCoverageMatrix() {
  const [selectedView, setSelectedView] = useState<'table' | 'cards'>('table')
  const [selectedSegment, setSelectedSegment] = useState<'all' | 'startup' | 'scale' | 'focused' | 'deepTech'>('all')
  
  return (
    <div className="w-full space-y-8">
      {/* View Controls */}
      <div className="flex items-center justify-between">
        <Tabs value={selectedView} onValueChange={(value) => setSelectedView(value as 'table' | 'cards')}>
          <TabsList>
            <TabsTrigger value="table">Table View</TabsTrigger>
            <TabsTrigger value="cards">Card View</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <Tabs value={selectedSegment} onValueChange={(value) => setSelectedSegment(value as any)}>
          <TabsList>
            <TabsTrigger value="all">All Segments</TabsTrigger>
            <TabsTrigger value="startup">Startup</TabsTrigger>
            <TabsTrigger value="scale">Scale</TabsTrigger>
            <TabsTrigger value="focused">Focused</TabsTrigger>
            <TabsTrigger value="deepTech">Deep Tech</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {/* Table View */}
      {selectedView === 'table' && (
        <Card>
          <CardHeader>
            <CardTitle>Territory Coverage Matrix</CardTitle>
            <CardDescription>Segment maturity and engagement status by country</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Country</th>
                    {(selectedSegment === 'all' || selectedSegment === 'startup') && (
                      <th className="text-center p-3 font-semibold">
                        <div className="flex items-center justify-center gap-2">
                          {getSegmentIcon('startup')}
                          <span>Startup Segment</span>
                        </div>
                      </th>
                    )}
                    {(selectedSegment === 'all' || selectedSegment === 'scale') && (
                      <th className="text-center p-3 font-semibold">
                        <div className="flex items-center justify-center gap-2">
                          {getSegmentIcon('scale')}
                          <span>Scale Segment</span>
                        </div>
                      </th>
                    )}
                    {(selectedSegment === 'all' || selectedSegment === 'focused') && (
                      <th className="text-center p-3 font-semibold">
                        <div className="flex items-center justify-center gap-2">
                          {getSegmentIcon('focused')}
                          <span>Focused Segment</span>
                        </div>
                      </th>
                    )}
                    {(selectedSegment === 'all' || selectedSegment === 'deepTech') && (
                      <th className="text-center p-3 font-semibold">
                        <div className="flex items-center justify-center gap-2">
                          {getSegmentIcon('deepTech')}
                          <span>Deep Tech / Niche</span>
                        </div>
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {territories.map((territory) => (
                    <tr key={territory.id} className="border-b hover:bg-muted/50">
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{territory.flag}</span>
                          <span className="font-medium">{territory.name}</span>
                        </div>
                      </td>
                      {(selectedSegment === 'all' || selectedSegment === 'startup') && (
                        <td className="p-3">
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <div className="cursor-pointer">
                                <Badge className={`${getStatusColor(territory.segments.startup.status)} mb-1`}>
                                  <span className="mr-1">{getStatusIcon(territory.segments.startup.status)}</span>
                                  {territory.segments.startup.status}
                                </Badge>
                                <p className="text-xs text-muted-foreground">{territory.segments.startup.description}</p>
                              </div>
                            </HoverCardTrigger>
                            {territory.segments.startup.details && (
                              <HoverCardContent>
                                <p className="text-sm">{territory.segments.startup.details}</p>
                              </HoverCardContent>
                            )}
                          </HoverCard>
                        </td>
                      )}
                      {(selectedSegment === 'all' || selectedSegment === 'scale') && (
                        <td className="p-3">
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <div className="cursor-pointer">
                                <Badge className={`${getStatusColor(territory.segments.scale.status)} mb-1`}>
                                  <span className="mr-1">{getStatusIcon(territory.segments.scale.status)}</span>
                                  {territory.segments.scale.status}
                                </Badge>
                                <p className="text-xs text-muted-foreground">{territory.segments.scale.description}</p>
                              </div>
                            </HoverCardTrigger>
                            {territory.segments.scale.details && (
                              <HoverCardContent>
                                <p className="text-sm">{territory.segments.scale.details}</p>
                              </HoverCardContent>
                            )}
                          </HoverCard>
                        </td>
                      )}
                      {(selectedSegment === 'all' || selectedSegment === 'focused') && (
                        <td className="p-3">
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <div className="cursor-pointer">
                                <Badge className={`${getStatusColor(territory.segments.focused.status)} mb-1`}>
                                  <span className="mr-1">{getStatusIcon(territory.segments.focused.status)}</span>
                                  {territory.segments.focused.status}
                                </Badge>
                                <p className="text-xs text-muted-foreground">{territory.segments.focused.description}</p>
                              </div>
                            </HoverCardTrigger>
                            {territory.segments.focused.details && (
                              <HoverCardContent>
                                <p className="text-sm">{territory.segments.focused.details}</p>
                              </HoverCardContent>
                            )}
                          </HoverCard>
                        </td>
                      )}
                      {(selectedSegment === 'all' || selectedSegment === 'deepTech') && (
                        <td className="p-3">
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <div className="cursor-pointer">
                                <Badge className={`${getStatusColor(territory.segments.deepTech.status)} mb-1`}>
                                  <span className="mr-1">{getStatusIcon(territory.segments.deepTech.status)}</span>
                                  {territory.segments.deepTech.status}
                                </Badge>
                                <p className="text-xs text-muted-foreground">{territory.segments.deepTech.description}</p>
                              </div>
                            </HoverCardTrigger>
                            {territory.segments.deepTech.details && (
                              <HoverCardContent>
                                <p className="text-sm">{territory.segments.deepTech.details}</p>
                              </HoverCardContent>
                            )}
                          </HoverCard>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* Card View */}
      {selectedView === 'cards' && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {territories.map((territory) => (
            <Card key={territory.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{territory.flag}</span>
                    {territory.name}
                  </CardTitle>
                </div>
                {territory.keyPartners && (
                  <CardDescription className="text-xs">
                    Key Partners: {territory.keyPartners.join(', ')}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="space-y-3">
                {(selectedSegment === 'all' || selectedSegment === 'startup') && (
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {getSegmentIcon('startup')}
                      <span className="font-medium text-sm">Startup</span>
                      <Badge className={`text-xs ${getStatusColor(territory.segments.startup.status)}`}>
                        {territory.segments.startup.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{territory.segments.startup.description}</p>
                  </div>
                )}
                {(selectedSegment === 'all' || selectedSegment === 'scale') && (
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {getSegmentIcon('scale')}
                      <span className="font-medium text-sm">Scale</span>
                      <Badge className={`text-xs ${getStatusColor(territory.segments.scale.status)}`}>
                        {territory.segments.scale.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{territory.segments.scale.description}</p>
                  </div>
                )}
                {(selectedSegment === 'all' || selectedSegment === 'focused') && (
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {getSegmentIcon('focused')}
                      <span className="font-medium text-sm">Focused</span>
                      <Badge className={`text-xs ${getStatusColor(territory.segments.focused.status)}`}>
                        {territory.segments.focused.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{territory.segments.focused.description}</p>
                  </div>
                )}
                {(selectedSegment === 'all' || selectedSegment === 'deepTech') && (
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {getSegmentIcon('deepTech')}
                      <span className="font-medium text-sm">Deep Tech</span>
                      <Badge className={`text-xs ${getStatusColor(territory.segments.deepTech.status)}`}>
                        {territory.segments.deepTech.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{territory.segments.deepTech.description}</p>
                  </div>
                )}
                {territory.notes && (
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground italic">{territory.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      {/* Key Insights */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">Singapore</div>
            <p className="text-sm text-muted-foreground">Most mature market</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">Scale Segment</div>
            <p className="text-sm text-muted-foreground">Strongest performance</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-amber-600">GenAI Spark</div>
            <p className="text-sm text-muted-foreground">Replicable playbook</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">Deep Tech</div>
            <p className="text-sm text-muted-foreground">Emerging opportunity</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}