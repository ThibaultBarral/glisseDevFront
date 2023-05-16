<script setup lang="ts">

</script>


<template>
    <header>
        <nav>
            <ul>
                <li><NuxtLink to="/">Accueil</NuxtLink></li>
                <li><NuxtLink to="/catalogue">Catalogue</NuxtLink></li>
            </ul>
        </nav>
    </header>
</template>


<style scoped>
ul {
    @apply flex gap-4 uppercase
}
</style>
