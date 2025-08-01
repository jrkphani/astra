import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import KPIDashboard from '@/components/KPIDashboard'
import { BarChart3, TrendingUp, AlertCircle, Target } from 'lucide-react'

export default function SalesKPIsPage() {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <Badge variant="secondary" className="mb-4">Performance Excellence</Badge>
        <h1 className="text-3xl font-bold mb-4 sm:text-4xl md:text-5xl">
          Sales KPIs — Visibility, Health, and Confidence
        </h1>
        <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl">
          We're not asking for a performance report. We want to understand how Sales defines success, 
          tracks health, and knows when to course-correct.
        </p>
      </div>
      
      {/* Why This Matters */}
      <Card className="mb-12 bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl">Why This Matters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <BarChart3 className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-sm">Define Success</h4>
                <p className="text-sm text-muted-foreground">
                  Clear metrics that align with business objectives
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-sm">Track Health</h4>
                <p className="text-sm text-muted-foreground">
                  Real-time visibility into pipeline and performance
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-sm">Course Correct</h4>
                <p className="text-sm text-muted-foreground">
                  Early warning signals for proactive intervention
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* KPI Dashboard */}
      <KPIDashboard />
      
      {/* Final Note */}
      <Card className="mt-12 bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="text-2xl">From Visibility to Velocity</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 opacity-90">
            Our KPI dashboard must evolve beyond review — it must become a <strong>diagnostic and action trigger</strong>.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 bg-white/10 rounded-lg">
              <Target className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-semibold">PipelinePulse</h4>
              <p className="text-sm opacity-80">Real-time pipeline visibility</p>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg">
              <BarChart3 className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-semibold">Shared OKRs</h4>
              <p className="text-sm opacity-80">Aligned objectives</p>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-semibold">Focused Enablement</h4>
              <p className="text-sm opacity-80">Targeted improvements</p>
            </div>
          </div>
          <p className="mt-4 text-center text-lg italic opacity-90">
            Moving from <strong>visibility to velocity</strong> — and from <strong>activity to impact</strong>.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}