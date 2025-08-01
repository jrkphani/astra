import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { DollarSign, FileText, Rocket, Code, Zap } from 'lucide-react'

interface FundingProgram {
  id: string
  name: string
  acronym: string
  icon: React.ReactNode
  description: string
  eligibility: string[]
  fundingRange: string
  applicationProcess: string[]
  successRate: number
  color: string
}

const fundingPrograms: FundingProgram[] = [
  {
    id: 'cei',
    name: 'Customer Enablement Initiative',
    acronym: 'CEI',
    icon: <Rocket className="w-6 h-6" />,
    description: 'AWS program designed to accelerate customer cloud adoption through funded enablement',
    eligibility: [
      'New to AWS customers',
      'Scale segment accounts',
      'Clear use case identified'
    ],
    fundingRange: '$5K - $25K',
    applicationProcess: [
      'Partner identifies opportunity',
      'Submit CEI request via portal',
      'AWS review (2-3 days)',
      'Funding approval & execution'
    ],
    successRate: 85,
    color: 'bg-blue-100 border-blue-300'
  },
  {
    id: 'fr',
    name: 'Funding Request',
    acronym: 'FR',
    icon: <FileText className="w-6 h-6" />,
    description: 'Flexible funding mechanism for POCs and specific customer initiatives',
    eligibility: [
      'Qualified opportunities',
      'Business case required',
      'AWS sponsor support'
    ],
    fundingRange: '$10K - $100K',
    applicationProcess: [
      'Business case development',
      'AWS sponsor alignment',
      'Submit FR documentation',
      'Review & approval (5-7 days)'
    ],
    successRate: 75,
    color: 'bg-green-100 border-green-300'
  },
  {
    id: 'map',
    name: 'Migration Acceleration Program',
    acronym: 'MAP',
    icon: <Zap className="w-6 h-6" />,
    description: 'Comprehensive program for large-scale migrations and modernization',
    eligibility: [
      'Enterprise customers',
      'Minimum migration scope',
      'Executive sponsorship',
      'Multi-year commitment'
    ],
    fundingRange: '$100K - $500K+',
    applicationProcess: [
      'MAP assessment',
      'Migration plan development',
      'MAP agreement execution',
      'Milestone-based funding'
    ],
    successRate: 90,
    color: 'bg-purple-100 border-purple-300'
  },
  {
    id: 'poc-credits',
    name: 'Proof of Concept Credits',
    acronym: 'POC',
    icon: <Code className="w-6 h-6" />,
    description: 'AWS credits for technical validation and proof of concept development',
    eligibility: [
      'Technical validation needed',
      'Defined success criteria',
      'Time-bound execution'
    ],
    fundingRange: '$1K - $25K',
    applicationProcess: [
      'POC scope definition',
      'Credit request submission',
      'Quick approval (1-2 days)',
      'Credit allocation'
    ],
    successRate: 95,
    color: 'bg-orange-100 border-orange-300'
  },
  {
    id: 'rapid',
    name: 'Rapid Application Development',
    acronym: 'RAPID',
    icon: <DollarSign className="w-6 h-6" />,
    description: 'Fast-track funding for quick wins and immediate customer needs',
    eligibility: [
      'Immediate opportunity',
      'Quick turnaround needed',
      'Clear ROI'
    ],
    fundingRange: '$5K - $50K',
    applicationProcess: [
      'Opportunity identification',
      'Rapid assessment',
      'Fast-track approval',
      'Immediate execution'
    ],
    successRate: 80,
    color: 'bg-red-100 border-red-300'
  }
]

export default function AWSFundingPrograms() {
  return (
    <div className="w-full space-y-8">
      {/* Programs Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {fundingPrograms.map((program) => (
          <Card key={program.id} className={`${program.color} border-2 hover:shadow-lg transition-shadow`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {program.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{program.acronym}</CardTitle>
                    <CardDescription className="text-xs">{program.name}</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{program.description}</p>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Funding Range</span>
                  <Badge variant="secondary">{program.fundingRange}</Badge>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Success Rate</span>
                  <span className="text-sm font-bold">{program.successRate}%</span>
                </div>
                <Progress value={program.successRate} className="h-2" />
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Eligibility</h4>
                <ul className="space-y-1">
                  {program.eligibility.slice(0, 3).map((criteria, index) => (
                    <li key={index} className="text-xs text-muted-foreground flex items-start gap-1">
                      <span className="text-primary">•</span>
                      <span>{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Application Process Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Funding Application Best Practices</CardTitle>
          <CardDescription>Maximize your success rate with these proven approaches</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Pre-Application</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Align with AWS stakeholder early</li>
                <li>• Develop clear business case</li>
                <li>• Define success metrics</li>
                <li>• Gather customer commitment</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">During Application</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Complete all documentation</li>
                <li>• Provide detailed timelines</li>
                <li>• Include technical architecture</li>
                <li>• Highlight AWS services usage</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Post-Approval</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Execute against timeline</li>
                <li>• Track milestone completion</li>
                <li>• Report progress regularly</li>
                <li>• Document success stories</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Success Metrics */}
      <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle>Our Funding Success Track Record</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4 text-center">
            <div>
              <div className="text-3xl font-bold">87%</div>
              <p className="text-sm opacity-90">Overall Success Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold">$2.5M+</div>
              <p className="text-sm opacity-90">Funding Secured</p>
            </div>
            <div>
              <div className="text-3xl font-bold">150+</div>
              <p className="text-sm opacity-90">Funded Projects</p>
            </div>
            <div>
              <div className="text-3xl font-bold">3-5 days</div>
              <p className="text-sm opacity-90">Avg. Approval Time</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}