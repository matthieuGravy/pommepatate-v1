<template>
  <section class="item mt-3 mx-3 d-flex">
    <i class="d-flex">
      <slot name="icon"></slot>
    </i>
    <div class="details ms-3">
      <h3 class="mb-1">
        <slot name="heading"></slot>
      </h3>
      <h4 class="mb-1">
        <slot name="years"></slot>
      </h4>
      <slot></slot>
    </div>
  </section>
</template>

<style scoped lang="scss">
.item {
  .details {
    h3 {
      font-size: 1.2rem;
      font-weight: 500;
    }
    h4 {
      font-size: 1rem;
      font-weight: 400;
    }
  }
}
</style>
