<template>
  <section
    ref="sectionSlider"
    class="section--home-slider"
    @mousemove="updateCoordinates($event)"
    @mouseleave="disableCursor"
    @mouseenter="enableCursor"
  >
    <div ref="cursor" class="cursor">
      <span ref="cursorContent">Drag</span>
    </div>
    <swiper :options="swiperOptions">
      <swiper-slide>
        <prismic-image :field="slice.primary.sliderImg1" />
      </swiper-slide>
      <swiper-slide>
        <prismic-image :field="slice.primary.sliderImg2" />
      </swiper-slide>
      <swiper-slide>
        <prismic-image :field="slice.primary.sliderImg3" />
      </swiper-slide>
      <swiper-slide>
        <prismic-image :field="slice.primary.sliderImg4" />
      </swiper-slide>
      <swiper-slide>
        <prismic-image :field="slice.primary.sliderImg5" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import GSAP from 'gsap'
import { ref } from '@vue/reactivity'

export default {
  name: 'Slider',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
      },
      x: 0,
      y: 0,
      cursor: ref(null),
      sectionSlider: ref(null),
      cursorContent: ref(null),
    }
  },

  methods: {
    updateCoordinates(event) {
      this.x = event.clientX
      this.y = event.clientY
      GSAP.to(this.$refs.cursor, {
        x: this.x,
        y: this.y,
      })
    },

    isDisplay(value) {
      this.$refs.cursor.style.display = value
    },

    disableCursor() {
      GSAP.to(this.$refs.cursor, {
        width: 0,
        height: 0,
        opacity: 0,
        duration: 0.3,
        onComplete: this.isDisplay('none'),
      })
    },

    enableCursor() {
      GSAP.to(this.$refs.cursor, {
        width: 100,
        height: 60,
        opacity: 1,
        duration: 0.3,
        onComplete: this.isDisplay('block'),
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.section--home-slider {
  &:hover {
    cursor: grab;
  }

  &:active {
    cursor: grabbing;
  }

  .cursor {
    background-color: $main-color;
    width: 100px;
    height: 60px;
    position: fixed;
    top: 40px;
    left: 40px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: 99;
    text-align: center;
    align-content: center;
    display: none;

    @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
      display: none !important;
    }

    @media screen and (min-width: $responsive--tablet-min) and (max-width: $responsive--tablet-max) {
      display: none !important;
    }

    span {
      width: fit-content;
      position: relative;
      top: 39%;
    }
  }

  img {
    width: 500px;
    height: 250px;
    object-fit: cover;

    @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
      width: 300px;
      height: 200px;
      transform: translateX(-87px);
      margin: 0 15px;
    }
  }
}
</style>
