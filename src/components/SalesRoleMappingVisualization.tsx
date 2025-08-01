import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Users, UserCheck, Phone, Sparkles, ChevronDown } from 'lucide-react'

export default function SalesRoleMappingVisualization() {
  return (
    <div className="w-full space-y-8">
      {/* Sales Role Flow Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sales Role Mapping by Customer Maturity</CardTitle>
          <CardDescription>
            How different sales roles align with customer segments and maturity levels
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Maturity Levels */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              {/* Low Maturity */}
              <div className="relative">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2 text-blue-900">Low Maturity</h3>
                  <Badge variant="secondary" className="mb-4">Scale Segment</Badge>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-sm">Top of Funnel activities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-sm">Early cloud exploration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-sm">Low-touch engagement</span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-8 h-8 text-gray-400 z-10" />
              </div>
              
              {/* Medium Maturity */}
              <div className="relative">
                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2 text-yellow-900">Medium Maturity</h3>
                  <Badge variant="secondary" className="mb-4">Focused Segment</Badge>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full" />
                      <span className="text-sm">Active evaluation & adoption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full" />
                      <span className="text-sm">Multiple workloads</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full" />
                      <span className="text-sm">Mid-touch engagement</span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-8 h-8 text-gray-400 z-10" />
              </div>
              
              {/* High Maturity */}
              <div className="relative">
                <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2 text-red-900">High Maturity</h3>
                  <Badge variant="secondary" className="mb-4">Deep Segment</Badge>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full" />
                      <span className="text-sm">Strategic transformation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full" />
                      <span className="text-sm">Enterprise-wide adoption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full" />
                      <span className="text-sm">High-touch engagement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Role Mapping Arrows */}
            <div className="grid grid-cols-3 gap-8">
              {/* ISR Column */}
              <div className="text-center">
                <ChevronDown className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                <Card className="border-2 border-dashed border-gray-300">
                  <CardContent className="p-4">
                    <UserCheck className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <h4 className="font-semibold">Inside Sales Reps (ISRs)</h4>
                    <Badge variant="outline" className="mt-2 text-xs">Future Hires</Badge>
                    <p className="text-xs text-muted-foreground mt-2">
                      Handle early-stage, low-touch Scale customers
                    </p>
                  </CardContent>
                </Card>
                <div className="mt-4">
                  <ChevronDown className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                  <Card className="bg-yellow-50 border-yellow-200">
                    <CardContent className="p-4">
                      <Phone className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                      <h4 className="font-semibold text-sm">SDRs (under Devika)</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Events + Campaigns support
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* BDM Column */}
              <div className="text-center">
                <ChevronDown className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                <Card className="border-2 border-yellow-400 bg-yellow-50">
                  <CardContent className="p-4">
                    <Users className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                    <h4 className="font-semibold">Business Development Managers</h4>
                    <Badge variant="secondary" className="mt-2 text-xs">Core Team</Badge>
                    <p className="text-xs text-muted-foreground mt-2">
                      Drive mid to high-touch adoption and monetization
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Senior BDM Column */}
              <div className="text-center">
                <ChevronDown className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                <Card className="border-2 border-red-400 bg-red-50">
                  <CardContent className="p-4">
                    <Sparkles className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <h4 className="font-semibold">Senior BDs + Pre-sales</h4>
                    <Badge variant="secondary" className="mt-2 text-xs">Strategic</Badge>
                    <p className="text-xs text-muted-foreground mt-2">
                      Lead strategic Deep segment accounts
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Role Responsibilities Matrix */}
      <Card>
        <CardHeader>
          <CardTitle>Sales Role Responsibilities</CardTitle>
          <CardDescription>Key activities and focus areas by role</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Role</th>
                  <th className="text-left p-3 font-semibold">Primary Focus</th>
                  <th className="text-left p-3 font-semibold">Key Activities</th>
                  <th className="text-center p-3 font-semibold">Customer Touch</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">SDRs</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm">Lead generation & qualification</td>
                  <td className="p-3 text-sm">
                    <ul className="space-y-1">
                      <li>• Event execution</li>
                      <li>• Campaign support</li>
                      <li>• Lead warming</li>
                    </ul>
                  </td>
                  <td className="p-3 text-center">
                    <Badge variant="outline">Initial</Badge>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-green-600" />
                      <span className="font-medium">ISRs</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm">Scale segment coverage</td>
                  <td className="p-3 text-sm">
                    <ul className="space-y-1">
                      <li>• Early-stage engagement</li>
                      <li>• Low-touch sales</li>
                      <li>• Volume transactions</li>
                    </ul>
                  </td>
                  <td className="p-3 text-center">
                    <Badge variant="secondary">Low</Badge>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-orange-600" />
                      <span className="font-medium">BDMs</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm">Focused segment growth</td>
                  <td className="p-3 text-sm">
                    <ul className="space-y-1">
                      <li>• Solution selling</li>
                      <li>• POC management</li>
                      <li>• Account expansion</li>
                    </ul>
                  </td>
                  <td className="p-3 text-center">
                    <Badge>Medium</Badge>
                  </td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      <span className="font-medium">Senior BDs</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm">Strategic accounts</td>
                  <td className="p-3 text-sm">
                    <ul className="space-y-1">
                      <li>• Enterprise deals</li>
                      <li>• Strategic partnerships</li>
                      <li>• Transformation programs</li>
                    </ul>
                  </td>
                  <td className="p-3 text-center">
                    <Badge variant="destructive">High</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}