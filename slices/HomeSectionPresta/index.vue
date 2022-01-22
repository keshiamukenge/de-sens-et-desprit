<template>
  <section class="home--section-presta">
    <prismic-rich-text
      :field="slice.primary.title"
      class="home--section-presta-title"
    />
    <div class="home--content-presta">
      <div class="content-presta-img">
        <div
          v-for="(item, i) in slice.items"
          ref="img"
          :key="`slice-item-${i}`"
          class="home--img-presta"
        >
          <prismic-image :field="item.imagePresta" />
        </div>
      </div>
      <div class="content-presta-cat">
        <div class="home--container-presta-cat">
          <div
            v-for="(item, i) in slice.items"
            :key="`slice-item-${i}`"
            class="home--presta-cat"
          >
            <div ref="items" class="presta-cat-icon">
              <prismic-rich-text :field="item.prestaCat" class="presta-cat" />
              <DefaultSvg
                :width="16"
                :height="16"
                :icon-color="mainColor"
                viewbox="0 0 16 16"
                class="appear"
              >
                <IconMore />
              </DefaultSvg>
              <DefaultSvg
                :width="16"
                :height="2"
                :icon-color="mainColor"
                viewbox="0 0 16 2"
                class="disappear"
              >
                <IconLess />
              </DefaultSvg>
            </div>
            <span class="line"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
import GSAP from 'gsap'

import DefaultSvg from './../../components/assets/Svg/DefaultSvg.vue'
import IconMore from './../../components/assets/Svg/Icons/More/More.vue'
import IconLess from './../../components/assets/Svg/Icons/Less/Less.vue'
import { colors } from './../../theme/colors/colors'

export default {
  name: 'HomeSectionPresta',
  components: {
    DefaultSvg,
    IconMore,
    IconLess,
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
      items: ref(null),
      img: ref(null),
      obj: [],
      mainColor: colors.main,
    }
  },

  mounted() {
    this.items = this.$refs.items
    this.img = this.$refs.img
    this.createObject(0)
    this.active()
    this.inactive()
    this.scaleUp()
  },

  methods: {
    createObject(start) {
      return this.items.map((item) => {
        return this.obj.push({
          item,
          presta: item.childNodes[0],
          iconMore: item.childNodes[2],
          iconLess: item.childNodes[4],
          img: this.img[start++],
          active: ref(false),
        })
      })
    },

    active() {
      this.obj.forEach((item) => {
        item.item.addEventListener('mouseenter', () => {
          item.active.value = true
          this.setValue()
        })
      })
    },

    inactive() {
      this.obj.forEach((item) => {
        item.item.addEventListener('mouseleave', () => {
          item.active.value = false
          this.setValue()
        })
      })
    },

    setValue() {
      this.obj.forEach((item) => {
        if (item.active.value) {
          item.iconMore.classList.add('disappear')
          item.iconMore.classList.remove('appear')
          item.iconLess.classList.add('appear')
          item.iconLess.classList.remove('disappear')
        } else {
          item.iconMore.classList.add('appear')
          item.iconMore.classList.remove('disappear')
          item.iconLess.classList.add('disappear')
          item.iconLess.classList.remove('appear')
        }
      })
    },

    scaleUp() {
      this.obj.forEach((item) => {
        item.item.addEventListener('mouseenter', () => {
          GSAP.to(item.img, {
            zIndex: 1,
            opacity: 1,
            duration: 0.8,
            onComplete: this.scaleDown(),
          })
        })
      })
    },

    scaleDown() {
      this.obj.forEach((item) => {
        item.item.addEventListener('mouseleave', () => {
          GSAP.to(item.img, {
            opacity: 0,
            zIndex: 1,
            duration: 0.8,
          })
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.home--section-presta {
  display: grid;
  margin: 0 20px;

  .home--section-presta-title {
    margin-left: 11.5%;

    @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
      margin-left: 0;
    }
  }

  .home--content-presta {
    display: flex;
    /* width: 50%; */
    height: 500px;
    position: relative;

    @media screen and (min-width: $responsive--laptop-min) and (max-width: $responsive--laptop-max) {
      height: fit-content;
    }

    @media screen and (min-width: $responsive--tablet-min) and (max-width: $responsive--tablet-max) {
      height: fit-content;
    }

    .content-presta-img {
      width: 50%;
      height: 100%;
      position: relative;

      @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
        display: none;
      }

      .home--img-presta {
        width: 380px;
        height: 466px;
        overflow: hidden;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        @media screen and (min-width: $responsive--laptop-min) and (max-width: $responsive--laptop-max) {
          width: 200px;
          height: 300px;
        }

        @media screen and (min-width: $responsive--tablet-min) and (max-width: $responsive--tablet-max) {
          width: 200px;
          height: 300px;
        }
      }
    }

    .content-presta-cat {
      width: 50%;
      height: 100%;
      position: relative;

      @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
        width: 100%;
        margin-top: 40px;
      }

      .home--container-presta-cat {
        position: absolute;
        top: 50%;
        left: 35%;
        transform: translate(-50%, -50%);

        @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
          position: initial;
          top: 0;
          left: 0;
          transform: translate(0, 0);
        }

        .home--presta-cat {
          width: 400px;
          margin-bottom: 46px;

          @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
            width: 100%;
          }

          &:hover {
            cursor: pointer;
          }

          .presta-cat-icon {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .icon {
              transition: 500ms linear;
              transform: rotate(0deg);
            }
          }

          .line {
            display: block;
            width: 100%;
            height: 1px;
            background: $main-color;
            margin-top: 12px;
          }
        }
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    transition: 500ms linear;
  }

  .appear {
    display: block;
    transition: $transition;
  }

  .disappear {
    display: none;
    transition: $transition;
  }
}
</style>
