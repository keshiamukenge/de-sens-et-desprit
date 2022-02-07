<template>
  <div class="container-footer-items">
    <div>
      <prismic-rich-text :field="slice.primary.HoraireTitle" />
      <prismic-rich-text
        :field="slice.primary.HoraireContent"
        class="footer-link"
      />
    </div>
    <div>
      <prismic-rich-text :field="slice.primary.CoordonneesTitle" />
      <prismic-rich-text :field="slice.primary.adresse" class="footer-link" />
      <prismic-rich-text :field="slice.primary.Tel" class="footer-link" />
      <prismic-rich-text :field="slice.primary.email" class="footer-link" />
    </div>
    <div class="footer-container-link">
      <prismic-rich-text :field="slice.primary.InstitutTitle" />
      <Link to="/ cgv" class="link">
        <prismic-rich-text :field="slice.primary.Cgv" class="footer-link" />
      </Link>
      <Link to="/livraisons" class="link">
        <prismic-rich-text
          :field="slice.primary.Livraisons"
          class="footer-link"
        />
      </Link>
      <Link to="/planDuSite" class="link">
        <prismic-rich-text
          :field="slice.primary.Plandusite"
          class="footer-link"
        />
      </Link>
      <Link to="/mentionsLegales" class="link">
        <prismic-rich-text
          :field="slice.primary.MentionsLegales"
          class="footer-link"
        />
      </Link>
    </div>
    <div class="container-newsletter">
      <prismic-rich-text :field="slice.primary.NewsletterTitle" />
      <input />
      <div class="container-rs">
        <prismic-link :field="slice.primary.InstagramLink" class="insta-link">
          <prismic-rich-text :field="slice.primary.InstagramTitle" />
        </prismic-link>
        <prismic-link :field="slice.primary.FacebookLink">
          <prismic-rich-text :field="slice.primary.FacebookTitle" />
        </prismic-link>
      </div>
    </div>
  </div>
</template>

<script>
import Link from '../../components/animations/Link/Link.vue'

export default {
  name: 'FooterLinks',

  components: {
    Link,
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
}
</script>

<style lang="scss" scoped>
.container-footer-items {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 18% 20% 19% 34%;
  grid-gap: 3%;
  color: $white-color;
  justify-content: space-between;
  box-sizing: border-box;

  div {
    width: 100%;
    box-sizing: border-box;

    h4 {
      color: $white-color;

      &::after {
        background-color: $white-color;
      }
    }

    .footer-link {
      color: $white-color;
      margin-bottom: 8px;
    }
  }

  .footer-container-link {
    display: flex;
    flex-direction: column;
  }

  .container-newsletter {
    input {
      margin-bottom: 50px;
      width: 100%;
    }

    .container-rs {
      display: flex;
      width: 100%;

      a {
        color: $white-color;
      }

      .insta-link {
        margin-right: 40px;
      }
    }
  }
}
</style>
