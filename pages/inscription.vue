<script>
export default {
    data() {
        return {
            form: {
                username: '',
                email: '',
                password: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Vous pouvez ici envoyer les données du formulaire au serveur ou effectuer toute autre action nécessaire.
            console.log(this.form);
        }
    }
};
</script>


<template>
    <main>
        <div class="grid grid-cols-2 lg:min-h-screen">
            <div class="bg-gradient-blue-ciel px-8 font-semibold text-white text-3xl">
                <p style="line-height: 42px;"><span class="text-5xl">Achetez</span> et <span class="text-5xl">vendez</span> <br> des équipements de surf <br> <span class="text-5xl">d'occasion</span> en toute simplicité</p>
            </div>
            <div class="bg-gradient-blue-ciel-inverse">
                <h1>Inscription</h1>
                <form @submit="submitForm">
                    <div>
                        <input type="text" id="username" placeholder="Nom d'utilisateur" v-model="form.username" required>
                    </div>
                    <div>
                        <input type="email" id="email" placeholder="Email" v-model="form.email" required>
                    </div>
                    <div>
                        <input type="password" id="password" placeholder="Mot de passe" v-model="form.password" required>
                    </div>
                    <div class="flex mx-auto">
                        <button type="submit">S'inscrire</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>


<style scoped>
main {
    @apply lg:min-h-screen
}


h1 {
    line-height: 5rem;
    @apply text-5xl font-bold text-white uppercase mb-4
}

form {
    @apply max-w-md gap-4 flex flex-col
}

form div {
    @apply flex flex-col
}

.bg-gradient-blue-ciel {
    background:linear-gradient(144deg, rgba(0, 212, 255, 1) 68%, rgba(255, 255, 255, 1) 100%);
}

.bg-gradient-blue-ciel-inverse {
    background:linear-gradient(-144deg, rgba(0, 212, 255, 1) 68%, rgba(255, 255, 255, 1) 100%);
}

.bg-gradient-blue-ciel span {
    @apply uppercase
}

.bg-gradient-blue-ciel-inverse, .bg-gradient-blue-ciel {
    @apply flex justify-center flex-col
}
</style>

