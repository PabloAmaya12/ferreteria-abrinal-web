<script setup>
import { ref } from 'vue';
import { useForm, Link } from '@inertiajs/vue3';

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const showPassword = ref(false);

const submit = () => {
    form.post('/login', {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="Iniciar Sesión" />

    <div class="min-h-screen flex">
        <!-- LEFT PANEL - BRANDING -->
        <div class="hidden lg:flex lg:w-[45%] bg-gradient-to-br from-heading via-heading to-primary-dark relative overflow-hidden">
            <div class="absolute inset-0">
                <div class="absolute top-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
                <div class="absolute bottom-40 right-10 w-60 h-60 bg-purple/15 rounded-full blur-3xl" />
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-iris/10 rounded-full blur-3xl" />
            </div>

            <div class="absolute inset-0 opacity-[0.04]" style="background-image: url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%221%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');" />

            <div class="relative z-10 flex flex-col justify-between p-12 w-full">
                <Link href="/" class="flex items-center gap-3 group">
                    <div class="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-3xl shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
                        🛠️
                    </div>
                    <div>
                        <h2 class="text-xl font-bold text-white leading-tight">Ferretería Abrinal</h2>
                        <span class="text-xs text-white/60 font-medium">Herramientas de Calidad</span>
                    </div>
                </Link>

                <div class="max-w-sm">
                    <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white/80 font-medium mb-8">
                        <span class="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        +10 años de confianza
                    </div>
                    <h1 class="text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6">
                        Bienvenido de
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-iris">vuelta</span>
                    </h1>
                    <p class="text-white/70 text-lg leading-relaxed">
                        Accede a tu cuenta para gestionar tus pedidos, ver catálogos exclusivos y mucho más.
                    </p>
                </div>

                <div class="flex gap-10">
                    <div>
                        <p class="text-3xl font-bold text-white">+80</p>
                        <div class="w-10 h-1 bg-primary rounded-full my-2" />
                        <p class="text-sm text-white/50">Marcas</p>
                    </div>
                    <div>
                        <p class="text-3xl font-bold text-white">+10k</p>
                        <div class="w-10 h-1 bg-purple rounded-full my-2" />
                        <p class="text-sm text-white/50">Clientes</p>
                    </div>
                    <div>
                        <p class="text-3xl font-bold text-white">+10</p>
                        <div class="w-10 h-1 bg-iris rounded-full my-2" />
                        <p class="text-sm text-white/50">Años</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- RIGHT PANEL - FORM -->
        <div class="flex-1 flex items-center justify-center bg-bg px-6 py-12 lg:px-12">
            <div class="w-full max-w-md">
                <div class="lg:hidden flex items-center gap-3 mb-10">
                    <Link href="/" class="flex items-center gap-3 group">
                        <div class="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110">
                            🛠️
                        </div>
                        <div>
                            <span class="text-lg font-bold text-heading leading-tight block">Ferretería Abrinal</span>
                            <span class="text-xs text-text font-medium">Herramientas de Calidad</span>
                        </div>
                    </Link>
                </div>

                <h2 class="text-3xl font-extrabold text-heading mb-2">Iniciar Sesión</h2>
                <p class="text-text mb-8">Ingresa tus credenciales para acceder a tu cuenta</p>

                <!-- FORM FIRST -->
                <form @submit.prevent="submit" class="space-y-5">
                    <div>
                        <label for="email" class="block text-sm font-semibold text-heading mb-2">Correo electrónico</label>
                        <div class="relative">
                            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <input
                                id="email" v-model="form.email" type="email" placeholder="tu@correo.com"
                                class="w-full pl-12 pr-4 py-3.5 bg-white border-2 rounded-xl text-sm focus:outline-none transition-all duration-300"
                                :class="form.errors.email ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-bg-alt focus:border-primary focus:ring-4 focus:ring-primary/10'"
                                required autofocus
                            />
                        </div>
                        <p v-if="form.errors.email" class="mt-2 text-sm text-red-500 font-medium">{{ form.errors.email }}</p>
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-semibold text-heading mb-2">Contraseña</label>
                        <div class="relative">
                            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <input
                                id="password" v-model="form.password" :type="showPassword ? 'text' : 'password'" placeholder="••••••••"
                                class="w-full pl-12 pr-12 py-3.5 bg-white border-2 rounded-xl text-sm focus:outline-none transition-all duration-300"
                                :class="form.errors.password ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-bg-alt focus:border-primary focus:ring-4 focus:ring-primary/10'"
                                required
                            />
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
                        <p v-if="form.errors.password" class="mt-2 text-sm text-red-500 font-medium">{{ form.errors.password }}</p>
                    </div>

                    <div class="flex items-center">
                        <label class="flex items-center gap-2 cursor-pointer group">
                            <input v-model="form.remember" type="checkbox" class="w-4 h-4 rounded border-bg-alt text-primary focus:ring-primary/20 transition-colors" />
                            <span class="text-sm text-text group-hover:text-heading transition-colors">Recordarme</span>
                        </label>
                    </div>

                    <button
                        type="submit" :disabled="form.processing"
                        class="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                        <span v-if="form.processing" class="flex items-center justify-center gap-2">
                            <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Ingresando...
                        </span>
                        <span v-else>Iniciar Sesión</span>
                    </button>
                </form>

                <!-- DIVIDER -->
                <div class="relative my-8">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-bg-alt" />
                    </div>
                    <div class="relative flex justify-center">
                        <span class="px-4 bg-bg text-sm text-text/60 font-medium">o continúa con</span>
                    </div>
                </div>

                <!-- GOOGLE BUTTON -->
                <a
                    href="/auth/google"
                    class="flex items-center justify-center gap-3 w-full bg-white border-2 border-bg-alt rounded-xl px-6 py-3.5 text-sm font-semibold text-heading hover:border-primary hover:shadow-md transition-all duration-300 group"
                >
                    <svg class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span class="group-hover:text-primary transition-colors">Continuar con Google</span>
                </a>

                <p class="text-center text-sm text-text mt-8">
                    ¿No tienes cuenta?
                    <Link href="/registro" class="text-primary font-semibold hover:underline">Regístrate aquí</Link>
                </p>
            </div>
        </div>
    </div>
</template>
