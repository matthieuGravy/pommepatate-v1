<script>
export default {
  name: "skills",
  data() {
    return {
      langages: [
        { nom: "HTML 5", pourcentage: "95%" },
        { nom: "PUG", pourcentage: "50%" },
        { nom: "EJS", pourcentage: "50%" },
        { nom: "CSS", pourcentage: "80%" },
        { nom: "Sass", pourcentage: "80%" },
        { nom: "Bootstrap 5", pourcentage: "50%" },
      ],
      programmations: [
        { nom: "JavaScript", pourcentage: "50%" },
        { nom: "VueJS 3", pourcentage: "40%" },
        { nom: "NodeJS", pourcentage: "30%" },
        { nom: "Express", pourcentage: "30%" },
        { nom: "TypeScript", pourcentage: "notions" },
        { nom: "php", pourcentage: "notions" },
      ],
      BDS: [
        { nom: "MongoDB", pourcentage: "20%" },
        { nom: "Compass", pourcentage: "20%" },
        { nom: "MySQL", pourcentage: "notions" },
      ],
      Tools: [
        { nom: "npm", pourcentage: "80%" },
        { nom: "Gitlab", pourcentage: "70%" },
        { nom: "Babel", pourcentage: "80%" },
        { nom: "Webpack", pourcentage: "50%" },
        { nom: "Vite", pourcentage: "50%" },
        { nom: "VScode", pourcentage: "70%" },
        { nom: "Ubuntu", pourcentage: "40%" },
        { nom: "Trello", pourcentage: "" },
        { nom: "Canva", pourcentage: "" },
      ],
      Superficielles: [
        { nom: "Wordpress", pourcentage: "notions" },
        { nom: "Elementor", pourcentage: "notions" },
        { nom: "Magento", pourcentage: "notions" },
        { nom: "Figma", pourcentage: "notions" },
      ],
    };
  },
};
</script>
<template>
  <h2 class="mb-3 py-3 ps-5 accentSkills">Compétences en programmation web</h2>
  <article class="mb-4 ms-3">
    <h3 class="ms-4 mb-3">Languages de programmation et framework</h3>
    <div
      class="ms-4 d-inline-flex"
      v-for="programmation in programmations"
      :key="programmation.nom"
    >
      <p class="badge text-dark jaune-bg py-3">
        {{ programmation.nom }}
        <span class="ms-2">{{ programmation.pourcentage }}</span>
      </p>
    </div>
  </article>
  <article class="mb-4 ms-3">
    <h3 class="ms-4 mb-3">Language de balisage et de style</h3>
    <div
      class="ms-4 d-inline-flex"
      v-for="langage in langages"
      :key="langage.nom"
    >
      <p class="badge vert-bg py-3">
        {{ langage.nom }} <span class="ms-2">{{ langage.pourcentage }}</span>
      </p>
    </div>
  </article>
  <article class="mb-4 ms-3">
    <h3 class="mb-3 ms-4">Base de données</h3>
    <div class="ms-4 d-inline-flex" v-for="BD in BDS" :key="BD.nom">
      <p class="badge rose-bg py-3">
        {{ BD.nom }}<span class="ms-2">{{ BD.pourcentage }}</span>
      </p>
    </div>
  </article>
  <article class="mb-4 ms-3">
    <h3 class="mb-3 ms-4">Boîte à outils</h3>
    <div class="ms-4 d-inline-flex" v-for="Tool in Tools" :key="Tool.nom">
      <p class="badge rouge-bg rouge py-3">
        {{ Tool.nom }}<span class="ms-2">{{ Tool.pourcentage }}</span>
      </p>
    </div>
  </article>
  <article class="mb-4 ms-3">
    <h3 class="mb-3 ms-4">Notions</h3>
    <div
      class="ms-4 d-inline-flex"
      v-for="Superficielle in Superficielles"
      :key="Superficielle.nom"
    >
      <p class="badge bleu-bg py-3">
        {{ Superficielle.nom
        }}<span class="ms-2">{{ Superficielle.pourcentage }}</span>
      </p>
    </div>
  </article>
</template>
<style lang="scss">
h3 {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
