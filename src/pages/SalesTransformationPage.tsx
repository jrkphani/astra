import TerritoryMapVisualization from '@/components/TerritoryMapVisualization'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, ArrowRight, UserCheck, PhoneCall, Sparkles } from 'lucide-react'

export default function SalesTransformationPage() {
  return (
    <div className="container py-8">
      <div className="mb-12 text-center">
        <Badge variant="secondary" className="mb-4">Sales Org Alignment</Badge>
        <h1 className="text-3xl font-bold mb-4 sm:text-4xl md:text-5xl">
          Sales Org Alignment to Deliver Astra's Growth
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Structural philosophy shift from functional split to customer maturity-based model 
          aligned with AWS GTM segmentation
        </p>
      </div>
      
      {/* Old Model vs New Model */}
      <div className="grid gap-6 mb-12 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-red-600">Old Sales Structure</CardTitle>
            <CardDescription>Traditional functional split approach</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span className="text-sm">Functional split: Hunters (AWS-facing new acquisition) vs Farmers (existing accounts)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span className="text-sm">TOFU activity siloed under SDRs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span className="text-sm">Structure agnostic to AWS GTM segmentation or customer maturity</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="text-green-600">New Sales Structure</CardTitle>
            <CardDescription>Customer maturity and AWS segment aligned</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-sm">Structured by Customer Maturity and AWS Segment (Scale, Focused, Deep)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-sm">ISRs handle early-stage, low-touch customers (Scale)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-sm">BDMs drive mid to high-touch adoption and monetization (Focused & Deep)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-sm">SDRs (under Devika) operate in tandem with ISRs to warm leads and execute events</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-sm">Dynamic structure adjusts with market maturity and AWS alignment</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      {/* Segmentation Framework */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Segmentation Framework</CardTitle>
          <CardDescription>Mapping customer characteristics to sales roles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Dimension</th>
                  <th className="text-left p-3 font-semibold">Segmentation Criteria</th>
                  <th className="text-left p-3 font-semibold">Mapped Sales Role</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">
                    <Badge variant="outline">Customer Maturity</Badge>
                  </td>
                  <td className="p-3 text-sm">AI/Cloud readiness, decision urgency, internal alignment</td>
                  <td className="p-3 text-sm">
                    <span className="flex items-center gap-2">
                      ISRs <ArrowRight className="w-4 h-4" /> BDMs <ArrowRight className="w-4 h-4" /> Senior BDMs + Solutioning
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <Badge variant="outline">AWS Segment</Badge>
                  </td>
                  <td className="p-3 text-sm">Scale (CEI), Focused (growth-stage), Deep (strategic co-sell)</td>
                  <td className="p-3 text-sm">
                    <span className="flex items-center gap-2">
                      SDR+ISR <ArrowRight className="w-4 h-4" /> BDM <ArrowRight className="w-4 h-4" /> Senior/Overlay Teams
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      {/* Sales Role Structure */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Sales Role Structure</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-6 text-center">
              <PhoneCall className="w-10 h-10 mx-auto mb-3 text-blue-500" />
              <h3 className="font-semibold mb-2">SDRs</h3>
              <p className="text-sm text-muted-foreground">
                Lead warming, event execution, campaign support
              </p>
              <Badge variant="secondary" className="mt-2">Under Devika</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <UserCheck className="w-10 h-10 mx-auto mb-3 text-green-500" />
              <h3 className="font-semibold mb-2">ISRs</h3>
              <p className="text-sm text-muted-foreground">
                Early-stage, low-touch Scale segment customers
              </p>
              <Badge variant="secondary" className="mt-2">Future Hires</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-10 h-10 mx-auto mb-3 text-orange-500" />
              <h3 className="font-semibold mb-2">BDMs</h3>
              <p className="text-sm text-muted-foreground">
                Mid to high-touch Focused segment adoption
              </p>
              <Badge variant="secondary" className="mt-2">Core Team</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Sparkles className="w-10 h-10 mx-auto mb-3 text-purple-500" />
              <h3 className="font-semibold mb-2">Senior BDMs</h3>
              <p className="text-sm text-muted-foreground">
                Strategic Deep segment with pre-sales overlay
              </p>
              <Badge variant="secondary" className="mt-2">Strategic</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Territory Coverage */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Territory Coverage & Sales Pod Configuration</h2>
        <TerritoryMapVisualization />
      </div>
      
      {/* Closing Note */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-8 text-center">
          <blockquote className="text-lg italic">
            "This structure ensures we meet every customer where they are — from initial curiosity to strategic transformation. 
            Our alignment with AWS segments and maturity-based sales orchestration gives us the agility to scale Astra's growth with confidence."
          </blockquote>
        </CardContent>
      </Card>
    </div>
  )
}
