<script setup>
import { ref, watch } from 'vue';
import { useForm, Link, router } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';

const props = defineProps({
    brands: Object,
    categories: Array,
});

const showModal = ref(false);
const editingBrand = ref(null);

const form = useForm({
    name: '',
    category_id: '',
    image_url: '',
    link: '',
    active: true,
});

const openCreate = () => {
    editingBrand.value = null;
    form.reset();
    form.clearErrors();
    showModal.value = true;
};

const openEdit = (brand) => {
    editingBrand.value = brand;
    form.name = brand.name;
    form.category_id = brand.category_id;
    form.image_url = brand.image_url || '';
    form.link = brand.link || '';
    form.active = brand.active;
    form.clearErrors();
    showModal.value = true;
};

const submit = () => {
    if (editingBrand.value) {
        form.put(`/admin/marcas/${editingBrand.value.id}`, {
            onSuccess: () => { showModal.value = false; },
        });
    } else {
        form.post('/admin/marcas', {
            onSuccess: () => { showModal.value = false; form.reset(); },
        });
    }
};

const deleteBrand = (brand) => {
    if (confirm(`¿Eliminar la marca "${brand.name}"?`)) {
        router.delete(`/admin/marcas/${brand.id}`);
    }
};

const brandInitial = (name) => name.charAt(0).toUpperCase();
</script>

<template>
    <AppLayout>
        <Head title="Admin — Marcas" />

        <section class="py-8 bg-bg min-h-screen">
            <div class="max-w-7xl mx-auto px-5">
                <div class="flex items-center justify-between mb-8">
                    <div>
                        <h1 class="text-2xl font-extrabold text-heading">Gestión de Marcas</h1>
                        <p class="text-sm text-text mt-1">{{ brands.total }} marcas registradas</p>
                    </div>
                    <button
                        @click="openCreate"
                        class="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-primary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                        Nueva Marca
                    </button>
                </div>

                <!-- TABLE -->
                <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead class="bg-bg border-b border-bg-alt">
                                <tr>
                                    <th class="text-left px-6 py-4 font-semibold text-heading">Marca</th>
                                    <th class="text-left px-6 py-4 font-semibold text-heading">Categoría</th>
                                    <th class="text-left px-6 py-4 font-semibold text-heading">Imagen</th>
                                    <th class="text-center px-6 py-4 font-semibold text-heading">Estado</th>
                                    <th class="text-right px-6 py-4 font-semibold text-heading">Acciones</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-bg-alt">
                                <tr v-for="brand in brands.data" :key="brand.id" class="hover:bg-bg/50 transition-colors">
                                    <td class="px-6 py-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-10 h-10 rounded-xl bg-bg flex items-center justify-center overflow-hidden shrink-0">
                                                <img v-if="brand.image_url" :src="brand.image_url" :alt="brand.name" class="max-w-full max-h-full object-contain" />
                                                <span v-else class="text-lg font-bold text-heading/30">{{ brandInitial(brand.name) }}</span>
                                            </div>
                                            <div>
                                                <p class="font-semibold text-heading">{{ brand.name }}</p>
                                                <a v-if="brand.link" :href="brand.link" target="_blank" class="text-xs text-primary hover:underline truncate block max-w-[200px]">{{ brand.link }}</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <span class="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                                            {{ brand.category?.name || '—' }}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4">
                                        <span :class="brand.image_url ? 'text-green-500' : 'text-text/30'" class="text-xs font-medium">
                                            {{ brand.image_url ? 'Sí' : 'No' }}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-center">
                                        <span :class="brand.active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'" class="px-3 py-1 text-xs font-semibold rounded-full">
                                            {{ brand.active ? 'Activa' : 'Inactiva' }}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <div class="flex items-center justify-end gap-2">
                                            <button @click="openEdit(brand)" class="w-8 h-8 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            <button @click="deleteBrand(brand)" class="w-8 h-8 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all">
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

                    <!-- PAGINATION -->
                    <div v-if="brands.last_page > 1" class="flex justify-center gap-2 py-6 border-t border-bg-alt">
                        <Link
                            v-for="link in brands.links"
                            :key="link.label"
                            :href="link.url || '#'"
                            :class="[
                                'w-9 h-9 rounded-lg flex items-center justify-center text-xs font-medium transition-all',
                                link.active ? 'bg-primary text-white' : link.url ? 'bg-bg text-text hover:bg-primary/10' : 'bg-bg-alt text-text/30 cursor-not-allowed'
                            ]"
                            v-html="link.label"
                            preserve-scroll
                        />
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
                            <h2 class="text-xl font-bold text-heading">{{ editingBrand ? 'Editar Marca' : 'Nueva Marca' }}</h2>
                            <button @click="showModal = false" class="w-8 h-8 rounded-lg bg-bg text-text hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition-all">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <form @submit.prevent="submit" class="space-y-5">
                            <div>
                                <label class="block text-sm font-semibold text-heading mb-1.5">Nombre *</label>
                                <input v-model="form.name" type="text" placeholder="Ej: Truper"
                                    class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" />
                                <p v-if="form.errors.name" class="mt-1.5 text-xs text-red-500 font-medium">{{ form.errors.name }}</p>
                            </div>

                            <div>
                                <label class="block text-sm font-semibold text-heading mb-1.5">Categoría *</label>
                                <select v-model="form.category_id"
                                    class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all appearance-none">
                                    <option value="" disabled>Selecciona una categoría</option>
                                    <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
                                </select>
                                <p v-if="form.errors.category_id" class="mt-1.5 text-xs text-red-500 font-medium">{{ form.errors.category_id }}</p>
                            </div>

                            <div>
                                <label class="block text-sm font-semibold text-heading mb-1.5">URL de imagen (logo)</label>
                                <input v-model="form.image_url" type="text" placeholder="/images/brands/Logo.png"
                                    class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" />
                                <p v-if="form.errors.image_url" class="mt-1.5 text-xs text-red-500 font-medium">{{ form.errors.image_url }}</p>
                            </div>

                            <div>
                                <label class="block text-sm font-semibold text-heading mb-1.5">Enlace web</label>
                                <input v-model="form.link" type="url" placeholder="https://www.ejemplo.com"
                                    class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" />
                                <p v-if="form.errors.link" class="mt-1.5 text-xs text-red-500 font-medium">{{ form.errors.link }}</p>
                            </div>

                            <div class="flex items-center gap-3">
                                <label class="flex items-center gap-2 cursor-pointer">
                                    <input v-model="form.active" type="checkbox" class="w-4 h-4 rounded border-bg-alt text-primary focus:ring-primary/20" />
                                    <span class="text-sm font-medium text-heading">Marca activa</span>
                                </label>
                            </div>

                            <div class="flex gap-3 pt-2">
                                <button type="button" @click="showModal = false" class="flex-1 py-3 rounded-xl text-sm font-semibold bg-bg text-text hover:bg-bg-alt transition-colors">
                                    Cancelar
                                </button>
                                <button type="submit" :disabled="form.processing" class="flex-1 py-3 rounded-xl text-sm font-semibold bg-primary text-white shadow-md shadow-primary/25 hover:bg-primary-dark transition-all disabled:opacity-50">
                                    {{ editingBrand ? 'Guardar cambios' : 'Crear marca' }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </AppLayout>
</template>
