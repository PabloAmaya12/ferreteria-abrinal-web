<script setup>
import { ref } from 'vue';
import { useForm, router } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';

const props = defineProps({
    categories: Array,
});

const showModal = ref(false);
const editingCategory = ref(null);

const form = useForm({
    name: '',
});

const openCreate = () => {
    editingCategory.value = null;
    form.reset();
    form.clearErrors();
    showModal.value = true;
};

const openEdit = (category) => {
    editingCategory.value = category;
    form.name = category.name;
    form.clearErrors();
    showModal.value = true;
};

const submit = () => {
    if (editingCategory.value) {
        form.put(`/admin/categorias/${editingCategory.value.id}`, {
            onSuccess: () => { showModal.value = false; },
        });
    } else {
        form.post('/admin/categorias', {
            onSuccess: () => { showModal.value = false; form.reset(); },
        });
    }
};

const deleteCategory = (category) => {
    if (category.brands_count > 0) {
        alert(`No se puede eliminar: "${category.name}" tiene ${category.brands_count} marca(s) asociada(s).`);
        return;
    }
    if (confirm(`¿Eliminar la categoría "${category.name}"?`)) {
        router.delete(`/admin/categorias/${category.id}`);
    }
};
</script>

<template>
    <AppLayout>
        <Head title="Admin — Categorías" />

        <section class="py-8 bg-bg min-h-screen">
            <div class="max-w-4xl mx-auto px-5">
                <div class="flex items-center justify-between mb-8">
                    <div>
                        <h1 class="text-2xl font-extrabold text-heading">Gestión de Categorías</h1>
                        <p class="text-sm text-text mt-1">{{ categories.length }} categorías · orden alfabético automático</p>
                    </div>
                    <button
                        @click="openCreate"
                        class="inline-flex items-center gap-2 bg-gradient-to-r from-purple to-iris text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-purple/25 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                        Nueva Categoría
                    </button>
                </div>

                <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div class="divide-y divide-bg-alt">
                        <div
                            v-for="(category, index) in categories"
                            :key="category.id"
                            class="flex items-center justify-between px-6 py-4 hover:bg-bg/50 transition-colors"
                        >
                            <div class="flex items-center gap-4">
                                <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-purple/10 to-iris/10 flex items-center justify-center text-xs font-bold text-purple">
                                    {{ index + 1 }}
                                </span>
                                <div>
                                    <p class="font-semibold text-heading">{{ category.name }}</p>
                                    <p class="text-xs text-text/60">{{ category.brands_count }} marca{{ category.brands_count !== 1 ? 's' : '' }}</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <button @click="openEdit(category)" class="w-8 h-8 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </button>
                                <button @click="deleteCategory(category)" class="w-8 h-8 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all" :class="{ 'opacity-30 cursor-not-allowed': category.brands_count > 0 }">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div v-if="!categories.length" class="text-center py-16">
                        <p class="text-text/40 text-lg">No hay categorías registradas</p>
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

                    <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 z-10">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-xl font-bold text-heading">{{ editingCategory ? 'Editar Categoría' : 'Nueva Categoría' }}</h2>
                            <button @click="showModal = false" class="w-8 h-8 rounded-lg bg-bg text-text hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition-all">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <form @submit.prevent="submit" class="space-y-5">
                            <div>
                                <label class="block text-sm font-semibold text-heading mb-1.5">Nombre de la categoría *</label>
                                <input v-model="form.name" type="text" placeholder="Ej: Herramientas"
                                    class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all"
                                    autofocus />
                                <p class="mt-1.5 text-xs text-text/50">Solo letras, espacios y guiones. Se capitaliza automáticamente.</p>
                                <p v-if="form.errors.name" class="mt-1.5 text-xs text-red-500 font-medium">{{ form.errors.name }}</p>
                            </div>

                            <div class="flex gap-3 pt-2">
                                <button type="button" @click="showModal = false" class="flex-1 py-3 rounded-xl text-sm font-semibold bg-bg text-text hover:bg-bg-alt transition-colors">
                                    Cancelar
                                </button>
                                <button type="submit" :disabled="form.processing" class="flex-1 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple to-iris text-white shadow-md shadow-purple/25 hover:shadow-lg transition-all disabled:opacity-50">
                                    {{ editingCategory ? 'Guardar' : 'Crear' }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </AppLayout>
</template>
