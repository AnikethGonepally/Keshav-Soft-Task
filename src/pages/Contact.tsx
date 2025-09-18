import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Briefcase } from "lucide-react";

const Contact = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your inquiry. We'll respond within 24 hours.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@businesspro.com", "support@businesspro.com"],
      description: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Business Street, Suite 100", "New York, NY 10001"],
      description: "Visit us by appointment"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"],
      description: "Closed on Sundays"
    }
  ];

  const quickActions = [
    {
      icon: MessageSquare,
      title: "Quick Chat",
      description: "Get instant answers to common questions",
      action: "Start Chat",
      onClick: () => setIsContactModalOpen(true)
    },
    {
      icon: Users,
      title: "Schedule Consultation",
      description: "Book a free 30-minute strategy session",
      action: "Book Now",
      onClick: () => toast({ title: "Booking system opening soon!" })
    },
    {
      icon: Briefcase,
      title: "Request Proposal",
      description: "Get a detailed project proposal",
      action: "Request Now",
      onClick: () => toast({ title: "Proposal request form opening..." })
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Ready to transform your business? We're here to help. Reach out to discuss your project 
              and discover how we can work together to achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quick Actions
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the best way to connect with us based on your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {quickActions.map((action, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-custom-lg hover:shadow-custom-xl transition-smooth group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={action.onClick}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    variant="outline" 
                    className="group-hover:bg-primary-blue group-hover:text-primary-blue-foreground transition-smooth"
                  >
                    {action.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in">
              <Card className="border-0 shadow-custom-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="transition-smooth focus:ring-2 focus:ring-primary-blue"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="transition-smooth focus:ring-2 focus:ring-primary-blue"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="transition-smooth focus:ring-2 focus:ring-primary-blue"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={handleChange}
                          className="transition-smooth focus:ring-2 focus:ring-primary-blue"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleChange}
                          className="transition-smooth focus:ring-2 focus:ring-primary-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest</Label>
                        <Select onValueChange={handleSelectChange}>
                          <SelectTrigger className="transition-smooth focus:ring-2 focus:ring-primary-blue">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consulting">Business Consulting</SelectItem>
                            <SelectItem value="development">Web Development</SelectItem>
                            <SelectItem value="marketing">Digital Marketing</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project, goals, or any specific requirements..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="transition-smooth focus:ring-2 focus:ring-primary-blue resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary-blue hover:bg-primary-blue/90 text-primary-blue-foreground py-6 text-lg shadow-custom-lg hover:shadow-custom-xl transition-smooth group"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get in touch with us through any of these convenient methods. 
                  We're always happy to hear from you!
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="border-0 shadow-custom-md hover:shadow-custom-lg transition-smooth"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">{detail}</p>
                          ))}
                          <p className="text-sm text-primary-blue">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-custom-lg">
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary-blue mx-auto mb-4" />
                      <p className="text-lg font-semibold">Interactive Map</p>
                      <p className="text-muted-foreground">123 Business Street, New York, NY</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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

export default Contact;