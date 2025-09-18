import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form and close modal
    setFormData({ name: "", email: "", message: "" });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Quick Contact
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Contact Info */}
          <div className="bg-secondary-blue rounded-lg p-4 space-y-3">
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-primary-blue" />
              <span className="text-sm text-secondary-blue-foreground">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-primary-blue" />
              <span className="text-sm text-secondary-blue-foreground">hello@businesspro.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-4 w-4 text-primary-blue" />
              <span className="text-sm text-secondary-blue-foreground">123 Business St, New York, NY</span>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="transition-smooth focus:ring-2 focus:ring-primary-blue"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                className="transition-smooth focus:ring-2 focus:ring-primary-blue"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project or inquiry..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="transition-smooth focus:ring-2 focus:ring-primary-blue resize-none"
              />
            </div>

            <div className="flex space-x-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary-blue hover:bg-primary-blue/90 text-primary-blue-foreground transition-smooth"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};