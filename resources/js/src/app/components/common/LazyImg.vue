<template>
  <picture
    v-if="!isBackgroundImage"
    :title="title">
    <slot name="additionalimages"></slot>
    <source :srcset="defaultImageUrl" :type="mimeType(defaultImageUrl)">
    <source v-if="defaultImageUrl !== imageUrl" :srcset="imageUrl" :type="mimeType(imageUrl)">
    <source v-if="fallbackUrl" :srcset="fallbackUrl" :type="mimeType(fallbackUrl)">
    <img
      v-if="receivedImageExtension === 'tif'"
      :class="pictureClass"
      :src="defaultImageUrl"
      :alt="alt"
      loading="lazy"
      decoding="async"
      type="image/tiff">
    <img
      v-else
      :class="pictureClass"
      :src="defaultImageUrl"
      :alt="alt"
      loading="lazy"
      decoding="async">
  </picture>

  <div v-else :data-background-image="defaultImageUrl || fallbackUrl" :class="pictureClass">
    <slot></slot>
  </div>
</template>

<script>
import {detectAvif, detectWebP} from "../../helper/featureDetect";

const mime = require('mime-types')

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
      }
    },
  data() {
    return {
      imageConversionEnabled: App.config.log.modernImagesConversion,
      receivedImageExtension: null,
      browserSupportedImgExtension: null,
      defaultImageUrl: this.imageUrl,
      avifSupported: false,
      avifExtension: 'avif',
      webpSupported: false,
      webpExtension: 'webp',
      imgRegex: /.?(\.\w+)(?:$|\?)/
    }
  },
  mounted() {
    detectAvif(((avifSupported) => {
      this.avifSupported = avifSupported;

      if (avifSupported) {
        this.propagateImageFormat();
      }

      if (!avifSupported) {
        detectWebP(((webpSupported) => {
          this.webpSupported = webpSupported;

          if (webpSupported) {
            this.propagateImageFormat();
          }
        }));
      }
    }));
  },
  watch:
    {
      imageUrl()
      {
        this.$nextTick(() => {
          this.propagateImageFormat();
        });
      }
    },
  computed:
    {
      convertedImageUrl() {
        return `${this.imageUrl}.${this.browserSupportedImgExtension}`;
      }
    },
  methods:
    {
      mimeType(url) {
        return mime.lookup(url);
      },
      propagateImageFormat() {
        this.setReceivedImageExtension();
        this.setBrowserSupportedImageExtension();
        this.setDefaultImageUrl();
      },
      setReceivedImageExtension() {
        const matches = this.imageUrl?.match(this.imgRegex);

        if (matches) this.receivedImageExtension = matches[1].split('.').pop();
      },
      setBrowserSupportedImageExtension() {
        if (this.avifSupported) {
          this.browserSupportedImgExtension = this.avifExtension;
          return;
        }

        if (this.webpSupported) {
          this.browserSupportedImgExtension = this.webpExtension;
          return;
        }

        this.browserSupportedImgExtension = this.receivedImageExtension !== this.avifExtension && this.receivedImageExtension !== this.webpExtension
          ? this.receivedImageExtension
          : 'jpeg';
      },
      setDefaultImageUrl() {
        if (this.imageShouldBeConverted()) {
          if (this.receivedImageExtension === this.avifExtension) {
            this.defaultImageUrl = this.browserSupportedImgExtension === this.avifExtension
              ? this.imageUrl
              : this.convertedImageUrl;
            return;
          }
          if (this.receivedImageExtension === this.webpExtension) {
            if (this.browserSupportedImgExtension === this.avifExtension) {
              this.defaultImageUrl = this.convertedImageUrl;
              return;
            }
            if (this.browserSupportedImgExtension === this.webpExtension) {
              this.defaultImageUrl = this.imageUrl;
              return;
            }

            this.defaultImageUrl = this.imageUrl;
            return;
          }

          // convert anything other than avif or webp into browser supported format.
          this.defaultImageUrl = this.convertedImageUrl;
          return;
        }
        this.defaultImageUrl = this.imageUrl || this.fallbackUrl;
      },
      imageShouldBeConverted() {
        const validConversionExtensions = ['jpg', 'JPG', 'jpeg', 'JPEG', 'png', 'PNG', 'webp'];

        return this.convertImage
          && this.imageConversionEnabled
          && /\/item\/images\//.test(this.imageUrl)
          && this.browserSupportedImgExtension !== this.receivedImageExtension
          && validConversionExtensions.includes(this.receivedImageExtension)
      }
    }
}
</script>
