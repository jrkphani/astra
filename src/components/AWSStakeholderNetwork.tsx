import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, Users, Briefcase, Target } from 'lucide-react'

interface Stakeholder {
  id: string
  name: string
  title: string
  region: string[]
  segment: string[]
  focusAreas: string[]
  alignmentStatus: 'strong' | 'strengthening' | 'emerging' | 'maturing'
  notes: string
}

const stakeholders: Stakeholder[] = [
  {
    id: 'matthew-khaw',
    name: 'Matthew Khaw',
    title: 'PSM Lead, ASEAN',
    region: ['ASEAN'],
    segment: ['Focused'],
    focusAreas: ['Enterprise acceleration', 'ASEAN-wide coverage', 'Team leadership'],
    alignmentStatus: 'strong',
    notes: 'All focused PSMs in ASEAN report to Matthew; based in KL'
  },
  {
    id: 'abhishek-singh',
    name: 'Abhishek Singh',
    title: 'Deep Tech Lead, ASEAN-wide',
    region: ['ASEAN'],
    segment: ['Deep Tech'],
    focusAreas: ['GenAI', 'EKS', 'Graviton'],
    alignmentStatus: 'maturing',
    notes: 'Responsible for $100M quota via GenAI, EKS, and Graviton across ASEAN'
  },
  {
    id: 'rafi-warren',
    name: 'Rafi & Warren Small',
    title: 'MAP Team',
    region: ['ASEAN'],
    segment: ['MAP'],
    focusAreas: ['Migration Acceleration', 'POC Support', 'GTM Excellence'],
    alignmentStatus: 'strong',
    notes: 'Excellent working relationship with MAP team; strong support for POCs and GTM'
  },
  {
    id: 'rajas',
    name: 'Rajas and team',
    title: 'Scale Lead',
    region: ['ASEAN'],
    segment: ['Scale'],
    focusAreas: ['Volume growth', 'Singapore', 'Malaysia', 'Philippines'],
    alignmentStatus: 'strong',
    notes: 'Deep ASEAN-wide coverage; effective alignment in Singapore, MY, and PH'
  },
  {
    id: 'samuel-harris',
    name: 'Samuel Harris',
    title: 'Startup PSM',
    region: ['Singapore'],
    segment: ['Startups'],
    focusAreas: ['Innovation catalyst', 'Early-stage support'],
    alignmentStatus: 'emerging',
    notes: 'Emerging relationship; Startup PSM support activated'
  },
  {
    id: 'vimal',
    name: 'Vimal',
    title: 'Deep Tech Singapore',
    region: ['Singapore'],
    segment: ['Deep Tech'],
    focusAreas: ['Deep account GTM', 'Strategic transformations'],
    alignmentStatus: 'strong',
    notes: 'Deep account GTM in SG; also supports India Deep Tech'
  },
  {
    id: 'deepak-arka',
    name: 'Deepak, Arka',
    title: 'Scale & Public Lead',
    region: ['India'],
    segment: ['Scale', 'Public'],
    focusAreas: ['Commercial scale', 'Public sector expansion'],
    alignmentStatus: 'strengthening',
    notes: 'Steady alignment in Scale; building public sector presence'
  },
  {
    id: 'ajay-nair',
    name: 'Ajay Nair',
    title: 'Public Sector Lead',
    region: ['India'],
    segment: ['Public'],
    focusAreas: ['Government initiatives', 'Public sector transformation'],
    alignmentStatus: 'emerging',
    notes: 'Public sector engagement in early stages'
  },
  {
    id: 'precious',
    name: 'Precious',
    title: 'AWS Country Manager',
    region: ['Philippines'],
    segment: ['All Segments'],
    focusAreas: ['Country leadership', 'Strategic partnerships'],
    alignmentStatus: 'strong',
    notes: 'Strong AWS PH country leadership relationship'
  },
  {
    id: 'eric',
    name: 'Eric',
    title: 'AWS Country Manager',
    region: ['Vietnam'],
    segment: ['All Segments'],
    focusAreas: ['Market development', 'Future expansion'],
    alignmentStatus: 'strong',
    notes: 'Trusted relationship; key for future market build-out'
  }
]

export default function AWSStakeholderNetwork() {
  const [selectedRegion, setSelectedRegion] = useState<string>('all')
  const [selectedSegment, setSelectedSegment] = useState<string>('all')
  
  const getAlignmentColor = (status: string) => {
    switch (status) {
      case 'strong':
        return 'bg-green-100 text-green-800 border-green-300'
      case 'strengthening':
        return 'bg-amber-100 text-amber-800 border-amber-300'
      case 'emerging':
        return 'bg-blue-100 text-blue-800 border-blue-300'
      case 'maturing':
        return 'bg-purple-100 text-purple-800 border-purple-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }
  
  const getAlignmentIcon = (status: string) => {
    switch (status) {
      case 'strong':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'strengthening':
        return <Target className="w-4 h-4 text-amber-600" />
      case 'emerging':
        return <Users className="w-4 h-4 text-blue-600" />
      case 'maturing':
        return <Briefcase className="w-4 h-4 text-purple-600" />
      default:
        return null
    }
  }
  
  const filteredStakeholders = stakeholders.filter(stakeholder => {
    const regionMatch = selectedRegion === 'all' || 
      stakeholder.region.some(r => r.toLowerCase().includes(selectedRegion.toLowerCase()))
    const segmentMatch = selectedSegment === 'all' || 
      stakeholder.segment.some(s => s.toLowerCase().includes(selectedSegment.toLowerCase()))
    return regionMatch && segmentMatch
  })
  
  return (
    <div className="w-full space-y-6">
      {/* Filters */}
      <div className="space-y-4">
        <Tabs value={selectedRegion} onValueChange={setSelectedRegion}>
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="all">All Regions</TabsTrigger>
            <TabsTrigger value="asean">ASEAN</TabsTrigger>
            <TabsTrigger value="india">India</TabsTrigger>
            <TabsTrigger value="singapore">Singapore</TabsTrigger>
            <TabsTrigger value="philippines">Philippines</TabsTrigger>
            <TabsTrigger value="vietnam">Vietnam</TabsTrigger>
            <TabsTrigger value="malaysia">Malaysia</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <Tabs value={selectedSegment} onValueChange={setSelectedSegment}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all">All Segments</TabsTrigger>
            <TabsTrigger value="focused">Focused</TabsTrigger>
            <TabsTrigger value="scale">Scale</TabsTrigger>
            <TabsTrigger value="startups">Startups</TabsTrigger>
            <TabsTrigger value="deep">Deep Tech</TabsTrigger>
            <TabsTrigger value="map">MAP</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {/* Stakeholder Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredStakeholders.map((stakeholder) => (
          <HoverCard key={stakeholder.id}>
            <HoverCardTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{stakeholder.name}</CardTitle>
                      <CardDescription className="text-sm">{stakeholder.title}</CardDescription>
                    </div>
                    {getAlignmentIcon(stakeholder.alignmentStatus)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {stakeholder.region.map((region) => (
                        <Badge key={region} variant="outline" className="text-xs">
                          {region}
                        </Badge>
                      ))}
                      {stakeholder.segment.map((segment) => (
                        <Badge key={segment} variant="secondary" className="text-xs">
                          {segment}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Alignment:</span>
                      <Badge className={`text-xs ${getAlignmentColor(stakeholder.alignmentStatus)}`}>
                        {stakeholder.alignmentStatus}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">{stakeholder.name}</h4>
                  <p className="text-sm text-muted-foreground">{stakeholder.title}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Key Focus Areas:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {stakeholder.focusAreas.map((area, index) => (
                      <li key={index}>• {area}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm italic">{stakeholder.notes}</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
      
      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4 mt-6">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold">{filteredStakeholders.length}</div>
            <p className="text-sm text-muted-foreground">Active Stakeholders</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold">
              {filteredStakeholders.filter(s => s.alignmentStatus === 'strong').length}
            </div>
            <p className="text-sm text-muted-foreground">Strong Alignments</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold">
              {new Set(filteredStakeholders.flatMap(s => s.region)).size}
            </div>
            <p className="text-sm text-muted-foreground">Regions Covered</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold">
              {new Set(filteredStakeholders.flatMap(s => s.segment)).size}
            </div>
            <p className="text-sm text-muted-foreground">Segments Active</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}