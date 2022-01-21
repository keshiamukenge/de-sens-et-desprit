<template>
  <div class="container-percent">
    <div class="container-logo">
      <img class="e-logo-blanc" src="@/assets/medias/e-blanc.svg" />
      <img class="s-logo-blanc" src="@/assets/medias/s-blanc.svg" />
    </div>
    <p ref="percentContainer" class="loader-content">
      {{ percent.value + '%' }}
    </p>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  data() {
    return {
      percent: ref(0),
      dom: this.$refs,
      word: ref(''),
    }
  },

  mounted() {
    this.upPercent()
    this.upLoader()
  },

  methods: {
    async upPercent() {
      await this.downLoader()
      setTimeout(() => {
        setInterval(() => {
          if (this.percent.value < 100) {
            this.percent.value++
          }
        }, 20)
        setTimeout(() => {
          const containerLogo = document.querySelector('.container-logo')
          containerLogo.style.opacity = 0
        }, 2200)
      }, 1400)
    },

    async downLoader() {
      await this.downLogo()
      setTimeout(() => {
        const target = document.querySelector('.loader-content')
        target.style.opacity = 1
        target.classList.add('down')
      }, 500)
    },

    downLogo() {
      const eLogo = document.querySelector('.e-logo-blanc')
      eLogo.classList.add('downLogo')
      this.upLogo()
    },

    upLogo() {
      const sLogo = document.querySelector('.s-logo-blanc')
      sLogo.classList.add('upLogo')
    },

    upLoader() {
      setTimeout(() => {
        const target = document.querySelector('.loader-content')
        target.classList.remove('down')
        target.classList.add('up')
      }, 4000)
    },
  },
}
</script>

<style lang="scss" scoped>
.container-percent {
  width: fit-content;
  height: fit-content;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;

  .loader-content {
    font-family: $font--loader;
    width: 230px;
    height: 90px;
    background-color: $main-color;
    position: relative;
    text-align: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translate(0px, 32px);
    margin-top: 30px;
    opacity: 0;
  }

  .down {
    animation: down 700ms ease-in-out;
  }

  @keyframes down {
    from {
      transform: translate(0px, 110px);
    }
    to {
      transform: translate(0px, 32px);
    }
  }

  .up {
    animation: up 700ms ease-in-out;
    transform: translate(0px, 110px);
  }

  @keyframes up {
    from {
      transform: translate(0px, 32px);
    }
    to {
      transform: translate(0px, 110px);
    }
  }

  .container-logo {
    text-align: center;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 95px;
    width: 35px;
    position: relative;
    opacity: 1;
    transition: 500ms linear opacity;

    img {
      width: 35px;
    }

    .e-logo-blanc {
      position: absolute;
      top: 0px;
    }

    .downLogo {
      animation: downSvg 1000ms ease-in-out;
    }

    @keyframes downSvg {
      from {
        transform: translateY(-90px);
      }
      to {
        transform: translateY(0px);
      }
    }

    .s-logo-blanc {
      position: absolute;
      bottom: 0px;
    }

    .upLogo {
      animation: upSvg 1000ms ease-in-out;
    }

    @keyframes upSvg {
      from {
        transform: translateY(90px);
      }
      to {
        transform: translateY(0px);
      }
    }

    /* @media screen and (min-width: $responsive--mobile-min) and (max-width: $responsive--mobile-max) {
      margin: 20px 0 0 0;
    } */
  }
}
</style>
