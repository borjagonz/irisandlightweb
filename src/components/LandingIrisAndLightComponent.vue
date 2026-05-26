<template>
 <div class="landing">
    <header class="header">
        <div class="overlay">
<nav :class="['navbar', { scrolled: isScrolled }]">
    <img class="logo" src="../assets/IrisAndLight-logo-white.png" alt="">

    <button class="hamburger" @click="toggleMenu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
    </button>

    <div :class="['navlinks', { active: menuOpen }]">
        <a class="navlink" href="">Prices</a>
        <a class="navlink" href="">Samples</a>
        <a class="navlink" href="">Contact Us</a>
        <a class="navlink" href="#location">Find Us</a>
        <a class="booklink" href="#booking">Book a Session</a>
        <div>
            <a class="langbtn" href="">
                <img src="" alt="">
            </a>
        </div>
    </div>
</nav>
        <div class="hero">
            <h1>YOUR EYE. <br>TURNED INTO ART.</h1>
            <H3>TURN YOUR IRIS INTO STUNING <br>PERSONALISED ARTWORK</H3>
            <div class="herobtns">
                <a class="herobtn" href="#samples">See Samples</a>
                <a class="herobtn" href="#booking">Book a Session</a>
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
    <section id="booking" class="booking">
      <h1>BOOK YOUR SESSION</h1>
      <p>Come and visit us to feel the iris experience. Choose the day and time that you wish and we'll do a photoshoot of your iris.</p>
<div class="form">

  <input
    type="text"
    id="name"
    name="name"
    placeholder="Name"
  >

  <input
    type="tel"
    id="phone"
    name="phone"
    placeholder="Phone Number"
  >

  <input
    type="date"
    id="date"
    name="date"
  >

  <input
    type="time"
    id="hour"
    name="hour"
  >

</div>

<button class="confirm-btn">
  Confirm Booking
</button>
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
  href="https://maps.google.com/?q=Eye+Origin+Porto"
  target="_blank"
>
  See location
</a>
    </section>
    <section id="footer" class="footer">
      <div class="text"><p>Iris & Light<br> - <br>© All rights reserved</p></div>
      <a class="instagram-icon" href="https://www.instagram.com/irisandlight.ai/" target="blank">
        <img src="../icons/facebook-icon.svg" alt="instagram icon">
        <img src="../icons/instagram-icon.svg" alt="instagram icon">
      </a>
      <div class="footer-links">
        <a class="footer-link" href="">Legal Notice & Privacy Policy</a>
        <p>-</p>
        <a class="footer-link" href="">Cookies Policy</a>
      </div>
    </section>
 </div>
</template>

<script>
import foto1 from "../assets/foto1.jpg"
import foto2 from "../assets/foto2.jpg"
import foto3 from "../assets/foto3.jpg"
import foto4 from "../assets/foto4.jpg"

export default {
  data() {
    return {
      whatsappLink: "https://wa.me/34699699551",

      isScrolled: false,

      menuOpen: false,

      currentSlide: 0,

      direction: "next",

      images: [
        foto1,
        foto2,
        foto3,
        foto4
      ]
    }
  },

  methods: {
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

    sendEmail() {
      const subject = `Nou missatge de ${this.name}`

      const body =
`Nom: ${this.name}

Email: ${this.email}

Missatge:
${this.message}`

      window.location.href =
        `mailto:borjagonz@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }
}
</script>

<style scoped>

.header {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.header::before {
  content: "";
  position: absolute;
  inset: 0;

  background-image: url(../assets/hero-eyeoriginporto.jpg);
  background-size: cover;
  background-position: center;

  animation: heroZoom 12s ease-in-out infinite alternate;

  transform: scale(1);
  will-change: transform;

  z-index: -1;
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
  height: 100vh;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    transition: all 0.5s ease;
    z-index: 1000;  
    padding: 50px;
    margin: 0;
    box-sizing: border-box;
}

.navbar.scrolled {
  padding: 25px 50px;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.4);
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
  bottom: 0;
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
}

.herobtn {
  text-decoration: none;
    color: white;
    border: 2px solid rgb(50, 50, 50);
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
}

.process p {
    color: rgb(196, 196, 196);
    text-align: center;
  font-size: 20px;

}

.cards {
    display:flex;
    width: 100%;
    gap: 50px;
    margin-top: 75px;
}

.card {
  position: relative;
  overflow: hidden;

  text-align: center;
  padding: 50px;
  border: 2px solid rgb(50, 50, 50);
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

  z-index: 1;
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
}

.card-2::before {
  background-image: url('../assets/card2.jpg');
}

.card-3::before {
  background-image: url('../assets/card3.jpg');
}

.card:hover {
  scale: 105%;
  width: 40%;
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
  z-index: 2;
}

.card h3 {
    color: white;
    margin-top: 30px;
    font-size: 28px;
  position: relative;
  z-index: 2;
}

.card p {
    position: relative;
  z-index: 2;
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
  height: 750px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
}

.carousel-image {
  height: 750px;
  width: auto;
  max-width: 70vw;

  object-fit: contain;

  position: absolute;

  left: 50%;
  top: 50%;

  z-index: 5;

  transform: translate(-50%, -50%);
  backface-visibility: hidden;
}

.side-image {
  width: 50%;
  height: 750px;
  object-fit: cover;
  opacity: 0.15;
  transition: all 0.9s ease;
  filter: blur(1px);
  border: 1px solid rgba(255,255,255, 0.5);
}

.left-image {
  left: auto;
}

.right-image {
  right: auto;
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
  z-index: 20;
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
  margin-left: -120px;
}

.slide-next-leave-to {
  opacity: 0;
  margin-left: 120px;
}

.slide-prev-enter-from {
  opacity: 0;
  margin-left: 120px;
}

.slide-prev-leave-to {
  opacity: 0;
  margin-left: -120px;
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
    margin-top: 100px;
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

.booking {
  background-color: white;
  margin: 100px 50px 0px 50px;
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

.form {
  max-width: 1200px;
  margin: 75px auto 50px auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
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
  max-width: 1200px;

  height: 65px;
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
  margin-bottom: 50px;
}

.confirm-btn:hover {
  scale: 105%;
}

.location {
  margin: 50px;
  border: 2px solid rgb(50, 50, 50);
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

  border: 2px solid rgb(50, 50, 50);
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

.instagram-icon {
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

/* RESPONSIVE */

@media (max-width: 1200px) {

  .navbar {
    padding: 30px;
  }

  .navbar.scrolled {
    padding: 20px 30px;
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
    min-height: 410px;
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
  }

  .gift h3{
    margin: 0;
  }
}

@media (max-width: 769px) {

  .hero h1{
    font-size: 60px;
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
    min-height: 410px;

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

.form{
  display: flex;
  flex-direction: column;
}

.form input {
  width: 100%;
}

.footer {
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
}

.text{
  margin-bottom: 200px;
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

  .logo{
    height: 45px;
  }

  .hero h1 {
    font-size: 32px;
    margin: 50px 30px 10px;
  }

  .hero h3 {
    font-size: 20px;
    margin: 0px 30px 50px;
  }
  .herobtns {
    flex-direction: column;
    align-items: center; /* clave */
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

  .confirm-btn {
    margin-bottom: 30px;
  }

  .location {
    padding: 50px 30px;
    margin: 80px 30px 0px;
  }

  .location h1{
    font-size: 32px;
  }

}
</style>