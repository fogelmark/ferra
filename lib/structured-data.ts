export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeAgency",
  "@id": "https://ferrastudio.com/#organization",
  name: "Ferra Studio",
  url: "https://ferrastudio.com",
  logo: {
    "@type": "ImageObject",
    url: "https://ferrastudio.com/images/logo.png"
  },
//   sameAs: [
//     "https://www.instagram.com/ferrastudio",
//     "https://www.linkedin.com/company/ferrastudio"
//   ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stockholm",
    addressCountry: "SE"
  }
};