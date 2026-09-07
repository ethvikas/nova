# 🔥 Live Review Preparation Guide (Hinglish)

Assignment me likha hai ki tujhe **live explain kar sakte hain / changes maang sakte hain**.
Ye file usi ke liye hai. 2 baar padh le — review clear, guaranteed.

---

## 1. "Apne components kaise kaam karte hain explain karo"

**Formula yaad rakh:** *"Data alag, View alag, Logic hooks me."*

> "Maine teen-layer structure banaya hai:
> 1. **`src/data/content.js`** — poori site ka saara text/data (features, plans, FAQs, testimonials)
> 2. **`src/components/`** — har section ek component hai, jo sirf data ko `.map()` karke render karta hai
> 3. **`src/hooks/`** — saara logic (theme, animation, counting) reusable custom hooks me
>
> Isse content badalne ke liye sirf content.js touch karna padta hai — JSX ko haath nahi lagana."

`App.jsx` dikhake bol: *"App sirf composition hai — sections line up kar diye, jaise building blocks."*

---

## 2. "Mobile navigation kaise kaam karta hai?"

> "820px se neeche links ek dropdown panel ban jaate hain (`navbar.css`).
> Hamburger button `open` state toggle karta hai — CSS me panel `translateY(-115%)`
> pe chhupa rehta hai upar, aur `.open` class aate hi `translateY(0)` pe neeche slide hota hai.
> Accessibility ke liye button pe `aria-expanded` hai, link click pe menu band ho jata hai,
> aur agar user screen bada kare to resize listener menu force-close kar deta hai."

📍 Code: `src/components/Navbar.jsx` + `styles/navbar.css` (`@media (max-width: 820px)`)

---

## 3. "FAQ accordion kaise kaam karta hai?"

> "`openIndex` naam ka state hai — kaunsa question khula hai. Click karne pe wahi set hota hai,
> dobara click karne pe `-1` (sab band) — isliye ek waqt pe ek hi khulta hai.
>
> Height animation ke liye maine JS se height measure **nahi** ki — CSS ka
> **`grid-template-rows: 0fr → 1fr`** trick use ki hai. Bahut modern aur smooth technique hai.
>
> Screen readers ke liye button pe `aria-expanded` aur panel pe `aria-controls`/`role="region"` hai."

📍 Code: `src/components/FAQ.jsx` + `styles/footer.css` (`.faq-a`)

---

## 4. "Data kaise render hota hai?"

> "Saara data `content.js` me plain arrays/objects ki form me hai. Components me
> **`array.map()`** chalta hai — jaise `FEATURES.map(f => <li>...)`.
> Matlab data me ek item add kiya → UI me ek card apne aap ban gaya. Loop kabhi haath se nahi likha."

Bonus point: *"Isi wajah se pricing toggle easy tha — state `annual` flip hoti hai aur render-time pe sahi price choose ho jata hai."*

---

## 5. "Ye technology kyun choose ki?"

> "**React** kyunki 13 sections + 8 interactions the — components aur state se ye manageable hota hai,
> aur brief me bhi React preferred tha. **Vite** kyunki fast build aur chhota bundle deta hai.
>
> Maine **jaanke Tailwind nahi liya** — kyunki evaluation me raw CSS skill dekhni thi.
> Isliye khud ka token-based CSS system likha: `tokens.css` me saare colors CSS variables me hain,
> isliye **dark/light mode sirf `data-theme` attribute flip karne se chalta hai** —
> kisi component me color hardcode hi nahi hai."

---

## 6. "Responsive design kaise handle kiya?"

> "Mobile-friendly grid/flex layouts + 3 breakpoints:
> - **1024px** — 4/3-column grids 2-column ho jaate hain
> - **820px** — navbar hamburger me convert hota hai
> - **560px** — sab kuch single column
>
> Font-size `clamp()` se fluid hai (bada formula nahi — min/ideal/max).
> Horizontal scroll rokne ke liye decorative blobs `overflow: hidden` section me hain
> aur body pe safety `overflow-x: hidden` hai. Anchor scroll me sticky header chipke na,
> isliye `scroll-margin-top` lagaya hai."

---

## 7. "Accessibility aur kaise improve karoge?"

**Kya already kiya hai:**
> "Semantic HTML (`header/main/section/footer`), skip-to-content link, har custom widget
> pe ARIA (accordion, carousel, modal, toggle switch), keyboard se sab operable hai,
> visible focus rings, dono themes me contrast, aur `prefers-reduced-motion` pe animations off."

**Kya aur kar sakte (bolne ke liye):**
> "Aage jaake focus-trap full version modal me (abhi focus move hota hai, trap enhance ho sakta hai),
> form inputs pe `aria-invalid`, Live Regions aur bhi granular, aur Lighthouse/axe se regular audits."

---

## 8. "Performance kaise optimize karoge?"

**Already:**
> "Zero external assets — icons inline SVG hain, mockups pure CSS, koi web font nahi.
> Production bundle sirf ~55KB JS gzip + ~5KB CSS. IntersectionObserver fire hone ke baad
> unobserve kar deta hai. Scroll listeners `passive: true` hain. Count-up `requestAnimationFrame` se."

**Aage:**
> "Route-level code-splitting (`React.lazy`), image hogi to WebP/AVIF + lazy loading,
> critical CSS inlining, aur CDN caching headers."

---

## 9. "Isse production app me kaise convert karoge?"

> "Char steps me sochta hoon:
> 1. **Content** — `content.js` ki jagah headless CMS/API se data fetch
> 2. **Forms** — newsletter/demo ke liye real backend endpoint + spam protection
> 3. **Quality** — Playwright E2E tests, axe accessibility audit, CI me build+Lighthouse budget
> 4. **Infra** — CDN deploy, analytics, error monitoring (Sentry jaisa)"

---

## 10. ⚡ "Live change karo" — agar bole to (CHEAT SHEET)

| Wo bolega | Tu karega (30 sec) | File |
|---|---|---|
| "Color/theme change karo" | `--accent: #6d7cff` → koi aur hex | `styles/tokens.css` |
| "Feature ka text badlo" | `FEATURES` array me title/desc edit | `data/content.js` |
| "Naya FAQ add karo" | `FAQS` me ek object add — bas! UI apne aap | `data/content.js` |
| "Button ka text badlo" | "Get NOVA free" → text edit | `components/Navbar.jsx` |
| "Light default karo" | `useState` ki initial value 'light' | `hooks/useTheme.js` |

**Rule:** Ghabrana mana hai — "content change = content.js, style change = tokens.css" — ye ek line bol de, aadha impression wahin ban jayega.

---

## 11. Demo flow (review me ye order follow kar):

1. Dark/light toggle dikha (navbar me ☀️/🌙)
2. Window chhota kar → hamburger menu khol/band
3. Nav link click → smooth scroll
4. Stats section pe scroll → numbers count hone de
5. "Watch demo" → modal khol, ESC se band
6. Pricing toggle → annual/monthly prices badalte dikhenge
7. FAQ khol-band
8. Footer me galat email daal → validation error; sahi daal → success
9. Neeche scroll → back-to-top button
10. Mobile view (DevTools → 390px) — sab clean

**Ek line jo impressed karegi:**
> "Bundle sirf 55KB gzipped hai kyunki maine koi external library ya asset nahi li — sab hand-written hai."
