import { useState, useRef } from "react";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Erreur", description: "Veuillez remplir tous les champs.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: "Message envoyé ! ✨", description: "Merci pour votre message, je vous répondrai bientôt." });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      nameRef.current?.focus();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
          Nom
        </label>
        <input
          ref={nameRef}
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom"
          className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="votre@email.com"
          className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message..."
          className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full gradient-bg text-primary-foreground font-medium py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {isSubmitting ? "Envoi en cours..." : (
          <>
            Envoyer <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
