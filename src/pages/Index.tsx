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
              <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors duration-200">How it works</a>
              <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors duration-200">Benefits</a>
              <a href="#team" className="text-sm font-medium hover:text-primary transition-colors duration-200">Team</a>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium transition-all duration-200">
                For Merchants
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 gradient-bg relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="hero-glow rounded-3xl p-8 mb-8">
              <h1 className="text-hero mb-6 leading-tight">
                <span className="gradient-text">Yumi</span> - on-chain<br />
                BNPL that pays you back
              </h1>
            </div>
            <p className="text-body-large text-secondary mb-12 max-w-2xl mx-auto">
              Buy Now, Pay Later + Pay with Yield. The future of smart payments that rewards you for spending.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="button-primary text-primary-foreground font-semibold text-base px-8 py-3">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base px-8 py-3 transition-all duration-200">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-display text-center mb-4">
              Buy Now, Pay Later (BNPL) products are
            </h2>
            <h3 className="text-title text-center mb-16 gradient-text">
              still using traditional payment rails
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="glass-effect card-hover">
                <CardContent className="p-8">
                  <h4 className="text-lg font-semibold mb-3">Phantom Debt</h4>
                  <p className="text-secondary text-body">Hidden costs and unclear terms</p>
                </CardContent>
              </Card>
              <Card className="glass-effect card-hover">
                <CardContent className="p-8">
                  <h4 className="text-lg font-semibold mb-3">Lack of Transparency</h4>
                  <p className="text-secondary text-body">Users don't understand true costs</p>
                </CardContent>
              </Card>
              <Card className="glass-effect card-hover">
                <CardContent className="p-8">
                  <h4 className="text-lg font-semibold mb-3">High Transaction Costs</h4>
                  <p className="text-secondary text-body">Expensive processing fees</p>
                </CardContent>
              </Card>
              <Card className="glass-effect card-hover md:col-span-2 lg:col-span-3">
                <CardContent className="p-8">
                  <h4 className="text-lg font-semibold mb-3">High merchant fees & low profit margins at the same time</h4>
                  <p className="text-secondary text-body">Slow settlement times of 1-3 days, creating "cash drag"</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-display text-center mb-4">How it works</h2>
            <p className="text-xl text-primary text-center mb-16 font-medium">$1000 purchase example</p>
            
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25">
                  <span className="text-primary-foreground font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Select Yumi at checkout</h3>
                <p className="text-secondary text-body">Choose Yumi as your payment method</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25">
                  <span className="text-primary-foreground font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Soft credit check</h3>
                <p className="text-secondary text-body">Quick approval process</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25">
                  <span className="text-primary-foreground font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Pay with installments & yield</h3>
                <p className="text-secondary text-body">Earn while you pay</p>
              </div>
            </div>
            
            <div className="text-center">
              <Card className="glass-effect max-w-lg mx-auto">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-3 text-primary">Pay $250 upfront</h4>
                  <p className="text-caption text-secondary mb-6 font-medium">Every 2 weeks</p>
                  <div className="space-y-4 text-body">
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="font-medium">Due today</span>
                      <span className="font-semibold">$250.00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="font-medium">In 2 weeks</span>
                      <span className="font-semibold">$250.00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="font-medium">In 4 weeks</span>
                      <span className="font-semibold">$250.00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-primary font-medium">In 6 weeks</span>
                      <span className="text-primary font-semibold">$250.00 - yield offset</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-display text-center mb-4 gradient-text">Why we win</h2>
            <p className="text-body-large text-center text-secondary mb-16 max-w-4xl mx-auto">
              Yumi is a fully on-chain "Buy Now, Pay Later" solution for the next generation of money, 
              that lets you never pay full price thanks to DeFi yield
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-effect card-hover">
                <CardContent className="p-8 text-center">
                  <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold mb-4">2x less fees than VISA</h3>
                  <p className="text-secondary text-body">and 3x than Klarna/Affirm. Bypassing all the middleman.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect card-hover">
                <CardContent className="p-8 text-center">
                  <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Non-custodial, secure, transparent</h3>
                  <p className="text-secondary text-body">unparalleled capital efficiency and blazing fast settlement</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect card-hover">
                <CardContent className="p-8 text-center">
                  <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold mb-4">The most robust underwriting</h3>
                  <p className="text-secondary text-body">in the industry, thanks to novel datasources with zkTLS</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-display text-center mb-16 gradient-text">Team</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="glass-effect hover:scale-105 transition-transform duration-300 card-hover">
                <CardContent className="p-8 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/20">
                      <Briefcase className="w-12 h-12 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Mikhail</h3>
                  <p className="text-primary mb-2 font-medium">Co-Founder & CEO</p>
                  <p className="text-caption text-secondary">ex. founder @ miki.digital, ex. Ooga Booga, AirCanada</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect hover:scale-105 transition-transform duration-300 card-hover">
                <CardContent className="p-8 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/20">
                      <Code className="w-12 h-12 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Zap className="w-3 h-3 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Vlad</h3>
                  <p className="text-primary mb-2 font-medium">Co-Founder & CTO</p>
                  <p className="text-caption text-secondary">5+ year of experience building complex DeFi on EVM & TON.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect hover:scale-105 transition-transform duration-300 card-hover">
                <CardContent className="p-8 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/20">
                      <Target className="w-12 h-12 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Alex</h3>
                  <p className="text-primary mb-2 font-medium">Strategic Advisor</p>
                  <p className="text-caption text-secondary">Co-Founder @ EVAA Protocol</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect hover:scale-105 transition-transform duration-300 card-hover">
                <CardContent className="p-8 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/20">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <TrendingUp className="w-3 h-3 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Kevin</h3>
                  <p className="text-primary mb-2 font-medium">Strategic Advisor</p>
                  <p className="text-caption text-secondary">Co-Founder @ Ooga Booga</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-display text-center mb-16 gradient-text">Roadmap</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-effect card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Q2 2025</h3>
                  <p className="text-secondary text-body">
                    Getting pre-signups for the buy now, pay later product & partnerships with 
                    crypto cards. Onboarding initial merchants. Securing TVL commits
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Q3 2025</h3>
                  <p className="text-secondary text-body">
                    Releasing "Buy Now, Pay Later + Pay with Yield". Moving agile in small 
                    iterations, onboarding merchants in batches.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Q4 2025</h3>
                  <p className="text-secondary text-body">
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
      <section className="py-24 gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display mb-6">
              Ready to <span className="gradient-text">never pay full price</span> again?
            </h2>
            <p className="text-body-large text-secondary mb-12 max-w-2xl mx-auto">
              Join the future of payments where your money works for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="button-primary text-primary-foreground font-semibold text-base px-8 py-3">
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base px-8 py-3 transition-all duration-200">
                Book a Demo
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

export default Index;
