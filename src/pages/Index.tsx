
import { ArrowRight, CheckCircle, Sparkles, Shield, Zap, Users, TrendingUp, Calendar, Star, Briefcase, Code, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary via-primary/80 to-primary/60 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="text-xl font-bold text-primary-foreground tracking-tight">Y</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-text tracking-tight">Yumi</span>
                <span className="text-xs text-secondary -mt-1">Finance</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-sm hover:text-primary transition-colors">How it works</a>
              <a href="#benefits" className="text-sm hover:text-primary transition-colors">Benefits</a>
              <a href="#team" className="text-sm hover:text-primary transition-colors">Team</a>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                For Merchants
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
              <span className="gradient-text">Yumi</span> - on-chain<br />
              BNPL that pays you back
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8 max-w-2xl mx-auto">
              Buy Now, Pay Later + Pay with Yield. The future of smart payments that rewards you for spending.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Buy Now, Pay Later (BNPL) products are
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
              still using traditional payment rails
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Phantom Debt</h4>
                  <p className="text-secondary">Hidden costs and unclear terms</p>
                </CardContent>
              </Card>
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Lack of Transparency</h4>
                  <p className="text-secondary">Users don't understand true costs</p>
                </CardContent>
              </Card>
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">High Transaction Costs</h4>
                  <p className="text-secondary">Expensive processing fees</p>
                </CardContent>
              </Card>
              <Card className="glass-effect md:col-span-2 lg:col-span-3">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">High merchant fees & low profit margins at the same time</h4>
                  <p className="text-secondary">Slow settlement times of 1-3 days, creating "cash drag"</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">How it works</h2>
            <p className="text-xl text-primary text-center mb-16">1000$ purchase example</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Select Yumi at checkout</h3>
                <p className="text-secondary">Choose Yumi as your payment method</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Soft credit check</h3>
                <p className="text-secondary">Quick approval process</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Pay with installments & yield</h3>
                <p className="text-secondary">Earn while you pay</p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Card className="glass-effect max-w-md mx-auto">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-primary">Pay 250$ upfront</h4>
                  <p className="text-sm text-secondary mb-4">Every 2 weeks</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Due today</span>
                      <span>$250.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>In 2 weeks</span>
                      <span>$250.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>In 4 weeks</span>
                      <span>$250.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary">In 6 weeks</span>
                      <span className="text-primary">$250.00 - yield offset</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Why we win</h2>
            <p className="text-xl text-center text-secondary mb-16 max-w-4xl mx-auto">
              Yumi is a fully on-chain "Buy Now, Pay Later" solution for the next generation of money, 
              that lets you never pay full price thanks to DeFi yield
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-effect">
                <CardContent className="p-6 text-center">
                  <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">2x less fees than VISA</h3>
                  <p className="text-secondary">and 3x than Klarna/Affirm. Bypassing all the middleman.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Non-custodial, secure, transparent</h3>
                  <p className="text-secondary">unparalleled capital efficiency and blazing fast settlement</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect">
                <CardContent className="p-6 text-center">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">The most robust underwriting</h3>
                  <p className="text-secondary">in the industry, thanks to novel datasources with zkTLS</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Team</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border border-primary/20">
                      <Briefcase className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Mikhail</h3>
                  <p className="text-primary mb-2 font-medium">Co-Founder & CEO</p>
                  <p className="text-sm text-secondary">ex. founder @ miki.digital, ex. Ooga Booga, AirCanada</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border border-primary/20">
                      <Code className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Zap className="w-3 h-3 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Vlad</h3>
                  <p className="text-primary mb-2 font-medium">Co-Founder & CTO</p>
                  <p className="text-sm text-secondary">5+ year of experience building complex DeFi on EVM & TON.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border border-primary/20">
                      <Target className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Alex</h3>
                  <p className="text-primary mb-2 font-medium">Strategic Advisor</p>
                  <p className="text-sm text-secondary">Co-Founder @ EVAA Protocol</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border border-primary/20">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <TrendingUp className="w-3 h-3 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Kevin</h3>
                  <p className="text-primary mb-2 font-medium">Strategic Advisor</p>
                  <p className="text-sm text-secondary">Co-Founder @ Ooga Booga</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Roadmap</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Q2 2025</h3>
                  <p className="text-secondary">
                    Getting pre-signups for the buy now, pay later product & partnerships with 
                    crypto cards. Onboarding initial merchants. Securing TVL commits
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Q3 2025</h3>
                  <p className="text-secondary">
                    Releasing "Buy Now, Pay Later + Pay with Yield". Moving agile in small 
                    iterations, onboarding merchants in batches.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Q4 2025</h3>
                  <p className="text-secondary">
                    Implementing custom underwriting and risk-management; switch from 
                    Plaid to a zk solution.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to <span className="gradient-text">never pay full price</span> again?
            </h2>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
              Join the future of payments where your money works for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary via-primary/80 to-primary/60 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="text-xl font-bold text-primary-foreground tracking-tight">Y</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-text tracking-tight">Yumi</span>
                <span className="text-xs text-secondary -mt-1">Finance</span>
              </div>
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

export default Index;
