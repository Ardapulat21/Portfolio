import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to contact with me!
        </p>

        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-6 justify-left">
            <div className="flex items-start space-x-4 mb-5">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium"> Email</h4>
                <a
                  href="mailto:ardapulat21@outlook.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  ardapulat21@outlook.com
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-6 justify-left">
            <div className="flex items-start space-x-4 mb-5">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium"> Phone</h4>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  +90 534 413 1009
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-6 justify-left">
            <div className="flex items-start space-x-4 mb-5">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium"> Location</h4>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  Nilüfer/Bursa,Türkiye
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
