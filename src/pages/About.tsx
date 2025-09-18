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
      description: "Striving for perfection in every line of code, delivering solutions that exceed expectations and industry standards."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing cutting-edge technologies like AI/ML and cloud computing to solve complex technical challenges."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Genuinely passionate about technology and committed to continuous learning in this rapidly evolving field."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Believing in the power of teamwork and open communication to achieve remarkable results together."
    }
  ];

  const services = [
    {
      title: "Full-Stack Development",
      description: "Complete web applications using modern frameworks and technologies.",
      features: ["React & Node.js", "MongoDB Integration", "RESTful APIs", "Responsive Design"]
    },
    {
      title: "AI/ML Solutions",
      description: "Intelligent systems powered by machine learning and deep learning.",
      features: ["TensorFlow Projects", "Computer Vision", "Object Detection", "Data Analysis"]
    },
    {
      title: "Cloud & IoT",
      description: "Scalable cloud solutions and Internet of Things integrations.",
      features: ["AWS Cloud Services", "Arduino Programming", "Sensor Integration", "Smart Automation"]
    }
  ];

  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "5+", label: "Certifications" },
    { number: "3+", label: "Years Learning" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground animate-fade-in">
              About Aniketh
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
              CS Engineering student and passionate developer specializing in full-stack development, 
              AI/ML solutions, and cloud computing technologies.
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
                My Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                Currently pursuing B.Tech in Computer Science and Engineering at Geethanjali College 
                of Engineering and Technology. My journey began with a perfect 10/10 GPA in high school 
                and continued with 91% in intermediate studies, building a strong foundation in mathematics and science.
              </p>
              <p className="text-lg text-muted-foreground">
                Through hands-on projects and internships, including my Google AI-ML virtual internship at Edu-Skills, 
                I've developed expertise in modern web technologies, artificial intelligence, and cloud computing. 
                Each project has been a stepping stone toward mastering the art of creating impactful digital solutions.
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
              Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide my approach to technology, problem-solving, and professional growth.
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
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive expertise across modern development technologies and emerging AI/ML frameworks.
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
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-200">
              Ready to bring your ideas to life? Let's discuss how my technical expertise 
              can help you achieve your project goals.
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