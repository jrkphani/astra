import { Link } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'
import { Users, Target, Briefcase, BarChart3, Home } from 'lucide-react'

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">1CloudHub</span>
            <span className="text-sm text-muted-foreground">Sales Excellence</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Home className="w-4 h-4 mr-2" />
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Users className="w-4 h-4 mr-2" />
                  Sales Model
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          to="/sales-transformation"
                        >
                          <Users className="h-6 w-6 mb-2" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Sales Transformation
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Journey from legacy to customer maturity-based model
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/sales-transformation#evolution" title="Model Evolution">
                      From product-centric to customer-outcome focused approach
                    </ListItem>
                    <ListItem href="/sales-transformation#alignment" title="AWS Alignment">
                      Synchronized with AWS GTM motions and partner programs
                    </ListItem>
                    <ListItem href="/sales-transformation#territories" title="Territory Coverage">
                      Strategic presence across 6 countries in APJ
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Target className="w-4 h-4 mr-2" />
                  SPARK Framework
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/spark-framework" title="SPARK Overview">
                      5-stage customer journey from evaluation to optimization
                    </ListItem>
                    <ListItem href="/spark-framework#spark" title="1. Spark">
                      Initial evaluation and proof of concept phase
                    </ListItem>
                    <ListItem href="/spark-framework#kindle" title="2. Kindle">
                      Production implementation and early adoption
                    </ListItem>
                    <ListItem href="/spark-framework#flare" title="3. Flare">
                      Multiple workload expansion and scaling
                    </ListItem>
                    <ListItem href="/spark-framework#ignite" title="4. Ignite">
                      Mission-critical deployment and transformation
                    </ListItem>
                    <ListItem href="/spark-framework#blaze" title="5. Blaze">
                      Full optimization and strategic partnership
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Briefcase className="w-4 h-4 mr-2" />
                  Operations
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          to="/sales-interlocks"
                        >
                          <Briefcase className="h-6 w-6 mb-2" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Sales Interlocks
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Cross-functional coordination for sales excellence
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/sales-interlocks#technical" title="Technical Alignment">
                      SA and engineering team collaboration
                    </ListItem>
                    <ListItem href="/sales-interlocks#partner" title="Partner Integration">
                      ISV and channel partner coordination
                    </ListItem>
                    <ListItem href="/execution-governance" title="AWS Alignment">
                      Strategic partnership and execution framework
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Metrics & KPIs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                    <ListItem href="/kpi-metrics" title="Territory Coverage">
                      Comprehensive view of segment maturity across ASEAN and India
                    </ListItem>
                    <ListItem href="/sales-kpis" title="Sales KPIs">
                      Performance metrics, health indicators, and confidence tracking
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  )
}
