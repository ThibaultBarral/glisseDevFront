<script>
export default {

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        toggleMenu() {
            const navElement = document.querySelector('nav');
            navElement.classList.toggle('open-menu');
        },

        handleScroll() {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            const scrollThreshold = window.innerHeight * 0.05; // 5vh
            if (scrollPosition > scrollThreshold) {
                this.$refs.header.classList.add('scroll');
            } else {
                this.$refs.header.classList.remove('scroll');
            }
        }
    }
};



</script>


<template>
    <header ref="header">
        <nav>
            <NuxtLink to="/"> <img src="../assets/img/logo.svg" alt="logo">
            </NuxtLink>
            <ul>
                <li>
                    <NuxtLink to="/">Accueil</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/catalogue">Catalogue</NuxtLink>
                </li>
            </ul>
        </nav>
        <!--<button id="btn-burger" @click="toggleMenu" href="">
            <span></span><span></span><span></span>
        </button>-->
    </header>
</template>


<style scoped>
img {
    @apply h-24 w-24
}

nav {
    @apply items-center flex mx-4
}

ul {
    @apply flex gap-4 uppercase text-white ms-8
}

li {
    @apply font-semibold
}

header {
    @apply fixed top-0 w-full
}

header.scroll {
    @apply static
}

/* nav {
    @apply hidden
}

nav.open-menu {
    @apply block
} */

/* #btn-burger {
    @apply w-10 h-4 relative
}

#btn-burger span {
    background: rgb(0,212,255);
    background: linear-gradient(144deg, rgba(0,212,255,1) 25%, rgba(255,255,255,1) 87%);

    @apply w-full h-px block absolute
}

#btn-burger span:nth-child(1) {
    @apply top-0
}

#btn-burger span:nth-child(2) {
    @apply top-1/2 -translate-y-1/2
} 

#btn-burger span:nth-child(3) {
    @apply top-full -translate-y-1/2
}  */
</style>
