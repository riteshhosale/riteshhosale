import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowUpRight, Github, Mail } from "lucide-react";
import { sendContactMessage } from "../../services/api";
import type { ContactFormValues } from "../../types/portfolio";

const emptyForm: ContactFormValues = { name: "", email: "", subject: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormValues>(emptyForm);
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState("");

  const update = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.currentTarget;
    setForm((current) => ({ ...current, [name]: value }));
  };

  async function submit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setNotice("");
    setSending(true);
    try {
      setNotice(await sendContactMessage(form));
      setForm(emptyForm);
    } catch (error: unknown) {
      setNotice(error instanceof Error ? error.message : "The contact API is not available yet. Please email me directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section container contact-section" id="contact">
          <div className="contact-copy"><div className="section-kicker">05 / GET IN TOUCH</div><h2>Have a good idea?<br /><span>Let’s build it.</span></h2><p>Interested in internships, hackathons, open-source collaboration, or building something useful together? Send a message.</p><a className="email-link" href="mailto:riteshbhosale092007@gmail.com"><Mail size={17} /> riteshbhosale092007@gmail.com <ArrowUpRight size={15} /></a><a className="github-link" href="https://github.com/riteshhosale" target="_blank" rel="noreferrer"><Github size={17} /> github.com/riteshhosale <ArrowUpRight size={15} /></a></div>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row"><label>Your name<input name="name" value={form.name} onChange={update} required minLength={2} maxLength={80} placeholder="Jane Doe" /></label><label>Email address<input name="email" value={form.email} onChange={update} required type="email" maxLength={254} placeholder="jane@example.com" /></label></div>
            <label>Subject <span className="optional">(optional)</span><input name="subject" value={form.subject} onChange={update} maxLength={120} placeholder="Project collaboration" /></label>
            <label>Your message<textarea name="message" value={form.message} onChange={update} required minLength={10} maxLength={3000} rows={5} placeholder="Tell me a little about what you have in mind..." /></label>
            <button className="button button-primary submit-button" type="submit" disabled={sending}>{sending ? "Sending…" : "Send message"} <ArrowUpRight size={16} /></button>
            {notice && <p className="form-notice" role="status">{notice}</p>}
            <p className="form-footnote">The form saves messages through the API when MongoDB is connected. You can always email me directly.</p>
          </form></section>
  );
}
