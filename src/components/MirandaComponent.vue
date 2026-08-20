<template>
    <div class="miranda-page">

<header class="topbar">
      <router-link to="/miranda">
        <img
          class="logo"
          src="../assets/IrisAndLight-logo-white.png"
          alt="Iris & Light"
        >
      </router-link>  <a class="btn btn-ghost" href="https://app.acuityscheduling.com/schedule/8b7f3d65" target="_blank" rel="noopener">Book a session</a>
</header>

<main id="main">

<section
  class="hero"
  :style="{ backgroundImage: `url(${heroImage})` }"
>  <div class="hero-scrim"></div>
  <div class="hero-content">
    <p class="eyebrow">Sydney&rsquo;s only accessible iris studio</p>
    <h1 class="hero-title">Your eye.<br>Turned into art.</h1>
    <p class="hero-sub">A one&#8209;of&#8209;one artwork made from the one thing that's only ever been yours. We come to you &#8212; right now, that's Miranda, for a limited time only.</p>
    <a class="btn btn-primary" href="https://app.acuityscheduling.com/schedule/8b7f3d65" target="_blank" rel="noopener">Book your session</a>
  </div>
  <div class="hero-scroll" aria-hidden="true"><span></span></div>
</section>

<section class="statement">
  <svg class="statement-icon" viewBox="0 0 48 48" width="34" height="34" aria-hidden="true">
    <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="24" cy="24" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <g stroke="currentColor" stroke-width="1.5">
      <line x1="24" y1="3" x2="24" y2="11"/>
      <line x1="24" y1="37" x2="24" y2="45"/>
      <line x1="3" y1="24" x2="11" y2="24"/>
      <line x1="37" y1="24" x2="45" y2="24"/>
    </g>
  </svg>
  <p class="statement-text">Sydney's only easily accessible iris studio.<br>We come to you &#8212; for a limited time only.</p>
</section>

<section class="trust">
  <div class="trust-inner">
    <div class="trust-item">
      <p class="trust-stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
      <p class="trust-label">5.0 Rating on Google</p>
    </div>
    <div class="trust-divider"></div>
    <div class="trust-item">
      <p class="trust-figure">1,000<span class="unit">+</span></p>
      <p class="trust-label">irises captured and turned into art</p>
    </div>
    <div class="trust-divider"></div>
    <div class="trust-item">
      <p class="trust-figure">15<span class="unit">min</span></p>
      <p class="trust-label">from walk&#8209;in to captured</p>
    </div>
  </div>
  <div class="testimonials">
    <blockquote class="testimonial">
      <p>&ldquo;Such a great idea as either a gift or an art piece in your home. We absolutely love ours!&rdquo;</p>
      <cite>Doris M. &mdash; Google review</cite>
    </blockquote>
    <blockquote class="testimonial">
      <p>&ldquo;Absolutely beautiful result. Merged my wife&rsquo;s and I eyes perfectly!&rdquo;</p>
      <cite>Liam C. &mdash; Google review</cite>
    </blockquote>
    <blockquote class="testimonial">
      <p>&ldquo;My Iris portrait turned out great. I love it!&rdquo;</p>
      <cite>Marina C. &mdash; Google review</cite>
    </blockquote>
  </div>
</section>

<section class="process">
  <p class="section-eyebrow">How it works</p>
  <h2 class="section-title">Three steps.<br>One irreplaceable piece.</h2>
  <ol class="process-list">
    <li class="process-item">
      <span class="process-index">1</span>
      <div>
        <h3>Capture</h3>
        <p>Specialised macro imaging reveals the incredible detail already living in your iris &#8212; no two are ever alike.</p>
      </div>
    </li>
    <li class="process-item">
      <span class="process-index">2</span>
      <div>
        <h3>Artistic editing</h3>
        <p>Each image is carefully refined by hand to bring out its true colour, texture and depth.</p>
      </div>
    </li>
    <li class="process-item">
      <span class="process-index">3</span>
      <div>
        <h3>Artwork</h3>
        <p>Choose how it lives &#8212; gallery&#8209;quality wall art, an acrylic piece, or a wearable you carry with you.</p>
      </div>
    </li>
  </ol>
</section>

<section class="gallery">
  <p class="section-eyebrow">The work</p>
  <h2 class="section-title">Every iris tells a<br>different story.</h2>
  <div class="gallery-grid">
    <figure class="g-item g-single">
      <img :src="singlePortrait" alt="Extreme macro portrait of a single iris, blue outer ring with a fiery amber and rust centre" loading="lazy">
      <figcaption>Single Iris Portrait</figcaption>
    </figure>
    <figure class="g-item g-duo">
      <img :src="diagonalDuo" alt="Two irises, one warm amber and one cool blue&#8209;grey, arranged diagonally against a split warm and cool background" loading="lazy">
      <figcaption>Couples Iris Artwork</figcaption>
    </figure>
    <figure class="g-item g-infinity">
      <img :src="couplesInfinity" alt="Two amber irises overlapping in a figure&#8209;eight composition with dramatic side lighting" loading="lazy">
      <figcaption>Couples Iris Artwork</figcaption>
    </figure>
    <figure class="g-item g-family">
      <img :src="familyGrid" alt="Four irises arranged in a grid, three warm tones and one cool blue&#8209;grey" loading="lazy">
      <figcaption>Family Iris Artwork</figcaption>
    </figure>
  </div>
</section>

<section class="urgency">
  <div class="urgency-inner">
    <p class="section-eyebrow">Miranda Westfield</p>
    <h2 class="section-title">Miranda is temporary.<br>Your artwork isn't.</h2>
    <p class="urgency-body">We move the studio to bring this experience to more of Sydney. Right now, that's Miranda &#8212; Right below the Apple Store — follow the stairs down to our studio. Once we move on, this is the last chance to capture your iris here.</p>
    <a class="btn btn-primary" href="https://app.acuityscheduling.com/schedule/8b7f3d65" target="_blank" rel="noopener">Book before we move on</a>
  </div>
</section>

<section class="final-cta" id="book">
  <p class="eyebrow">Miranda Westfield &middot; Limited engagement</p>
  <h2 class="final-title">Your iris<br>won't wait.</h2>
  <a class="btn btn-primary btn-large" href="https://app.acuityscheduling.com/schedule/8b7f3d65" target="_blank" rel="noopener">Book your session</a>
  <p class="final-sub">Walk&#8209;ins welcome &middot; appointments recommended</p>
</section>

</main>

<footer class="footer">
  <p>Iris &amp; Light &mdash; Miranda Westfield</p>
  <p class="footer-dim">Operated by Sociabl Pty Ltd</p>
</footer>

</div>
</template>

<script setup>
import { onMounted } from 'vue'

import heroImage from '@/images/hero-dust-dissolve.jpg'
import singlePortrait from '@/images/single-portrait.jpg'
import diagonalDuo from '@/images/diagonal-duo.jpg'
import couplesInfinity from '@/images/couples-infinity.jpg'
import familyGrid from '@/images/family-grid.jpg'

onMounted(() => {
  if (window.ttq) {
    window.ttq.page()
    return
  }

  window.TiktokAnalyticsObject = 'ttq'

  const ttq = window.ttq = window.ttq || []

  ttq.methods = [
    'page',
    'track',
    'identify',
    'instances',
    'debug',
    'on',
    'off',
    'once',
    'ready',
    'alias',
    'group',
    'enableCookie',
    'disableCookie',
    'holdConsent',
    'revokeConsent',
    'grantConsent'
  ]

  ttq.setAndDefer = function (t, e) {
    t[e] = function () {
      t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
    }
  }

  for (let i = 0; i < ttq.methods.length; i++) {
    ttq.setAndDefer(ttq, ttq.methods[i])
  }

  ttq.instance = function (t) {
    const e = ttq._i[t] || []
    for (let n = 0; n < ttq.methods.length; n++) {
      ttq.setAndDefer(e, ttq.methods[n])
    }
    return e
  }

  ttq.load = function (e, n) {
    const r = 'https://analytics.tiktok.com/i18n/pixel/events.js'

    ttq._i = ttq._i || {}
    ttq._i[e] = []
    ttq._i[e]._u = r

    ttq._t = ttq._t || {}
    ttq._t[e] = +new Date()

    ttq._o = ttq._o || {}
    ttq._o[e] = n || {}

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = `${r}?sdkid=${e}&lib=ttq`

    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode.insertBefore(script, firstScript)
  }

  ttq.load('D98HBDRC77UBS5FS8LLG')
  ttq.page()
})


</script>

<style>
.miranda-page{
  --ground:black;
  --ground-2:#191919;
  --ground-3:#241C18;
  --ink:white;
  --ink-dim:#B3A99C;
  --amber:white;
  --amber-soft:#8C6A46;
  --steel:#7288A8;
  --border:rgba(244,237,227,0.14);
  --radius-pill:999px;
  --radius-card:18px;
  --font-display:Helvetica;
  --font-body:Helvetica;
}

.miranda-page *,
.miranda-page *::before,
.miranda-page *::after {
  box-sizing: border-box;
}

.miranda-page{
  background:var(--ground);
  color:var(--ink);
  font-family:var(--font-body);
  line-height:1.6;
  overflow-x:hidden;
}
.miranda-page .skip{
  position:absolute;left:-9999px;top:0;
  background:var(--amber);color:var(--ground);
  padding:.6em 1em;z-index:100;
}
.miranda-page .skip:focus{left:1em;top:1em}

.miranda-page img{max-width:100%;display:block}
.miranda-page a{color:inherit}
.miranda-page h1,
.miranda-page h2,
.miranda-page h3 {
    text-wrap: balance;
    margin:0;
}.miranda-page p{margin:0}

.miranda-page .btn{
  display:inline-flex;align-items:center;justify-content:center;
  border-radius:var(--radius-pill);
  padding:.85em 1.9em;
  font-family:var(--font-body);
  font-weight:600;
  font-size:.95rem;
  text-decoration:none;
  border:1px solid transparent;
  transition:transform .15s ease, background .2s ease, border-color .2s ease;
  cursor:pointer;
  background-color: white;
}
.miranda-page .btn:hover{transform:translateY(-1px)}
.miranda-page .btn:focus-visible{outline:2px solid var(--amber);outline-offset:3px}
.miranda-page .btn-primary{background:var(--amber);color:var(--ground)}
.miranda-page .btn-primary:hover{}
.miranda-page .btn-ghost{background:transparent;color:var(--ink);border-color:var(--border)}
.miranda-page .btn-ghost:hover{border-color:var(--ink-dim)}
.miranda-page .btn-large{padding:1.1em 2.6em;font-size:1.05rem}

.miranda-page .topbar{
  position:fixed;top:0;z-index:20;
  display:flex;align-items:center;justify-content:space-between;
  width: 100%;
  height: 100px;
  padding: 0 clamp(1.25rem, 4vw, 3rem);
  background:rgba(0,0,0,0.4);
  backdrop-filter:blur(10px);
  backdrop-filter: blur(10px);
}
@media (max-width:504px){.miranda-page .topbar{flex-wrap: wrap; height: 200px;}}


.miranda-page .logo {
    height: 60px;
    z-index: 999;
    margin-right: 50px;
}
.miranda-page .wordmark{
  font-family:var(--font-display);
  font-weight:800;
  font-size:1.15rem;
  letter-spacing:.04em;
  text-transform:uppercase;
}
.miranda-page .amp{color:var(--amber);font-weight:400}

.miranda-page .eyebrow{
  font-family:var(--font-body);
  font-weight:700;
  font-size:.78rem;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:var(--amber);
}
.miranda-page .section-eyebrow{
  font-family:var(--font-body);
  font-weight:700;
  font-size:.75rem;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:white;
  margin-bottom:.9rem;
}
.miranda-page .section-title{
  font-family:var(--font-display);
  font-weight:800;
  font-size:clamp(2rem,5vw,3.2rem);
  line-height:1.05;
  letter-spacing:-.01em;
  text-transform:uppercase;
}

.miranda-page .hero{
  position:relative;
  min-height:100svh;
  background-size:cover;
  background-position:center 35%;
  display:flex;align-items:flex-end;
  padding:0 clamp(1.25rem,4vw,3rem) clamp(3.5rem,9vw,6rem);
}
.miranda-page .hero-scrim{
  position:absolute;inset:0;
  background:
    linear-gradient(180deg, rgba(17,13,11,0.1) 0%, rgba(17,13,11,0.2) 45%, rgba(17,13,11,0.6) 100%),
    linear-gradient(90deg, rgba(17,13,11,0.75) 0%, rgba(17,13,11,0.1) 55%);
}
.miranda-page .hero-content{position:relative;max-width:640px}
.miranda-page .hero-title{
  font-family:var(--font-display);
  font-weight:900;
  font-size:clamp(2.6rem,8vw,5.4rem);
  line-height:.98;
  letter-spacing:-.01em;
  text-transform:uppercase;
  margin:.5rem 0 1.1rem;
  color: white;
}
.miranda-page .hero-sub{
  font-size:clamp(1rem,1.6vw,1.2rem);
  color:#9c9c9c;
  max-width:34ch;
  margin-bottom:1.9rem;
}
.miranda-page .hero-scroll{
  position:absolute;bottom:1.4rem;left:50%;
  transform:translateX(-50%);
}
.miranda-page .hero-scroll span{
  display:block;width:1px;height:34px;
  background:linear-gradient(180deg, transparent, var(--ink-dim));
animation: miranda-scrolldrift 1.8s ease-in-out infinite;}

.miranda-page .statement{
  padding:clamp(3.5rem,7vw,5.5rem) clamp(1.25rem,4vw,3rem);
  text-align:center;
  border-bottom:1px solid var(--border);
  display:flex;flex-direction:column;align-items:center;gap:1.4rem;
}
.miranda-page .statement-icon{color:var(--amber)}
.miranda-page .statement-text{
  font-family:var(--font-display);
  font-weight:800;
  font-size:clamp(1.5rem,4vw,2.5rem);
  line-height:1.15;
  text-transform:uppercase;
  max-width:20ch;
  letter-spacing:-.005em;
  color: white;

}
@keyframes miranda-scrolldrift{
  0%,100%{transform:translateY(0);opacity:.4}
  50%{transform:translateY(8px);opacity:1}
}

.miranda-page .trust{
  border-bottom:1px solid var(--border);
  background:var(--ground-2);
}
.miranda-page .trust-inner{
  max-width:1040px;margin:0 auto;
  padding:clamp(2rem,4vw,3rem) clamp(1.25rem,4vw,3rem);
  display:flex;align-items:center;justify-content:center;
  gap:clamp(1.5rem,4vw,3.5rem);
  flex-wrap:wrap;
  text-align:center;
}


.miranda-page .trust-item{display:flex;flex-direction:column;gap:.35rem; width: 25%;}
@media (max-width:640px){.miranda-page .trust-item{width: 100%}}
.miranda-page .trust-stars{color:#ce8a46;font-size:1.1rem;letter-spacing:.15em}
.miranda-page .trust-figure{
  font-family:var(--font-display);
  font-weight:800;font-size:2rem;
  font-variant-numeric:tabular-nums;
  color: white;
}
.miranda-page .trust-figure .unit{font-size:1rem;color:white;margin-left:.2em}
.miranda-page .trust-label{
  font-size:.82rem;color:#9c9c9c;
  text-transform:uppercase;letter-spacing:.08em;
}
.miranda-page .trust-divider{width:1px;height:38px;background:var(--border)}
@media (max-width:640px){.miranda-page .trust-divider{display:none}}

.miranda-page .testimonials{
  max-width:1040px;margin:0 auto;
  padding:0 clamp(1.25rem,4vw,3rem) clamp(2.4rem,4vw,3rem);
  display:grid;gap:50px;
  grid-template-columns:repeat(3,1fr);
  border-top:1px solid var(--border);
  padding-top:clamp(2rem,4vw,2.6rem);
  margin-top:.4rem;
}
@media (max-width:820px){.miranda-page .testimonials{grid-template-columns:1fr}}
.miranda-page .testimonial{margin:0}
.miranda-page .testimonial p{
  font-size:1rem;color:var(--ink);
  font-style:normal;
  margin-bottom:.7rem;
}
.miranda-page .testimonial cite{
  font-style:normal;font-size:.8rem;
  color:#9c9c9c;
  letter-spacing:.03em;
}

.miranda-page .process{
  padding:clamp(4rem,9vw,7rem) clamp(1.25rem,4vw,3rem);
  max-width:1040px;margin:0 auto;
}

.miranda-page .section-title {  color: white;
}
.miranda-page .process-list{
  list-style:none;margin:2.6rem 0 0;padding:0;
  display:grid;gap:2.4rem;
  grid-template-columns:repeat(3,1fr);
}
@media (max-width:820px){.miranda-page .process-list{grid-template-columns:1fr;gap:2rem}}
.miranda-page .process-item{display:flex;gap:1.1rem;align-items:flex-start}
.miranda-page .process-index{
  font-family:var(--font-display);
  font-weight:800;font-size:1.3rem;
  color:black;
  background-color: white;
  border:1px solid var(--border);
  border-radius:50%;
  width:2.4rem;height:2.4rem;
  display:flex;align-items:center;justify-content:center;
  flex-shrink:0;
}
.miranda-page .process-item h3{
  font-family:var(--font-display);
  font-weight:800;font-size:1.05rem;
  text-transform:uppercase;letter-spacing:.02em;
  margin-bottom:.5rem;
  color: white

}
.miranda-page .process-item p{color:#9c9c9c;font-size:.94rem}

.miranda-page .gallery{
  padding:clamp(4rem,9vw,7rem) clamp(1.25rem,4vw,3rem);
  background:var(--ground-2);
}
.miranda-page .gallery > .section-eyebrow,
.miranda-page .gallery > .section-title{max-width:1040px;margin-left:auto;margin-right:auto}
.miranda-page .gallery-grid{
  max-width:1180px;margin:2.6rem auto 0;
  display:grid;gap:1.1rem;
  grid-template-columns:repeat(6,1fr);
  grid-template-areas:
    "single single single duo duo duo"
    "family family infinity infinity infinity infinity";
}
.miranda-page .g-single{grid-area:single}
.miranda-page .g-duo{grid-area:duo}
.miranda-page .g-infinity{grid-area:infinity}
.miranda-page .g-family{grid-area:family}
@media (max-width:820px){
  .miranda-page .gallery-grid{grid-template-columns:1fr;grid-template-areas:"single" "duo" "infinity" "family"}
}
.miranda-page .g-item{
  position:relative;margin:0;
  border-radius:var(--radius-card);
  overflow:hidden;
  border:1px solid var(--border);
  aspect-ratio:4/3;
}
.miranda-page .g-item img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease}
.miranda-page .g-item:hover img{transform:scale(1.04)}
.miranda-page .g-item figcaption{
  position:absolute;left:0;right:0;bottom:0;
  padding:1.1rem 1.2rem;
  font-size:.82rem;font-weight:600;
  letter-spacing:.04em;text-transform:uppercase;
  background:linear-gradient(180deg, transparent, rgba(17,13,11,0.85));
  color: white;
}

.miranda-page .urgency{
  padding:clamp(4.5rem,10vw,8rem) clamp(1.25rem,4vw,3rem);
  background:
    radial-gradient(ellipse 120% 80% at 20% 0%, rgba(206,138,70,0.10), transparent 60%),
    radial-gradient(ellipse 120% 80% at 100% 100%, rgba(114,136,168,0.10), transparent 60%);
}
.miranda-page .urgency-inner{max-width:640px;margin:0 auto;text-align:center}
.miranda-page .urgency-body{
  color:#9c9c9c;font-size:1.05rem;
  margin:1.5rem auto 2.2rem;max-width:52ch;
}

.miranda-page .final-cta{
  padding:clamp(5rem,12vw,9rem) clamp(1.25rem,4vw,3rem);
  text-align:center;
  border-top:1px solid var(--border);
}
.miranda-page .final-title{
  font-family:var(--font-display);
  font-weight:900;
  font-size:clamp(2.6rem,7vw,4.6rem);
  line-height:.98;text-transform:uppercase;
  margin:.9rem 0 2rem;
  color: white;
}
.miranda-page .final-sub{margin-top:1.1rem;color:#9c9c9c;font-size:.85rem;letter-spacing:.03em}

.miranda-page .footer{
  padding:2.4rem clamp(1.25rem,4vw,3rem) 3rem;
  text-align:center;
  color:#9c9c9c;
  font-size:.82rem;
  border-top:1px solid var(--border);
}
.miranda-page .footer p{margin:.2rem 0}
.miranda-page .footer-dim{opacity:.7}

@media (prefers-reduced-motion:reduce){
  .miranda-page .hero-scroll span{
      animation:none;
  }

  .miranda-page .btn,
  .miranda-page .g-item img{
      transition:none;
  }
}
</style>