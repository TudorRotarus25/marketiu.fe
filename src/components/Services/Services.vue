<template>
  <div class="services">
    <div class="services__container">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="card"
      >
        <div class="card__container">
          <img
            :src="$root.mediaBaseUrl + service.image"
            class="card__image"
            alt="service.name"
          >
          <div class="card__content">
            <div class="card__title">
              {{ service.name }}
            </div>
            <div class="card__description">
              {{ service.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Services.js"></script>
<style
  src="./Services.scss"
  lang="scss"
  scoped
></style>
<!--:style="`background-image: url('${$root.mediaBaseUrl + service.image}');`"-->
