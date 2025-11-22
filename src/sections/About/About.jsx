import "./About.scss";
import { profile } from "../../data/profile.js";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";

export default function About() {
  const { about } = profile;
  return (
    <section className="about">
      <SectionTitle title="Sobre mí" />
      <p>{about}</p>
    </section>
  );
}
