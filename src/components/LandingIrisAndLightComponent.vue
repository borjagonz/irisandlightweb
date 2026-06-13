<template>
 <div class="landing">
<nav :class="['navbar', { scrolled: isScrolled }]">
    <img class="logo" src="../assets/IrisAndLight-logo-white.png" alt="">

    <button class="hamburger" @click="toggleMenu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
    </button>

    <div :class="['navlinks', { active: menuOpen }]">
<a class="navlink" @click.prevent="scrollToSection('samples')">Samples</a>
<a
  class="navlink"
  @click.prevent="scrollToTopSection('prices')"
>
  Prices
</a><a class="navlink" @click.prevent="scrollToSection('contact')">Contact Us</a>
<a class="navlink" @click.prevent="scrollToSection('location')">Find Us</a>
<a class="booklink" @click.prevent="scrollToSection('booking')">Book a Session</a>        
    </div>
</nav>
    <header class="header">
<div
  class="header-bg"
  :style="{ backgroundImage: `url(${heroImages[currentHero]})` }"
>
  <div
    class="header-bg-next"
    :class="{ active: fadeHero }"
    :style="{ backgroundImage: `url(${heroImages[nextHero]})` }"
  ></div>
</div>
        <div class="overlay">

        <div class="hero">
            <h1>YOUR EYE. <br>TURNED INTO ART.</h1>
            <H3>TURN YOUR IRIS INTO STUNING <br>PERSONALISED ARTWORK</H3>
            <div class="herobtns">
                <a class="herobtn" @click.prevent="scrollToSection('samples')">See Samples</a>
                <a class="herobtn" @click.prevent="scrollToSection('booking')">Book a Session</a>
            </div>
        </div>
        </div>
    </header>
    <section id="process" class="process">
        <h1>WELCOME TO THE IRIS EXPERIENCE</h1>
        <P>A personalized photographic art experience centred around your unique iris.</P>
        <div class="cards">
<div class="card card-1">                <h2>1</h2>
                <h3>CAPTURE</h3>
                <p>We use specialised imaging to reveal the incredible detail of your iris.</p>
            </div>
<div class="card card-2">                <h2>2</h2>
                <h3>ARTISTIC EDITING</h3>
                <p>Each image is carefully refined to reveal its natural beauty, colour and detail.</p>
            </div>
<div class="card card-3">                <h2>3</h2>
                <h3>ARTWORK</h3>
                <p>Choose your favourite way to display your artwork at home.</p>
            </div>
          </div>
    </section>
    <section id="samples" class="samples">
        <h1>CRAFTED FOR YOU</h1>
        <P>Designed for individuals, couples and families. Choose from a range of premium formats, finishes and sizes from just $79.</P>
<div class="carousel-wrapper">
  <button class="carousel-btn left" @click="prevSlide">
    <img src="../icons/left-arrow.svg" alt="">
  </button>

  <div class="carousel-track">

    <img
      :src="images[(currentSlide - 1 + images.length) % images.length]"
      class="side-image left-image"
      alt=""
    >

<transition   :name="direction === 'next' ? 'slide-next' : 'slide-prev'"
  mode="out-in">      <img
        :key="images[currentSlide]"
        :src="images[currentSlide]"
        alt="Galeria Impressionat"
        class="carousel-image"
      >
    </transition>
    <img
      :src="images[(currentSlide + 1) % images.length]"
      class="side-image right-image"
      alt=""
    >
  </div>

  <button class="carousel-btn right" @click="nextSlide">
    <img src="../icons/right-arrow.svg" alt="">
  </button>
</div>
<div class="dots">
  <span
    v-for="(image, index) in images"
    :key="index"
    :class="['dot', { active: currentSlide === index }]"
    @click="currentSlide = index"
  ></span>
</div>
<div class="gift">
    <img class="heart" src="../icons/heart.svg" alt="">
    <h3>PERFECT FOR YOU, PERFECT AS A GIFT.</h3>
</div>
    </section>

<section id="prices" class="prices">
  <h1>OUR PRICES</h1>
  <p>
    Discover our range of sizes, designs and prices, tailored to you.
  </p>

  <div
    v-for="(category, index) in priceCategories"
    :key="index"
    class="price-row"
  >
<h2>{{ category.title }}</h2>

<p
  v-if="category.description"
  class="category-description"
>
  {{ category.description }}
</p>

    <div class="price-carousel">

      <button
        class="price-arrow-left"
        @click="prevPrice(category)"
      >
        <img src="../icons/left-arrow-white.svg" alt="">
      </button>

      <div class="price-cards">

<div
  v-for="(item, i) in category.items.slice(
    category.visible,
    category.visible + cardsToShow
  )"
  :key="i"
  class="price-card"
>
  <img :src="item.image" :alt="item.title">

  <h3>{{ item.title }}</h3>

<div class="price-options">
  <div
    v-for="option in item.options"
    :key="option.size"
    class="price-option"
  >
    <span>{{ option.size }}</span>
    <span>{{ option.price }}</span>
  </div>
</div>
        </div>

      </div>

      <button
        class="price-arrow-right"
        @click="nextPrice(category)"
      >
        <img src="../icons/right-arrow-white.svg" alt="">
      </button>

    </div>
  </div>
</section>

    <section id="booking" class="booking">
      <h1>BOOK YOUR SESSION</h1>
      <p>Come and visit us, choose your iris experience, and immerse yourself in a unique artistic journey. Discover the remarkable details of your iris and transform them into a stunning masterpiece that celebrates your individuality.</p>
<div class="form">

  <a class="booking-cards" href="https://app.acuityscheduling.com/schedule/8b7f3d65" target="blank">
    <div class="booking-card">
      <img class="booking-img" src="../icons/single-iris.svg" alt="">
      <h3>Single Iris Portrait Experience</h3>
      <span class="confirm-btn">Book</span>
    </div>
        <div class="booking-card">
      <img class="booking-img" src="../icons/couple-iris.svg" alt="">
      <h3>Couples Iris Artwork Experience</h3>
      <span class="confirm-btn">Book</span>
    </div>
        <div class="booking-card">
      <img class="booking-img" src="../icons/family-iris.svg" alt="">
      <h3>Family Iris Artwork Experience</h3>
      <span class="confirm-btn">Book</span>
    </div>
        <div class="booking-card">
      <img class="booking-img" src="../icons/vip-iris.svg" alt="">
      <h3>VIP Private Iris Session</h3>
      <span class="confirm-btn">Book</span>
    </div>
  </a>

</div>

    </section>

<section id="contact" class="contact">
  <h1>CONTACT US</h1>

  <p>
    Have a question about our artwork, pricing or bookings?
    We'd love to hear from you.
  </p>

<form
  ref="contactForm"
  class="contact-form"
  @submit.prevent="submitForm"
>
  <input
    type="hidden"
    name="access_key"
    value="7f46d861-134d-4a75-9b20-658866a9b297"
  >

  <input
    type="checkbox"
    name="botcheck"
    style="display:none;"
  >

  <div class="contact-column">
    <input
      type="text"
      name="name"
      v-model="name"
      placeholder="Your Name"
      required
    >

    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="Email Address"
      required
    >

    <input
      type="tel"
      name="phone"
      v-model="phone"
      placeholder="Phone Number"
    >
  </div>

  <div class="contact-column">
    <textarea
      name="message"
      v-model="message"
      placeholder="Your Message"
      required
    ></textarea>
  </div>

  <button type="submit" class="contact-btn">
    Send Message
  </button>
</form>
</section>

    <section id="location" class="location">
      <h1>FIND OUR MOBILE STUDIO</h1>
      <p>📍 Westfield Bondi Junction, Oxford Street, Bondi Junction NSW, Australia <br>
      📧 hello@irisandlight.ai <br> <br>
      🕒 Mon, Tue & Wed 09:30 am – 06:00 pm<br>
      Fri 09:30 am – 07:00 pm <br>
      Sat & Sun 10:00 am – 06:00 pm</p>
      <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.9149621426336!2d151.248177411866!3d-33.89184387310611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12adf0fa8bf32d%3A0x6d613af64d7a36aa!2sWestfield%20Bondi%20Junction!5e0!3m2!1ses!2ses!4v1779303271075!5m2!1ses!2ses" 
      width="100%"
      height="450"
      style="border:0;
      " allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
<a 
  class="location-btn"
  href="https://maps.app.goo.gl/rkc4RKQp4wyE7GW96"
  target="_blank"
>
  See location
</a>
    </section>
    <section id="footer" class="footer">
      <div class="text"><p>© 2026 Iris & Light. All rights reserved.
<br> - <br>Iris & Light is operated by Sociabl Pty Ltd (ABN 42 684 648 011).</p></div>
      <div class="rrss-icons">
              <a class="instagram-icon" href="https://www.instagram.com/irisandlight.ai/" target="blank">
        <img src="../icons/instagram-icon.svg" alt="instagram icon">
      </a>
      <a class="instagram-icon" href="https://www.facebook.com/people/Iris-Light/61587880435565/" target="blank">
                <img src="../icons/facebook-icon.svg" alt="instagram icon">
      </a>
      </div>

      <div class="footer-links">
<router-link class="footer-link" to="/legal">
  Legal Notice & Privacy Policy
</router-link>
        <p>-</p>
<router-link class="footer-link" to="/legal#cookies">
  Cookies Policy
</router-link>      
</div>
    </section>
 </div>
 <BookSessionBtn/>
</template>

<script>


import foto1 from "../assets/foto1.jpg"
import foto2 from "../assets/foto2.jpg"
import foto3 from "../assets/foto3.jpg"
import foto4 from "../assets/foto4.jpg"
import foto5 from "../assets/foto5.jpg"
import foto6 from "../assets/foto6.jpg"
import foto7 from "../assets/foto7.jpg"
import foto8 from "../assets/foto8.jpg"
import foto9 from "../assets/foto9.jpg"
import foto10 from "../assets/foto10.jpg"

import hero1 from "../assets/hero-irisandlight1.jpg"
import hero2 from "../assets/hero-irisandlight2.jpg"
import hero3 from "../assets/hero-irisandlight3.jpg"
import hero4 from "../assets/hero-irisandlight4.jpg"
import hero5 from "../assets/hero-irisandlight5.jpg"
import hero6 from "../assets/hero-irisandlight6.jpg"

import prices1 from "../assets/prices1.jpg"
import prices2 from "../assets/prices2.jpg"
import prices3 from "../assets/prices3.jpg"
import prices4 from "../assets/prices4.jpg"
import prices5 from "../assets/prices5.jpg"
import prices6 from "../assets/prices6.jpg"
import prices7 from "../assets/prices7.jpg"
import prices8 from "../assets/prices8.jpg"
import prices9 from "../assets/prices9.jpg"
import prices10 from "../assets/prices10.jpg"
import prices11 from "../assets/prices11.jpg"
import prices12 from "../assets/prices12.jpg"
import prices13 from "../assets/prices13.jpg"
import prices14 from "../assets/prices14.jpg"
import prices15 from "../assets/prices15.jpg"

import BookSessionBtn from "./BookSessionBtn.vue"

export default {

  components: {
    BookSessionBtn
  },

  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",

      isScrolled: false,
      menuOpen: false,

      currentSlide: 0,
      direction: "next",

      // HERO
      currentHero: 0,
      nextHero: 1,
      fadeHero: false,

      heroImages: [
        hero1,
        hero2,
        hero3,
        hero4,
        hero5,
        hero6
      ],

      heroInterval: null,

      images: [
        foto1,
        foto2,
        foto3,
        foto4,
        foto5,
        foto6,
        foto7,
        foto8,
        foto9,
        foto10
      ],

      cardsToShow: 3,

priceCategories: [
{
title: "Print & Digital",
visible: 0,
items: [
{
image: prices1,
title: "Single Iris Experience",
options: [
{ size: "Print", price: "$79" },
{ size: "Digital", price: "$89" },
{ size: "Print + Digital", price: "$128" }
]
},
{
image: prices2,
title: "Couples Experience",
options: [
{ size: "2 Eyes & Digital Design Work", price: "$158" },
{ size: "Extra Eye", price: "$59" }
]
}
]
},

{
title: "Blocks",
visible: 0,
items: [
{
image: prices3,
title: "Acrylic Block (Framed in store)",
options: [
{ size: "1 Eye", price: "$198" },
{ size: "2 Eyes", price: "$250" },
{ size: "3 Eyes", price: "$310" },
{ size: "4 Eyes", price: "$350" }
]
},
{
image: prices4,
title: "Acrylic Blocks (Desk Ornaments)",
options: [
{ size: "10 × 10 cm", price: "$299" },
{ size: "20 × 20 cm", price: "$499" }
]
}
]
},

{
title: "Wearable Collection",
visible: 0,
items: [
{
image: prices5,
title: "Necklaces",
options: [
{ size: "Stainless Steel Small", price: "$120" },
{ size: "Stainless Steel Large", price: "$150" },
{ size: "Sterling Silver Small", price: "$330" },
{ size: "Sterling Silver Large", price: "$380" },
{ size: "Blue & White Zirconia Pendant", price: "$249" },
{ size: "Zirconia Halo Pendant", price: "$249" }
]
},
{
image: prices6,
title: "Bracelets & Accessories",
options: [
{ size: "Leather Wrap Bracelet", price: "$190" },
{ size: "Milanese Rope Bracelet", price: "$120" },
{ size: "Iris Charm Bracelet", price: "$130" },
{ size: "Personalised Iris Cufflinks", price: "$140" },
{ size: "Personal Iris Key Chain", price: "$90" },
{ size: "Double Iris Key Chain", price: "$110" }
]
}
]
},

{
title: "Wall Art - Acrylic",
description: "Includes - Iris capture, precision enhancement and artistic rendering, gallery quality print production, shipping, delivered ready to hang, all digital files + custom compositions",
visible: 0,
items: [
{
image: prices7,
title: "Square Acrylic",
options: [
{ size: "30 × 30 cm", price: "$580" },
{ size: "40 × 40 cm", price: "$680" },
{ size: "50 × 50 cm", price: "$780" },
{ size: "60 × 60 cm", price: "$880" },
{ size: "70 × 70 cm", price: "$980" },
{ size: "80 × 80 cm", price: "$1080" },
{ size: "90 × 90 cm", price: "$1300" },
{ size: "100 × 100 cm", price: "$1400" }
]
},

  {
    image: prices8,
    title: "2 Eyes Rectangular Acrylic Frames",
    options: [
      { size: "40 × 20 cm", price: "$600" },
      { size: "60 × 30 cm", price: "$750" },
      { size: "80 × 40 cm", price: "$950" },
      { size: "100 × 50 cm", price: "$1100" },
      { size: "120 × 60 cm", price: "$1200" }
    ]
  },

  {
    image: prices9,
    title: "3 Eyes Rectangular Acrylic Frames",
    options: [
      { size: "60 × 20 cm", price: "$700" },
      { size: "90 × 30 cm", price: "$950" },
      { size: "120 × 40 cm", price: "$1500" },
      { size: "150 × 50 cm", price: "$1750" }
    ]
  },

  {
    image: prices10,
    title: "4 Eyes Rectangular Acrylic Frames",
    options: [
      { size: "80 × 20 cm", price: "$1100" },
      { size: "120 × 30 cm", price: "$1500" },
      { size: "160 × 40 cm", price: "$1750" },
      { size: "200 × 50 cm", price: "$2000" }
    ]
  },

  {
    image: prices11,
    title: "Circular Acrylic Frames",
    options: [
      { size: "50 × 50 cm", price: "$840" },
      { size: "60 × 60 cm", price: "$990" },
      { size: "70 × 70 cm", price: "$1200" },
      { size: "80 × 80 cm", price: "$1350" },
      { size: "90 × 90 cm", price: "$1600" },
      { size: "100 × 100 cm", price: "$1750" }
    ]
  }
]

},

{
title: "Wall Art Direct Print Aluminium Dibond",
description: "Includes - Iris capture, precision enhancement and artistic rendering, gallery quality print production, shipping, delivered ready to hang, all digital files + custom compositions",
visible: 0,
items: [
{
image: prices12,
title: "Square Dibond",
options: [
{ size: "40 × 40 cm", price: "$550" },
{ size: "50 × 50 cm", price: "$620" },
{ size: "60 × 60 cm", price: "$690" },
{ size: "70 × 70 cm", price: "$760" },
{ size: "80 × 80 cm", price: "$830" },
{ size: "90 × 90 cm", price: "$900" },
{ size: "100 × 100 cm", price: "$970" }
]
},

  {
    image: prices13,
    title: "2 Eyes Rectangular Dibond",
    options: [
      { size: "40 × 20 cm", price: "$420" },
      { size: "60 × 30 cm", price: "$520" },
      { size: "80 × 40 cm", price: "$620" },
      { size: "100 × 50 cm", price: "$720" },
      { size: "120 × 60 cm", price: "$820" }
    ]
  },

  {
    image: prices14,
    title: "3 Eyes Rectangular Dibond",
    options: [
      { size: "60 × 20 cm", price: "$700" },
      { size: "90 × 30 cm", price: "$950" },
      { size: "120 × 40 cm", price: "$1500" },
      { size: "150 × 50 cm", price: "$1750" }
    ]
  },

  {
    image: prices15,
    title: "4 Eyes Rectangular Dibond",
    options: [
      { size: "80 × 20 cm", price: "$900" },
      { size: "120 × 30 cm", price: "$1300" },
      { size: "160 × 40 cm", price: "$1700" },
      { size: "200 × 50 cm", price: "$2000" }
    ]
  }
]

}
]
    }
  },

  methods: {
    updateCardsToShow() {
      if (window.innerWidth <= 900) {
        this.cardsToShow = 1
      } else if (window.innerWidth <= 1200) {
        this.cardsToShow = 2
      } else {
        this.cardsToShow = 3
      }
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

    handleScroll() {
      this.isScrolled = window.scrollY > 0
    },

    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },

    nextSlide() {
      this.direction = "next"

      this.currentSlide =
        (this.currentSlide + 1) % this.images.length
    },

    prevSlide() {
      this.direction = "prev"

      this.currentSlide =
        (this.currentSlide - 1 + this.images.length) %
        this.images.length
    },

    changeHeroImage() {
      this.nextHero =
        (this.currentHero + 1) % this.heroImages.length

      this.fadeHero = true

      setTimeout(() => {
        this.currentHero = this.nextHero
        this.fadeHero = false
      }, 1000)
    },

    nextPrice(category) {
      if (
        category.visible <
        category.items.length - this.cardsToShow
      ) {
        category.visible++
      }
    },

    prevPrice(category) {
      if (category.visible > 0) {
        category.visible--
      }
    },

    async submitForm() {
  const form = this.$refs.contactForm;
  const submitBtn = form.querySelector('button[type="submit"]');

  const formData = new FormData(form);

  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  try {
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Success! Your message has been sent.");

      this.name = "";
      this.email = "";
      this.phone = "";
      this.message = "";
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
}
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll)

    this.heroImages.forEach(src => {
      const img = new Image()
      img.src = src
    })

    this.heroInterval = setInterval(() => {
      this.changeHeroImage()
    }, 12000)

    this.updateCardsToShow()

    window.addEventListener(
      "resize",
      this.updateCardsToShow
    )
  },

  beforeUnmount() {
    window.removeEventListener(
      "scroll",
      this.handleScroll
    )

    if (this.heroInterval) {
      clearInterval(this.heroInterval)
    }

    window.removeEventListener(
      "resize",
      this.updateCardsToShow
    )
  }
}
</script>

<style scoped>

.header {
  position: relative;
  height: 100vh;
  overflow: hidden;
}


.header-bg {
  position: absolute;
  inset: 0;

  background-size: cover;
  background-position: center;

  animation: heroZoom 12s ease-in-out infinite alternate;
}

.header-bg-next {
  position: absolute;
  inset: 0;

  background-size: cover;
  background-position: center;

  opacity: 0;

  transition: opacity 1s ease;
}

.header-bg-next.active {
  opacity: 1;
}

.header::after {
  content: "";
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.7) 100%
    );

  pointer-events: none;
  z-index: 0;
}

@keyframes heroZoom {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.2);
  }
}

.overlay {
  position: relative;
  z-index: 1;
  height: 100vh;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.5s ease;
  z-index: 2147483647;
  transform: translateZ(0);
  padding: 50px;
  margin: 0;
  box-sizing: border-box;
}

.navbar.scrolled {
  padding: 25px 50px;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  z-index: 2147483647;
  transform: translateZ(0);
}

.logo {
    height: 60px;
    z-index: 999;
}

.navlinks {
    align-items: center;
    display: flex;
}

.navlink {
    text-decoration: none;
    color: white;
    margin-right: 30px;
    font-size: 18px;
    transition: all 0.5s ease;
  position: relative;
}

.navlink::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: -3px;
  left: 0;
  background-color: white;
  transform-origin: bottom center;
  transition: transform 0.3s ease-out;
}

.navlink:hover::after {
  transform: scaleX(1);
}

.booklink {
    text-decoration: none;
    color: black;
    font-size: 18px;
    padding: 10px 25px;
    background-color: white;
    border-radius: 100px;
    font-weight: 00;
    transition: all 0.5s ease;
}

.booklink:hover {
    box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.5);
}

.hero {
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
}

.hero h1 {
    color: white;
    font-size: 95px;
    text-align: center;
    font-weight: 900;
    margin-bottom: 15px;
    margin-top: 120px;
    padding: 0;
    line-height: 1.05;
}

.hero h3{
    color: rgb(156, 156, 156);
    font-size: 28px;
    font-weight: 400;
    margin: 0;
    margin-bottom: 75px;
}

.herobtns{
    display: flex;
    gap: 25px;
    margin: 0 auto;
    justify-content: center;
    justify-items: center;
}

.herobtn {
  text-decoration: none;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 15px 40px;
  border-radius: 100px;
  font-size: 20px;
  transition: all 0.5s ease;
  width: fit-content;
}

.herobtn:hover{
    background-color: white;
    color: black;
}

.process {
    padding: 100px 50px 0px 50px;
}

.process h1{
    color: white;
    text-align: center;
    font-size: 48px;
    font-weight: 900;
    z-index: 2;
}

.process p {
    color: rgb(196, 196, 196);
    text-align: center;
  font-size: 20px;

}

.cards {
    display:flex;
    width: 100%;
    gap: 30px;
    margin-top: 75px;
}

.card {
  position: relative;
  overflow: hidden;

  text-align: center;
  padding: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  width: 30%;

  transition: all 0.7s ease;

  background-color: transparent;
}

.card::before {
  content: "";
  position: absolute;
  inset: 0;

  background-size: cover;
  background-position: center;

  opacity: 0;
  transform: scale(1);

  transition:
    opacity 0.6s ease,
    transform 1.2s ease;

  z-index: 0;
}

.card::after {
  content: "";
  position: absolute;
  inset: 0;

  background: rgba(0,0,0,0.45);

  opacity: 0;

  transition: opacity 0.5s ease;

  z-index: 0;
}

.card:hover::before {
  opacity: 1;
  transform: scale(1.08);
}

.card:hover::after {
  opacity: 1;
}

.card-1::before {
  background-image: url('../assets/card1.jpg');
  z-index: 0;
}

.card-2::before {
  background-image: url('../assets/card2.jpg');
  z-index: 0;
}

.card-3::before {
  background-image: url('../assets/card3.jpg');
  z-index: 0;
}

.card:hover {
  z-index: 0;
    width: 45%;
}

.card h2 {
    color: black;
    padding: 20px;
    background-color: white;
    width: 35px;
    height: 35px;
    margin: 0 auto;
    border-radius: 50px;
    font-size: 28px;
    text-align: center;
  position: relative;
  z-index: 1;
}

.card h3 {
    color: white;
    margin-top: 30px;
    font-size: 28px;
  position: relative;
  z-index: 1;
}

.card p {
    position: relative;
  z-index: 1;
  font-size: 16px

}

.samples {
    padding: 100px 0px 0px 0px;
}

.samples h1{
    color: white;
    text-align: center;
    font-size: 48px;
    font-weight: 900;
}

.samples p {
    color: rgb(196, 196, 196);
    text-align: center;
  font-size: 20px;
  margin: 20px 50px;

}

.carousel-wrapper {
  position: relative;
  margin: 30px auto 0 auto;
  margin-top: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-track {
  position: relative;
  width: 100%;
  height: 700px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  z-index: 0;

}

.carousel-image {
  height: 100%;
  width: auto;

  object-fit: contain;

  position: absolute;

  left: 50%;
  top: 50%;

  z-index: 1;

  transform: translate(-50%, -50%);
  backface-visibility: hidden;
}

.side-image {
  width: 50%;
  height: 700px;
  object-fit: cover;
  opacity: 0.12;
  transition: all 0.9s ease;
  filter: blur(1px);
  border: 1px solid rgba(255,255,255, 0.5);
  z-index: 0;
}

.left-image {
  left: auto;
  z-index: 0;
}

.right-image {
  right: auto;
  z-index: 0;

}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: transparent;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
}

.carousel-btn:hover {
  scale: 110%;
  transform: translateY(-45%);
}

.carousel-btn.left {
  left: 50px;
  padding: 0;
}

.carousel-btn.right {
  right: 50px;
  padding: 0;
}

.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition:
    opacity 0.5s ease,
    margin-left 0.5s ease;
}

.slide-next-enter-from {
  opacity: 0;
  margin-left: -400px;
}

.slide-next-leave-to {
  opacity: 0;
  margin-left: 400px;
}

.slide-prev-enter-from {
  opacity: 0;
  margin-left: 400px;
}

.slide-prev-leave-to {
  opacity: 0;
  margin-left: -400px;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #555;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: white;
  transform: scale(1.25);
}

.gift {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 100px;
  border-radius: 100px;
  max-width: 800px;
}

.gift h3{
    color: white;
    text-align: center;
    font-size: 32px;
    font-weight: 900;
}

.heart {
    height: 100px;
}

.prices {
  padding: 100px 40px 10px 40px;
}

.prices h1 {
  color: white;
  text-align: center;
  font-size: 48px;
  font-weight: 900;
  margin-top: 0;
}

.prices > p {
  color: rgb(196,196,196);
  text-align: center;
  font-size: 20px;
  margin-bottom: 75px;
}

.category-description {
  color: rgb(196, 196, 196);
  text-align: center;
  max-width: 900px;
  margin: -25px auto 40px auto;
  font-size: 16px;
  line-height: 1.6;
}

.price-row {
  margin-bottom: 100px;
}

.price-row h2 {
  color: white;
  margin-bottom: 50px;
  font-size: 28px;
  text-align: center;
}

.price-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.price-cards {
    display:flex;
    width: 100%;
    gap: 30px;
    justify-content: center;
}

.price-card {
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  overflow: hidden;
  transition: 0.3s;
  width: 31%;
  height: auto;
}

.price-card:hover {
  scale: 1.05;
}

.price-card img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

.price-card h3 {
  color: white;
  padding: 20px 30px 0px;
  margin: 0;
}

.price-options {
  padding: 20px 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.price-option {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 4px 0;

  border-bottom: 1px solid rgba(255,255,255,0.15);

  color: white;
  font-size: 15px;
  gap: 15px;
}

.price-option:last-child {
  border-bottom: none;
}

.price-option span:last-child {
  font-weight: 700;
}

.price-arrow-left {
  width: 60px;
  border-radius: 100px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 0;
}

.price-arrow-left:hover {
  scale: 1.1;
}

.price-arrow-right {
  width: 60px;
  border-radius: 100px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 0;
}

.price-arrow-right:hover {
  scale: 1.1;
}


.booking {
  background-color: white;
  margin: 50px 50px 0px 50px;
  padding: 50px;
  border-radius: 50px;
}

.booking h1 {
    text-align: center;
    font-size: 48px;
    font-weight: 900;
}

.booking p {
  text-align: center;
  font-size: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.booking-cards {
  display: flex;
  text-decoration: none;
  justify-content: center;
  width: 100%;
  gap: 25px;
}

.booking-card {
  color: black;
  padding: 30px;
  outline: 1px solid black;
  border-radius: 50px;
  margin: 0px;
  text-align: center;
  width: 20%;
  transition: 0.3s ease-in-out;
  align-content: center;
}

.booking-card:hover{
  background-color: rgba(240, 240, 240, 1);
  outline: solid 1px rgba(240, 240, 240, 1);
  scale: 1.05;
}

.booking-img {
  width: 80px;
  margin-bottom: 20px;
  margin-top: 10px;
}

.booking h3 {
  margin: 0;
  font-weight: 100;
  margin-bottom: 20px;
}

.form {
  max-width: 1200px;
  margin: 75px auto 50px auto;

  gap: 25px;
}

.form input, form textarea {
  width: 100%;
  height: 65px;
  padding: 0 30px;

  border-radius: 100px;
  border: 1px solid black;

  font-size: 16px;
  outline: none;

  box-sizing: border-box;
  font-family: 'Helvetica';

  background-color: white;
  color: rgba(0, 0, 0, 0.7);

  opacity: 1;
}

.form input::placeholder {
  color: rgba(0, 0, 0, 0.4);
}

.form input:focus {
  border: 1px solid rgb(180, 180, 180);
}

input[type="date"],
input[type="time"] {
  color: rgba(0, 0, 0, 0.4);
  background: white;
  -webkit-appearance: none;
  appearance: none;
}

.confirm-btn {
  padding: 15px 30px;

  display: block;
  margin: 0 auto;

  border: none;
  border-radius: 100px;

  background-color: black;
  color: white;

  font-family: Helvetica;
  font-size: 20px;
  font-weight: 400;

  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 35px;
}

.confirm-btn:hover {
  scale: 105%;
}

.contact {
  margin: 50px;
  padding: 50px;
  background-color: rgba(25, 25, 25, 1);
  border-radius: 50px;
}

.contact h1 {
  text-align: center;
  font-size: 48px;
  font-weight: 900;
  color: white;
}

.contact p {
  color: white;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 75px auto;
}

.contact-form {
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.contact-column {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 20px 30px;

  border-radius: 35px;
  border: 1px solid rgba(255, 255, 255, 0.3);

  background: transparent;
  color: white;

  font-family: Helvetica;
  font-size: 16px;

  box-sizing: border-box;

  transition: all 0.3s ease;
}

.contact-form textarea {
  min-height: 220px;
  height: 100%;
  resize: vertical; 
  border-radius: 30px;
}

.contact-btn {
  grid-column: 1 / -1;
  justify-self: center;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(255,255,255,0.4);
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: white;
}

.contact-btn {
  width: fit-content;
  margin: 20px auto 0 auto;
  margin-bottom: 50px;

  border: 1px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  color: white;

  padding: 15px 35px;
  border-radius: 100px;

  font-size: 20px;
  cursor: pointer;

  transition: all 0.4s ease;
}

.contact-btn:hover {
  background: white;
  color: black;
}

.location {
  margin: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  padding: 50px;
  justify-content: center;
  justify-items: center;
}

.location h1 {
    text-align: center;
    font-size: 48px;
    font-weight: 900;
    color: white;
}

.location p{
  color: white;
  text-align: center;
  margin-bottom: 75px;
}

.location-btn {
  display: block;
  width: fit-content;

  text-decoration: none;

  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 15px 30px;
  background-color: transparent;
  border-radius: 100px;

  font-family: Helvetica;

  font-size: 20px;

  margin: 50px auto 0 auto;

  transition: all 0.4s ease;
}

.location-btn:hover {
  background-color: white;
  color: black;
}

.footer {
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 50px 50px 100px 50px;
  align-items: center;
}

.footer p{
  margin: 0;
}

.rrss-icons {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  transition: 0.5s ease-in-out;
  text-decoration: none;
  color: white;
  font-size: 14px;
  align-items: center;
}

.instagram-icon img{
  width: 30px;
}


.footer-links{
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-left: 250px;
}

.footer-link {
    text-decoration: none;
    color: white;
}

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

/* ANIMACIÓN X */

.hamburger span:nth-child(1).open {
  transform: translateY(8px) rotate(45deg);
}

.hamburger span:nth-child(2).open {
  opacity: 0;
}

.hamburger span:nth-child(3).open {
  transform: translateY(-8px) rotate(-45deg);
}

.navlink,
.booklink,
.herobtn,
.location-btn,
.footer-link {
  cursor: pointer;
}

/* RESPONSIVE */

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

    background: rgba(0,0,0,0.95);

    flex-direction: column;
    align-items: center;
    gap: 30px;

    padding: 40px 0;
    padding-top: 150px;

    opacity: 0;
    pointer-events: none;

    transform: translateY(-20px);

    transition: all 0.4s ease;
  }

  .navlinks.active {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
  }

  .navlink,
  .booklink {
    margin-right: 0;
  }

  .booklink {
    margin-top: 10px;
  }

  .hero h1{
    font-size: 80px;
  }

  .carousel-btn.left {
  left: 20px;
  padding: 0;
}

  .carousel-btn.right {
  right: 20px;
  padding: 0;
}

    .price-card {
    width: 48%;
  }
}

@media (max-width: 1000px) {

    .hero h1{
    font-size: 72px;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 75px;
  }

  .card {
    width: calc(50% - 15px);
    max-width: calc(50% - 15px);
    box-sizing: border-box;
    min-height: 360px;
  }

   .card:hover {
    width: calc(50% - 15px);
   }

  .card-3 {
    width: calc(50% - 15px);
    max-width: calc(50% - 15px);
  }

  .carousel-track {
  max-height: 600px;
}

  .gift{
    flex-wrap: wrap;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 75px;
    margin-bottom: 25px;
  }

  .gift h3{
    margin: 0;
  }

  .booking-cards {
    flex-wrap: wrap;
    width: 100%;
  }

  .booking-card {
    width: 47%;
    box-sizing: border-box;
  }
  

}

@media (max-width: 900px) {
  .price-card {
  width: 80%;
  height: auto;
}
}

@media (max-width: 769px) {

  .header::after {
  content: "";
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.7) 100%
    );

  pointer-events: none;
  z-index: 0;
}

  .hero h1{
    font-size: 68px;
    margin: 100px 50px 10px;
  }

  .hero h3 {
    margin: 0px 50px 75px;
  }

  .cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 100%;
    max-width: 100%;
    min-height: 360px;
  }

     .card:hover {
    width: 100%;
   }

    .carousel-track {
  max-height: 400px;
}

  .carousel-btn.left {
    width: 60px;
  left: 10px;
  padding: 0;
}

.carousel-btn.right {
  width: 60px;
  right: 10px;
  padding: 0;
}

.samples h1{
  margin-left: 50px;
  margin-right: 50px;
}

.samples p {
  margin-left: 50px;
  margin-right: 50px;
}

.price-card {
  width: 100%;
}

.price-row {
  margin-bottom: 75px;
}

.booking-cards{
  width: 100%;
}

  .booking-card {
    width: 100%;
  }
  

.form{
  display: flex;
  flex-direction: column;
}

.form input {
  width: 100%;
}

.contact-form{
  display: flex;
  flex-direction: column;
}

.footer {
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: 0px;
}

.text{
  margin-bottom: 120px;
}

.instagram-icon {
  margin: 0 auto
}

.footer-links{
  text-align: center;
  margin: 0 auto;
}
}

@media (max-width: 600px) {

  .navbar {
    padding: 30px 30px;
  }

  .navbar.scrolled {
    padding: 20px 30px;
  }

  .logo{
    height: 45px;
  }

  .hero h1 {
    font-size: 52px;
    margin: 120px 30px 10px;
  }

  .hero h3 {
    font-size: 24px;
    margin: 0px 30px 50px;
  }
  .herobtns {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .herobtn {
    width: auto;          /* evita 100% */
    display: inline-flex; /* comportamiento estable */
    justify-content: center;
  }

  .process {
    padding: 80px 30px 0px;
  }

  .process h1 {
    font-size: 32px;
  }

  .card h3 {
    font-size: 24px;
  }

  .samples h1 {
    font-size: 32px;
    margin: 20px 30px;
  }

  .carousel-btn.left {
    width: 50px;
    height: 50px;
  }

  .carousel-btn.right {
    width: 50px;
    height: 50px;
  }

  .prices h1 {
    font-size: 32px;
  }

  .prices h2{
    font-size: 24px;
  }

  .samples p{
    margin: 20px 30px;
  }

    .carousel-track {
  height: 350px;
}
.carousel-image {
  height: 350px;
  width: 100%;
  width: 100%;
}
.side-image {
  height: 350px;

}


  .gift h3 {
    font-size: 24px;
    margin: 0px 50px;

  }

  .prices {
    padding: 80px 20px 0px;
}

  .price-carousel{
    gap: 10px;
  }


  .booking {
    padding: 50px 30px;
    margin: 80px 30px 0px;
  }

  .booking h1{
    font-size: 32px;
  }

  .form {
    margin: 50px 0px 30px;
  }


  .contact {
    padding: 50px 30px;
    margin: 60px 30px 0px;
}

  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact-column {
    width: 100%;
  }

  .contact-btn {
    display: block;
    width: fit-content;
    margin: 20px auto 0 auto;
  }



  .location {
    padding: 50px 30px;
    margin: 60px 30px 0px;
  }

  .location h1{
    font-size: 32px;
  }

}

@media (max-width: 480px) {
  
    .navbar {
    padding: 20px
  }

    .navbar.scrolled {
    padding: 15px 20px;
  }

    .hero h1 {
    font-size: 32px;
    margin: 160px 30px 10px;
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
    padding: 80px 20px 0px;
  }

    .card {
    width: 100%;
    max-width: 100%;
    min-height: 320px;
  }

  .process h1 {
    font-size: 26px;
  }

  .process p{
    font-size: 16px;
  }

    .samples h1 {
    font-size: 28px;
    margin: 20px 30px;
  }

  .samples p{
    font-size: 16px;
    margin: 20px 30px;
  }



    .prices {
    padding: 80px 10px 0px;
}

  .prices h2{
    margin: 20px 20px 50px ;
  }

  .prices p{
        font-size: 16px;
        margin-left: 10px;
        margin-right: 10px;
  }

  .price-carousel {
    gap: 8px;
  }

  .price-row {
  margin-bottom: 50px;
}

.price-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

    .contact {
    padding: 50px 20px;
    margin: 40px 20px 0px;
}


    .booking {
    padding: 50px 20px;
    margin: 80px 20px 0px;
  }

  .booking p{
    font-size: 16px;
  }

  .confirm-btn{
    font-size: 16px;
  }

  .contact h1 {
    font-size: 32px;
  }

  .contact-btn{
    font-size: 16px;
  }

  .location-btn{
    font-size: 16px;
  }

    .location {
    padding: 50px 20px;
    margin: 40px 20px 0px;
  }
}
</style>