<template>
  <div class="legal-page">
      <div class="logo-home">
          <router-link to="/" class="logo-link">
    <img
      src="../assets/IrisAndLight-logo-white.png"
      alt="Iris & Light"
      class="legal-logo"
    >
  </router-link>

  <router-link to="/" class="back-home-btn">
    ← Go back home
  </router-link>
    </div>


<div class="legal-container">



  <h1>Legal Information</h1>

  <section>
    <h2>01 /</h2>

    <h3>Privacy Policy</h3>

    <p>
      At Iris & Light, we respect your privacy and are committed to
      protecting your personal information.
    </p>

    <h4>Information We Collect</h4>

    <ul>
      <li>Name</li>
      <li>Email address</li>
      <li>Phone number</li>
      <li>Billing and shipping information</li>
      <li>Booking details</li>
      <li>Iris photographs and artwork files</li>
      <li>Website usage information</li>
      <li>Marketing preferences</li>
    </ul>

    <h4>How We Use Your Information</h4>

    <p>
      We use your information to process bookings and orders,
      deliver products and services, provide customer support,
      improve our website and customer experience, and comply
      with legal obligations.
    </p>
  </section>

  <section>
    <h2>02 /</h2>

    <h3>Terms of Use</h3>

    <p>
      By accessing and using the Iris & Light website, you agree
      to these Terms of Use.
    </p>

    <h4>Website Content</h4>

    <p>
      All content on this website, including text, graphics,
      logos, images and designs, is the property of Iris & Light
      and may not be reproduced without permission.
    </p>
  </section>

  <section>
    <h2>03 /</h2>

    <h3>Shipping & Delivery Policy</h3>

    <h4>Production Times</h4>

    <p>Digital Products: 1–7 business days</p>
    <p>Physical Products: 2–6 weeks</p>

    <h4>Shipping</h4>

    <p>
      Delivery timeframes depend on destination and shipping provider.
    </p>
  </section>

  <section>
    <h2>04 /</h2>

    <h3>Returns & Refunds Policy</h3>

    <p>
      Australian Consumer Law applies.
    </p>

    <p>
      As all artwork is custom-created using your unique iris image,
      refunds are generally not available for change of mind or
      approved selections.
    </p>
  </section>

  <section>
    <h2>05 /</h2>

    <h3>Booking Policy</h3>

    <p>
      Appointments can be booked online or in person.
    </p>

    <p>
      Walk-ins are welcome subject to availability.
    </p>

    <p>
      Customers arriving more than 15 minutes late may need
      to be rescheduled.
    </p>
  </section>

  <section>
    <h2>06 /</h2>

    <h3>Photography Disclaimer</h3>

    <p>
      Iris & Light provides artistic photography services only.
    </p>

    <p>
      Our services are not medical procedures and are not intended
      to diagnose any condition.
    </p>
  </section>

  <section id="cookies">
    <h2>07 /</h2>

    <h3>Cookie Policy</h3>

    <p>
      Our website may use cookies and similar technologies to improve
      your browsing experience and website functionality.
    </p>
  </section>

  <section>
    <h2>08 /</h2>

    <h3>Gift Card Terms</h3>

    <p>
      Gift cards are valid for 36 months from purchase unless
      otherwise required by law.
    </p>
  </section>

  <section>
    <h2>09 /</h2>

    <h3>How Your Iris Images Are Used</h3>

    <p>
      We photograph the visible patterns and colours of your iris
      to create personalised artwork.
    </p>

    <p>
      We do not sell your images or use them in marketing without
      permission.
    </p>
  </section>
<br><br><br>
  <p class="corporate">Iris & Light is operated by Sociabl Pty Ltd. <br>
ABN: 42 684 648 011 <br>
Registered business address: 33 Foster Street, Surry Hills, Sydney 2010 <br>
Email: hello@irisandlight.ai <br>
0499242420

© 2026 Iris & Light. All rights reserved.</p>

</div>


  </div>
</template>

<style scoped>
.legal-page {
  background: #000;
  color: white;
  padding: 50px;
}

.legal-container {
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  font-size: 42px;
  margin-bottom: 80px;
  text-align: left;
  margin-top: 250px;
}

section {
  margin-bottom: 80px;
}

h2 {
  font-size: 18px;
  color: #999;
  text-transform: uppercase;
  margin-bottom: 0px;
}

h3 {
  font-size: 36px;
  margin-bottom: 25px;
}

h4 {
  font-size: 22px;
  margin-top: 30px;
  margin-bottom: 15px;
}

p,
li {
  color: #d0d0d0;
  line-height: 1.8;
  font-size: 18px;
}

ul {
  padding-left: 25px;
}

.logo-home{
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  z-index: 999;
  top: 0;
  left: 0;
  padding: 50px;
  width: 100%;
  box-sizing: border-box;
}

.logo-link {
  display: block;
  width: fit-content;
  margin: 0px;
}

.legal-logo {
  height: 50px;
  display: block;
  transition: all 0.3s ease;
}


.back-home-btn {
  display: flex;
  width: fit-content;
  margin: 0px;
  height: fit-content;


  text-decoration: none;
  color: white;

  border: 1px solid rgb(80, 80, 80);
  padding: 14px 28px;
  border-radius: 100px;

  transition: all 0.3s ease;

  display: inline-block;

}

.back-home-btn:hover {
  background: white;
  color: black;
}

.corporate {
    color: rgb(120, 120, 120);
    line-height: 1.2;
}
</style>
