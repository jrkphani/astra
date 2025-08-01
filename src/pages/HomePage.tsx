import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Users, Target, TrendingUp, Briefcase, MapPin, BarChart3 } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Badge variant="secondary" className="mb-4">
              1CloudHub Sales Excellence
            </Badge>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Transforming Sales Excellence Through Strategic Alignment
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Accelerate growth with our customer maturity-based sales model, perfectly synchronized with AWS GTM motions
              </p>
            </div>
            <div className="flex gap-4">
              <Link to="/sales-transformation">
                <Button size="lg">
                  Explore Sales Transformation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/spark-framework">
                <Button variant="outline" size="lg">
                  View SPARK Framework
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Metrics Section */}
      <section className="py-12 bg-muted/50 rounded-lg">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                <h3 className="text-3xl font-bold">6</h3>
                <p className="text-sm text-muted-foreground">Countries Covered</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
                <h3 className="text-3xl font-bold">3x</h3>
                <p className="text-sm text-muted-foreground">Pipeline Coverage</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
                <h3 className="text-3xl font-bold">5</h3>
                <p className="text-sm text-muted-foreground">Stage Journey</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Briefcase className="w-8 h-8 mx-auto mb-2 text-primary" />
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="text-sm text-muted-foreground">AWS Aligned</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Pillars Section */}
      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Strategic Framework
            </h2>
            <p className="mx-auto max-w-[700px] mt-4 text-gray-500 md:text-lg">
              Four interconnected pillars driving sales excellence and customer success
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Sales Transformation</CardTitle>
                <CardDescription>
                  Evolution from legacy to customer maturity-based model
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/sales-transformation">
                  <Button variant="ghost" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>SPARK Framework</CardTitle>
                <CardDescription>
                  5-stage customer journey aligned with AWS outcomes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/spark-framework">
                  <Button variant="ghost" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Briefcase className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Sales Interlocks</CardTitle>
                <CardDescription>
                  Cross-functional coordination and strategic alignment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/sales-interlocks">
                  <Button variant="ghost" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>KPI & Metrics</CardTitle>
                <CardDescription>
                  Data-driven performance tracking and insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/kpi-metrics">
                  <Button variant="ghost" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Sales Strategy?
            </h2>
            <p className="mx-auto max-w-[600px] mb-8 text-lg opacity-90">
              Discover how our integrated approach can accelerate your sales performance and customer outcomes
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/execution-governance">
                <Button size="lg" variant="secondary">
                  Explore AWS Alignment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
