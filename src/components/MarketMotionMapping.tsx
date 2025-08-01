import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { ArrowRight, Zap, Flame, Rocket, Star } from 'lucide-react'

interface MarketMotion {
  id: string
  cloudhubStage: string
  icon: React.ReactNode
  color: string
  engagementType: string
  awsSegments: string[]
  dealSize: string
  fundingMechanisms: string[]
  successMetrics: string[]
}

const marketMotions: MarketMotion[] = [
  {
    id: 'spark',
    cloudhubStage: 'SPARK',
    icon: <Zap className="w-6 h-6" />,
    color: 'bg-yellow-500',
    engagementType: 'Low-touch, high-volume outbound',
    awsSegments: ['Startups', 'Scale'],
    dealSize: '$0 - $10K',
    fundingMechanisms: ['CEI', 'Startup credits'],
    successMetrics: ['Lead volume', 'Conversion rate', 'Time to first POC']
  },
  {
    id: 'kindle',
    cloudhubStage: 'KINDLE',
    icon: <Flame className="w-6 h-6" />,
    color: 'bg-orange-500',
    engagementType: 'First conversion, funded POCs',
    awsSegments: ['Scale', 'Entry-level Focused'],
    dealSize: '$10K - $50K',
    fundingMechanisms: ['FR (Funding Request)', 'POC Credits'],
    successMetrics: ['POC success rate', 'Time to production', 'Initial ARR']
  },
  {
    id: 'flare',
    cloudhubStage: 'FLARE',
    icon: <Flame className="w-6 h-6" />,
    color: 'bg-orange-600',
    engagementType: 'Repeat use-case, ROI-led pitches',
    awsSegments: ['Focused'],
    dealSize: '$50K - $250K',
    fundingMechanisms: ['MAP', 'Advanced POC funding'],
    successMetrics: ['Expansion rate', 'Multi-workload adoption', 'Customer satisfaction']
  },
  {
    id: 'ignite',
    cloudhubStage: 'IGNITE',
    icon: <Rocket className="w-6 h-6" />,
    color: 'bg-red-500',
    engagementType: 'Business-case validated rollouts',
    awsSegments: ['Focused', 'Deep'],
    dealSize: '$250K - $1M',
    fundingMechanisms: ['MAP', 'Enterprise agreements'],
    successMetrics: ['Enterprise adoption', 'Strategic alignment', 'Executive sponsorship']
  },
  {
    id: 'blaze',
    cloudhubStage: 'BLAZE',
    icon: <Star className="w-6 h-6" />,
    color: 'bg-red-600',
    engagementType: 'Large-scale, multi-BU programs',
    awsSegments: ['Deep Tech'],
    dealSize: '$1M+',
    fundingMechanisms: ['Strategic MAP', 'Co-innovation funding'],
    successMetrics: ['Transformation impact', 'Market leadership', 'Strategic partnership depth']
  }
]

export default function MarketMotionMapping() {
  const [selectedMotion, setSelectedMotion] = useState<MarketMotion>(marketMotions[0])
  
  return (
    <div className="w-full space-y-8">
      {/* Visual Journey Map */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">1CloudHub to AWS Segment Mapping</CardTitle>
          <CardDescription>
            How our customer journey stages align with AWS segmentation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Journey Flow */}
            <div className="flex items-center justify-between mb-12">
              {marketMotions.map((motion, index) => (
                <div key={motion.id} className="flex-1 relative">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <button
                        onClick={() => setSelectedMotion(motion)}
                        className={`relative z-10 flex flex-col items-center p-4 rounded-lg transition-all ${
                          selectedMotion.id === motion.id
                            ? 'bg-primary/10 scale-105 shadow-lg'
                            : 'hover:bg-muted'
                        }`}
                      >
                        <div className={`p-3 rounded-full ${motion.color} text-white mb-2`}>
                          {motion.icon}
                        </div>
                        <span className="font-bold text-lg">{motion.cloudhubStage}</span>
                        <div className="mt-2">
                          {motion.awsSegments.map((segment) => (
                            <Badge key={segment} variant="outline" className="text-xs m-0.5">
                              {segment}
                            </Badge>
                          ))}
                        </div>
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="font-semibold">{motion.cloudhubStage} Stage</h4>
                        <p className="text-sm text-muted-foreground">{motion.engagementType}</p>
                        <div className="pt-2">
                          <p className="text-sm font-medium">Typical Deal Size:</p>
                          <p className="text-sm text-muted-foreground">{motion.dealSize}</p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  
                  {/* Arrow to next stage */}
                  {index < marketMotions.length - 1 && (
                    <div className="absolute top-1/2 left-full w-full flex items-center -ml-4 z-0">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* AWS Segment Bar */}
            <div className="mt-8 p-4 bg-muted rounded-lg">
              <h4 className="text-sm font-semibold mb-2">AWS Segments Coverage</h4>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">Startups</Badge>
                <Badge variant="secondary">Scale</Badge>
                <Badge variant="secondary">Focused</Badge>
                <Badge variant="secondary">Deep Tech</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Detailed Stage Information */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-full ${selectedMotion.color} text-white`}>
                {selectedMotion.icon}
              </div>
              <div>
                <CardTitle>{selectedMotion.cloudhubStage} Stage Details</CardTitle>
                <CardDescription>{selectedMotion.engagementType}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">AWS Segment Alignment</h4>
              <div className="flex flex-wrap gap-2">
                {selectedMotion.awsSegments.map((segment) => (
                  <Badge key={segment} variant="default">
                    {segment}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Typical Deal Size</h4>
              <p className="text-2xl font-bold text-primary">{selectedMotion.dealSize}</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">AWS Funding Mechanisms</h4>
              <ul className="space-y-1">
                {selectedMotion.fundingMechanisms.map((mechanism) => (
                  <li key={mechanism} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">{mechanism}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Success Metrics</CardTitle>
            <CardDescription>Key performance indicators for this stage</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {selectedMotion.successMetrics.map((metric) => (
                <li key={metric} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5" />
                  <span className="text-sm">{metric}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                This mapping helps harmonize our funnel with AWS segmentation and improves 
                opportunity alignment for funding, tagging, and resourcing.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}