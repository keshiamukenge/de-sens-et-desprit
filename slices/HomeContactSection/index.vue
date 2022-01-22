<template>
  <section class="home--section-contact">
    <div class="container-contact-content">
      <div class="container-google-map">
        <div class="google-map">GOOGLE MAP</div>
      </div>

      <div class="container-contact-infos">
        <prismic-rich-text
          :field="slice.primary.homeContactTitle"
          class="contact-title"
        />
        <div class="item-contact-icon">
          <DefaultSvg
            :width="16"
            :height="22"
            :icon-color="whiteColor"
            viewbox="0 0 16 21"
            class="icon-contact-infos"
          >
            <IconPin />
          </DefaultSvg>
          <prismic-rich-text
            :field="slice.primary.homeContactAdress"
            class="contact-item"
          />
        </div>
        <div class="item-contact-icon">
          <DefaultSvg
            :width="20"
            :height="21"
            :icon-color="whiteColor"
            viewbox="0 0 16 16"
            class="icon-contact-infos"
          >
            <IconClock />
          </DefaultSvg>
          <prismic-rich-text
            :field="slice.primary.homeContactHours"
            class="contact-item"
          />
        </div>
        <div class="item-contact-icon">
          <DefaultSvg
            :width="21"
            :height="21"
            :icon-color="whiteColor"
            viewbox="0 0 16 16"
            class="icon-contact-infos"
          >
            <IconPhone />
          </DefaultSvg>
          <prismic-rich-text
            :field="slice.primary.homeContactPhone"
            class="contact-item"
          />
        </div>
        <div class="item-contact-icon">
          <DefaultSvg
            :width="20"
            :height="17"
            :icon-color="whiteColor"
            viewbox="0 0 16 16"
            class="icon-contact-infos"
          >
            <IconMail />
          </DefaultSvg>
          <prismic-rich-text
            :field="slice.primary.homeContactMail"
            class="contact-item"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DefaultSvg from './../../components/assets/Svg/DefaultSvg.vue'
import IconPin from './../../components/assets/Svg/Icons/Pin/Pin.vue'
import IconClock from './../../components/assets/Svg/Icons/Clock/Clock.vue'
import IconPhone from './../../components/assets/Svg/Icons/Phone/Phone.vue'
import IconMail from './../../components/assets/Svg/Icons/Mail/Mail.vue'
import { colors } from './../../theme/colors/colors'

export default {
  name: 'HomeContactSection',
  components: {
    DefaultSvg,
    IconPin,
    IconClock,
    IconPhone,
    IconMail,
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
      whiteColor: colors.white,
    }
  },
}
</script>

<style lang="scss" scoped>
.home--section-contact {
  background-color: $main-color;
  padding: 50px 100px;
  margin: 100px 0 0 0;

  @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
    padding: 40px 50px;
    margin: 0;
  }

  @media screen and (min-width: $responsive--laptop-min) and (max-width: $responsive--laptop-max) {
    padding: 0px;
  }

  @media screen and (min-width: $responsive--tablet-min) and (max-width: $responsive--tablet-max) {
    padding: 0px;
  }

  .container-contact-content {
    display: grid;
    padding: 30px 0px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 480px;

    @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
      display: flex;
      flex-direction: column-reverse;
    }

    @media screen and (min-width: $responsive--laptop-min) and (max-width: $responsive--laptop-max) {
      grid-template-rows: 400px;
    }

    @media screen and (min-width: $responsive--tablet-min) and (max-width: $responsive--tablet-max) {
      grid-template-rows: 400px;
    }

    .container-google-map {
      width: 100%;
      height: 100%;
      position: relative;
      padding: 40px;
      box-sizing: border-box;

      @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
        padding: 0px;
        margin: 50px 0px 0px 0px;
      }

      @media screen and (min-width: $responsive--laptop-min) and (max-width: $responsive--laptop-max) {
        padding: 50px;
      }

      @media screen and (min-width: $responsive--tablet-min) and (max-width: $responsive--tablet-max) {
        padding: 50px;
      }

      .google-map {
        background-color: gray;
        width: 80%;
        height: 100%;
        margin: auto;

        @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
          width: 100%;
          height: 300px;
        }
      }
    }

    .container-contact-infos {
      display: flex;
      flex-direction: column;
      padding-left: 50px;
      justify-content: center;

      @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
        padding: 0px;
      }

      .contact-title {
        color: $white-color;
        margin-bottom: 30px;

        @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
          margin-bottom: 15px;
        }

        @media screen and (min-width: $responsive--laptop-min) and (max-width: $responsive--laptop-max) {
          margin-bottom: 15px;
        }

        @media screen and (min-width: $responsive--tablet-min) and (max-width: $responsive--tablet-max) {
          margin-bottom: 15px;
        }

        h2 {
          margin-bottom: 0px;
        }
      }

      .item-contact-icon {
        display: flex;
        padding: 20px 0px;
        align-items: center;

        .contact-item {
          p {
            color: $white-color;
          }
        }

        .icon-contact-infos {
          margin-right: 30px;
        }
      }
    }

    .contact-item {
      color: $white-color;
    }
  }
}
</style>
