<script setup>
import CvItem from "./CvItem.vue";
import BriefIcon from "./icons/IconBrief.vue";
</script>
<template>
  <h2 class="mb-3 py-3 ps-5 accentExperience">Expérience professionnelle</h2>
  <CvItem class="pt-3">
    <template #icon>
      <BriefIcon />
    </template>
    <template #years><span class="vert-color">2017 à 2023</span></template>
    <template #heading>Shift leader <span>Ben's Brands</span></template>
    <p>
      J'ai débuté dans l'horeca en tant que livreur et ai progressé en acquérant
      de nouvelles compétences à chaque poste. Mon engagement a été reconnu par
      mon employeur, ce qui m'a permis d'obtenir des responsabilités
      supplémentaires, notamment en tant que responsable de service. Mon rôle
      est essentiel pour garantir le bon déroulement des opérations et la
      satisfaction des clients, en veillant au respect des normes d'hygiène et
      du système HACCP. Je suis également prêt à assumer le rôle de manager par
      intérim si nécessaire et à m'adapter aux demandes spécifiques des clients.
      Maintenir un niveau d'excellence quotidien implique la réalisation de
      nombreuses tâches continues, dont les contrôles alimentaires, la formation
      du personnel et les inspections sanitaires, tout en restant vigilant face
      aux changements potentiels pour préserver la qualité du service et la
      santé publique.
    </p>
  </CvItem>

  <CvItem>
    <template #icon>
      <BriefIcon />
    </template>
    <template #heading>Renfort en boutique <span>Bart Smit</span></template>
    <template #years><span class="vert-color">2014 à 2015</span></template>
    <p>
      Présent comme renfort dans un magasin de jouets, je m'occupe du réassort
      du rayon. Cette tâche est très importante car elle garantit que les
      clients trouveront toujours des articles intéressants à acheter.
    </p>
  </CvItem>

  <CvItem>
    <template #icon>
      <BriefIcon />
    </template>
    <template #heading>Parner <span>Red Market</span></template>
    <template #years><span class="vert-color">2013</span></template>
    <p>
      Mon premier travail dans une grande surface a été assez difficile. La
      mauvaise ambiance qui régnait entre les employés et la direction ne me
      facilitait pas l'intégration. Les tâches étaient très variées, notamment
      le réassort des rayons, l’encaissement et le contrôle des caddies après
      que les clients aient utilisé le self scan .
    </p>
    <p>
      Malgré cela, j’ai pu apprendre beaucoup sur la gestion du stock et comment
      fonctionne un supermarché moderne grâce aux technologies telles que le
      self-scanning qui permet aux clients de faire rapidement ses courses sans
      perdre trop de temps en file d'attente interminable.
    </p>
  </CvItem>

  <CvItem>
    <template #icon>
      <BriefIcon />
    </template>
    <template #heading
      >Agent de garidennage expert
      <span
        >European Protection group - Jobmatch - Full Security - Protection Unit
      </span></template
    >
    <template #years><span class="vert-color">2010 à 2017</span></template>
    <h5>Agent de gardiennage event</h5>
    <p>
      En tant qu'agent de gardiennage, j'ai eu l'opportunité d'encadrer divers
      types d'événements, tels que des rassemblements européens, des festivals
      et des événements cinématographiques. Mon rôle a consisté à assurer la
      sécurité et la surveillance de ces événements, en veillant à ce qu'ils se
      déroulent sans encombre et en garantissant la sécurité des participants et
      des biens. Cette expérience m'a permis de développer une expertise dans la
      gestion de la sécurité lors d'événements d'envergure, en appliquant des
      procédures rigoureuses et en assurant la coordination efficace des équipes
      de sécurité.
    </p>
    <h5>Agent de gardiennage sur site industriel</h5>
    <p>
      En tant qu'agent de gardiennage sur un site SEVESO, mes responsabilités
      sont multiples. Je suis chargé de rédiger des rapports précis et
      préventifs pour garantir le bon fonctionnement du site, en veillant au
      respect des normes d'hygiène, de santé et de sécurité au travail, ainsi
      qu'à la conformité des équipements aux spécifications techniques requises.
      <br />
      J'effectue des inspections quotidiennes pour assurer le respect des
      procédures et mettre en place les mesures correctives nécessaires en cas
      de besoin. En outre, je suis responsable de l'accueil du personnel externe
      intervenant sur le site pour des services tels que l'entretien
      d'équipements ou des examens techniques. Je consigne toutes les
      informations importantes concernant ces examens et signale immédiatement
      tout incident anormal pouvant affecter l'exploitation des équipements ou
      présenter un danger potentiel pour les personnes présentes sur le site. En
      tant que responsable, je veille à ce que les activités se déroulent en
      conformité avec les procédures et les normes de sécurité en vigueur,
      contribuant ainsi à maintenir un environnement de travail sûr et efficace.
    </p>
  </CvItem>

  <CvItem>
    <template #icon>
      <BriefIcon />
    </template>
    <template #heading> Manutentionaire</template>
    <template #years><span class="vert-color">2009</span></template>
    <p>
      Mon premier emploi a été une expérience qui m'a poussé à envisager de
      quitter l'enseignement secondaire dans lequel je faisais face à des
      difficultés. Ce travail m'a permis de réaliser que je pouvais obtenir un
      salaire et acquérir des compétences professionnelles dès maintenant,
      plutôt que de poursuivre mes études sans perspective immédiate d'emploi.
    </p>
  </CvItem>
</template>
<style lang="scss">
h5 {
  font-size: 1rem;
}
h6 {
  font-size: 1rem;
}
</style>
