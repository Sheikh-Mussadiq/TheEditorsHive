import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Navbar />
      <PageHeader
        title="Contact Us"
        description="Have a project in mind? Get in touch with our team to discuss how we can bring your vision to life."
      />

      <main className="container px-4 py-12 mx-auto">
        <section className="grid gap-12 py-12 md:grid-cols-2 md:gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Get In Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                We'd love to hear about your project. Contact us using the form
                or the information below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-muted-foreground">
                    husnain@theeditorshive.com
                  </p>
                  {/* <p className="text-muted-foreground">support@visionaryfilms.com</p> */}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <p className="text-muted-foreground">+92 3245274464</p>
                  {/* <p className="text-muted-foreground">+1 (555) 765-4321</p> */}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Visit Us</h3>
                  <p className="text-muted-foreground">Islamabad</p>
                  <p className="text-muted-foreground">Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-muted-foreground">
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-background to-muted/50 p-8 rounded-lg shadow-lg border border-muted">
            <h3 className="text-xl font-medium mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
