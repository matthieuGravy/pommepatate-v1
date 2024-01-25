<script></script>

<template>
  <div v-if="isLoading">
    <Loading />
  </div>
  <main class="home" v-else>
    <h1 class="accentPrincipal ps-5 py-3">Hello</h1>
    <section class="presentation mx-3">
      <p>
        My name is Matthieu, and despite starting my career in the security sector at the age of 20 without a diploma, I chose to resume my studies to obtain a CESS. During my e-business studies, I had an introduction to web development, which proved to be a rewarding experience. I later progressed in a Pizza Hut franchise, ultimately becoming a team leader with managerial responsibilities.
      </p>
      <p>
        Observing each company I worked for, I realized that technological
        solutions could often be the key to solving problems and optimizing
        processes. My main interest was in making tangible improvements, whether
        by optimizing a job or solving problems. My journey has shown me that
        even modest experiences can be a stepping stone to a promising future.
      </p>
      <p>
        However, it wasn't always easy to share or make others understand my
        ideas. Alongside my job, I continued exploring web development, taking
        online courses, and working on personal projects. This eventually led me
        to professionalize myself through the bootcamp provided by BeCode.
      </p>
      <p>
        Today, my goal is to combine my web development skills with my passion
        for process optimization. I am constantly seeking innovative ways to
        address professional challenges and contribute positively to every
        opportunity that comes my way.
      </p>
     
    </section>
  </main>
</template>
<style lang="scss">
.home {
  min-height: 100vh;
}
</style>
