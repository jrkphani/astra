import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AWSStakeholderNetwork from '@/components/AWSStakeholderNetwork'
import MarketMotionMapping from '@/components/MarketMotionMapping'
import AWSFundingPrograms from '@/components/AWSFundingPrograms'
import { Building2, Users, TrendingUp, DollarSign, Globe, Target, Briefcase, Calendar } from 'lucide-react'

export default function ExecutionGovernancePage() {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
        <Badge variant="secondary" className="mb-4">AWS Partnership Excellence</Badge>
        <h1 className="text-3xl font-bold mb-4 sm:text-4xl md:text-5xl">
          AWS Alignment & Execution
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Strategic alignment across ASEAN and India, driving co-innovation and growth
        </p>
        
        {/* Key Stats Bar */}
        <div className="grid gap-4 md:grid-cols-4 mt-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">4</div>
              <p className="text-sm text-muted-foreground">Segments Covered</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Globe className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">6</div>
              <p className="text-sm text-muted-foreground">Countries Active</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">15+</div>
              <p className="text-sm text-muted-foreground">AWS Leaders Engaged</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">$100M+</div>
              <p className="text-sm text-muted-foreground">Deep Tech Quota Access</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Strategic Context Section */}
      <div className="grid gap-6 mb-12 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Strategic Overview</CardTitle>
            <CardDescription>Our comprehensive AWS partnership approach</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Our AWS alignment spans across all key segments with active interlocks throughout 
              ASEAN and India. We've built high trust relationships with AWS leadership in each 
              region, enabling seamless joint GTM execution and optimized funding alignment.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm">ASEAN alignment is strong with direct leadership support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                <span className="text-sm">India is steadily strengthening across commercial and public</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span className="text-sm">Deep tech alignment maturing with strategic partnerships</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Segment Coverage</CardTitle>
            <CardDescription>Active across all AWS segments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-sm">Focused</h4>
                  <p className="text-xs text-muted-foreground">Enterprise acceleration</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <Building2 className="w-6 h-6 text-green-600" />
                <div>
                  <h4 className="font-semibold text-sm">Scale</h4>
                  <p className="text-xs text-muted-foreground">Volume growth engine</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <Briefcase className="w-6 h-6 text-purple-600" />
                <div>
                  <h4 className="font-semibold text-sm">Startups</h4>
                  <p className="text-xs text-muted-foreground">Innovation catalyst</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                <Target className="w-6 h-6 text-orange-600" />
                <div>
                  <h4 className="font-semibold text-sm">Deep Tech</h4>
                  <p className="text-xs text-muted-foreground">Strategic transformation</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Main Content Tabs */}
      <Tabs defaultValue="stakeholders" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="stakeholders">Stakeholder Network</TabsTrigger>
          <TabsTrigger value="mapping">Market Motion</TabsTrigger>
          <TabsTrigger value="funding">Funding Programs</TabsTrigger>
          <TabsTrigger value="alignment">Regional Alignment</TabsTrigger>
        </TabsList>
        
        <TabsContent value="stakeholders" className="mt-6">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Key AWS Stakeholder Network</h2>
              <p className="text-muted-foreground">Our trusted AWS partners across regions and segments</p>
            </div>
            <AWSStakeholderNetwork />
          </div>
        </TabsContent>
        
        <TabsContent value="mapping" className="mt-6">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Market Motion Harmonization</h2>
              <p className="text-muted-foreground">
                How 1CloudHub stages align with AWS segmentation for optimized GTM
              </p>
            </div>
            <MarketMotionMapping />
          </div>
        </TabsContent>
        
        <TabsContent value="funding" className="mt-6">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">AWS Funding & Programs</h2>
              <p className="text-muted-foreground">Leverage AWS funding mechanisms to accelerate customer success</p>
            </div>
            <AWSFundingPrograms />
          </div>
        </TabsContent>
        
        <TabsContent value="alignment" className="mt-6">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Regional Alignment Dashboard</h2>
              <p className="text-muted-foreground">Country-specific alignment status and priorities</p>
            </div>
            
            {/* Regional Alignment Cards */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>ASEAN Overall</CardTitle>
                    <Badge className="bg-green-100 text-green-800">Strong Alignment</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-1">Key Stakeholders</p>
                      <p className="text-sm text-muted-foreground">Matthew Khaw (Focused), Abhishek Singh (Deep Tech), Rajas (Scale)</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Current Initiatives</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• GenAI acceleration with Deep Tech quota</li>
                        <li>• Scale segment volume plays</li>
                        <li>• MAP-funded transformations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>India</CardTitle>
                    <Badge className="bg-amber-100 text-amber-800">Strengthening</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-1">Key Stakeholders</p>
                      <p className="text-sm text-muted-foreground">Deepak & Arka (Scale), Ajay Nair (Public), Vimal (Deep Tech)</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Current Initiatives</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Public sector engagement expansion</li>
                        <li>• Commercial scale growth</li>
                        <li>• Deep tech pilot programs</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Singapore</CardTitle>
                    <Badge className="bg-green-100 text-green-800">Strong Alignment</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-1">Focus Areas</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Deep tech strategic accounts</li>
                        <li>• Startup ecosystem development</li>
                        <li>• Regional HQ partnerships</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Emerging Markets</CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">Building</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-1">Countries</p>
                      <p className="text-sm text-muted-foreground">Philippines, Malaysia, Indonesia, Vietnam</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Next Quarter Priorities</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Country manager relationships</li>
                        <li>• Local partner ecosystem</li>
                        <li>• Scale segment activation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Success Stories Section */}
      <div className="mt-12">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Success Stories</CardTitle>
            <CardDescription>Featured co-sell wins demonstrating our AWS partnership impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">12</div>
                <p className="text-sm font-medium">GenAI Implementations</p>
                <p className="text-xs text-muted-foreground mt-1">with Deep Tech funding</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">45+</div>
                <p className="text-sm font-medium">Scale Segment Wins</p>
                <p className="text-xs text-muted-foreground mt-1">volume plays executed</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">8</div>
                <p className="text-sm font-medium">MAP Transformations</p>
                <p className="text-xs text-muted-foreground mt-1">enterprise migrations</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">20+</div>
                <p className="text-sm font-medium">Startup Success</p>
                <p className="text-xs text-muted-foreground mt-1">early-stage wins</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Call to Action */}
      <Card className="mt-12 bg-primary text-primary-foreground">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Accelerate with AWS?</h2>
          <p className="mb-6 opacity-90">
            Connect with our AWS alliance team to explore co-sell opportunities and funding options
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule AWS Alignment Discussion
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              View Funding Guidelines
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
