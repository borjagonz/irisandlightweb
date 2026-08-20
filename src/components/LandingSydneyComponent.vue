<template>
  <div class="landing sydney-page">

    <!-- NAVBAR -->
    <nav :class="['navbar', { scrolled: isScrolled }]">

      <router-link to="/">
        <img
          class="logo"
          src="../assets/IrisAndLight-logo-white.png"
          alt="Iris & Light"
        >
      </router-link>

      <button
        class="hamburger"
        @click="toggleMenu"
        aria-label="Toggle navigation"
      >
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>

      <div :class="['navlinks', { active: menuOpen }]">

        <a
          class="navlink"
          @click.prevent="scrollToSection('examples')"
        >
          Examples
        </a>

        <a
          class="navlink"
          @click.prevent="scrollToSection('pricing')"
        >
          Pricing
        </a>

        <a
          class="navlink"
          @click.prevent="scrollToSection('process')"
        >
          Process
        </a>

        <a
          class="navlink"
          @click.prevent="scrollToSection('faq')"
        >
          FAQs
        </a>

        <a
          class="navlink"
          @click.prevent="scrollToSection('location')"
        >
          Studio
        </a>

        <a
          class="booklink"
          href="/#booking"
        >
          Book a Session
        </a>

      </div>

    </nav>


    <!-- HERO -->
    <header class="header sydney-hero">

      <div
        class="header-bg"

      ></div>

      <div class="overlay">

        <div class="hero">

          <p class="sydney-eyebrow">
            IRIS PHOTOGRAPHY — SYDNEY
          </p>

          <h1>
            TRANSFORM YOUR IRIS
            <br>
            INTO ART IN SYDNEY
          </h1>

          <h3>
            HIGH-RESOLUTION IRIS PHOTOGRAPHY
            <br>
            & PERSONALISED EYE ARTWORK
          </h3>

          <div class="herobtns">

            <a
              class="herobtn"
              href="/#booking"
            >
              Book Your Iris Session
            </a>

            <a
              class="herobtn"
              @click.prevent="scrollToSection('examples')"
            >
              See Examples
            </a>

          </div>

          <div  class="hero-proof">
            <p>
            ★★★★★ 5.0 from 30 Google reviews
            <br>
            Level 1, Westfield Miranda
          </p>
        </div>

        </div>

      </div>

    </header>


    <!-- PROCESS -->
    <section id="process" class="process">

      <h1>THREE STEPS, ONE AFTERNOON</h1>

      <p>
        A personalised photographic art experience centred
        around your unique iris.
      </p>

      <div class="cards">

        <div class="card card-1">
          <h2>01</h2>
          <h3>CAPTURE</h3>
          <p>
            A short in-studio sitting, around 10–15 minutes,
            using specialised close-up imaging to reveal
            the incredible detail of your iris.
          </p>
        </div>

        <div class="card card-2">
          <h2>02</h2>
          <h3>ARTISTIC EDITING</h3>
          <p>
            Each image is carefully refined to bring out
            its natural colour, texture and detail.
          </p>
        </div>

        <div class="card card-3">
          <h2>03</h2>
          <h3>YOUR ARTWORK</h3>
          <p>
            Choose how you'd like to display it — digital file,
            acrylic block, wall art or a wearable keepsake.
          </p>
        </div>

      </div>

    </section>


    <!-- EXAMPLES -->
    <section id="examples" class="samples">

      <h1>INDIVIDUAL, COUPLES & FAMILY ARTWORK</h1>

      <p>
        Every piece here is from a real sitting in our Sydney studio —
        this is what individuals, couples and families have chosen
        for their own homes.
      </p>


      <div class="sydney-examples">

        <article class="sydney-example">

          <div class="sydney-example-image">
            <img
              src="../assets/sample1-sydney.jpg"
              alt="Single iris portrait artwork"
              loading="lazy"
            >
          </div>

          <div class="sydney-example-content">

            <span>INDIVIDUAL</span>

            <h2>
              One iris, one statement piece
            </h2>

            <p>
              A single eye, captured and rendered as a
              gallery-quality square print.
            </p>

          </div>

        </article>


        <article class="sydney-example reverse">

          <div class="sydney-example-image">
            <img
              src="../assets/foto6-sydney.jpg"
              alt="Couples iris artwork"
              loading="lazy"
            >
          </div>

          <div class="sydney-example-content">

            <span>COUPLES</span>

            <h2>
              Two irises, one piece
            </h2>

            <p>
              Both partners' eyes captured and composed
              together in a single frame.
            </p>

          </div>

        </article>


        <article class="sydney-example">

          <div class="sydney-example-image">
            <img
              src="../assets/foto4-sydney.jpg"
              alt="Family iris artwork"
              loading="lazy"
            >
          </div>

          <div class="sydney-example-content">

            <span>FAMILY</span>

            <h2>
              The whole family, together
            </h2>

            <p>
              Every family member's iris arranged as one
              framed piece.
            </p>

          </div>

        </article>

      </div>

    </section>


    <!-- PRICING -->
    <section id="pricing" class="prices">

      <h1>IRIS PHOTOGRAPHY PRICES</h1>

      <p>
        Every package includes your capture session,
        artistic editing and your chosen output.
      </p>

      <div class="sydney-price-grid">

        <div
          v-for="item in priceItems"
          :key="item.title"
          class="sydney-price-card"
        >

          <img
            :src="item.image"
            :alt="item.title"
          >

          <div class="sydney-price-content">

            <span>{{ item.label }}</span>

            <strong>{{ item.price }}</strong>

            <h2>{{ item.title }}</h2>

            <p
              v-for="feature in item.features"
              :key="feature"
            >
              {{ feature }}
            </p>

          </div>

        </div>

      </div>

      <p class="pricing-note">
        See the complete size and finish list —
        including acrylic blocks, wearables and
        large-format wall art —
        <a href="/#prices">
          on our full pricing page
        </a>.
      </p>

    </section>


    <!-- OPTIONS -->
    <section class="sydney-options">

      <h1>WAYS TO BRING YOUR ARTWORK HOME</h1>

      <p>
        From a digital file you can share instantly,
        to gallery-ready wall art delivered to your door.
      </p>

      <div class="options-list">

        <div
          v-for="option in options"
          :key="option.name"
          class="option-row"
        >
          <span>{{ option.name }}</span>
          <strong>{{ option.price }}</strong>
        </div>

      </div>

    </section>


    <!-- TESTIMONIALS -->
    <section class="sydney-testimonials">

      <h1>WHAT FAMILIES ARE SAYING</h1>

      <div class="testimonial-grid">

        <article
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="testimonial"
        >

          <div class="stars">
            ★★★★★
          </div>

          <p>
            "{{ testimonial.text }}"
          </p>

          <span>
            {{ testimonial.name }} — Google review
          </span>

        </article>

      </div>

    </section>


    <!-- FAQ -->
    <section id="faq" class="sydney-faq">

      <h1>FREQUENTLY ASKED QUESTIONS</h1>

      <div class="faq-list">

        <details
          v-for="faq in faqs"
          :key="faq.question"
        >
          <summary>
            {{ faq.question }}
          </summary>

          <p>
            {{ faq.answer }}
          </p>
        </details>

      </div>

    </section>


    <!-- LOCATION -->
    <section id="location" class="location">

      <h1>VISIT OUR SYDNEY STUDIO</h1>

      <div class="sydney-location">

        <div class="sydney-location-image">
      <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1653.1670186606373!2d151.09958153105515!3d-34.035301546631395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12c79b5339a089%3A0xcecbac0ed1c0d4d6!2sWestfield%20Miranda!5e0!3m2!1ses!2ses!4v1783678156730!5m2!1ses!2ses" 
      width="100%"
      height="600"
      style="border:0;
      " allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
        </div>

        <div class="sydney-location-info">

          <h2>
            Iris & Light — Miranda, Sydney
          </h2>

          <p>
            <strong>Address</strong><br>
            Level 1, Westfield Miranda,
            600 Kingsway, Miranda NSW 2228
          </p>

          <p>
            <strong>Phone</strong><br>
            0499 242 420
          </p>

          <p>
            <strong>Email</strong><br>
            hello@irisandlight.ai
          </p>

          <p>
            <strong>Hours</strong><br>
            Mon, Tue & Wed 9:30am–6:00pm<br>
            Fri 9:30am–7:00pm<br>
            Sat & Sun 10:00am–6:00pm<br>
            Closed Thursday
          </p>

          <a
            class="location-btn"
            href="https://maps.app.goo.gl/rkc4RKQp4wyE7GW96"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Location
          </a>

        </div>

      </div>

    </section>


    <!-- FINAL CTA -->
    <section class="sydney-final-cta">

      <h1>BOOK YOUR IRIS SESSION IN SYDNEY</h1>

      <p>
        Singles, couples, families and friends —
        appointments and walk-ins welcome at our
        Westfield Miranda studio.
      </p>

      <div class="herobtns">

        <a
          class="herobtn"
          href="/#booking"
        >
          Book Your Iris Session
        </a>

        <a
          class="herobtn"
          href="tel:0499242420"
        >
          Call 0499 242 420
        </a>

      </div>

    </section>


    <!-- FOOTER -->
    <section class="footer">

      <div class="text">
        <p>
          © 2026 Iris & Light. All rights reserved.
          <br>
          -
          <br>
          Iris & Light is operated by Sociabl Pty Ltd
          (ABN 42 684 648 011).
        </p>
      </div>

      <div class="footer-links">

        <router-link
          class="footer-link"
          to="/legal"
        >
          Legal Notice & Privacy Policy
        </router-link>

        <p>-</p>

        <router-link
          class="footer-link"
          to="/legal#cookies"
        >
          Cookies Policy
        </router-link>

      </div>

    </section>

  </div>

  <BookSessionBtn />

</template>

<script>
import BookSessionBtn from "./BookSessionBtn.vue"

// Imágenes específicas de Sydney
import sydneyHero from "../assets/iris-photography-sydney-hero.webp"
import sydneyProcess from "../assets/iris-photography-sydney-process-section.webp"
import sydneyTestimonials from "../assets/iris-photography-sydney-testimonials-section.webp"
import sydneyLocation from "../assets/iris-photography-sydney-studio-location.webp"

import sydneySingleTile from "../assets/iris-photography-sydney-single-tile.webp"
import sydneyCouplesTile from "../assets/iris-photography-sydney-couples-tile.webp"
import sydneyWallArtTile from "../assets/iris-photography-sydney-wallart-tile.webp"

import sydneySingleArtwork from "../assets/iris-photography-sydney-single-tile-display.webp"
import sydneyCouplesArtwork from "../assets/iris-photography-sydney-couples-artwork.webp"
import sydneyFamilyArtwork from "../assets/iris-photography-sydney-family-artwork.webp"


export default {

  components: {
    BookSessionBtn
  },

  data() {
    return {

      /* =========================
         NAVBAR
      ========================= */

      isScrolled: false,
      menuOpen: false,


      /* =========================
         CONTACT FORM
      ========================= */

      name: "",
      email: "",
      phone: "",
      message: "",


      /* =========================
         SYDNEY IMAGES
      ========================= */

      heroImage: sydneyHero,

      processImage: sydneyProcess,

      testimonialsImage: sydneyTestimonials,

      locationImage: sydneyLocation,

      singleTile: sydneySingleTile,

      couplesTile: sydneyCouplesTile,

      wallArtTile: sydneyWallArtTile,

      singleArtwork: sydneySingleArtwork,

      couplesArtwork: sydneyCouplesArtwork,

      familyArtwork: sydneyFamilyArtwork,


      /* =========================
         PRICING
      ========================= */

      priceItems: [

        {
          label: "INDIVIDUAL",
          title: "Single Iris Experience",
          price: "From $79",
          image: sydneySingleTile,

          features: [
            "Iris capture",
            "Artistic editing",
            "Digital artwork"
          ]
        },

        {
          label: "COUPLES",
          title: "Couples Experience",
          price: "From $158",
          image: sydneyCouplesTile,

          features: [
            "Two iris captures",
            "Combined artwork",
            "Digital design work"
          ]
        },

        {
          label: "WALL ART",
          title: "Square Acrylic",
          price: "From $420",
          image: sydneyWallArtTile,

          features: [
            "Gallery-quality artwork",
            "Premium acrylic finish",
            "Ready to display"
          ]
        }

      ],


      /* =========================
         ARTWORK OPTIONS
      ========================= */

      options: [

        {
          name: "Digital File",
          price: "From $79"
        },

        {
          name: "Acrylic Block",
          price: "From $198"
        },

        {
          name: "Wall Art",
          price: "From $420"
        },

        {
          name: "Wearable Artwork",
          price: "From $90"
        }

      ],


      /* =========================
         TESTIMONIALS
      ========================= */

      testimonials: [

        {
          name: "Google Customer",
          text: "Beautiful experience and an incredible final artwork."
        },

        {
          name: "Google Customer",
          text: "The detail captured in the iris was amazing."
        },

        {
          name: "Google Customer",
          text: "Such a unique experience for the whole family."
        }

      ],


      /* =========================
         FAQ
      ========================= */

      setFAQStructuredData() {

  const existing =
    document.getElementById(
      "sydney-faq-structured-data"
    )

  if (existing) {
    existing.remove()
  }

  const script =
    document.createElement("script")

  script.id =
    "sydney-faq-structured-data"

  script.type =
    "application/ld+json"

  script.textContent =
    JSON.stringify({

      "@context":
        "https://schema.org",

      "@type":
        "FAQPage",

      "mainEntity": [

        {
          "@type": "Question",
          "name":
            "How much does iris photography cost in Sydney?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Individual sessions start from $79 for a print. Couples packages start from $158 for two eyes with digital design work, with each additional family member’s eye at $59."
          }
        },

        {
          "@type": "Question",
          "name":
            "How long does a session take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Most sessions take around 10–15 minutes per person. Couples and family sessions take a little longer."
          }
        },

        {
          "@type": "Question",
          "name":
            "How long until I receive my artwork?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Digital files are typically ready the same day. Wall art and feature pieces take 7–10 business days."
          }
        },

        {
          "@type": "Question",
          "name":
            "Can children have their iris photographed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes — we regularly photograph children as part of family sessions."
          }
        },

        {
          "@type": "Question",
          "name":
            "Do I need to remove my glasses or contact lenses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Let the team know when you arrive if you wear contacts or glasses."
          }
        },

        {
          "@type": "Question",
          "name":
            "Is the process safe and comfortable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. It is a close-up photography sitting — there is no contact with the eye itself."
          }
        },

        {
          "@type": "Question",
          "name":
            "Do you take walk-ins, or do I need to book?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Both appointments and walk-ins are welcome, subject to availability."
          }
        }

      ]

    })

  document.head.appendChild(script)

},


  methods: {

    /* =========================
       NAVIGATION
    ========================= */

    scrollToSection(id) {

      const section = document.getElementById(id)

      if (!section) return

      const y =
        section.offsetTop -
        (window.innerHeight / 2) +
        (section.offsetHeight / 2)

      window.scrollTo({
        top: y,
        behavior: "smooth"
      })

      this.menuOpen = false
    },


    scrollToTopSection(id) {

      const section = document.getElementById(id)

      if (!section) return

      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth"
      })

      this.menuOpen = false
    },


    /* =========================
       SCROLL
    ========================= */

    handleScroll() {

      this.isScrolled = window.scrollY > 0

    },


    /* =========================
       MOBILE MENU
    ========================= */

    toggleMenu() {

      this.menuOpen = !this.menuOpen

    },


    /* =========================
       BOOKING TRACKING
    ========================= */

    trackBooking() {

      if (window.fbq) {

        window.fbq("track", "Lead")

      }

    },


    /* =========================
       CONTACT FORM
    ========================= */

    async submitForm() {

      const form = this.$refs.contactForm

      if (!form) return

      const submitBtn =
        form.querySelector('button[type="submit"]')

      const formData =
        new FormData(form)

      const originalText =
        submitBtn.textContent

      submitBtn.textContent = "Sending..."

      submitBtn.disabled = true


      try {

        const response = await fetch(
          "https://api.web3forms.com/submit",
          {
            method: "POST",
            body: formData
          }
        )


        const data =
          await response.json()


        if (response.ok) {

          alert(
            "Success! Your message has been sent."
          )

          this.name = ""
          this.email = ""
          this.phone = ""
          this.message = ""

        } else {

          alert(
            `Error: ${data.message}`
          )

        }

      } catch (error) {

        alert(
          "Something went wrong. Please try again."
        )

      } finally {

        submitBtn.textContent =
          originalText

        submitBtn.disabled = false

      }

    },


    /* =========================
       SEO
    ========================= */

    setMetaDescription() {

      let meta =
        document.querySelector(
          'meta[name="description"]'
        )


      if (!meta) {

        meta =
          document.createElement("meta")

        meta.setAttribute(
          "name",
          "description"
        )

        document.head.appendChild(meta)

      }


      meta.setAttribute(
        "content",
        "Iris & Light creates high-resolution iris photography and personalised eye artwork for individuals, couples and families in Sydney. Visit our Miranda studio."
      )

    },


    setCanonical() {

      let canonical =
        document.querySelector(
          'link[rel="canonical"]'
        )


      if (!canonical) {

        canonical =
          document.createElement("link")

        canonical.setAttribute(
          "rel",
          "canonical"
        )

        document.head.appendChild(canonical)

      }


      canonical.setAttribute(
        "href",
        "https://irisandlight.ai/sydney"
      )

    },


setStructuredData() {

  const existing =
    document.getElementById(
      "sydney-structured-data"
    )

  if (existing) {
    existing.remove()
  }

  const script =
    document.createElement("script")

  script.id =
    "sydney-structured-data"

  script.type =
    "application/ld+json"

  script.textContent =
    JSON.stringify({

      "@context": "https://schema.org",

      "@type": "LocalBusiness",

      "name": "Iris & Light",

      "url":
        "https://irisandlight.ai/sydney",

      "telephone":
        "+61499242420",

      "email":
        "hello@irisandlight.ai",

      "priceRange":
        "$79-$158+",

      "branchOf": {

        "@type":
          "Organization",

        "name":
          "Iris & Light",

        "url":
          "https://irisandlight.ai/"

      },

      "address": {

        "@type":
          "PostalAddress",

        "streetAddress":
          "Level 1, Westfield Miranda, 600 Kingsway",

        "addressLocality":
          "Miranda",

        "addressRegion":
          "NSW",

        "postalCode":
          "2228",

        "addressCountry":
          "AU"

      },

      "openingHoursSpecification": [

        {

          "@type":
            "OpeningHoursSpecification",

          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday"
          ],

          "opens":
            "09:30",

          "closes":
            "18:00"

        },

        {

          "@type":
            "OpeningHoursSpecification",

          "dayOfWeek":
            "Friday",

          "opens":
            "09:30",

          "closes":
            "19:00"

        },

        {

          "@type":
            "OpeningHoursSpecification",

          "dayOfWeek": [
            "Saturday",
            "Sunday"
          ],

          "opens":
            "10:00",

          "closes":
            "18:00"

        }

      ],

      "aggregateRating": {

        "@type":
          "AggregateRating",

        "ratingValue":
          "5.0",

        "reviewCount":
          "30"

      }

    })

  document.head.appendChild(script)

},


    /* =========================
       REMOVE SEO
    ========================= */

    removeStructuredData() {

      const script =
        document.getElementById(
          "sydney-structured-data"
        )

      if (script) {
        script.remove()
      }

    }

  },


  /* =========================
     MOUNTED
  ========================= */

  mounted() {

    window.addEventListener(
      "scroll",
      this.handleScroll
    )


    /*
      Preload hero
    */

    if (this.heroImage) {

      const img =
        new Image()

      img.src =
        this.heroImage

    }


    /*
      SEO
    */

    document.title =
      "Iris Photography Sydney | Personalised Eye Art | Iris & Light"


this.setMetaDescription()
this.setCanonical()
this.setStructuredData()
this.setFAQStructuredData()

  },


  /* =========================
     BEFORE UNMOUNT
  ========================= */

  beforeUnmount() {

    window.removeEventListener(
      "scroll",
      this.handleScroll
    )


    this.removeStructuredData()

  }

}
</script>

<style scoped>

/* =========================================================
   BASE
========================================================= */

.sydney-page {
  width: 100%;
  overflow-x: hidden;
  background: white;
  color: black;
}

.sydney-page * {
  box-sizing: border-box;
}

.sydney-page h1,
.sydney-page h2,
.sydney-page h3,
.sydney-page p {
  margin-top: 0;
}

.sydney-page a {
  text-decoration: none;
}


/* =========================================================
   NAVBAR
========================================================= */

.navbar {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: auto;

  padding: 40px 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 1000;

  transition:
    padding 0.4s ease,
    background-color 0.4s ease,
    backdrop-filter 0.4s ease;
}

.navbar.scrolled {
  padding: 20px 50px;

  background-color: rgba(0, 0, 0, 0.9);

  backdrop-filter: blur(10px);
}

.logo {
  height: 50px;
  width: auto;
  display: block;
}

.navlinks {
  display: flex;
  align-items: center;
  gap: 35px;
}

.navlink,
.booklink {
  color: white;
  font-size: 16px;
  cursor: pointer;

  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.navlink:hover,
.booklink:hover {
  opacity: 0.6;
}

.booklink {
  padding: 14px 25px;

  border: 1px solid white;
  border-radius: 100px;

  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.booklink:hover {
  background-color: white;
  color: black;
  opacity: 1;
}


/* =========================================================
   HERO
========================================================= */

.header {
  position: relative;

  height: 100vh;
  min-height: 700px;

  overflow: hidden;

  background: black;
}

.header-bg {
  position: absolute;

  inset: 0;
  background-image: url(../assets/hero-irisandlightSydney.jpg);
  opacity: 0.8;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  animation: heroZoom 30s ease-in-out infinite alternate;

}

@keyframes heroZoom {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(2.5);
  }
}

.header::after {
  content: "";

  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.1) 45%,
      rgba(0, 0, 0, 0.75) 100%
    );

  z-index: 1;
}

.overlay {
  position: relative;

  z-index: 2;

  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
}

.hero {
  width: 100%;

  text-align: center;

  padding: 0 30px;
  padding-top: 50px;
}

.hero h1 {
  font-size: 90px;
  line-height: 0.95;

  font-weight: 900;

  margin: 100px 0 20px;
}

.hero h3 {
  font-size: 26px;
  line-height: 1.2;

  font-weight: 400;

  margin: 0 0 50px;
}

.sydney-eyebrow {
  font-size: 14px;
  letter-spacing: 2px;

  margin-bottom: 0px;

  font-weight: 500;
}

.hero-proof {
  margin: 30px 0px 0px 0px;

  font-size: 15px;
  line-height: 1.6;

  color: rgba(255, 255, 255, 0.85);
}


/* =========================================================
   BUTTONS
========================================================= */

.herobtns {
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 20px;
}

.herobtn {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  padding: 15px 30px;

  border: 1px solid white;
  border-radius: 100px;

  color: white;
  background: transparent;

  font-size: 20px;

  cursor: pointer;

  transition:
    background-color 0.4s ease,
    color 0.4s ease,
    transform 0.3s ease;
}

.herobtn:hover {
  background-color: white;
  color: black;

  transform: scale(1.04);
}


/* =========================================================
   PROCESS
========================================================= */

.process {
  padding: 120px 50px 80px;

  text-align: center;

  background: white;
}

.process h1 {
  font-size: 48px;
  font-weight: 900;
}

.process > p {
  max-width: 800px;

  margin: 25px auto 0;

  font-size: 20px;
}

.cards {
  display: flex;

  justify-content: center;

  gap: 25px;

  margin-top: 75px;
}

.card {
  width: 30%;
  min-height: 360px;

  padding: 40px;

  border: 1px solid black;
  border-radius: 50px;

  text-align: left;

  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.card:hover {
  background-color: rgba(240, 240, 240, 1);

  transform: translateY(-5px);
}

.card h2 {
  font-size: 64px;

  margin-bottom: 40px;
}

.card h3 {
  font-size: 28px;

  font-weight: 700;

  margin-bottom: 20px;
}

.card p {
  font-size: 18px;
  line-height: 1.5;
}


/* =========================================================
   SAMPLES / EXAMPLES
========================================================= */

.samples {
  padding: 100px 50px;

  background: rgba(25, 25, 25, 1);

  color: white;

  border-radius: 50px;

  margin: 50px;
}

.samples > h1 {
  text-align: center;

  font-size: 48px;
  font-weight: 900;
}

.samples > p {
  max-width: 900px;

  margin: 25px auto 75px;

  text-align: center;

  font-size: 20px;

  color: rgba(255, 255, 255, 0.8);
}

.sydney-examples {
  display: flex;

  flex-direction: column;

  gap: 50px;

  max-width: 1200px;

  margin: 0 auto;
}

.sydney-example {
  display: grid;

  grid-template-columns: 1fr 1fr;

  min-height: 450px;

  border: 1px solid rgba(255,255,255,0.2);

  border-radius: 50px;

  overflow: hidden;
}

.sydney-example.reverse {
  direction: rtl;
}

.sydney-example.reverse
.sydney-example-content {
  direction: ltr;
}

.sydney-example-image {
  min-height: 450px;
}

.sydney-example-image img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
}

.sydney-example-content {
  display: flex;

  flex-direction: column;

  justify-content: center;

  padding: 60px;
}

.sydney-example-content span {
  font-size: 13px;

  letter-spacing: 2px;

  margin-bottom: 20px;

  opacity: 0.6;
}

.sydney-example-content h2 {
  font-size: 42px;

  margin-bottom: 20px;
}

.sydney-example-content p {
  font-size: 18px;

  line-height: 1.6;

  color: rgba(255,255,255,0.75);
}


/* =========================================================
   PRICES
========================================================= */

.prices {
  padding: 120px 50px;

  text-align: center;
}

.prices > h1 {
  font-size: 48px;
  font-weight: 900;
}

.prices > p {
  max-width: 800px;

  margin: 25px auto 75px;

  font-size: 20px;
}

.sydney-price-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 25px;

  max-width: 1200px;

  margin: 0 auto;
}

.sydney-price-card {
  overflow: hidden;

  border: 1px solid black;

  border-radius: 50px;

  text-align: left;

  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
}

.sydney-price-card:hover {
  background-color: rgba(240,240,240,1);

  transform: translateY(-5px);
}

.sydney-price-card > img {
  width: 100%;
  height: 300px;

  display: block;

  object-fit: cover;
}

.sydney-price-content {
  padding: 35px;
}

.sydney-price-content span {
  font-size: 13px;

  letter-spacing: 2px;

  opacity: 0.5;
}

.sydney-price-content strong {
  display: block;

  font-size: 32px;

  margin: 15px 0;
}

.sydney-price-content h2 {
  font-size: 24px;

  margin-bottom: 25px;
}

.sydney-price-content p {
  margin-bottom: 10px;

  font-size: 16px;
}

.pricing-note {
  max-width: 800px;

  margin-top: 60px !important;

  font-size: 16px !important;
}

.pricing-note a {
  color: black;

  text-decoration: underline;
}


/* =========================================================
   OPTIONS
========================================================= */

.sydney-options {
  margin: 50px;

  padding: 100px 50px;

  background: rgba(25,25,25,1);

  color: white;

  border-radius: 50px;

  text-align: center;
}

.sydney-options h1 {
  font-size: 48px;

  font-weight: 900;
}

.sydney-options > p {
  max-width: 800px;

  margin: 25px auto 60px;

  font-size: 20px;

  color: rgba(255,255,255,0.75);
}

.options-list {
  max-width: 900px;

  margin: 0 auto;
}

.option-row {
  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 25px 0;

  border-bottom:
    1px solid rgba(255,255,255,0.2);

  font-size: 20px;
}

.option-row strong {
  font-size: 22px;
}


/* =========================================================
   TESTIMONIALS
========================================================= */

.sydney-testimonials {
  padding: 120px 50px;

  text-align: center;
}

.sydney-testimonials h1 {
  font-size: 48px;

  font-weight: 900;
}

.testimonial-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 25px;

  max-width: 1200px;

  margin: 75px auto 0;
}

.testimonial {
  padding: 40px;

  border: 1px solid black;

  border-radius: 50px;

  text-align: left;
}

.stars {
  margin-bottom: 25px;

  font-size: 20px;
}

.testimonial p {
  font-size: 18px;

  line-height: 1.6;

  margin-bottom: 30px;
}

.testimonial span {
  font-size: 14px;

  opacity: 0.6;
}


/* =========================================================
   FAQ
========================================================= */

.sydney-faq {
  margin: 50px;

  padding: 100px 50px;

  background: rgba(25,25,25,1);

  color: white;

  border-radius: 50px;
}

.sydney-faq h1 {
  text-align: center;

  font-size: 48px;

  font-weight: 900;

  margin-bottom: 60px;
}

.faq-list {
  max-width: 1000px;

  margin: 0 auto;
}

.faq-list details {
  border-bottom:
    1px solid rgba(255,255,255,0.25);

  padding: 25px 0;
}

.faq-list summary {
  cursor: pointer;

  font-size: 20px;

  font-weight: 500;
}

.faq-list p {
  margin-top: 20px;

  max-width: 800px;

  line-height: 1.6;

  color: rgba(255,255,255,0.7);
}


/* =========================================================
   LOCATION
========================================================= */

.location {
  margin: 50px;

  padding: 50px;

  border:
    1px solid rgba(0,0,0,0.2);

  border-radius: 50px;

  color: black;
}

.location h1 {
  text-align: center;

  font-size: 48px;

  font-weight: 900;

  margin-bottom: 60px;
}

.sydney-location {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 50px;

  align-items: center;


  margin: 0 auto;
}

.sydney-location-image img {
  width: 100%;

  height: 500px;

  object-fit: cover;

  border-radius: 40px;
}

.sydney-location-info {
  padding: 20px;
}

.sydney-location-info h2 {
  font-size: 36px;

  margin-bottom: 30px;
}

.sydney-location-info p {
  text-align: left;

  line-height: 1.6;

  margin-bottom: 25px;
}

.location-btn {
  display: block;

  width: fit-content;

  margin-top: 40px;

  padding: 15px 30px;

  border: 1px solid black;

  border-radius: 100px;

  color: black;

  font-size: 20px;

  transition:
    background-color 0.4s ease,
    color 0.4s ease;
}

.location-btn:hover {
  background-color: black;

  color: white;
}


/* =========================================================
   FINAL CTA
========================================================= */

.sydney-final-cta {
  margin: 50px;

  padding: 100px 50px;

  border-radius: 50px;

  background: rgba(25,25,25,1);

  color: white;

  text-align: center;
}

.sydney-final-cta h1 {
  font-size: 48px;

  font-weight: 900;
}

.sydney-final-cta p {
  max-width: 800px;

  margin: 25px auto 50px;

  font-size: 20px;

  color: rgba(255,255,255,0.75);
}


/* =========================================================
   FOOTER
========================================================= */

.footer {
  display: flex;

  justify-content: space-between;

  align-items: center;

  color: black;

  padding: 50px 50px 100px;
}

.footer p {
  margin: 0;
}

.footer-links {
  display: flex;

  flex-direction: column;

  text-align: right;

  margin-left: 250px;
}

.footer-link {
  color: black;

  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}


/* =========================================================
   HAMBURGER
========================================================= */

.hamburger {
  display: none;

  flex-direction: column;

  justify-content: center;

  gap: 6px;

  background: transparent;

  border: none;

  cursor: pointer;

  z-index: 2000;
}

.hamburger span {
  width: 30px;

  height: 2px;

  background: white;

  transition: all 0.3s ease;

  display: block;
}

.hamburger span:nth-child(1).open {
  transform:
    translateY(8px)
    rotate(45deg);
}

.hamburger span:nth-child(2).open {
  opacity: 0;
}

.hamburger span:nth-child(3).open {
  transform:
    translateY(-8px)
    rotate(-45deg);
}


/* =========================================================
   RESPONSIVE — 1200px
========================================================= */

@media (max-width: 1200px) {

  .navbar {
    padding: 30px 50px;
  }

  .navbar.scrolled {
    padding: 20px 50px;
  }

  .hamburger {
    display: flex;
  }

  .navlinks {

    position: absolute;

    top: 0;
    left: 0;

    width: 100%;

    background:
      rgba(0,0,0,0.95);

    flex-direction: column;

    align-items: center;

    gap: 30px;

    padding: 40px 0;
    padding-top: 150px;

    opacity: 0;

    pointer-events: none;

    transform:
      translateY(-20px);

    transition:
      all 0.4s ease;
  }

  .navlinks.active {

    opacity: 1;

    pointer-events: all;

    transform:
      translateY(0);
  }

  .navlink,
  .booklink {
    margin-right: 0;
  }

  .booklink {
    margin-top: 10px;
  }

  .hero h1 {
    font-size: 80px;
  }

}


/* =========================================================
   RESPONSIVE — 1000px
========================================================= */

@media (max-width: 1000px) {

  .hero h1 {
    font-size: 72px;
  }

  .cards {
    flex-wrap: wrap;
  }

  .card {
    width:
      calc(50% - 15px);

    max-width:
      calc(50% - 15px);
  }

  .sydney-price-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .testimonial-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

    .sydney-location {
    grid-template-columns: 1fr;
  }

}


/* =========================================================
   RESPONSIVE — 769px
========================================================= */

@media (max-width: 769px) {

  .hero h1 {
    font-size: 68px;

    margin:
      100px 50px 30px;
  }

  .hero h3 {
    margin:
      0 50px 50px;
  }

  .cards {
    flex-direction: column;

    align-items: center;
  }

  .card {
    width: 100%;

    max-width: 100%;
  }

  .sydney-example {
    grid-template-columns: 1fr;
  }

  .sydney-example.reverse {
    direction: ltr;
  }

  .sydney-example-image {
    min-height: 350px;
  }

  .sydney-location {
    grid-template-columns: 1fr;
  }

  .testimonial-grid {
    grid-template-columns: 1fr;
  }

  .sydney-price-grid {
    grid-template-columns: 1fr;
  }

}


/* =========================================================
   RESPONSIVE — 600px
========================================================= */

@media (max-width: 600px) {

  .navbar {
    padding: 30px;
  }

  .navbar.scrolled {
    padding: 20px 30px;
  }

  .logo {
    height: 45px;
  }

  .hero h1 {
    font-size: 52px;

    margin:
      80px 30px 30px;
  }

  .hero h3 {
    font-size: 24px;

    margin:
      0 30px 50px;
  }

  .herobtns {
    flex-direction: column;

    align-items: center;

    gap: 20px;
  }

  .herobtn {
    width: auto;

    display: inline-flex;

    justify-content: center;
  }

  .process {
    padding:
      80px 30px;
  }

  .process h1 {
    font-size: 32px;
  }

  .card h3 {
    font-size: 24px;
  }

  .samples {
    margin:
      60px 30px 0;

    padding:
      60px 30px;
  }

  .samples > h1 {
    font-size: 32px;
  }

  .prices {
    padding:
      80px 20px;
  }

  .prices > h1 {
    font-size: 32px;
  }

  .sydney-options,
  .sydney-faq,
  .sydney-final-cta {
    margin:
      60px 30px 0;

    padding:
      60px 30px;
  }

  .sydney-options h1,
  .sydney-faq h1,
  .sydney-final-cta h1,
  .sydney-testimonials h1,
  .location h1 {
    font-size: 32px;
  }

  .location {
    padding:
      50px 30px;

    margin:
      60px 30px 0;
  }

  .sydney-location-image img {
    height: 350px;
  }

  .footer {
    flex-wrap: wrap;

    flex-direction: column;

    text-align: center;

    align-items: center;

    justify-content: center;

    gap: 0;
  }

  .footer-links {
    text-align: center;

    margin: 0 auto;
  }

}


/* =========================================================
   RESPONSIVE — 480px
========================================================= */

@media (max-width: 480px) {

  .navbar {
    padding: 20px;
  }

  .navbar.scrolled {
    padding:
      15px 20px;
  }

  .hero h1 {
    font-size: 32px;

    margin:
      160px 30px 10px;
  }

  .hero h3 {
    font-size: 16px;
  }

  .herobtns {
    gap: 10px;
  }

  .herobtn {
    font-size: 14px;
  }

  .process {
    padding:
      80px 20px;
  }

  .card {
    width: 100%;

    max-width: 100%;

    min-height: 320px;
  }

  .process h1 {
    font-size: 26px;
  }

  .process p {
    font-size: 16px;
  }

  .samples {
    margin:
      40px 20px 0;

    padding:
      50px 20px;
  }

  .samples > h1 {
    font-size: 28px;
  }

  .samples > p {
    font-size: 16px;
  }

  .sydney-example-content {
    padding: 35px;
  }

  .sydney-example-content h2 {
    font-size: 28px;
  }

  .sydney-price-content {
    padding: 30px;
  }

  .sydney-price-card > img {
    height: 250px;
  }

  .sydney-options,
  .sydney-faq,
  .sydney-final-cta {
    margin:
      40px 20px 0;

    padding:
      50px 20px;
  }

  .option-row {
    font-size: 16px;
  }

  .option-row strong {
    font-size: 18px;
  }

  .location {
    padding:
      50px 20px;

    margin:
      40px 20px 0;
  }

  .location h1 {
    font-size: 32px;
  }

  .location-btn {
    font-size: 16px;
  }

  .footer {
    padding:
      50px 20px 80px;
  }

}

</style>