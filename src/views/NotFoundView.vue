<template>
  <div class="not-found">
    <h1 class="ps-5 py-3">Oups...</h1>
    <img
      src="../images/nuages.gif"
      alt="nuages"
      class="d-block m-auto mt-4 rounded"
    />
    <article class="mt-5 mx-5">
      <p>
        Je suis désolé, la page que vous cherchez n'a pas été trouvée. Veuillez
        vérifier l'URL ou si vous préférez, vous pouvez également retourner à la
        page d'accueil en cliquant sur le bouton ci-dessous.
      </p>
      <RouterLink to="/" class="btn btn-info d-block mt-2"
        >Retourner à la page d'accueil</RouterLink
      >
    </article>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
</script>
<style lang="scss">
.not-found {
  img {
    height: auto;
    width: 80%;
  }
}
</style>
