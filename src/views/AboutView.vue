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
         I created this portfolio fairly quickly, about 1 year ago. At the time, I still struggled with certain concepts in JavaScript, such as objects, iterations, and parameters. Instead of giving up, I decided to keep pushing forward. I chose to explore a framework, and in the end, it greatly helped me to better understand and adapt for the future.
      </p>
      <p>Currently, I'm enrolled in a bootcamp at BeCode, working on a new portfolio, this time in React and with a more comprehensive approach. I'm excited to share my progress and demonstrate how my skills have evolved since I created my first portfolio a year ago.</p>
      <br />
      <p class="pb-2">Feel free to follow me on GitHub: <a title="GitHubb of Matthieu Gravy" target="_parent" href="https://github.com/matthieuGravy">My Profile</a></p>

    
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
              Web developer
            </p>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/matthieugravy/"
              class="btn btn-info d-inline-flex align-items-center"
              >Contacte me
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
            >Education</a
          >
          <a
            class="nav-link"
            :class="{
              'accent accentExperience': activeComponent === 'Experience',
            }"
            @click="activeComponent = 'Experience'"
            >Work Expriences</a
          >
          <a
            class="nav-link"
            :class="{ 'accentSkills accent': activeComponent === 'Skills' }"
            @click="activeComponent = 'Skills'"
            >Skills</a
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
