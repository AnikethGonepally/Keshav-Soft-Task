import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { ChevronRight, Star, Users, Award, TrendingUp, Shield, Zap, Globe } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const features = [
    {
      icon: Users,
      title: "Full-Stack Development",
      description: "Complete web applications using React, Node.js, Express, and MongoDB with modern best practices."
    },
    {
      icon: Award,
      title: "AI/ML Solutions",
      description: "Machine learning and deep learning projects using TensorFlow and cutting-edge AI technologies."
    },
    {
      icon: TrendingUp,
      title: "Cloud Computing",
      description: "AWS cloud solutions and infrastructure management for scalable and reliable applications."
    },
    {
      icon: Shield,
      title: "Object Detection",
      description: "Computer vision projects with real-time object recognition and classification systems."
    },
    {
      icon: Zap,
      title: "IoT Integration",
      description: "Internet of Things solutions combining Arduino sensors with smart automation systems."
    },
    {
      icon: Globe,
      title: "Problem Solving",
      description: "Strong foundation in data structures and algorithms with efficient coding practices."
    }
  ];

  const testimonials = [
    {
      name: "Tech Startup CEO",
      role: "SaaS Platform",
      content: "Aniketh delivered an exceptional full-stack application that exceeded our performance expectations and user experience goals.",
      rating: 5
    },
    {
      name: "AI Research Lab",
      role: "Computer Vision Project",
      content: "Outstanding work on our object detection system. The TensorFlow implementation was both efficient and highly accurate.",
      rating: 5
    },
    {
      name: "Smart Home Company",
      role: "IoT Solution",
      content: "Professional Arduino-based water management system that solved our automation challenges perfectly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Building the Future with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Code & Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Full-stack developer and AI/ML engineer creating cutting-edge solutions 
              that bridge technology with real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                onClick={() => setIsContactModalOpen(true)}
                className="bg-primary-blue hover:bg-primary-blue/90 text-primary-blue-foreground px-8 py-6 text-lg shadow-custom-xl hover:shadow-custom-xl transition-smooth group"
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg transition-smooth"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              Combining modern development practices with cutting-edge AI/ML technologies 
              to deliver innovative solutions that make a real difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-custom-lg hover:shadow-custom-xl transition-smooth group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from projects that demonstrate technical excellence and professional delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-custom-lg hover:shadow-custom-xl transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-200">
              Let's collaborate on your next project. From concept to deployment, 
              I'll help bring your ideas to life with modern technology and innovative solutions.
            </p>
            <Button 
              size="lg"
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg shadow-custom-xl hover:shadow-custom-xl transition-smooth group"
            >
              Start a Project
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
