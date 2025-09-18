import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { Users, Target, Lightbulb, Heart, CheckCircle, ArrowRight } from "lucide-react";
import aboutTeamImage from "@/assets/about-team.jpg";

const About = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering solutions that exceed expectations and set new standards."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative approaches to solve complex business challenges."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We build trust through transparency, honest communication, and ethical business practices."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork, both within our organization and with our valued clients."
    }
  ];

  const services = [
    {
      title: "Business Consulting",
      description: "Strategic guidance to optimize your operations and accelerate growth.",
      features: ["Strategic Planning", "Process Optimization", "Market Analysis", "Growth Strategy"]
    },
    {
      title: "Digital Solutions",
      description: "Cutting-edge technology solutions tailored to your business needs.",
      features: ["Web Development", "Mobile Apps", "Cloud Solutions", "Digital Transformation"]
    },
    {
      title: "Marketing & Branding",
      description: "Comprehensive marketing strategies to boost your brand presence.",
      features: ["Brand Development", "Digital Marketing", "Content Strategy", "Social Media Management"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground animate-fade-in">
              About BusinessPro
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
              We're a team of passionate professionals dedicated to transforming businesses 
              through innovative solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in">
              <h2 className="text-4xl md:text-5xl font-bold">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2013, BusinessPro emerged from a simple belief: every business deserves 
                access to world-class solutions and expertise. What started as a small team of 
                entrepreneurs has grown into a trusted partner for companies worldwide.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we've helped over 500 businesses achieve their goals through our comprehensive 
                suite of services. From startups to Fortune 500 companies, we bring the same level 
                of dedication and expertise to every project.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary-blue">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <img 
                src={aboutTeamImage} 
                alt="Our professional team working together"
                className="rounded-2xl shadow-custom-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              These principles guide everything we do and shape how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-custom-lg hover:shadow-custom-xl transition-smooth text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions designed to address every aspect of your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-custom-lg hover:shadow-custom-xl transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{service.title}</CardTitle>
                  <CardDescription className="text-center text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary-blue group-hover:text-primary-blue-foreground transition-smooth"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-200">
              Let's discuss how our expertise can help transform your business and achieve your goals.
            </p>
            <Button 
              size="lg"
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg shadow-custom-xl transition-smooth group"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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

export default About;