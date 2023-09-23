<script>
import Loading from "../components/Loading.vue";

export default {
  components: { Loading },
  data() {
    return {
      isLoading: true, // initialiser la variable de chargement à true
    };
  },
  mounted() {
    window.addEventListener("load", () => {
      this.isLoading = false; // mettre la variable à false pour masquer l'écran de chargement
    });
  },
};
</script>

<template>
  <div v-if="isLoading">
    <Loading />
  </div>
  <main class="home" v-else>
    <h1 class="accentPrincipal ps-5 py-3">Home</h1>
    <img
      src="../images/pompat.svg"
      class="img-fluid mx-auto d-block my-5"
      alt="..."
    />
    <section class="presentation mx-3">
      <h2 class="pb-3">Découvrez mon portfolio d'intégrateur web Vue 3</h2>
      <p>
        Bienvenue sur Pomme Patate, où je partage ma passion pour l'intégration
        web. Explorez mon portfolio, une collection de mes créations numériques,
        où chaque ligne de code est soigneusement conçue pour créer des
        expériences utilisateur attrayantes et engageantes. J'espère que vous
        apprécierez mon travail créatif en ligne et que mes réalisations vous
        inspireront. Merci de prendre le temps de visiter mon portfolio !
      </p>
    </section>
  </main>
</template>
<style lang="scss">
.home {
  min-height: 100vh;
}
</style>
