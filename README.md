# Style With You

Krijo një website për një personal stylist/fashion consultant individual (jo brand apo dyqan).

KONCEPTI I BIZNESIT:

Unë ofroj shërbime personale styling-u duke u bazuar te garderoba që klienti tashmë ka —

jo shitje rrobash, por këshillim. Shërbimet kryesore:

1. Krijim outfit-esh ditore bazuar në garderobën ekzistuese të klientit

2. Këshillim për raste të veçanta (dasma, intervista, dalje, evente)

3. "Dërgo foto, merr idenë" — klienti dërgon foto të një rrobe/pjese nga garderoba

   e tij dhe unë i sugjeroj se si ta kombinojë; kjo mund të bëhet:

   - Async: klienti dërgon foto përmes formularit dhe merr përgjigjen brenda X orësh

   - Live: sesion video i planifikuar (booking i orarit)

4. Konsultë e plotë 1-në-1 për stilin personal

STIL DIZAJNI (SHUMË E RËNDËSISHME):

- Estetikë minimaliste Skandinave/Daneze (Nordic/Danish design) — diçka që nuk ekziston

  ende në tregun shqiptar

- Paleta ngjyrash neutrale e ngrohtë: bezh, krem, gëlqere e thyer (off-white), gri e ngrohtë,

  aksente të vogla në ngjyrë tokë/rust ose blu të errët — pa ngjyra bold apo gradient flashy

- Shumë hapësirë e bardhë/negative space, layout i qetë, i organizuar në grid

- Tipografi elegante: një sans-serif e pastër (p.sh. stil Inter/Neue Montreal) e kombinuar

  ndoshta me një serif të hollë për titujt (stil editorial)

- Animacione minimale dhe të buta — vetëm fade/slide të lehta në scroll, ASNJË efekt i

  ngarkuar apo flashy

- Fotografi/imazhe me shumë hapësirë përreth, jo të ngjeshura

- Ndjesi e qetë, e rafinuar, "quiet luxury" — jo trendy apo Gen-Z, por elegante dhe pa kohë

STRUKTURA E FAQES:

1. HERO SECTION

   - Titull i thjeshtë dhe i fortë (p.sh. "Stilizo veten me atë që ke tashmë")

   - Nëntitull i shkurtër që shpjegon shërbimin

   - CTA kryesor drejt formularit të kontaktit/rezervimit

2. RRETH MEje (About)

   - Foto/paraqitje personale, filozofia e styling-ut ("nuk duhet rroba të reja, duhet syri i

     duhur")

3. SHËRBIMET (3-4 karta minimale)

   - Outfit planifikim ditor

   - Styling për raste të veçanta

   - Dërgo foto → merr ide kombinimi

   - Konsultë e plotë personale

   Për secilën, përshkrim i shkurtër dhe çmim (ose "kontakto për çmim")

4. SI FUNKSIONON (How it works) — 3 hapa të thjeshtë me ikona minimale

   Shembull: 1) Më kontakto/rezervo  2) Më trego garderobën/foto  3) Merr planin/idetë tua

5. SEKSIONI "DËRGO FOTO, MERR IDENË" (feature i veçantë)

   - Zonë upload/kontakt ku klienti mund të ngarkojë 1-3 foto dhe të shkruajë kontekstin

     (rasti, occasion, çfarë kërkon)

   - Dy opsione të qarta për klientin:

     a) "Merr përgjigje brenda 24-48 orësh" (async)

     b) "Rezervo sesion live" (çon te kalendari/booking)

6. KONTAKT & REZERVIM (seksioni më i rëndësishëm — përfshi TË GJITHA këto opsione)

   - Formular kontakti/booking në faqe: emri, email, telefoni, lloji i shërbimit

     (dropdown: outfit ditor / rast i veçantë / dërgo foto / konsultë e plotë),

     mesazh, dhe fushë opsionale për upload foto

   - Buton WhatsApp (direkt tek chat-i, me numër placeholder për t'u zëvendësuar)

   - Buton Email (mailto placeholder)

   - Buton/link Instagram (drejt profilit, si portofol vizual i punës)

   - Widget/buton për rezervim orari tip Calendly (embed placeholder ose buton

     "Rezervo një orë konsultë")

   - Mos përfshi TikTok

7. TESTIMONIALE (opsionale, placeholder me 2-3 citate nga klientë)

8. FOOTER minimal me linqet e kontaktit të përsëritura dhe copyright

KËRKESA TEKNIKE:

- Responsive plotësisht (mobile-first, pasi shumica e klientëve do vijnë nga telefoni/Instagram)

- Të gjitha butonat e kontaktit funksionalë (WhatsApp deep link, mailto, Instagram link)

- Formulari i kontaktit të ketë validim bazë dhe mesazh konfirmimi pas dërgimit

- Ngarkim i shpejtë, pa elementë të rëndë vizualë

- Palette ngjyrash e përcaktuar si CSS variables për konsistencë

TONI I TEKSTEVE: i ngrohtë, personal, i besueshëm — jo korporatist, si të flisje me një mikeshë

që ka shije të mirë të veshjes.

vetem frontend

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/db9b0f96-197c-4f61-bd21-dbe96f4b1d12).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
