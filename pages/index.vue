<script>
export default {
    data() {
        return {
            isSpanVisible: false
        };
    },
    methods: {
        addClassVisible() {
            this.isSpanVisible = true;
        },
        removeClassVisible() {
            this.isSpanVisible = false;
        }
    }
};
</script>


<template>
    <main>
        <section>
            <h1>Surfez <br> avec du style</h1>
            <p>
                Vous êtes nouveau ?
                <NuxtLink to="/inscription" @mouseover="addClassVisible" @mouseout="removeClassVisible">Créer un compte
                </NuxtLink>
                <span :class="{ visible: isSpanVisible }">avec style</span>
            </p>
        </section>
    </main>
</template>


<style scoped>
main {
    background: rgb(0, 212, 255);
    background: linear-gradient(144deg, rgba(0, 212, 255, 1) 45%, rgba(255, 255, 255, 1) 70%);

    @apply min-h-screen flex items-center
}

section {
    @apply container mx-auto
}

h1 {
    line-height: 5rem;
    @apply text-8xl font-bold text-white uppercase
}
p span {
    @apply transition-all opacity-0 duration-300
} 
span.visible {
    @apply opacity-100
}
</style>
