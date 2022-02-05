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
                ref="iconMore"
              >
                <IconMore />
              </DefaultSvg>
              <DefaultSvg
                :width="16"
                :height="2"
                :icon-color="mainColor"
                viewbox="0 0 16 2"
                class="disappear"
                ref="iconLess"
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
      category: ref(null),
      image: ref(null),
      iconMore: ref(null),
      iconLess: ref(null),
      list: ref(null),
      prestations: ref([]),
      active: ref(null),
      mainColor: colors.main,
    }
  },

  mounted() {
    this.category = this.$refs.items
    this.image = this.$refs.img
    this.iconMore = this.$refs.iconMore
    this.iconLess = this.$refs.iconLess

    for (let i = 0; i < this.$props.slice.items.length; i++) {
      this.prestations.value.push(
        this.createObject(
          this.category[i],
          this.image[i],
          this.iconMore[i],
          this.iconLess[i]
        )
      )
    }

    this.onHover()
    this.onLeave()
  },

  methods: {
    createObject(category, image, iconMore, iconLess) {
      return {
        category,
        image,
        iconMore,
        iconLess,
      }
    },

    onHover() {
      this.prestations.value.forEach((item) => {
        item.category.addEventListener('mouseenter', () => {
          this.appearImg(item.image)
          this.active.value = item.image
        })
      })
    },

    appearImg(img) {
      GSAP.to(img, {
        opacity: 1,
        zIndex: 1,
        duration: 0.5,
      })
    },

    onLeave() {
      this.prestations.value.forEach((item) => {
        item.category.addEventListener('mouseleave', () => {
          GSAP.to(this.active.value, {
            opacity: 0,
            zIndex: -1,
            duration: 0.5,
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
  margin: 150px 0px;

  @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
    margin: 70px 0px;
  }

  .home--section-presta-title {
    margin-left: 11.5%;
    margin-bottom: 50px;

    @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
      margin-left: 0;
      margin-bottom: 0;
    }
  }

  .home--content-presta {
    display: flex;
    height: 500px;
    position: relative;

    @media screen and (min-width: $responsive--laptop-min) and (max-width: $responsive--laptop-max) {
      height: 400px;
    }

    @media screen and (min-width: $responsive--tablet-min) and (max-width: $responsive--tablet-max) {
      height: 400px;
    }

    @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
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
        height: fit-content;
      }

      .home--container-presta-cat {
        position: absolute;
        top: 50%;
        left: 35%;
        transform: translate(-50%, -50%);

        @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transform: translate(0px, 0px);
          height: fit-content;
          padding: 0 30px;
          box-sizing: border-box;
          padding-top: 30px;
        }

        @media screen and (min-width: $responsive--laptop-min) and (max-width: $responsive--laptop-max) {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transform: translate(0px, 0px);
          height: fit-content;
          padding: 0 30px;
          box-sizing: border-box;
          padding-top: 30px;
        }

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

          @media screen and (min-width: $responsive--laptop-min) and (max-width: $responsive--laptop-max) {
            width: 100%;
          }

          @media screen and (min-width: $responsive--tablet-min) and (max-width: $responsive--tablet-max) {
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
