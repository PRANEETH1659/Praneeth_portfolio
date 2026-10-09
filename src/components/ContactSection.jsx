import { Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

/* Web3Forms delivers submissions straight to gpraneeth2005@gmail.com.
   This key is meant to live in client-side code — it can only ever post to the
   address it was issued for, so it is safe to commit and safe to expose. */
const WEB3FORMS_ACCESS_KEY = "15132eef-dea5-4036-a3f6-94027354302d";

const EMPTY_FORM = { name: "", email: "", message: "" };

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  // Bots fill in every field they find. Humans never see this one.
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (e) =>
    setForm((current) => ({ ...current, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Silently accept and discard bot submissions, so they stop retrying.
    if (honeypot) {
      setForm(EMPTY_FORM);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio message from ${form.name}`,
          from_name: "Portfolio contact form",
          ...form,
        }),
      });

      const result = await response.json();

      // Web3Forms answers 200 with success:false for a bad key or quota, so
      // the body has to be checked too — response.ok alone would lie here.
      if (!response.ok || !result.success) {
        throw new Error(result.message || "The form service rejected it.");
      }

      toast({
        title: "Message sent",
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      setForm(EMPTY_FORM);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Message not sent",
        description: `${error.message} You can email me directly at gpraneeth2005@gmail.com.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-24 px-6 md:py-24 md:px-24 relative bg-secondary/30"
      id="contact"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Hiring for AI / ML or agentic AI roles, or have an AI idea worth
          building? Let's talk.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:gpraneeth2005@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    gpraneeth2005@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Nandigama, Vijayawada, Andhra Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919063257253"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 90632 57253
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Honeypot: off-screen and skipped by keyboard and screen readers */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] size-0 opacity-0"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary disabled:opacity-60"
                  placeholder="Hugo Marchetti"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary disabled:opacity-60"
                  placeholder="hugo@example.com"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none disabled:opacity-60"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center gap-3 justify-center",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
