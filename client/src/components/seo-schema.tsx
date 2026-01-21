import { personalInfo } from "@/data/portfolio-data";

export function SEOSchema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.role,
    description: personalInfo.tagline,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: personalInfo.location,
      addressCountry: "IN",
    },
    url: "https://yuvarajyali.vercel.app",
    sameAs: [
      personalInfo.github,
      personalInfo.linkedin,
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Manipal Institute of Technology",
    },
    knowsAbout: [
      "Full-Stack Development",
      "UI/UX Design",
      "React",
      "Vue.js",
      "FastAPI",
      "Flask",
      "Node.js",
      "IoT Development",
      "Arduino",
      "Civic Technology",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
