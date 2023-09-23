<script setup>
import CvItem from "./CvItem.vue";
import BookIcon from "./icons/IconBook.vue";
</script>

<template>
  <h2 class="mb-3 py-3 ps-5 accentEducation">Parcours académique</h2>
  <CvItem class="pt-3">
    <template #icon>
      <BookIcon />
    </template>
    <template #years><span class="bleu-color">2018 à 2020</span></template>
    <template #heading>Bachelier en e-business <span>Ephec</span></template>
    <h5>Choix éclairé : développer mes compétences</h5>
    <p>
      Bien que l'enseignement ne me convenait pas, j'ai exploré d'autres voies
      pour atteindre mes objectifs de développement de compétences.
    </p>
  </CvItem>
  <CvItem>
    <template #icon>
      <BookIcon />
    </template>
    <template #years><span class="bleu-color">2017 à 2018</span></template>
    <template #heading
      >Bachelier en sociologie et anthropologie <span>ULB</span></template
    >
    <h5 class="">Un choix de cœur</h5>
    <p>
      Bien que j'aie apprécié cette expérience, je n'ai pas réellement trouvé de
      compétences à développer pour mon futur emploi.
    </p>
  </CvItem>
  <CvItem>
    <template #icon>
      <BookIcon />
    </template>
    <template #years><span class="bleu-color">2014 à 2017</span></template>
    <template #heading>CESI & CESS <span>IJJ</span></template>
    <h5>Au-delà des défis : Mon parcours après des échecs</h5>
    <p>
      j'ai surmonté les défis de la défaite après avoir quadruplé et triplé. Il
      n'est jamais trop tard.
    </p>
  </CvItem>
  <CvItem>
    <template #icon>
      <BookIcon />
    </template>
    <template #years><span class="bleu-color">... à 2009</span></template>
    <template #heading>sans diplôme <span>IJJ</span></template>
    <h5>Oser le monde du travail : Mon choix après l'échec scolaire</h5>
    <p>
      En 2009, je n'étais pas assez régulier en cours. Puis, j'ai pris mon
      courage à deux main pour tenter ma chance dans le monde du travail
    </p>
  </CvItem>
</template>
