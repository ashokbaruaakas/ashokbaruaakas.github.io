<script setup lang="ts">
const props = defineProps<{
  href: string;
}>();
</script>

<template>
  <a
    class="px-2 py-1 border rounded-lg hover:border-emerald-600 hover:text-emerald-600 duration-150 shadow-lg shadow-emerald-600/10 *:size-full"
    :href="props.href"
    target="_blank"
  >
    <slot />
  </a>
</template>
