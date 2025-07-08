
import { ArrowRight, CheckCircle, TrendingDown, Zap, Shield, Users, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Merchants = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">Yumi Finance</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#benefits" className="text-sm hover:text-primary transition-colors">Benefits</a>
              <a href="#pricing" className="text-sm hover:text-primary transition-colors">Pricing</a>
              <a href="#integration" className="text-sm hover:text-primary transition-colors">Integration</a>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book a Call
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Replace your BNPL with <span className="gradient-text">Yumi</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8 max-w-2xl mx-auto">
              Lower fees, accept crypto, instant settlements, and happy customers who earn while they spend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="mr-2 w-5 h-5" />
                Book a Call
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Integration Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Why merchants choose <span className="gradient-text">Yumi</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <TrendingDown className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">2x Lower Fees</h3>
                  <p className="text-secondary">Pay 2x less than VISA and 3x less than Klarna/Affirm. No middleman, no extra costs.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <Zap className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Instant Settlements</h3>
                  <p className="text-secondary">Get paid immediately, not in 1-3 days. Eliminate cash drag and improve cash flow.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Accept Crypto</h3>
                  <p className="text-secondary">Tap into the crypto market without complexity. We handle all the technical details.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <CheckCircle className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Higher Approval Rates</h3>
                  <p className="text-secondary">Our advanced underwriting with zkTLS provides better risk assessment.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Happy Customers</h3>
                  <p className="text-secondary">Customers love earning yield while they pay. Higher satisfaction, more loyalty.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Transparent & Secure</h3>
                  <p className="text-secondary">Fully on-chain, non-custodial solution. Complete transparency for you and your customers.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="pricing" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="gradient-text">Yumi</span> vs Traditional BNPL
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-red-400">Traditional BNPL</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">✗</span>
                      <span className="text-secondary">High merchant fees (3-8%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">✗</span>
                      <span className="text-secondary">Slow settlements (1-3 days)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">✗</span>
                      <span className="text-secondary">High transaction costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">✗</span>
                      <span className="text-secondary">Lack of transparency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">✗</span>
                      <span className="text-secondary">Fiat only</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-primary">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Yumi Finance</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>Low merchant fees (1-2%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>Instant settlements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>Minimal transaction costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>Full transparency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>Accept crypto & fiat</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integration" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Easy <span className="gradient-text">Integration</span>
            </h2>
            <p className="text-xl text-secondary mb-12">
              Get up and running with Yumi in minutes, not months
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Book a Call</h3>
                <p className="text-secondary">Schedule a consultation with our team</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Setup</h3>
                <p className="text-secondary">We handle the technical integration</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Go Live</h3>
                <p className="text-secondary">Start accepting payments immediately</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to <span className="gradient-text">transform</span> your payments?
            </h2>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
              Join forward-thinking merchants who are already benefiting from lower fees and happier customers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="mr-2 w-5 h-5" />
                Book a Call Now
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">Yumi Finance</span>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-secondary hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-secondary">
            <p>&copy; 2025 Yumi Finance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Merchants;
