import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  AlertTriangle, 
  CheckCircle, 
  BarChart3, 
  Target,
  Users,
  FileText,
  Clock,
  DollarSign,
  MapPin
} from 'lucide-react'

interface ExposureArea {
  area: string
  rootCause: string
  ownershipGap: string
  severity: 'high' | 'medium' | 'low'
}

const exposureAreas: ExposureArea[] = [
  {
    area: 'Proposal Aging & TATs',
    rootCause: 'No SLA enforcement, lack of proposal tracking within Zoho CRM',
    ownershipGap: 'Pre-Sales, Sales',
    severity: 'high'
  },
  {
    area: 'Forecast Accuracy Variability',
    rootCause: 'Overcommitment, delayed closure, delivery validation not looped in early',
    ownershipGap: 'Sales, Delivery',
    severity: 'high'
  },
  {
    area: 'CRM Hygiene (especially PH)',
    rootCause: 'Partial adoption, off-system updates, Slack/Excel parallel workflows',
    ownershipGap: 'Sales + Leadership (PH)',
    severity: 'medium'
  },
  {
    area: 'Platform Metrics Visibility',
    rootCause: 'No clear method to measure demand or conversion of platform-led PoCs',
    ownershipGap: 'Product + Sales',
    severity: 'medium'
  },
  {
    area: 'Lead Conversion (India)',
    rootCause: 'Low maturity motion, CEI motion just picking up, SDR coverage improving',
    ownershipGap: 'SDR + Bevin (BDM)',
    severity: 'medium'
  },
  {
    area: 'Outstanding Revenue Risk (Blaze)',
    rootCause: 'In Blaze-stage self-funded projects, receivables exposure is increasing',
    ownershipGap: 'Delivery + Finance + Leadership',
    severity: 'high'
  }
]

export default function KPIDashboard() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'text-red-600 bg-red-50'
      case 'medium':
        return 'text-amber-600 bg-amber-50'
      case 'low':
        return 'text-green-600 bg-green-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }
  
  return (
    <div className="w-full space-y-8">
      {/* Primary KPI */}
      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="text-2xl">Primary KPI We Track</CardTitle>
          <CardDescription>Core metric driving sales performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Pipeline Coverage Ratio
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Pipeline size relative to target (aiming for 3x) segmented by territory and motion
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Owner</Badge>
                  <span className="text-sm">Sales Leadership</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Review Frequency</Badge>
                  <span className="text-sm">Monthly (PipelinePulse), Territory sync</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-3xl font-bold text-primary">3x</div>
                <p className="text-sm text-muted-foreground">Target Coverage</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Singapore</span>
                  <span className="font-medium">3.2x</span>
                </div>
                <Progress value={100} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Philippines</span>
                  <span className="font-medium">2.8x</span>
                </div>
                <Progress value={93} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Three-Tier KPI Framework */}
      <div>
        <h2 className="text-2xl font-bold mb-6">KPI Framework: Three-Tier View</h2>
        <Tabs defaultValue="coverage" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="coverage">Market Coverage</TabsTrigger>
            <TabsTrigger value="conversion">Funnel Conversion</TabsTrigger>
            <TabsTrigger value="revenue">Revenue Quality</TabsTrigger>
          </TabsList>
          
          <TabsContent value="coverage" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Market Coverage & White Space Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Measured across AWS segments in each country</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Identifies where 1CloudHub is not yet present vs where we are active</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Drives pipeline volume growth and improves revenue smoothness for cash flow</span>
                  </li>
                </ul>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">Current Status</p>
                  <p className="text-sm text-blue-700 mt-1">
                    Strong coverage in Singapore and Philippines, expanding in other territories
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="conversion" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Funnel Conversion Ratios
                </CardTitle>
                <Badge variant="destructive" className="ml-auto">To Be Introduced</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm font-medium text-amber-900 mb-2">Current Gap</p>
                  <p className="text-sm text-amber-700">
                    No mechanism to track SPARK → KINDLE → FLARE → IGNITE → BLAZE conversion
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Implementation Goals:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
                      <span className="text-sm">Establish stage-wise conversion benchmarks per country and service line</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
                      <span className="text-sm">Conversion hygiene to be made visible and governed via PipelinePulse</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="revenue" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Revenue Quality & Expansion Indicators
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Key Metrics to Track:</h4>
                    <ul className="space-y-2">
                      <li className="text-sm flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        Deal type: one-off, recurring, or annuity-based
                      </li>
                      <li className="text-sm flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        Repeat vs net-new vs upsell/cross-sell
                      </li>
                      <li className="text-sm flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        Average deal size and customer lifetime value
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg">
                    <p className="text-sm font-medium text-amber-900">Current State</p>
                    <p className="text-sm text-amber-700 mt-1">
                      Currently tracked manually by CRO; needs formalization across country leadership
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Confidence Areas */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-green-200 bg-green-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-900">
              <CheckCircle className="w-5 h-5" />
              Where We Feel Confident
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  <strong>Pipeline coverage</strong> is healthy in Singapore and Philippines across SPARK to FLARE segments
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  <strong>SDR-generated lead velocity</strong> is strong, especially in regions with AWS CEI co-funded events
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  <strong>Alliance tagging and Opp ID tracking</strong> has improved significantly
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  <strong>Win rate</strong> in Platform-accelerated engagements is higher when use-case is clear
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="border-red-200 bg-red-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-900">
              <AlertTriangle className="w-5 h-5" />
              Where We Are Exposed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {exposureAreas.slice(0, 4).map((area, index) => (
                <div key={index} className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    <strong>{area.area}</strong>
                    {area.severity === 'high' && (
                      <Badge variant="destructive" className="ml-2 text-xs">High Risk</Badge>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Exposure Areas Detail Table */}
      <Card>
        <CardHeader>
          <CardTitle>Areas of Exposure - Detailed Analysis</CardTitle>
          <CardDescription>Root causes and ownership gaps for key risk areas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Area of Exposure</th>
                  <th className="text-left p-3 font-semibold">Root Cause</th>
                  <th className="text-left p-3 font-semibold">Ownership Gap</th>
                  <th className="text-center p-3 font-semibold">Severity</th>
                </tr>
              </thead>
              <tbody>
                {exposureAreas.map((area, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="p-3 font-medium">{area.area}</td>
                    <td className="p-3 text-sm text-muted-foreground">{area.rootCause}</td>
                    <td className="p-3 text-sm">{area.ownershipGap}</td>
                    <td className="p-3 text-center">
                      <Badge className={getSeverityColor(area.severity)}>
                        {area.severity}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      {/* Attribution of Gaps */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="w-5 h-5" />
              People
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              New joiners not fully oriented to governance expectations (esp. pre-sales, BDMs in newer markets)
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Systems
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Zoho CRM lacks user-centric UX, requires PipelinePulse as overlay for consumption and future entry
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Interlocks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Platform GTM, Proposal process, and Delivery alignment need formal SLAs and playbooks
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}