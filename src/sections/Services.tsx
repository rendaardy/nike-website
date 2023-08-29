import { services } from "../constants.ts";
import ServiceCard from "../components/ServiceCard.tsx";

export default function Services(): JSX.Element {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
}
