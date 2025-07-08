import { ArrowRight, CheckCircle, Shield, Zap, Users, TrendingUp, Phone, Calendar, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SpiralDesign } from "@/components/SpiralDesign";
import { FloatingShapes } from "@/components/FloatingShapes";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
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
              <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors duration-200">How it Works</a>
              <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors duration-200">Benefits</a>
              <a href="#team" className="text-sm font-medium hover:text-primary transition-colors duration-200">Team</a>
              <Link to="/merchants" className="text-sm font-medium hover:text-primary transition-colors duration-200 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                For Merchants
              </Link>
              <Button size="sm" className="button-primary text-primary-foreground font-semibold">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 gradient-bg relative overflow-hidden">
        <FloatingShapes />
        <div className="absolute top-20 right-10 opacity-30">
          <SpiralDesign className="w-96 h-96" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-hero mb-6 leading-tight">
              The future of <span className="gradient-text">payments</span> is here
            </h1>
            <p className="text-body-large text-secondary mb-12 max-w-2xl mx-auto">
              Pay later, earn yield while you do it. Yumi combines BNPL with DeFi to give you the best of both worlds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="button-primary text-primary-foreground font-semibold text-base px-8 py-3">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base px-8 py-3 transition-all duration-200">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-card/30 relative">
        <div className="absolute top-32 left-10 opacity-20">
          <SpiralDesign className="w-64 h-64" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-display text-center mb-16">
              How <span className="gradient-text">Yumi</span> works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25 group-hover:scale-105 transition-transform duration-200">
                  <span className="text-primary-foreground font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Shop & Split</h3>
                <p className="text-secondary text-body">Make purchases and split payments into manageable installments</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25 group-hover:scale-105 transition-transform duration-200">
                  <span className="text-primary-foreground font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Earn Yield</h3>
                <p className="text-secondary text-body">Your payment balance earns yield through secure DeFi protocols</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25 group-hover:scale-105 transition-transform duration-200">
                  <span className="text-primary-foreground font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Pay Less</h3>
                <p className="text-secondary text-body">Yield earned reduces your total payment amount automatically</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 relative">
        <FloatingShapes />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-display text-center mb-16">
              Why choose <span className="gradient-text">Yumi</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="glass-effect card-hover">
                <CardContent className="p-8">
                  <TrendingUp className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Earn While You Pay</h3>
                  <p className="text-secondary text-body">Your BNPL balance generates yield, reducing your total payment amount.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect card-hover">
                <CardContent className="p-8">
                  <Shield className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Secure & Transparent</h3>
                  <p className="text-secondary text-body">Built on blockchain technology for maximum security and transparency.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect card-hover">
                <CardContent className="p-8">
                  <Zap className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Instant Approval</h3>
                  <p className="text-secondary text-body">Get approved instantly with our advanced credit assessment system.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect card-hover">
                <CardContent className="p-8">
                  <CheckCircle className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4">No Hidden Fees</h3>
                  <p className="text-secondary text-body">Complete transparency with no hidden charges or surprise fees.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect card-hover">
                <CardContent className="p-8">
                  <Users className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Community Driven</h3>
                  <p className="text-secondary text-body">Join a community of smart spenders who earn while they shop.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect card-hover">
                <CardContent className="p-8">
                  <Shield className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-xl font-semibold mb-4">Credit Building</h3>
                  <p className="text-secondary text-body">Build your credit score while enjoying flexible payment options.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-card/30 relative">
        <div className="absolute bottom-20 right-20 opacity-15">
          <SpiralDesign className="w-80 h-80" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display mb-8">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-body-large text-secondary mb-16">
              Built by a team of experts in fintech, DeFi, and consumer products
            </p>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="relative mb-6 mx-auto w-32 h-32">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center glass-effect group-hover:scale-105 transition-transform duration-200">
                    <div className="text-6xl">👨‍💼</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">CEO</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Alex Chen</h3>
                <p className="text-secondary text-body">Former Goldman Sachs, Stanford MBA</p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-6 mx-auto w-32 h-32">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center glass-effect group-hover:scale-105 transition-transform duration-200">
                    <div className="text-6xl">👩‍💻</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">CTO</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sarah Kim</h3>
                <p className="text-secondary text-body">Ex-Google, Blockchain Expert</p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-6 mx-auto w-32 h-32">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center glass-effect group-hover:scale-105 transition-transform duration-200">
                    <div className="text-6xl">👨‍🎨</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">CPO</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
                <p className="text-secondary text-body">Former Stripe, Product Leader</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg relative overflow-hidden">
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-20">
          <SpiralDesign className="w-96 h-96" />
        </div>
        <FloatingShapes />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display mb-6">
              Ready to <span className="gradient-text">revolutionize</span> your spending?
            </h2>
            <p className="text-body-large text-secondary mb-12 max-w-2xl mx-auto">
              Join thousands of smart spenders who are already earning while they pay
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="button-primary text-primary-foreground font-semibold text-base px-8 py-3">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base px-8 py-3 transition-all duration-200">
                <Calendar className="mr-2 w-5 h-5" />
                Book Demo
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
              <Link to="/merchants" className="text-secondary hover:text-primary transition-colors duration-200 text-body font-medium">Merchants</Link>
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
