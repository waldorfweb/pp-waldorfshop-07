<template>
  <img
    :alt="alt"
    :class="pictureClass"
    :height="height"
    :src="imageUrl"
    :width="width"
    decoding="async"
    loading="lazy"
  >
</template>

<script>

export default {
  props:
    {
      convertImage: {
        type: Boolean,
        default: true
      },
      imageUrl: {
        type: String,
        default: null
      },
      fallbackUrl: {
        type: String,
        default: null
      },
      isBackgroundImage: {
        type: Boolean,
        default: false
      },
      pictureClass: {
        type: String,
        default: null
      },
      alt: {
        type: String,
        default: null
      },
      title: {
        type: String,
        default: null
      },
      height: {
        type: Number | null,
        default: null
      },
      width: {
        type: Number | null,
        default: null
      }
    }
}
</script>
