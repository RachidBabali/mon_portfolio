import { motion } from "framer-motion";
import { Phone, MessageCircle, Facebook, MapPin, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const socials = [
  { icon: <Phone size={20} />, label: "Téléphone", value: "+221 755 288 122", href: "tel:+221755288122" },
  { icon: <MessageCircle size={20} />, label: "WhatsApp", value: "Envoyer un message", href: "https://wa.me/221755288122" },
  { icon: <Facebook size={20} />, label: "Facebook", value: "Rachid", href: "https://www.facebook.com/share/1B7qaNCDbf/?mibextid=wwXIfr" },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z" />
      </svg>
    ),
    label: "TikTok",
    value: "@rachid7.2",
    href: "https://www.tiktok.com/@rachid7.2?_r=1&_t=ZS-94YabEhG0gu",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Me <span className="gradient-text">Contacter</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-foreground mb-6">Envoyez-moi un message</h2>
            <ContactForm />
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold text-foreground mb-6">Retrouvez-moi</h2>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-secondary text-primary group-hover:gradient-bg group-hover:text-primary-foreground transition-all">
                  {s.icon}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                  <p className="font-medium text-foreground">{s.value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
