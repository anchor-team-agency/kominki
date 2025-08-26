import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PanKominek",
    "description": "Profesjonalny montaż kominków w Gdańsku. Projektowanie, instalacja i serwis kominków.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Przykładowa 1",
      "addressLocality": "Gdańsk",
      "postalCode": "80-000",
      "addressCountry": "PL"
    },
    "telephone": "+48500200949",
    "email": "biuro@pankominek.eu",
    "url": "https://pankominek.lovable.app",
    "areaServed": {
      "@type": "City",
      "name": "Gdańsk"
    },
    "serviceType": ["Montaż kominków", "Projektowanie kominków", "Serwis kominków"],
    "priceRange": "$$"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Montaż kominków w Gdańsku",
    "description": "Kompleksowy montaż kominków z projektem 3D, dostawą i uruchomieniem.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "PanKominek"
    },
    "areaServed": {
      "@type": "City", 
      "name": "Gdańsk"
    },
    "serviceType": "Montaż kominków"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <link rel="canonical" href="https://pankominek.lovable.app/" />
    </Helmet>
  );
};

export default StructuredData;