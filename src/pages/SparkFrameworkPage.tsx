import SparkJourneyVisualization from '@/components/SparkJourneyVisualization'
import CustomerJourneyVisualization from '@/components/CustomerJourneyVisualization'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function SparkFrameworkPage() {
  return (
    <div className="container py-8">
      <div className="mb-12 text-center">
        <Badge variant="secondary" className="mb-4">Customer Journey Framework</Badge>
        <h1 className="text-3xl font-bold mb-4 sm:text-4xl md:text-5xl">
          Customer Journey & SPARK Framework
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          From initial awareness to strategic transformation - a comprehensive journey 
          aligned with AWS best practices and customer maturity stages
        </p>
      </div>
      
      <Tabs defaultValue="journey" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="journey">Customer Journey</TabsTrigger>
          <TabsTrigger value="spark">SPARK Framework</TabsTrigger>
        </TabsList>
        <TabsContent value="journey" className="mt-6">
          <CustomerJourneyVisualization />
        </TabsContent>
        <TabsContent value="spark" className="mt-6">
          <SparkJourneyVisualization />
        </TabsContent>
      </Tabs>
    </div>
  )
}
