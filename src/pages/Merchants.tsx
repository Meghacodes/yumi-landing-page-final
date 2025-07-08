
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
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/30">
                  <span className="text-xl font-bold text-primary-foreground tracking-tight">Y</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold gradient-text tracking-tight">Yumi</span>
                <span className="text-xs text-secondary -mt-1 font-medium">Finance</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors duration-200">Benefits</a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors duration-200">Pricing</a>
              <a href="#integration" className="text-sm font-medium hover:text-primary transition-colors duration-200">Integration</a>
              <Button size="sm" className="button-primary text-primary-foreground font-semibold">
                Book a Call
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 gradient-bg relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-hero mb-6 leading-tight">
              Replace your BNPL with <span className="gradient-text">Yumi</span>
            </h1>
            <p className="text-body-large text-secondary mb-12 max-w-2xl mx-auto">
              Lower fees, accept crypto, instant settlements, and happy customers who earn while they spend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="button-primary text-primary-foreground font-semibold text-base px-8 py-3">
                <Phone className="mr-2 w-5 h-5" />
                Book a Call
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base px-8 py-3 transition-all duration-200">
                View Integration Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-display text-center mb-16">
              Why merchants choose <span className="gradient-text">Yumi</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="glass-effect card-hover">
                <CardContent className="p-8">
                  <TrendingDown className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4">2x Lower Fees</h3>
                  <p className="text-secondary text-body">Pay 2x less than VISA and 3x less than Klarna/Affirm. No middleman, no extra costs.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect card-hover">
                <CardContent className="p-8">
                  <Zap className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Instant Settlements</h3>
                  <p className="text-secondary text-body">Get paid immediately, not in 1-3 days. Eliminate cash drag and improve cash flow.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect card-hover">
                <CardContent className="p-8">
                  <Shield className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Accept Crypto</h3>
                  <p className="text-secondary text-body">Tap into the crypto market without complexity. We handle all the technical details.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect card-hover">
                <CardContent className="p-8">
                  <CheckCircle className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Higher Approval Rates</h3>
                  <p className="text-secondary text-body">Our advanced underwriting with zkTLS provides better risk assessment.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect card-hover">
                <CardContent className="p-8">
                  <Users className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Happy Customers</h3>
                  <p className="text-secondary text-body">Customers love earning yield while they pay. Higher satisfaction, more loyalty.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect card-hover">
                <CardContent className="p-8">
                  <Shield className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Transparent & Secure</h3>
                  <p className="text-secondary text-body">Fully on-chain, non-custodial solution. Complete transparency for you and your customers.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="pricing" className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display text-center mb-16">
              <span className="gradient-text">Yumi</span> vs Traditional BNPL
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-effect">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-8 text-red-400">Traditional BNPL</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-xl">✗</span>
                      <span className="text-secondary text-body">High merchant fees (3-8%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-xl">✗</span>
                      <span className="text-secondary text-body">Slow settlements (1-3 days)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-xl">✗</span>
                      <span className="text-secondary text-body">High transaction costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-xl">✗</span>
                      <span className="text-secondary text-body">Lack of transparency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-xl">✗</span>
                      <span className="text-secondary text-body">Fiat only</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-primary card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-8 text-primary">Yumi Finance</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-4 text-xl">✓</span>
                      <span className="text-body font-medium">Low merchant fees (1-2%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-4 text-xl">✓</span>
                      <span className="text-body font-medium">Instant settlements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-4 text-xl">✓</span>
                      <span className="text-body font-medium">Minimal transaction costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-4 text-xl">✓</span>
                      <span className="text-body font-medium">Full transparency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-4 text-xl">✓</span>
                      <span className="text-body font-medium">Accept crypto & fiat</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integration" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display mb-8">
              Easy <span className="gradient-text">Integration</span>
            </h2>
            <p className="text-body-large text-secondary mb-16">
              Get up and running with Yumi in minutes, not months
            </p>
            
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25">
                  <span className="text-primary-foreground font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Book a Call</h3>
                <p className="text-secondary text-body">Schedule a consultation with our team</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25">
                  <span className="text-primary-foreground font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quick Setup</h3>
                <p className="text-secondary text-body">We handle the technical integration</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25">
                  <span className="text-primary-foreground font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Go Live</h3>
                <p className="text-secondary text-body">Start accepting payments immediately</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display mb-6">
              Ready to <span className="gradient-text">transform</span> your payments?
            </h2>
            <p className="text-body-large text-secondary mb-12 max-w-2xl mx-auto">
              Join forward-thinking merchants who are already benefiting from lower fees and happier customers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="button-primary text-primary-foreground font-semibold text-base px-8 py-3">
                <Phone className="mr-2 w-5 h-5" />
                Book a Call Now
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base px-8 py-3 transition-all duration-200">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/30">
                  <span className="text-xl font-bold text-primary-foreground tracking-tight">Y</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold gradient-text tracking-tight">Yumi</span>
                <span className="text-xs text-secondary -mt-1 font-medium">Finance</span>
              </div>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-secondary hover:text-primary transition-colors duration-200 text-body font-medium">Privacy</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors duration-200 text-body font-medium">Terms</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors duration-200 text-body font-medium">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-secondary">
            <p className="text-caption">&copy; 2025 Yumi Finance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Merchants;
