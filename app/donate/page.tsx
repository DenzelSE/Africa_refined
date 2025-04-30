"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Copy, Mail, Phone } from "lucide-react"
import Link from "next/link"

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
                {`Your donation helps us continue our work in empowering communities across South Africa through our
                various initiatives:`}
              </p>

              <ul className="list-disc pl-6 text-lg space-y-4 mb-8">
                <li>
                  <strong>{`Luteal Liberty Project:`}</strong> Empowering young girls through reproductive and menstrual
                  health education.
                </li>
                <li>
                  <strong>{`Nelson Mandela Jersey Project:`}</strong> Providing warm clothing to disadvantaged communities
                  during winter months.
                </li>
                <li>
                  <strong>{`Moving Garden Project:`}</strong> Promoting sustainable agriculture and food security in local
                  communities.
                </li>
              </ul>

              <p className="text-lg mb-8">
                Every contribution, no matter how small, makes a significant impact in our efforts to refine health,
                sustainability, and empowerment across Africa.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-8">
                <h3 className="text-xl font-bold mb-4">How Your Donation Helps</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-amber-700 mr-2 mt-1 flex-shrink-0" />
                    <span>R100 provides menstrual products for a girl for 3 months</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-amber-700 mr-2 mt-1 flex-shrink-0" />
                    <span>R250 provides a warm jersey for a child during winter</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-amber-700 mr-2 mt-1 flex-shrink-0" />
                    <span>R500 helps establish a small community garden</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-amber-700 mr-2 mt-1 flex-shrink-0" />
                    <span>R1000 sponsors a health education workshop for 20 students</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="shadow-lg border-amber-200">
                <CardHeader className="bg-amber-50">
                  <CardTitle className="text-2xl">Banking Details</CardTitle>
                  <CardDescription>Make a direct deposit or electronic transfer</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Account Information</h3>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="font-medium">{`Account Name:`}</div>
                        <div className="col-span-2">MS NONHLANHLA NKOSI</div>

                        <div className="font-medium">{`Bank:`}</div>
                        <div className="col-span-2">Capitec Bank </div>

                        <div className="font-medium">{`Account Number:`}</div>
                        <div className="col-span-2 flex items-center">
                        1558011003
                          <button
                            className="ml-2 text-amber-700 hover:text-amber-900"
                            onClick={() => {
                              navigator.clipboard.writeText("62123456789")
                              alert("Account number copied to clipboard!")
                            }}
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="font-medium">Branch Code:</div>
                        <div className="col-span-2">470010</div>

                        <div className="font-medium">{`Reference:`}</div>
                        <div className="col-span-2">{`Your Name + "Donation"`}</div>

                        {/* <div className="font-medium">{`Swift Code:`}</div>
                        <div className="col-span-2">FIRNZAJJ (for international transfers)</div> */}
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <h3 className="font-semibold text-lg mb-3">Contact Information</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-amber-700 mr-2" />
                          <span>donations@africarefined.org</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-amber-700 mr-2" />
                          <span>+27 64 618 6783</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <h3 className="font-semibold text-lg mb-3">Tax Benefits</h3>
                      <p className="text-sm text-gray-600">
                        {`Africa Refined is a registered non-profit organization. All donations are tax-deductible. Please
                        email us for a tax certificate after making your donation.`}
                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <h3 className="font-semibold text-lg mb-3">Other Ways to Help</h3>
                      <div className="flex flex-col space-y-3">
                        <Button asChild variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
                          <Link href="/volunteer">Volunteer Your Time</Link>
                        </Button>
                        <Button asChild variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
                          <Link href="/shop">Support Our Shop</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold mb-3">Need Assistance?</h3>
                <p className="mb-4">
                  {`If you have any questions about making a donation or would like to discuss other ways to support our
                  work, please don't hesitate to contact us.`}
                </p>
                <Button asChild className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
