<script setup>
import Scolaire from "../components/Scolaire.vue";
import Experience from "../components/Experience.vue";
import Skills from "../components/Skills.vue";
</script>
<script>
export default {
  data() {
    return {
      activeComponent: "Skills",
    };
  },
  components: {
    Scolaire,
    Experience,
    Skills,
  },
};
</script>
<template>
  <main>
    <h1 class="accentPrincipal ps-5 py-3">About</h1>
    <article class="px-2 pt-4">
      <p>
        Passionné par les blagues nulles et les jeux de mots, je suis un
        <span class="fw-semibold rose-color">développeur web autonome</span> qui
        valorise l'apprentissage continu. Fort d'une expérience professionnelle
        diversifiée, j'ai acquis des
        <span class="fw-semibold rose-color"
          >compétences solides en organisation et en autonomie</span
        >. Bien que certaines expériences aient été frustrantes, elles m'ont
        permis de développer ma détermination à atteindre mes ambitions.
      </p>
      <p>
        Grâce à ma curiosité et à ma soif de dépassement, j'ai découvert une
        passion pour le développement web. Je suis prêt à offrir des solutions
        personnalisées pour répondre à vos besoins et à fournir un
        <span class="fw-semibold rose-color">service de qualité</span> avec mon
        <span class="fw-semibold rose-color"
          >expertise en développement web</span
        >. Que ce soit pour rejoindre une
        <span class="fw-semibold rose-color">équipe IT dynamique</span> ou pour
        aider nos clients à atteindre leurs objectifs en ligne, je suis
        enthousiaste à l'idée de
        <span class="fw-semibold rose-color"
          >relever les défis avec détermination</span
        >.
      </p>
      <p>Bienvenue sur mon portfolio !</p>
    </article>
    <section class="cv mt-5">
      <div class="naveur">
        <div class="card text-center" style="width: 18rem">
          <img
            src="../images/matt-pink.svg"
            class="card-img-top"
            alt="Matthieu"
          />
          <div class="card-body">
            <h5 class="card-title">Matthieu Gravy</h5>
            <p class="card-text">
              Créateur de pommepatate.be <br />Intégrateur web
            </p>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/matthieugravy/"
              class="btn btn-info d-inline-flex align-items-center"
              >Contactez-moi
              <i class="fa-brands fa-linkedin ms-2"></i>
            </a>
          </div>
        </div>
        <nav class="navbar-nav nav-link nav my-4">
          <a
            class="nav-link"
            :aria-current="activeComponent === 'Scolaire' ? 'page' : null"
            :class="{
              'accent accentEducation': activeComponent === 'Scolaire',
            }"
            @click="activeComponent = 'Scolaire'"
            >Parcours académique</a
          >
          <a
            class="nav-link"
            :class="{
              'accent accentExperience': activeComponent === 'Experience',
            }"
            @click="activeComponent = 'Experience'"
            >Expérience professionnelle</a
          >
          <a
            class="nav-link"
            :class="{ 'accentSkills accent': activeComponent === 'Skills' }"
            @click="activeComponent = 'Skills'"
            >Compétences en programmation web</a
          >
        </nav>
      </div>
      <section>
        <component :is="activeComponent"></component>
        <div v-if="activeComponent === ''">
          <p>Aucun composant n'est actuellement sélectionné.</p>
          <p>Veuillez sélectionner une option dans la barre de navigation.</p>
        </div>
      </section>
    </section>
  </main>
</template>
<style lang="scss">
.accent {
  padding-left: 2rem;
  &Skills {
    box-shadow: inset 0.5em 0em var(--color-yellow);
  }
  &Education {
    box-shadow: inset 0.5em 0em var(--color-blue);
  }
  &Experience {
    box-shadow: inset 0.5em 0em var(--color-green);
  }
  &Principal {
    box-shadow: inset 0.5em 0em var(--color-black);
  }
}
.cv {
  margin: auto;
  max-width: 1280px;
  display: grid;
  grid: "naveur ."/1fr 1fr;
  @media (max-width: 1024px) {
    display: grid;
    grid:
      "naveur" auto
      "." 1fr;
  }
  .naveur {
    grid-area: naveur;
    display: flex;
    flex-direction: column;
    place-self: start center;
    .card {
      margin: auto;
    }
    .nav {
      cursor: pointer;
      a {
        font-weight: 600;
      }
    }
  }
}
</style>
