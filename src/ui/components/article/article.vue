<template>
  <div>Article</div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { IArticle } from "@/entities";

export default {
  name: "ArticleComponent",
  props: {
    article: { type: Object as PropType<IArticle>, required: true },
  },
};
</script>

<style></style>
