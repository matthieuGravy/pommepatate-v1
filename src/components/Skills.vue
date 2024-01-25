<script>
export default {
  name: "skills",
  data() {
    return {
      langages: [
        { nom: "HTML 5", pourcentage: "good" },
        { nom: "PUG", pourcentage: "notions" },
        { nom: "EJS", pourcentage: "notions" },
        { nom: "CSS3", pourcentage: "good" },
        { nom: "Sass", pourcentage: "good" },
        { nom: "TailwindCSS", pourcentage: "good" },
        {nom :"Daisy UI", pourcentage: "good"},
        { nom: "Bootstrap 5", pourcentage: "good" },
      ],
      programmations: [
        { nom: "JavaScript", pourcentage: "junior" },
        { nom: "TypeScript", pourcentage: "learning" },
        { nom: "ReactJS", pourcentage: "junior" },
        { nom: "VueJS 3", pourcentage: "junior" },
        { nom: "NodeJS", pourcentage: "junior" },
        { nom: "ExpressJS", pourcentage: "junior" },
        { nom: "php", pourcentage: "notions" },
      ],
      BDS: [
        { nom: "MongoDB", pourcentage: "notions" },
        { nom: "MySQL", pourcentage: "notions" },
      ],
      Tools: [
        { nom: "npm", pourcentage: "80%" },
        { nom: "Git", pourcentage: "70%" },
        { nom: "Vite", pourcentage: "50%" },
        { nom: "VScode", pourcentage: "70%" },
        { nom: "Ubuntu", pourcentage: "40%" },
        { nom: "Trello", pourcentage: "" },
        { nom: "Canva", pourcentage: "" },
        { nom: "Compass", pourcentage: "" },
        { nom: "Mongoose", pourcentage: "" },
        { nom: "Postman", pourcentage: "" },
        { nom: "Insomnia", pourcentage: "" },
        { nom: "MongoDB Atlas", pourcentage: "" },
        { nom: "OVH Cloud", pourcentage: "" },
        { nom: "Netlify", pourcentage: "" },
        { nom: "Github", pourcentage: "" },
        {nom: "Gitlab", pourcentage: ""},
        { nom: "Figma", pourcentage: "" },
      ],
      Superficielles: [
        { nom: "Chartjs"},
        { nom: "Gsap"},
        { nom: "Axios" },
        { nom: "Redux" },
        { nom : "Motions Framer"},
        { nom: "React Router"},
        { nom: "Vue Router"},
      ],
    };
  },
};
</script>
<template>
  <h2 class="mb-3 py-3 ps-5 accentSkills">My Skills</h2>
  <article class="mb-4 ms-3">
    <h3 class="ms-4 mb-3">Programming Language </h3>
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
    <h3 class="ms-4 mb-3">Markup and Style Language</h3>
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
    <h3 class="mb-3 ms-4">Databases</h3>
    <div class="ms-4 d-inline-flex" v-for="BD in BDS" :key="BD.nom">
      <p class="badge rose-bg py-3">
        {{ BD.nom }}<span class="ms-2">{{ BD.pourcentage }}</span>
      </p>
    </div>
  </article>
  <article class="mb-4 ms-3">
    <h3 class="mb-3 ms-4">Tools</h3>
    <div class="ms-4 d-inline-flex" v-for="Tool in Tools" :key="Tool.nom">
      <p class="badge rouge-bg rouge py-3">
        {{ Tool.nom }}
      </p>
    </div>
  </article>
  <article class="mb-4 ms-3">
    <h3 class="mb-3 ms-4">Library</h3>
    <div
      class="ms-4 d-inline-flex"
      v-for="Superficielle in Superficielles"
      :key="Superficielle.nom"
    >
      <p class="badge bleu-bg py-3">
        {{ Superficielle.nom
        }}
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
