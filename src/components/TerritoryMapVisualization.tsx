import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Users, UserCheck, Phone, CheckCircle, XCircle } from 'lucide-react'

interface TerritoryData {
  id: string
  name: string
  flag: string
  maturity: 'Low' | 'Medium' | 'Medium to High' | 'Medium (Digital)'
  bdms: string[]
  isrs: string
  sdrs: string
  notes?: string
  segmentCoverage: {
    scale: boolean
    focused: boolean | string
    deep: boolean | string
  }
}

const territories: TerritoryData[] = [
  {
    id: 'sg',
    name: 'Singapore',
    flag: '🇸🇬',
    maturity: 'Medium to High',
    bdms: ['Shi Zhan', 'Tracy'],
    isrs: 'Active (live)',
    sdrs: 'SDR support active',
    segmentCoverage: {
      scale: true,
      focused: 'Active (Matthew Khaw)',
      deep: 'Strategic accounts engaged'
    }
  },
  {
    id: 'ph',
    name: 'Philippines',
    flag: '🇵🇭',
    maturity: 'Medium',
    bdms: ['Jason', 'July'],
    isrs: 'Hiring in progress',
    sdrs: 'SDRs active',
    segmentCoverage: {
      scale: true,
      focused: 'Active (Matthew Khaw)',
      deep: 'Few active deep plays'
    }
  },
  {
    id: 'my',
    name: 'Malaysia',
    flag: '🇲🇾',
    maturity: 'Medium (Digital)',
    bdms: ['Menaka', 'Ismail (joining)'],
    isrs: 'No ISRs',
    sdrs: 'SDR-led events',
    notes: 'Balajee supports pre-sales',
    segmentCoverage: {
      scale: true,
      focused: 'Active (Matthew Khaw)',
      deep: false
    }
  },
  {
    id: 'id',
    name: 'Indonesia',
    flag: '🇮🇩',
    maturity: 'Low',
    bdms: ['Olivia'],
    isrs: 'No ISRs yet',
    sdrs: 'Lovena (Bahasa-native SDR)',
    segmentCoverage: {
      scale: true,
      focused: 'Active (Matthew Khaw)',
      deep: false
    }
  },
  {
    id: 'in',
    name: 'India',
    flag: '🇮🇳',
    maturity: 'Low',
    bdms: ['Bevin'],
    isrs: 'No ISRs yet',
    sdrs: 'SDR-supported CEI motion',
    segmentCoverage: {
      scale: true,
      focused: false,
      deep: false
    }
  },
  {
    id: 'th',
    name: 'Thailand',
    flag: '🇹🇭',
    maturity: 'Low',
    bdms: ['Pakorn'],
    isrs: 'No ISRs yet',
    sdrs: 'Thai-speaking SDR needed',
    segmentCoverage: {
      scale: true,
      focused: false,
      deep: false
    }
  }
]

export default function TerritoryMapVisualization() {
  const [selectedTerritory, setSelectedTerritory] = useState<TerritoryData>(territories[0])
  
  const getMaturityColor = (maturity: string) => {
    switch (maturity) {
      case 'Medium to High':
        return 'bg-green-100 text-green-800 border-green-300'
      case 'Medium':
      case 'Medium (Digital)':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      case 'Low':
        return 'bg-red-100 text-red-800 border-red-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }
  
  const getSegmentIcon = (status: boolean | string) => {
    if (typeof status === 'string') {
      return <CheckCircle className="w-4 h-4 text-green-600" />
    } else if (status === true) {
      return <CheckCircle className="w-4 h-4 text-green-600" />
    } else {
      return <XCircle className="w-4 h-4 text-red-600" />
    }
  }
  
  const getSegmentStatus = (status: boolean | string) => {
    if (typeof status === 'string') {
      return status
    } else if (status === true) {
      return 'Active'
    } else {
      return 'Not yet engaged'
    }
  }
  
  return (
    <div className="w-full space-y-8">
      {/* Country Grid */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Country-Wise Sales Pod Configuration</CardTitle>
          <CardDescription>
            Sales team structure and maturity across APJ territories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {territories.map((territory) => (
              <HoverCard key={territory.id}>
                <HoverCardTrigger asChild>
                  <button
                    onClick={() => setSelectedTerritory(territory)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedTerritory.id === territory.id
                        ? 'border-primary bg-primary/5 shadow-md'
                        : 'border-muted hover:border-primary/50 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{territory.flag}</span>
                        <span className="font-semibold text-lg">{territory.name}</span>
                      </div>
                      <Badge className={getMaturityColor(territory.maturity)}>
                        {territory.maturity}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">BDMs:</span>
                        <span className="text-muted-foreground">{territory.bdms.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <UserCheck className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">ISRs:</span>
                        <span className="text-muted-foreground">{territory.isrs}</span>
                      </div>
                    </div>
                  </button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      {territory.flag} {territory.name} Details
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">SDR Support</p>
                        <p className="font-medium">{territory.sdrs}</p>
                      </div>
                      {territory.notes && (
                        <div>
                          <p className="text-muted-foreground">Notes</p>
                          <p className="font-medium">{territory.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Territory Details */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{selectedTerritory.flag}</span>
              <CardTitle>{selectedTerritory.name} Sales Pod Structure</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Business Development Managers (BDMs)
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTerritory.bdms.map((bdm) => (
                    <Badge key={bdm} variant="secondary" className="text-sm">
                      {bdm}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <UserCheck className="w-4 h-4" />
                  Inside Sales Reps (ISRs)
                </h4>
                <p className="text-sm text-muted-foreground">{selectedTerritory.isrs}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Sales Development Reps (SDRs)
                </h4>
                <p className="text-sm text-muted-foreground">{selectedTerritory.sdrs}</p>
              </div>
              
              {selectedTerritory.notes && (
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm">{selectedTerritory.notes}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Segment Coverage Status</CardTitle>
            <CardDescription>AWS segment engagement by territory</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Scale / Start-Up</Badge>
                </div>
                <div className="flex items-center gap-2">
                  {getSegmentIcon(selectedTerritory.segmentCoverage.scale)}
                  <span className="text-sm font-medium">
                    {getSegmentStatus(selectedTerritory.segmentCoverage.scale)}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Focused Segment</Badge>
                </div>
                <div className="flex items-center gap-2">
                  {getSegmentIcon(selectedTerritory.segmentCoverage.focused)}
                  <span className="text-sm font-medium">
                    {getSegmentStatus(selectedTerritory.segmentCoverage.focused)}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Deep Segment</Badge>
                </div>
                <div className="flex items-center gap-2">
                  {getSegmentIcon(selectedTerritory.segmentCoverage.deep)}
                  <span className="text-sm font-medium">
                    {getSegmentStatus(selectedTerritory.segmentCoverage.deep)}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Segment Coverage Matrix */}
      <Card>
        <CardHeader>
          <CardTitle>Segment Coverage by Country</CardTitle>
          <CardDescription>Overview of AWS segment engagement across all territories</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="table" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="table">Table View</TabsTrigger>
              <TabsTrigger value="gaps">Gaps & Roadmap</TabsTrigger>
            </TabsList>
            <TabsContent value="table">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Country</th>
                      <th className="text-center p-3 font-semibold">Scale / Start-Up</th>
                      <th className="text-center p-3 font-semibold">Focused Segment</th>
                      <th className="text-center p-3 font-semibold">Deep Segment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {territories.map((territory) => (
                      <tr key={territory.id} className="border-b hover:bg-muted/50">
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <span>{territory.flag}</span>
                            <span className="font-medium">{territory.name}</span>
                          </div>
                        </td>
                        <td className="p-3 text-center">
                          {territory.segmentCoverage.scale ? (
                            <Badge variant="default" className="bg-green-600">✓ Active</Badge>
                          ) : (
                            <Badge variant="secondary">Not engaged</Badge>
                          )}
                        </td>
                        <td className="p-3 text-center">
                          {typeof territory.segmentCoverage.focused === 'string' ? (
                            <Badge variant="default" className="bg-green-600">✓ {territory.segmentCoverage.focused}</Badge>
                          ) : territory.segmentCoverage.focused ? (
                            <Badge variant="default" className="bg-green-600">✓ Active</Badge>
                          ) : (
                            <Badge variant="destructive">✗ Not yet engaged</Badge>
                          )}
                        </td>
                        <td className="p-3 text-center">
                          {typeof territory.segmentCoverage.deep === 'string' ? (
                            <Badge variant="default" className="bg-green-600">✓ {territory.segmentCoverage.deep}</Badge>
                          ) : territory.segmentCoverage.deep ? (
                            <Badge variant="default" className="bg-green-600">✓ Active</Badge>
                          ) : territory.segmentCoverage.deep === false && territory.maturity === 'Low' ? (
                            <Badge variant="secondary">✗ Not applicable</Badge>
                          ) : (
                            <Badge variant="destructive">✗ Not yet engaged</Badge>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            <TabsContent value="gaps">
              <div className="space-y-4">
                <div className="grid gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">India ISR Readiness</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="font-semibold">Gap:</span> No ISR yet due to early CEI motion
                      </p>
                      <Badge variant="outline" className="text-xs">
                        Action: Monitor lead flow, plan ISR by Q1 2026
                      </Badge>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Thai SDR Effectiveness</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="font-semibold">Gap:</span> Current SDR lacks native fluency
                      </p>
                      <Badge variant="outline" className="text-xs">
                        Action: Onboard Thai-speaking SDR
                      </Badge>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Deep Plays in PH/MY</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="font-semibold">Gap:</span> Few strategic accounts activated
                      </p>
                      <Badge variant="outline" className="text-xs">
                        Action: Elevate pitch using SG case studies
                      </Badge>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Malaysia BDM Capacity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="font-semibold">Gap:</span> Ismail onboarding, Menaka active
                      </p>
                      <Badge variant="outline" className="text-xs">
                        Action: Ensure overlap and pre-sales continuity via Balajee
                      </Badge>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">PH ISR Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="font-semibold">Gap:</span> Jason/July need TOFU reinforcement
                      </p>
                      <Badge variant="outline" className="text-xs">
                        Action: Accelerate ISR hiring
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}