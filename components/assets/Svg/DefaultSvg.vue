<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
/* import { ref } from '@vue/reactivity' */

import { colors } from '../../../theme/colors/colors'

export default {
  props: {
    iconName: {
      type: String,
      default: 'name',
    },
    width: {
      type: [Number, String],
      default: 14,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    iconColor: {
      type: String,
      default: colors.main,
    },
  },
}
</script>
