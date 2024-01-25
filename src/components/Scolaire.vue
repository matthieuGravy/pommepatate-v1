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
    <template #heading>Bachelor's degree in e-business <span>Ephec</span></template>
    <p>Interrupted</p>
  </CvItem>
  <CvItem>
    <template #icon>
      <BookIcon />
    </template>
    <template #years><span class="bleu-color">2017 à 2018</span></template>
    <template #heading
      >Bachelor's degree in Sociology and Anthropology <span>ULB</span></template
    >
    <p>Interrupted</p>
  </CvItem>
  <CvItem>
    <template #icon>
      <BookIcon />
    </template>
    <template #years><span class="bleu-color">2014 à 2017</span></template>
    <template #heading>CESI & CESS <span>IJJ</span></template>
    <p>completed</p>
  </CvItem>
  <CvItem>
    <template #icon>
      <BookIcon />
    </template>
    <template #years><span class="bleu-color">... à 2009</span></template>
    <template #heading>sans diplôme <span>IJJ</span></template>
    <p>Interrupted</p>
  </CvItem>
</template>
