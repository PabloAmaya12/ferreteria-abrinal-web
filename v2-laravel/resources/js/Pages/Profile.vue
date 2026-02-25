<script setup>
import { ref } from 'vue';
import { useForm, Link, usePage } from '@inertiajs/vue3';
import AppLayout from '../Layouts/AppLayout.vue';

const props = defineProps({ user: Object });

const flash = usePage().props.flash;

const showPassword = ref(false);

const passwordForm = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const avatarForm = useForm({ avatar: null });
const avatarPreview = ref(null);

const submitPassword = () => {
    passwordForm.put('/perfil/password', {
        onSuccess: () => passwordForm.reset(),
    });
};

const onAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    avatarForm.avatar = file;
    avatarPreview.value = URL.createObjectURL(file);
};

const submitAvatar = () => {
    avatarForm.post('/perfil/avatar', {
        forceFormData: true,
        onSuccess: () => {
            avatarPreview.value = null;
        },
    });
};

const passwordStrength = (pw) => {
    if (!pw) return 0;
    let s = 0;
    if (pw.length >= 8) s++;
    if (/[A-Z]/.test(pw)) s++;
    if (/[a-z]/.test(pw)) s++;
    if (/\d/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    return s;
};

const strengthLabel = (s) => ['', 'Muy débil', 'Débil', 'Aceptable', 'Fuerte', 'Muy fuerte'][s] || '';
const strengthColor = (s) => ['', 'bg-red-500', 'bg-orange-500', 'bg-yellow', 'bg-green-500', 'bg-green-600'][s] || 'bg-bg-alt';
</script>

<template>
    <AppLayout>
        <Head title="Mi Perfil" />

        <section class="py-12 bg-bg min-h-screen">
            <div class="max-w-2xl mx-auto px-5 space-y-8">

                <!-- AVATAR CARD -->
                <div class="bg-white rounded-2xl p-8 shadow-sm text-center">
                    <div class="relative inline-block mb-4">
                        <div class="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center text-white text-4xl font-bold overflow-hidden mx-auto">
                            <img v-if="avatarPreview || user.avatar" :src="avatarPreview || user.avatar" :alt="user.name" class="w-full h-full object-cover" />
                            <span v-else>{{ user.name.charAt(0).toUpperCase() }}</span>
                        </div>
                    </div>
                    <h2 class="text-xl font-extrabold text-heading">{{ user.name }}</h2>
                    <p class="text-sm text-text">{{ user.email }}</p>

                    <form @submit.prevent="submitAvatar" class="mt-6">
                        <label class="inline-flex items-center gap-2 bg-bg hover:bg-primary/10 text-text hover:text-primary px-5 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-all">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                            Cambiar foto
                            <input type="file" accept="image/*" class="hidden" @change="onAvatarChange" />
                        </label>
                        <button v-if="avatarPreview" type="submit" :disabled="avatarForm.processing"
                            class="ml-3 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-primary/25 hover:bg-primary-dark transition-all disabled:opacity-50">
                            Guardar foto
                        </button>
                        <p v-if="avatarForm.errors.avatar" class="mt-2 text-xs text-red-500">{{ avatarForm.errors.avatar }}</p>
                    </form>
                </div>

                <!-- PASSWORD CARD -->
                <div class="bg-white rounded-2xl p-8 shadow-sm">
                    <h3 class="text-lg font-bold text-heading mb-6">Cambiar Contraseña</h3>
                    <form @submit.prevent="submitPassword" class="space-y-5">
                        <div>
                            <label class="block text-sm font-semibold text-heading mb-1.5">Contraseña actual</label>
                            <input v-model="passwordForm.current_password" type="password"
                                class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" />
                            <p v-if="passwordForm.errors.current_password" class="mt-1.5 text-xs text-red-500 font-medium">{{ passwordForm.errors.current_password }}</p>
                        </div>

                        <div>
                            <label class="block text-sm font-semibold text-heading mb-1.5">Nueva contraseña</label>
                            <div class="relative">
                                <input v-model="passwordForm.password" :type="showPassword ? 'text' : 'password'"
                                    class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all pr-12" />
                                <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-text/40 hover:text-primary transition-colors">
                                    <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                                    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"/></svg>
                                </button>
                            </div>
                            <div v-if="passwordForm.password" class="mt-2">
                                <div class="flex gap-1 mb-1">
                                    <div v-for="i in 5" :key="i" :class="[i <= passwordStrength(passwordForm.password) ? strengthColor(passwordStrength(passwordForm.password)) : 'bg-bg-alt']" class="h-1.5 flex-1 rounded-full transition-all" />
                                </div>
                                <p class="text-xs text-text/60">{{ strengthLabel(passwordStrength(passwordForm.password)) }}</p>
                            </div>
                            <p v-if="passwordForm.errors.password" class="mt-1.5 text-xs text-red-500 font-medium">{{ passwordForm.errors.password }}</p>
                        </div>

                        <div>
                            <label class="block text-sm font-semibold text-heading mb-1.5">Confirmar contraseña</label>
                            <input v-model="passwordForm.password_confirmation" type="password"
                                class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" />
                            <div v-if="passwordForm.password && passwordForm.password_confirmation" class="mt-1.5">
                                <p v-if="passwordForm.password === passwordForm.password_confirmation" class="text-xs text-green-600 font-medium flex items-center gap-1">
                                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                                    Las contraseñas coinciden
                                </p>
                                <p v-else class="text-xs text-red-500 font-medium">Las contraseñas no coinciden</p>
                            </div>
                        </div>

                        <button type="submit" :disabled="passwordForm.processing"
                            class="w-full py-3 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-bold rounded-xl shadow-md shadow-primary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-50">
                            Actualizar Contraseña
                        </button>
                    </form>
                </div>

                <!-- ORDERS LINK -->
                <Link href="/perfil/pedidos" class="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                            </div>
                            <div>
                                <h3 class="text-base font-bold text-heading">Mis Pedidos</h3>
                                <p class="text-xs text-text">Consulta el historial de tus compras</p>
                            </div>
                        </div>
                        <svg class="w-5 h-5 text-text/30 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                    </div>
                </Link>
            </div>
        </section>
    </AppLayout>
</template>
