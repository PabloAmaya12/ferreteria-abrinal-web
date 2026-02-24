<script setup>
import { ref, computed } from 'vue';
import { useForm, Link } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const showPassword = ref(false);
const showConfirm = ref(false);

const passwordStrength = computed(() => {
    const p = form.password;
    if (!p) return { level: 0, label: '', color: '' };
    let score = 0;
    if (p.length >= 6) score++;
    if (p.length >= 10) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;

    if (score <= 1) return { level: 1, label: 'Débil', color: 'bg-red-400' };
    if (score <= 3) return { level: 2, label: 'Media', color: 'bg-yellow' };
    return { level: 3, label: 'Fuerte', color: 'bg-green-500' };
});

const passwordsMatch = computed(() => {
    if (!form.password_confirmation) return null;
    return form.password === form.password_confirmation;
});

const submit = () => {
    form.post('/registro', {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <Head title="Crear Cuenta" />

    <div class="min-h-screen bg-gradient-to-br from-bg via-white to-bg relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple to-iris" />
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
        <div class="absolute top-1/3 right-1/4 w-60 h-60 bg-iris/5 rounded-full blur-3xl" />

        <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
            <Link href="/" class="flex items-center gap-3 mb-10 group">
                <div class="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-3xl shadow-lg shadow-primary/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
                    🛠️
                </div>
                <div>
                    <span class="text-xl font-bold text-heading leading-tight block">Ferretería Abrinal</span>
                    <span class="text-xs text-text font-medium">Herramientas de Calidad</span>
                </div>
            </Link>

            <div class="w-full max-w-lg">
                <div class="bg-white rounded-3xl shadow-xl shadow-heading/5 p-8 sm:p-10 relative overflow-hidden">
                    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple to-iris" />

                    <div class="text-center mb-8">
                        <h1 class="text-3xl font-extrabold text-heading mb-2">Crea tu cuenta</h1>
                        <p class="text-text">Únete a la comunidad de Ferretería Abrinal</p>
                    </div>

                    <!-- FORM FIRST -->
                    <form @submit.prevent="submit" class="space-y-5">
                        <div>
                            <label for="name" class="block text-sm font-semibold text-heading mb-2">Nombre completo</label>
                            <div class="relative">
                                <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <input id="name" v-model="form.name" type="text" placeholder="Tu nombre"
                                    class="w-full pl-12 pr-4 py-3.5 bg-bg border-2 rounded-xl text-sm focus:outline-none focus:bg-white transition-all duration-300"
                                    :class="form.errors.name ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-transparent focus:border-primary focus:ring-4 focus:ring-primary/10'"
                                    required autofocus />
                            </div>
                            <p v-if="form.errors.name" class="mt-2 text-sm text-red-500 font-medium">{{ form.errors.name }}</p>
                        </div>

                        <div>
                            <label for="reg-email" class="block text-sm font-semibold text-heading mb-2">Correo electrónico</label>
                            <div class="relative">
                                <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <input id="reg-email" v-model="form.email" type="email" placeholder="tu@correo.com"
                                    class="w-full pl-12 pr-4 py-3.5 bg-bg border-2 rounded-xl text-sm focus:outline-none focus:bg-white transition-all duration-300"
                                    :class="form.errors.email ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-transparent focus:border-primary focus:ring-4 focus:ring-primary/10'"
                                    required />
                            </div>
                            <p v-if="form.errors.email" class="mt-2 text-sm text-red-500 font-medium">{{ form.errors.email }}</p>
                        </div>

                        <div>
                            <label for="reg-password" class="block text-sm font-semibold text-heading mb-2">Contraseña</label>
                            <div class="relative">
                                <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <input id="reg-password" v-model="form.password" :type="showPassword ? 'text' : 'password'" placeholder="Mínimo 6 caracteres"
                                    class="w-full pl-12 pr-12 py-3.5 bg-bg border-2 rounded-xl text-sm focus:outline-none focus:bg-white transition-all duration-300"
                                    :class="form.errors.password ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-transparent focus:border-primary focus:ring-4 focus:ring-primary/10'"
                                    required />
                                <button type="button" @click="showPassword = !showPassword" class="absolute right-4 top-1/2 -translate-y-1/2 text-text/40 hover:text-primary transition-colors">
                                    <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                </button>
                            </div>
                            <div v-if="form.password" class="mt-3 flex items-center gap-3">
                                <div class="flex gap-1.5 flex-1">
                                    <div v-for="i in 3" :key="i" class="h-1.5 flex-1 rounded-full transition-all duration-500"
                                        :class="i <= passwordStrength.level ? passwordStrength.color : 'bg-bg-alt'" />
                                </div>
                                <span class="text-xs font-medium" :class="passwordStrength.level <= 1 ? 'text-red-400' : passwordStrength.level <= 2 ? 'text-yellow' : 'text-green-500'">
                                    {{ passwordStrength.label }}
                                </span>
                            </div>
                            <p v-if="form.errors.password" class="mt-2 text-sm text-red-500 font-medium">{{ form.errors.password }}</p>
                        </div>

                        <div>
                            <label for="reg-confirm" class="block text-sm font-semibold text-heading mb-2">Confirmar contraseña</label>
                            <div class="relative">
                                <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <input id="reg-confirm" v-model="form.password_confirmation" :type="showConfirm ? 'text' : 'password'" placeholder="Repite tu contraseña"
                                    class="w-full pl-12 pr-12 py-3.5 bg-bg border-2 rounded-xl text-sm focus:outline-none focus:bg-white transition-all duration-300"
                                    :class="[
                                        form.password_confirmation && !passwordsMatch ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' :
                                        form.password_confirmation && passwordsMatch ? 'border-green-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/10' :
                                        'border-transparent focus:border-primary focus:ring-4 focus:ring-primary/10'
                                    ]"
                                    required />
                                <button type="button" @click="showConfirm = !showConfirm" class="absolute right-4 top-1/2 -translate-y-1/2 text-text/40 hover:text-primary transition-colors">
                                    <svg v-if="!showConfirm" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                </button>
                            </div>
                            <p v-if="form.password_confirmation && !passwordsMatch" class="mt-2 text-sm text-red-500 font-medium">Las contraseñas no coinciden</p>
                            <p v-if="form.password_confirmation && passwordsMatch" class="mt-2 text-sm text-green-500 font-medium flex items-center gap-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Las contraseñas coinciden
                            </p>
                        </div>

                        <button
                            type="submit" :disabled="form.processing"
                            class="w-full bg-gradient-to-r from-primary via-purple to-iris text-white py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-purple/25 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                            <span v-if="form.processing" class="flex items-center justify-center gap-2">
                                <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Creando cuenta...
                            </span>
                            <span v-else>Crear mi cuenta</span>
                        </button>
                    </form>

                    <!-- DIVIDER -->
                    <div class="relative my-7">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-bg-alt" />
                        </div>
                        <div class="relative flex justify-center">
                            <span class="px-4 bg-white text-sm text-text/60 font-medium">o regístrate con</span>
                        </div>
                    </div>

                    <!-- GOOGLE -->
                    <a
                        href="/auth/google"
                        class="flex items-center justify-center gap-3 w-full bg-bg border-2 border-bg-alt rounded-xl px-6 py-3.5 text-sm font-semibold text-heading hover:border-primary hover:bg-white hover:shadow-md transition-all duration-300 group"
                    >
                        <svg class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        <span class="group-hover:text-primary transition-colors">Registrarse con Google</span>
                    </a>
                </div>

                <p class="text-center text-sm text-text mt-6">
                    ¿Ya tienes cuenta?
                    <Link href="/login" class="text-primary font-semibold hover:underline">Inicia sesión</Link>
                </p>
            </div>
        </div>
    </div>
</template>
