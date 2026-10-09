import { Award, BadgeCheck, ExternalLink } from "lucide-react";

/* Certificate images live in src/assets and are imported so Vite fingerprints
   them — same convention as the project screenshots. */
import pytorchSegmentationCert from "../assets/cert-pytorch-image-segmentation.webp";

const certifications = [
  {
    id: 1,
    title: "Deep Learning with PyTorch: Image Segmentation",
    issuer: "Coursera Project Network",
    date: "Oct 2026",
    description:
      "Pixel-level computer vision in PyTorch — training a model to outline exactly where an object is in an image, not just name what it is.",
    image: pytorchSegmentationCert,
    tags: ["PyTorch", "Image Segmentation", "Computer Vision", "Deep Learning"],
    credentialId: "C3BHZQBN7MPE",
    verifyUrl: "https://coursera.org/verify/C3BHZQBN7MPE",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Certifications</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Verified, hands-on proof of the deep learning skills behind my
          projects.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group flex w-full md:w-[calc(50%-1rem)] flex-col bg-card border border-border rounded-lg overflow-hidden shadow-2xs card-hover text-left"
            >
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[1210/935] overflow-hidden bg-white"
                aria-label={`Verify ${cert.title} certificate`}
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>

              <div className="p-6 flex flex-col grow">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-3 text-sm text-primary">
                  <Award size={16} className="shrink-0" />
                  <span className="font-medium">{cert.issuer}</span>
                  <span className="whitespace-nowrap text-muted-foreground">· {cert.date}</span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.tags.map((tag) => (
                    <span
                      key={`${cert.id}-${tag}`}
                      className="px-2 py-1 text-xs border border-border font-medium rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-x-5 gap-y-2 pt-4 border-t border-border">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 whitespace-nowrap text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <BadgeCheck size={18} />
                    Verify Credential
                    <ExternalLink size={14} />
                  </a>

                  <span className="whitespace-nowrap text-xs text-muted-foreground">
                    ID: {cert.credentialId}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
