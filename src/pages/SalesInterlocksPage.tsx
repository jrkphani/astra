import SalesRoleMappingVisualization from '@/components/SalesRoleMappingVisualization'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Briefcase, Settings, Target } from 'lucide-react'

export default function SalesInterlocksPage() {
  return (
    <div className="container py-8">
      <div className="mb-12 text-center">
        <Badge variant="secondary" className="mb-4">Cross-Functional Excellence</Badge>
        <h1 className="text-3xl font-bold mb-4 sm:text-4xl md:text-5xl">
          Sales Interlocks & Coordination
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Seamless collaboration across sales roles, technical teams, and partner ecosystem 
          to deliver exceptional customer outcomes
        </p>
      </div>
      
      {/* Sales Role Mapping */}
      <div className="mb-12">
        <SalesRoleMappingVisualization />
      </div>
      
      {/* Key Interlocks */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Critical Sales Interlocks</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Technical Alignment
              </CardTitle>
              <CardDescription>SA and engineering team collaboration</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-sm">Solution Architects engaged early in customer journey</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-sm">Pre-sales technical validation for POCs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-sm">Engineering support for complex implementations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-sm">Technical enablement and knowledge transfer</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Partner Integration
              </CardTitle>
              <CardDescription>ISV and channel partner coordination</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-sm">AWS partner program alignment (APN, ISV)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-sm">Joint go-to-market with strategic ISVs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-sm">Channel partner enablement and support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-sm">Co-sell motion with AWS teams</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Internal Coordination
              </CardTitle>
              <CardDescription>Cross-functional team alignment</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-sm">SDR to ISR handoff protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-sm">ISR to BDM transition for qualified leads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-sm">BDM to Senior BD escalation for strategic accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-sm">CSM engagement post-deployment</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                AWS Alignment
              </CardTitle>
              <CardDescription>Synchronization with AWS programs</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-sm">Scale segment alignment with AWS CEI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-sm">Focused segment coordination with AWS teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-sm">Deep segment strategic co-sell motions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-sm">MAP funding and program coordination</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Best Practices */}
      <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle>Interlock Best Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h4 className="font-semibold mb-2">Communication</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Weekly sync meetings</li>
                <li>• Shared Slack channels</li>
                <li>• Clear escalation paths</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Documentation</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Account handoff templates</li>
                <li>• Customer journey tracking</li>
                <li>• Success metrics dashboard</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Enablement</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Role-specific training</li>
                <li>• Cross-team shadowing</li>
                <li>• Best practice sharing</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
