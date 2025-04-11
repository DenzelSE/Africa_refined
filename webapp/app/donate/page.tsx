import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function DonatePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-amber-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">DONATE TODAY</h1>
          <p className="text-xl max-w-3xl mx-auto">Help us refine Africa, one initiative at a time.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Make a Difference</h2>
              <p className="text-lg mb-6">
                Your donation helps us continue our work in empowering communities across South Africa through our
                various initiatives:
              </p>

              <ul className="list-disc pl-6 text-lg space-y-4 mb-8">
                <li>
                  <strong>Luteal Liberty Project:</strong> Empowering young girls through reproductive and menstrual
                  health education.
                </li>
                <li>
                  <strong>Nelson Mandela Jersey Project:</strong> Providing warm clothing to disadvantaged communities
                  during winter months.
                </li>
                <li>
                  <strong>Moving Garden Project:</strong> Promoting sustainable agriculture and food security in local
                  communities.
                </li>
              </ul>

              <p className="text-lg">
                Every contribution, no matter how small, makes a significant impact in our efforts to refine health,
                sustainability, and empowerment across Africa.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Donation Form</CardTitle>
                <CardDescription>Choose an amount or enter a custom donation.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <Label>Select an amount</Label>
                    <RadioGroup defaultValue="100">
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <RadioGroupItem value="100" id="r100" className="peer sr-only" />
                          <Label
                            htmlFor="r100"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-amber-700 [&:has([data-state=checked])]:border-amber-700"
                          >
                            R100
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="250" id="r250" className="peer sr-only" />
                          <Label
                            htmlFor="r250"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-amber-700 [&:has([data-state=checked])]:border-amber-700"
                          >
                            R250
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="500" id="r500" className="peer sr-only" />
                          <Label
                            htmlFor="r500"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-amber-700 [&:has([data-state=checked])]:border-amber-700"
                          >
                            R500
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="1000" id="r1000" className="peer sr-only" />
                          <Label
                            htmlFor="r1000"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-amber-700 [&:has([data-state=checked])]:border-amber-700"
                          >
                            R1000
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="2500" id="r2500" className="peer sr-only" />
                          <Label
                            htmlFor="r2500"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-amber-700 [&:has([data-state=checked])]:border-amber-700"
                          >
                            R2500
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="custom" id="custom" className="peer sr-only" />
                          <Label
                            htmlFor="custom"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-amber-700 [&:has([data-state=checked])]:border-amber-700"
                          >
                            Custom
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custom-amount">Custom Amount (ZAR)</Label>
                    <Input id="custom-amount" type="number" placeholder="Enter amount" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project">Allocate to Project (Optional)</Label>
                    <select
                      id="project"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">General Fund</option>
                      <option value="luteal-liberty">Luteal Liberty Project</option>
                      <option value="nelson-mandela-jersey">Nelson Mandela Jersey Project</option>
                      <option value="moving-garden">Moving Garden Project</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-700 hover:bg-amber-800">Proceed to Payment</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
