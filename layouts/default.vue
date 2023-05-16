<script setup lang="ts">

</script>


<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>


<style>
button, [type='button'], [type='reset'], [type='submit'] {

    @apply uppercase rounded-full p-4 w-[350px]  font-semibold bg-white
}
</style>
