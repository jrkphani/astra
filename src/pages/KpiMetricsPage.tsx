import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import TerritoryCoverageMatrix from '@/components/TerritoryCoverageMatrix'
import { Globe, TrendingUp, Target, Zap } from 'lucide-react'

export default function KpiMetricsPage() {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <Badge variant="secondary" className="mb-4">Territory Excellence</Badge>
        <h1 className="text-3xl font-bold mb-4 sm:text-4xl md:text-5xl">
          Territory Coverage & GTM Execution
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Comprehensive view of segment maturity and AWS co-sell rhythm across ASEAN and India
        </p>
      </div>
      
      {/* Key Highlights */}
      <div className="grid gap-4 mb-12 md:grid-cols-4">
        <Card>
          <CardContent className="p-6 text-center">
            <Globe className="w-8 h-8 mx-auto mb-2 text-primary" />
            <h3 className="text-2xl font-bold">7</h3>
            <p className="text-sm text-muted-foreground">Countries Covered</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
            <h3 className="text-2xl font-bold">4</h3>
            <p className="text-sm text-muted-foreground">Segments Active</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Zap className="w-8 h-8 mx-auto mb-2 text-primary" />
            <h3 className="text-2xl font-bold">GenAI</h3>
            <p className="text-sm text-muted-foreground">Spark Playbook</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
            <h3 className="text-2xl font-bold">Scale</h3>
            <p className="text-sm text-muted-foreground">Top Performer</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Territory Coverage Matrix */}
      <div className="mb-12">
        <TerritoryCoverageMatrix />
      </div>
      
      {/* Key Insights Section */}
      <div className="grid gap-6 mb-12 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>GTM Execution Highlights</CardTitle>
            <CardDescription>Key wins and momentum builders</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-sm">
                  <strong>GenAI Spark motion</strong> initiated with Samuel Harris in Singapore is now a 
                  replicable playbook being extended to Indonesia, Malaysia, and Thailand
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-sm">
                  <strong>Scale motion</strong> is well embedded in Singapore and Philippines, with 
                  promising growth in Malaysia and early adoption in other countries
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-sm">
                  <strong>Focused motion</strong> led by Matthew Khaw is driving targeted partnerships 
                  in Thailand, Indonesia, and Vietnam
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-sm">
                  <strong>Deep tech plays</strong> are still maturing, with Abhishek Singh as a key 
                  strategic partner across ASEAN
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Alignment Impact</CardTitle>
            <CardDescription>Strategic value delivered</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-sm mb-1">Country + Segment Execution</h4>
                <p className="text-sm text-muted-foreground">
                  Territory view aligns execution at the country + segment level for precise GTM
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-sm mb-1">AWS Co-Sell Rhythm</h4>
                <p className="text-sm text-muted-foreground">
                  Improves AWS co-sell rhythm with clear partner mapping and engagement models
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-sm mb-1">Market Maturity Visibility</h4>
                <p className="text-sm text-muted-foreground">
                  Creates visibility into market maturity across ASEAN and India for strategic planning
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Territory Notes */}
      <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle>Strategic Territory Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">Mature Markets</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Singapore leads with strong performance across all segments</li>
                <li>• Philippines excelling in Scale segment with high CEI velocity</li>
                <li>• Malaysia showing steady growth with digital focus</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Growth Opportunities</h4>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Indonesia scaling fast with local language support</li>
                <li>• Thailand needs Thai-speaking SDR for acceleration</li>
                <li>• India emerging with focused segment opportunities</li>
                <li>• Vietnam building foundation with strong partnerships</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
