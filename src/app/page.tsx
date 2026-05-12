"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="noise"
        cardStyle="gradient-mesh"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Menu", id: "menu" },
        { name: "Reviews", id: "reviews" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Linguine"
      button={{ text: "Book Table", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Linguine"
      description="Where Italian Flavor Meets Egyptian Warmth"
      buttons={[{ text: "View Menu", href: "#menu" }, { text: "Book a Table", href: "#contact" }]}
      imageSrc="http://img.b2bpic.net/free-photo/fried-eggs-pan-with-chopped-herbs_140725-6158.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "The Fusion of Two Cultures in Abou Youssef" },
        { type: "image", src: "http://img.b2bpic.net/free-photo/tea-set-with-baklava-jams-dried-fruits_140725-8096.jpg", alt: "Restaurant Interior" },
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        { id: "1", name: "Classic Pepperoni", price: "$12", imageSrc: "http://img.b2bpic.net/free-photo/pizza-with-pepperoni-mushrooms_114579-4475.jpg" },
        { id: "2", name: "Margherita Gold", price: "$10", imageSrc: "http://img.b2bpic.net/free-photo/baking-delicious-pizza-with-wood-fired-oven_23-2150134278.jpg" },
        { id: "3", name: "Alexandria Sea", price: "$15", imageSrc: "http://img.b2bpic.net/free-photo/side-view-pizza-with-tomatoes-mushrooms-olives_141793-1392.jpg" },
        { id: "4", name: "Truffle Bliss", price: "$18", imageSrc: "http://img.b2bpic.net/free-photo/chef-holding-seafood-pizza-with-shrimp-mussels-calamari-squid-cheese_141793-2291.jpg" },
        { id: "5", name: "Four Seasons", price: "$14", imageSrc: "http://img.b2bpic.net/free-photo/delicious-neapolitan-pizza-board_78826-3300.jpg" },
        { id: "6", name: "Veggie Royale", price: "$11", imageSrc: "http://img.b2bpic.net/free-photo/crispy-pizza-made-from-kiwi-fruit-banana_140725-7253.jpg" },
      ]}
      title="Signature Pizza Selection"
      description="Our most popular handmade pizzas, crafted with passion."
    />
  </div>

  <div id="chef-specials" data-section="chef-specials">
      <TeamCardOne
      animationType="scale-rotate"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        { id: "c1", name: "Chef Marco", role: "Pizza Master", imageSrc: "http://img.b2bpic.net/free-photo/chef-white-uniform-prepare-pizzaa_1157-27033.jpg" },
        { id: "c2", name: "Chef Ahmed", role: "Fusion Specialist", imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-preparing-pasta-pan_23-2148296933.jpg" },
        { id: "c3", name: "Chef Sophia", role: "Head Chef", imageSrc: "http://img.b2bpic.net/free-photo/happy-professional-male-chef-looking-camera_23-2147863770.jpg" },
      ]}
      title="Meet Our Chefs"
      description="The masters behind our Italian-Egyptian fusion."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardTwentyNine
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      animationType="blur-reveal"
      useInvertedBackground={true}
      features={[
        { title: "Pizza Tossing", description: "Authentic technique.", imageSrc: "http://img.b2bpic.net/free-photo/front-view-hand-sprinkling-flour-dough-cutting-board_23-2148361307.jpg", titleImageSrc: "", buttonText: "View" },
        { title: "Pasta Plates", description: "Chef favorites.", imageSrc: "http://img.b2bpic.net/free-photo/front-view-cooked-pasta-yummy-inside-white-plate-grey-floor_140725-14394.jpg", titleImageSrc: "", buttonText: "View" },
        { title: "Main Bar", description: "Modern ambiance.", imageSrc: "http://img.b2bpic.net/free-photo/classic-old-fashioned-library-space-with-elegant-wooden-interiors_482257-125296.jpg", titleImageSrc: "", buttonText: "View" },
        { title: "Signature Sweets", description: "Handmade daily.", imageSrc: "http://img.b2bpic.net/free-photo/indulgent-dessert-dark-chocolate-fudge-with-strawberries-generated-by-ai_188544-22763.jpg", titleImageSrc: "", buttonText: "View" },
      ]}
      title="A Taste of Linguine"
      description="Visual highlights from our kitchen and dining experience."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      showRating={true}
      testimonials={[
        { id: "1", name: "Sarah Ahmed", handle: "@sarah.a", testimonial: "Best pizza in El Agamy!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-modern-man_23-2147960990.jpg" },
        { id: "2", name: "John Doe", handle: "@johndoe", testimonial: "Authentic fusion, loved it.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-woman-white-shirt_1303-24912.jpg" },
        { id: "3", name: "Laila M.", handle: "@lailam", testimonial: "Perfect atmosphere for family.", rating: 4, imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-smiling-man_171337-20064.jpg" },
        { id: "4", name: "Omar K.", handle: "@omark", testimonial: "Chef special is incredible.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-attractive-sucsessful-business-woman-posing-outdoor-wavy-hairs-white-elegant-jacket_273443-3218.jpg" },
        { id: "5", name: "Family Trip", handle: "@family", testimonial: "Friendly service and delicious food.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-black-family-enjoying-meal-dining-table-home_637285-12647.jpg" },
      ]}
      title="Guest Experiences"
      description="Loved by locals and visitors alike."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        { id: "q1", title: "Do you take reservations?", content: "Yes, please book online." },
        { id: "q2", title: "Is there parking?", content: "Parking available nearby." },
        { id: "q3", title: "Are you family-friendly?", content: "Yes, we have high chairs." },
      ]}
      mediaAnimation="slide-up"
      title="Common Questions"
      description="Everything you need to know about Linguine."
      faqsAnimation="blur-reveal"
      imageSrc="http://img.b2bpic.net/free-photo/delicious-fresh-pizza_23-2151946415.jpg"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{ variant: "radial-gradient" }}
      tag="Booking"
      title="Visit Us in Alexandria"
      description="Abou Youssef, El Agamy. Open daily."
      buttons={[{ text: "Reserve Now", href: "#contact" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Linguine"
      copyrightText="© 2025 Linguine. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}