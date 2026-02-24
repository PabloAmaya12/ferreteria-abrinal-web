<script setup>
import { ref } from 'vue';
import { useForm, Link, router } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';

const props = defineProps({
    users: Object,
    roles: Array,
});

const showModal = ref(false);
const editingUser = ref(null);

const form = useForm({
    name: '',
    email: '',
    password: '',
    role: '',
});

const openCreate = () => {
    editingUser.value = null;
    form.reset();
    form.clearErrors();
    showModal.value = true;
};

const openEdit = (user) => {
    editingUser.value = user;
    form.name = user.name;
    form.email = user.email;
    form.password = '';
    form.role = user.roles?.[0]?.name || '';
    form.clearErrors();
    showModal.value = true;
};

const submit = () => {
    if (editingUser.value) {
        form.put(`/admin/usuarios/${editingUser.value.id}`, {
            onSuccess: () => { showModal.value = false; },
        });
    } else {
        form.post('/admin/usuarios', {
            onSuccess: () => { showModal.value = false; form.reset(); },
        });
    }
};

const deleteUser = (user) => {
    if (confirm(`¿Eliminar al usuario "${user.name}"?`)) {
        router.delete(`/admin/usuarios/${user.id}`);
    }
};
</script>

<template>
    <AppLayout>
        <Head title="Admin — Usuarios" />

        <section class="py-8 bg-bg min-h-screen">
            <div class="max-w-5xl mx-auto px-5">
                <div class="flex items-center justify-between mb-8">
                    <div>
                        <h1 class="text-2xl font-extrabold text-heading">Gestión de Usuarios</h1>
                        <p class="text-sm text-text mt-1">{{ users.total }} usuarios registrados</p>
                    </div>
                    <button
                        @click="openCreate"
                        class="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-primary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                        Nuevo Usuario
                    </button>
                </div>

                <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead class="bg-bg border-b border-bg-alt">
                                <tr>
                                    <th class="text-left px-6 py-4 font-semibold text-heading">Usuario</th>
                                    <th class="text-left px-6 py-4 font-semibold text-heading">Correo</th>
                                    <th class="text-center px-6 py-4 font-semibold text-heading">Rol</th>
                                    <th class="text-right px-6 py-4 font-semibold text-heading">Acciones</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-bg-alt">
                                <tr v-for="user in users.data" :key="user.id" class="hover:bg-bg/50 transition-colors">
                                    <td class="px-6 py-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center text-white text-sm font-bold shrink-0">
                                                {{ user.name.charAt(0).toUpperCase() }}
                                            </div>
                                            <p class="font-semibold text-heading">{{ user.name }}</p>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-text">{{ user.email }}</td>
                                    <td class="px-6 py-4 text-center">
                                        <span v-if="user.roles?.length" :class="user.roles[0].name === 'admin' ? 'bg-yellow/20 text-yellow-700' : 'bg-primary/10 text-primary'" class="px-3 py-1 text-xs font-semibold rounded-full">
                                            {{ user.roles[0].name }}
                                        </span>
                                        <span v-else class="text-xs text-text/30">sin rol</span>
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <div class="flex items-center justify-end gap-2">
                                            <button @click="openEdit(user)" class="w-8 h-8 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            <button @click="deleteUser(user)" class="w-8 h-8 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        <!-- MODAL -->
        <Teleport to="body">
            <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <div v-if="showModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div class="fixed inset-0 bg-heading/50 backdrop-blur-sm" @click="showModal = false" />

                    <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 z-10">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-xl font-bold text-heading">{{ editingUser ? 'Editar Usuario' : 'Nuevo Usuario' }}</h2>
                            <button @click="showModal = false" class="w-8 h-8 rounded-lg bg-bg text-text hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition-all">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <form @submit.prevent="submit" class="space-y-5">
                            <div>
                                <label class="block text-sm font-semibold text-heading mb-1.5">Nombre *</label>
                                <input v-model="form.name" type="text" class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" />
                                <p v-if="form.errors.name" class="mt-1.5 text-xs text-red-500 font-medium">{{ form.errors.name }}</p>
                            </div>

                            <div>
                                <label class="block text-sm font-semibold text-heading mb-1.5">Correo *</label>
                                <input v-model="form.email" type="email" class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" />
                                <p v-if="form.errors.email" class="mt-1.5 text-xs text-red-500 font-medium">{{ form.errors.email }}</p>
                            </div>

                            <div>
                                <label class="block text-sm font-semibold text-heading mb-1.5">Contraseña {{ editingUser ? '(dejar vacío para no cambiar)' : '*' }}</label>
                                <input v-model="form.password" type="password" class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" />
                                <p v-if="form.errors.password" class="mt-1.5 text-xs text-red-500 font-medium">{{ form.errors.password }}</p>
                            </div>

                            <div>
                                <label class="block text-sm font-semibold text-heading mb-1.5">Rol</label>
                                <select v-model="form.role" class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all appearance-none">
                                    <option value="">Sin rol</option>
                                    <option v-for="role in roles" :key="role.id" :value="role.name">{{ role.name }}</option>
                                </select>
                            </div>

                            <div class="flex gap-3 pt-2">
                                <button type="button" @click="showModal = false" class="flex-1 py-3 rounded-xl text-sm font-semibold bg-bg text-text hover:bg-bg-alt transition-colors">
                                    Cancelar
                                </button>
                                <button type="submit" :disabled="form.processing" class="flex-1 py-3 rounded-xl text-sm font-semibold bg-primary text-white shadow-md shadow-primary/25 hover:bg-primary-dark transition-all disabled:opacity-50">
                                    {{ editingUser ? 'Guardar' : 'Crear' }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </AppLayout>
</template>
