<script setup lang="ts">

</script>


<template>
    <main class="bg-gradient-blue-ciel">
    <div>
        <div class="grid gap-4">
            <div class="card">
                <div class="card-img">
                    <img src="../assets/img/surf-quiksilver-discus-2022.jpg" alt="surf-quiksilver-discus-2022">
                </div>
                <div class="card-content">
                    <h3>Planche <span>Quiksilver</span></h3>
                    <p class="price">100 €</p>
                </div>
            </div>
        </div>
    </div>
</main>
</template>


<style scoped>
main {
    @apply lg:min-h-screen
}
img {
    @apply max-w-xs
}
.card {
    @apply flex flex-col bg-white w-max rounded-2xl p-4 mx-auto
}
.bg-gradient-blue-ciel {
    @apply pt-28
}
h3 span {
    @apply uppercase
}
.card-content {
    @apply mt-2
}
.price {
    @apply text-blue font-bold
}
.grid {
    @apply grid-cols-3 container mx-auto gap-4
}
</style>
