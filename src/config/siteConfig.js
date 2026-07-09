import companyLogo from "@/assets/logos/companyLogo.png";

export const siteConfig = {
  business: {
    name: "Delightful Cakes",
    tagline: "Crafted with Love, Baked with Passion",
    description:
      "Premium handcrafted cakes for birthdays, weddings, anniversaries, and every special celebration.",

    logo: companyLogo,
    favicon: "/favicon.ico",
    established: "2020",
  },

  contact: {
    phone: "+91 1234567890",
    whatsapp: "+911234567890",
    email: "hello@delightfulcakes.com",
  },

  address: {
    street: "123 Bakery Street",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
    country: "India",
  },

  social: {
    instagram: "https://instagram.com/delightfulcakes",
    facebook: "https://facebook.com/delightfulcakes",
    youtube: "",
    pinterest: "",
  },

  seo: {
    defaultTitle: "Delightful Cakes",
    titleTemplate: "%s | Delightful Cakes",
    description:
      "Premium handcrafted cakes made for every celebration.",
    keywords: [
      "cake shop",
      "birthday cakes",
      "custom cakes",
      "bakery",
      "wedding cakes",
    ],
  },

  businessHours: {
  monday: "09:00 AM - 09:00 PM",
  tuesday: "09:00 AM - 09:00 PM",
  wednesday: "09:00 AM - 09:00 PM",
  thursday: "09:00 AM - 09:00 PM",
  friday: "09:00 AM - 09:00 PM",
  saturday: "09:00 AM - 09:00 PM",
  sunday: "10:00 AM - 06:00 PM",
  },
};