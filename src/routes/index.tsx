import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  ImagePlus,
  Instagram,
  Mail,
  MessageCircle,
  Sparkles,
  Upload,
} from "lucide-react";
import { Button } from "../components/Button";
import stylistPortrait from "../assets/stylist-portrait.jpg";
import capsuleWardrobe from "../assets/capsule-wardrobe.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Personal Stylist në Shqipëri — Studio Stil" },
      { name: "description", content: "Stil personal me atë që ke tashmë. Outfit-e ditore, raste të veçanta dhe konsultë 1-në-1." },
      { property: "og:title", content: "Studio Stil — Vish atë që ke, ndryshe" },
      { property: "og:description", content: "Këshillim i ngrohtë dhe personal për një garderobë që punon për ty." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", title: "Outfit-e të përditshme", text: "Kombinime të reja nga pjesët që ke, të menduara për ritmin dhe ditët e tua.", price: "Nga 35 €" },
  { n: "02", title: "Për një rast të veçantë", text: "Një look i plotë për dasmë, intervistë, darkë ose event — pa blerje të panevojshme.", price: "Nga 30 €" },
  { n: "03", title: "Dërgo foto, merr ide", text: "Më dërgo 1–3 pjesë nga garderoba dhe merr sugjerime konkrete kombinimi.", price: "Nga 15 €" },
  { n: "04", title: "Konsultë personale 1-në-1", text: "Një vështrim i plotë mbi stilin, nevojat dhe garderobën tënde personale.", price: "Kontakto për çmim" },
];

const inputClass = "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground focus:ring-0";

function Index() {
  const [contactSent, setContactSent] = useState(false);
  const [ideaSent, setIdeaSent] = useState(false);
  const [ideaFiles, setIdeaFiles] = useState<File[]>([]);
  const ideaInput = useRef<HTMLInputElement>(null);

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setContactSent(true);
    event.currentTarget.reset();
  };

  const submitIdea = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity() || ideaFiles.length === 0) return;
    setIdeaSent(true);
  };

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-background/30 text-primary-foreground">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:px-12">
          <a href="#fillimi" className="min-w-0 font-display text-2xl font-medium">Studio Stil</a>
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase sm:flex" aria-label="Navigimi kryesor">
            <a href="#sherbimet" className="hover:opacity-70">Shërbimet</a>
            <a href="#rreth-meje" className="hover:opacity-70">Rreth meje</a>
            <a href="#kontakt" className="hover:opacity-70">Kontakto</a>
          </nav>
          <a href="#kontakt" className="text-xs font-semibold uppercase underline underline-offset-4 sm:hidden">Rezervo</a>
        </div>
      </header>

      <section id="fillimi" className="relative min-h-[92svh] bg-deep text-primary-foreground">
        <img src={capsuleWardrobe} alt="Garderobë kapsulë me veshje neutrale" width={1600} height={1056} className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-deep/45" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:px-12">
          <p className="mb-5 animate-soft-rise text-xs font-semibold uppercase">Personal styling · Tiranë & online</p>
          <h1 className="max-w-4xl animate-soft-rise text-5xl font-medium leading-[0.95] sm:text-7xl lg:text-8xl">Stilizo veten me atë që ke tashmë.</h1>
          <div className="mt-8 grid items-end gap-8 border-t border-primary-foreground/40 pt-6 sm:grid-cols-[1fr_auto]">
            <p className="max-w-xl text-base leading-7 text-primary-foreground/90 sm:text-lg">Nuk të duhen gjithmonë rroba të reja. Të duhet një sy i ri për të parë garderobën tënde.</p>
            <Button asChild variant="light"><a href="#kontakt">Fillo këtu <ArrowDown size={16} /></a></Button>
          </div>
        </div>
      </section>

      <section id="rreth-meje" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-12 lg:py-36">
        <div className="relative">
          <img src={stylistPortrait} alt="Personal stylist në studion e saj" width={1200} height={1600} loading="lazy" className="aspect-[3/4] w-full object-cover" />
          <span className="absolute bottom-4 left-4 bg-background px-3 py-2 text-xs uppercase">Stil, jo konsum</span>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase text-rust">Rreth meje</p>
          <h2 className="mt-5 text-4xl leading-tight sm:text-6xl">Nuk duhet një garderobë e re. Duhet syri i duhur.</h2>
          <div className="mt-8 space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>Për mua, stili personal nuk fillon në dyqan. Fillon te ti — te mënyra si jeton, çfarë të bën të ndihesh mirë dhe rrobat që ke zgjedhur tashmë.</p>
            <p>Unë të ndihmoj t’i shohësh ato me një perspektivë të re: më pak konfuzion para dollapit, më shumë kombinime që ndihen natyrshëm të tuat.</p>
          </div>
          <p className="mt-10 font-display text-2xl italic">Me kujdes, Elira*</p>
          <p className="mt-1 text-xs text-muted-foreground">*Emër placeholder</p>
        </div>
      </section>

      <section id="sherbimet" className="bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-4 border-b border-border pb-10 sm:grid-cols-2 sm:items-end">
            <div><p className="text-xs font-semibold uppercase text-rust">Si mund të të ndihmoj</p><h2 className="mt-4 text-5xl sm:text-6xl">Shërbimet</h2></div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground sm:justify-self-end">Zgjidh atë që të duhet sot. Çdo shërbim përshtatet me stilin, ritmin dhe garderobën tënde.</p>
          </div>
          <div className="grid sm:grid-cols-2">
            {services.map((service) => (
              <article key={service.n} className="group min-h-72 border-b border-border py-8 sm:px-8 sm:odd:border-r sm:odd:pl-0">
                <div className="flex items-start justify-between"><span className="text-xs text-muted-foreground">{service.n}</span><ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
                <h3 className="mt-12 text-3xl">{service.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">{service.text}</p>
                <p className="mt-6 text-sm font-semibold">{service.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <p className="text-center text-xs font-semibold uppercase text-rust">E thjeshtë dhe personale</p>
        <h2 className="mx-auto mt-4 max-w-xl text-center text-5xl">Si funksionon</h2>
        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {[ [MessageCircle, "01", "Më shkruaj", "Zgjidh shërbimin dhe më trego çfarë të duhet."], [ImagePlus, "02", "Më trego garderobën", "Dërgo foto ose takohemi në një sesion online."], [Sparkles, "03", "Merr idetë e tua", "Merr kombinime të qarta, praktike dhe vetëm për ty."] ].map(([Icon, n, title, text]) => {
            const StepIcon = Icon as typeof MessageCircle;
            return <article key={n as string} className="border-t border-border pt-6"><div className="flex items-center justify-between"><StepIcon size={22} strokeWidth={1.5} /><span className="text-xs text-muted-foreground">{n as string}</span></div><h3 className="mt-10 text-3xl">{title as string}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text as string}</p></article>;
          })}
        </div>
      </section>

      <section className="bg-deep py-24 text-primary-foreground lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase text-primary-foreground/70">Dërgo foto, merr idenë</p>
            <h2 className="mt-5 text-5xl leading-tight sm:text-6xl">Një rrobë.<br/>Disa mundësi.</h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-primary-foreground/70">Ke një fund, xhaketë apo palë këpucë që nuk di si t’i veshësh? Më trego dhe unë të kthej ide të menduara për ty.</p>
            <div className="mt-10 space-y-4 text-sm"><p className="flex gap-3"><Check size={17}/> Përgjigje brenda 24–48 orësh</p><p className="flex gap-3"><Check size={17}/> Ose rezervim për sesion live</p></div>
          </div>
          <form onSubmit={submitIdea} className="bg-background p-5 text-foreground sm:p-8">
            {ideaSent ? <Success title="Fotot mbërritën!" text="Do të të kontaktoj brenda 24–48 orësh me idetë e tua." onReset={() => { setIdeaSent(false); setIdeaFiles([]); }} /> : <>
              <div className="border border-dashed border-border p-8 text-center">
                <Upload className="mx-auto" size={24} strokeWidth={1.5} /><p className="mt-4 text-sm font-semibold">Ngarko 1–3 foto</p><p className="mt-1 text-xs text-muted-foreground">JPG, PNG ose WEBP · maksimumi 5 MB secila</p>
                <input ref={ideaInput} type="file" accept="image/png,image/jpeg,image/webp" multiple className="sr-only" onChange={(e) => setIdeaFiles(Array.from(e.target.files ?? []).slice(0, 3))} />
                <Button type="button" variant="secondary" className="mt-5" onClick={() => ideaInput.current?.click()}>Zgjidh fotot</Button>
                {ideaFiles.length > 0 && <p className="mt-3 text-xs text-rust">{ideaFiles.length} foto u zgjodhën</p>}
              </div>
              <label className="mt-6 block text-xs font-semibold uppercase">Konteksti<textarea required maxLength={800} rows={4} className={`${inputClass} mt-2 resize-none`} placeholder="Për çfarë rasti është dhe çfarë do të arrish?" /></label>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Button type="submit">Merr përgjigje async</Button>
                <Button asChild variant="secondary"><a href="https://calendly.com/placeholder" target="_blank" rel="noreferrer">Rezervo live <CalendarDays size={16}/></a></Button>
              </div>
            </>}
          </form>
        </div>
      </section>

      <section className="bg-card py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase text-rust">Fjalë nga klientet</p>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {[ ["“Për herë të parë po vesh gjëra që i kisha prej vitesh, por nuk dija t’i kombinoja.”", "A. K. · Tiranë"], ["“Më kurseu kohë, blerje të kota dhe stresin para çdo eventi.”", "E. M. · Durrës"], ["“Këshillat ishin të thjeshta, konkrete dhe vërtet u ndjeva si vetja.”", "R. H. · Online"] ].map(([quote, name]) => <figure key={name} className="border-t border-border pt-7"><blockquote className="font-display text-2xl leading-snug">{quote}</blockquote><figcaption className="mt-6 text-xs uppercase text-muted-foreground">{name} · Shembull</figcaption></figure>)}
          </div>
        </div>
      </section>

      <section id="kontakt" className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12 lg:py-36">
        <div>
          <p className="text-xs font-semibold uppercase text-rust">Kontakt & rezervim</p>
          <h2 className="mt-5 text-5xl leading-tight sm:text-6xl">Ta fillojmë me një bisedë.</h2>
          <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">Më trego pak çfarë ke në mendje. Do të të përgjigjem personalisht dhe pa detyrim.</p>
          <div className="mt-10 grid gap-3">
            <ContactLink icon={MessageCircle} label="WhatsApp" href="https://wa.me/355690000000?text=Pershendetje%2C%20do%20te%20doja%20nje%20konsulte%20stili." />
            <ContactLink icon={Mail} label="hello@studiostil.al" href="mailto:hello@studiostil.al" />
            <ContactLink icon={Instagram} label="@studiostil" href="https://instagram.com/studiostil" />
            <ContactLink icon={CalendarDays} label="Rezervo një orë konsultë" href="https://calendly.com/placeholder" />
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Kontaktet janë placeholder dhe duhen zëvendësuar.</p>
        </div>
        <form onSubmit={submitContact} className="border-t border-border pt-2">
          {contactSent ? <Success title="Faleminderit!" text="Mesazhi yt u regjistrua. Do të të kontaktoj shumë shpejt." onReset={() => setContactSent(false)} /> : <>
            <div className="grid gap-x-8 sm:grid-cols-2">
              <Field label="Emri"><input name="name" required maxLength={100} className={inputClass} placeholder="Emri yt" /></Field>
              <Field label="Email"><input name="email" type="email" required maxLength={255} className={inputClass} placeholder="email@shembull.com" /></Field>
              <Field label="Telefoni"><input name="phone" type="tel" maxLength={30} className={inputClass} placeholder="+355 ..." /></Field>
              <Field label="Shërbimi"><select name="service" required defaultValue="" className={inputClass}><option value="" disabled>Zgjidh shërbimin</option><option>Outfit ditor</option><option>Rast i veçantë</option><option>Dërgo foto</option><option>Konsultë e plotë</option></select></Field>
            </div>
            <Field label="Mesazhi"><textarea name="message" required maxLength={1000} rows={4} className={`${inputClass} resize-none`} placeholder="Më trego si mund të të ndihmoj..." /></Field>
            <Field label="Foto opsionale"><input name="photos" type="file" accept="image/png,image/jpeg,image/webp" multiple className="mt-3 block w-full text-xs file:mr-4 file:border file:border-border file:bg-transparent file:px-4 file:py-2 file:text-xs" /></Field>
            <Button type="submit" className="mt-8 w-full sm:w-auto">Dërgo kërkesën <ArrowUpRight size={16}/></Button>
          </>}
        </form>
      </section>

      <footer className="bg-deep text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
          <div className="grid gap-8 border-b border-primary-foreground/20 pb-10 sm:grid-cols-2 sm:items-end">
            <div><p className="font-display text-4xl">Studio Stil</p><p className="mt-2 text-xs text-primary-foreground/60">Personal styling · Tiranë & online</p></div>
            <div className="flex flex-wrap gap-6 text-xs uppercase sm:justify-end"><a href="mailto:hello@studiostil.al">Email</a><a href="https://wa.me/355690000000">WhatsApp</a><a href="https://instagram.com/studiostil">Instagram</a></div>
          </div>
          <div className="mt-6 flex flex-wrap justify-between gap-4 text-xs text-primary-foreground/50"><p>© 2026 Studio Stil</p><a href="#fillimi">Kthehu lart ↑</a></div>
        </div>
      </footer>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="mt-6 block text-xs font-semibold uppercase">{label}{children}</label>;
}

function ContactLink({ icon: Icon, label, href }: { icon: typeof Mail; label: string; href: string }) {
  return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center justify-between border-b border-border py-4 text-sm transition-colors hover:text-rust"><span className="flex items-center gap-3"><Icon size={18} strokeWidth={1.5}/>{label}</span><ArrowUpRight size={16}/></a>;
}

function Success({ title, text, onReset }: { title: string; text: string; onReset: () => void }) {
  return <div className="flex min-h-80 flex-col items-center justify-center text-center"><span className="grid h-12 w-12 place-items-center rounded-full bg-secondary"><Check size={20}/></span><h3 className="mt-5 text-3xl">{title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{text}</p><Button type="button" variant="secondary" className="mt-7" onClick={onReset}>Dërgo një tjetër</Button></div>;
}