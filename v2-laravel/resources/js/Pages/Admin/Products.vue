<script setup>
import { ref } from 'vue';
import { useForm, Link, router } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';

const props = defineProps({
    products: Object,
    brands: Array,
});

const showModal = ref(false);
const editingProduct = ref(null);

const form = useForm({
    name: '',
    description: '',
    sku: '',
    prec_pub: '',
    prec_may: '',
    prec_min: '',
    brand_id: '',
    image_url: '',
    stock: 0,
    active: true,
});

const openCreate = () => {
    editingProduct.value = null;
    form.reset();
    form.clearErrors();
    showModal.value = true;
};

const openEdit = (product) => {
    editingProduct.value = product;
    form.name = product.name;
    form.description = product.description || '';
    form.sku = product.sku;
    form.prec_pub = product.prec_pub;
    form.prec_may = product.prec_may;
    form.prec_min = product.prec_min;
    form.brand_id = product.brand_id;
    form.image_url = product.image_url || '';
    form.stock = product.stock;
    form.active = product.active;
    form.clearErrors();
    showModal.value = true;
};

const submit = () => {
    if (editingProduct.value) {
        form.put(`/admin/productos/${editingProduct.value.id}`, {
            onSuccess: () => { showModal.value = false; },
        });
    } else {
        form.post('/admin/productos', {
            onSuccess: () => { showModal.value = false; form.reset(); },
        });
    }
};

const deleteProduct = (product) => {
    if (confirm(`¿Eliminar el producto "${product.name}"?`)) {
        router.delete(`/admin/productos/${product.id}`);
    }
};

const formatPrice = (val) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(val);
</script>

<template>
    <AppLayout>
        <Head title="Admin — Productos" />

        <section class="py-8 bg-bg min-h-screen">
            <div class="max-w-7xl mx-auto px-5">
                <div class="flex items-center justify-between mb-8">
                    <div>
                        <h1 class="text-2xl font-extrabold text-heading">Gestión de Productos</h1>
                        <p class="text-sm text-text mt-1">{{ products.total }} productos registrados</p>
                    </div>
                    <button @click="openCreate" class="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-primary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                        Nuevo Producto
                    </button>
                </div>

                <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead class="bg-bg border-b border-bg-alt">
                                <tr>
                                    <th class="text-left px-6 py-4 font-semibold text-heading">Producto</th>
                                    <th class="text-left px-6 py-4 font-semibold text-heading hidden md:table-cell">SKU</th>
                                    <th class="text-right px-6 py-4 font-semibold text-heading">P. Público</th>
                                    <th class="text-right px-6 py-4 font-semibold text-heading hidden sm:table-cell">P. Mayoreo</th>
                                    <th class="text-right px-6 py-4 font-semibold text-heading hidden lg:table-cell">P. Mínimo</th>
                                    <th class="text-center px-6 py-4 font-semibold text-heading">Stock</th>
                                    <th class="text-center px-6 py-4 font-semibold text-heading hidden sm:table-cell">Estado</th>
                                    <th class="text-right px-6 py-4 font-semibold text-heading">Acciones</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-bg-alt">
                                <tr v-for="product in products.data" :key="product.id" class="hover:bg-bg/50 transition-colors">
                                    <td class="px-6 py-4">
                                        <div>
                                            <p class="font-semibold text-heading">{{ product.name }}</p>
                                            <p class="text-xs text-primary font-medium">{{ product.brand?.name }}</p>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 hidden md:table-cell">
                                        <span class="text-xs font-mono text-text/60 bg-bg px-2 py-1 rounded">{{ product.sku }}</span>
                                    </td>
                                    <td class="px-6 py-4 text-right font-semibold text-heading">{{ formatPrice(product.prec_pub) }}</td>
                                    <td class="px-6 py-4 text-right text-primary hidden sm:table-cell">{{ formatPrice(product.prec_may) }}</td>
                                    <td class="px-6 py-4 text-right text-green-600 hidden lg:table-cell">{{ formatPrice(product.prec_min) }}</td>
                                    <td class="px-6 py-4 text-center">
                                        <span :class="product.stock === 0 ? 'bg-red-100 text-red-700' : product.stock <= 10 ? 'bg-yellow/20 text-yellow-700' : 'bg-green-100 text-green-700'" class="px-3 py-1 text-xs font-semibold rounded-full">
                                            {{ product.stock }}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-center hidden sm:table-cell">
                                        <span :class="product.active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'" class="px-3 py-1 text-xs font-semibold rounded-full">
                                            {{ product.active ? 'Activo' : 'Inactivo' }}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <div class="flex items-center justify-end gap-2">
                                            <button @click="openEdit(product)" class="w-8 h-8 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                                            </button>
                                            <button @click="deleteProduct(product)" class="w-8 h-8 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- PAGINATION -->
                    <div v-if="products.last_page > 1" class="flex justify-center items-center gap-2 py-6 border-t border-bg-alt">
                        <Link
                            :href="products.prev_page_url || '#'"
                            :class="['w-9 h-9 rounded-lg flex items-center justify-center transition-all', products.prev_page_url ? 'bg-bg text-text hover:bg-primary/10 hover:text-primary' : 'bg-bg-alt text-text/20 pointer-events-none']"
                            preserve-scroll
                        >
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                        </Link>
                        <template v-for="(link, i) in products.links" :key="i">
                            <Link
                                v-if="i > 0 && i < products.links.length - 1"
                                :href="link.url || '#'"
                                :class="['w-9 h-9 rounded-lg flex items-center justify-center text-xs font-medium transition-all', link.active ? 'bg-primary text-white' : link.url ? 'bg-bg text-text hover:bg-primary/10' : 'bg-bg-alt text-text/30 cursor-not-allowed']"
                                v-html="link.label"
                                preserve-scroll
                            />
                        </template>
                        <Link
                            :href="products.next_page_url || '#'"
                            :class="['w-9 h-9 rounded-lg flex items-center justify-center transition-all', products.next_page_url ? 'bg-bg text-text hover:bg-primary/10 hover:text-primary' : 'bg-bg-alt text-text/20 pointer-events-none']"
                            preserve-scroll
                        >
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                        </Link>
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

                    <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 z-10 max-h-[90vh] overflow-y-auto">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-xl font-bold text-heading">{{ editingProduct ? 'Editar Producto' : 'Nuevo Producto' }}</h2>
                            <button @click="showModal = false" class="w-8 h-8 rounded-lg bg-bg text-text hover:bg-red-50 hover:text-red-500 flex items-center justify-center transition-all">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                            </button>
                        </div>

                        <form @submit.prevent="submit" class="space-y-5">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div class="sm:col-span-2">
                                    <label class="block text-sm font-semibold text-heading mb-1.5">Nombre *</label>
                                    <input v-model="form.name" type="text" placeholder="Ej: Martillo 1/2&quot;"
                                        class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" />
                                    <p v-if="form.errors.name" class="mt-1.5 text-xs text-red-500 font-medium">{{ form.errors.name }}</p>
                                </div>

                                <div>
                                    <label class="block text-sm font-semibold text-heading mb-1.5">SKU *</label>
                                    <input v-model="form.sku" type="text" placeholder="ABC-12345"
                                        class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all font-mono" />
                                    <p v-if="form.errors.sku" class="mt-1.5 text-xs text-red-500 font-medium">{{ form.errors.sku }}</p>
                                </div>

                                <div>
                                    <label class="block text-sm font-semibold text-heading mb-1.5">Marca *</label>
                                    <select v-model="form.brand_id"
                                        class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all appearance-none">
                                        <option value="" disabled>Selecciona una marca</option>
                                        <option v-for="b in brands" :key="b.id" :value="b.id">{{ b.name }}</option>
                                    </select>
                                    <p v-if="form.errors.brand_id" class="mt-1.5 text-xs text-red-500 font-medium">{{ form.errors.brand_id }}</p>
                                </div>

                                <div>
                                    <label class="block text-sm font-semibold text-heading mb-1.5">Precio Público *</label>
                                    <input v-model="form.prec_pub" type="number" step="0.01" min="0" placeholder="0.00"
                                        class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" />
                                    <p v-if="form.errors.prec_pub" class="mt-1.5 text-xs text-red-500 font-medium">{{ form.errors.prec_pub }}</p>
                                </div>

                                <div>
                                    <label class="block text-sm font-semibold text-heading mb-1.5">Precio Mayoreo *</label>
                                    <input v-model="form.prec_may" type="number" step="0.01" min="0" placeholder="0.00"
                                        class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" />
                                    <p v-if="form.errors.prec_may" class="mt-1.5 text-xs text-red-500 font-medium">{{ form.errors.prec_may }}</p>
                                </div>

                                <div>
                                    <label class="block text-sm font-semibold text-heading mb-1.5">Precio Mínimo *</label>
                                    <input v-model="form.prec_min" type="number" step="0.01" min="0" placeholder="0.00"
                                        class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" />
                                    <p v-if="form.errors.prec_min" class="mt-1.5 text-xs text-red-500 font-medium">{{ form.errors.prec_min }}</p>
                                </div>

                                <div>
                                    <label class="block text-sm font-semibold text-heading mb-1.5">Stock *</label>
                                    <input v-model="form.stock" type="number" min="0" placeholder="0"
                                        class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" />
                                    <p v-if="form.errors.stock" class="mt-1.5 text-xs text-red-500 font-medium">{{ form.errors.stock }}</p>
                                </div>

                                <div class="sm:col-span-2">
                                    <label class="block text-sm font-semibold text-heading mb-1.5">URL de imagen</label>
                                    <input v-model="form.image_url" type="url" placeholder="https://..."
                                        class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" />
                                    <p v-if="form.errors.image_url" class="mt-1.5 text-xs text-red-500 font-medium">{{ form.errors.image_url }}</p>
                                </div>

                                <div class="sm:col-span-2">
                                    <label class="block text-sm font-semibold text-heading mb-1.5">Descripción</label>
                                    <textarea v-model="form.description" rows="3" placeholder="Descripción del producto..."
                                        class="w-full px-4 py-3 bg-bg border-2 border-transparent rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all resize-none" />
                                    <p v-if="form.errors.description" class="mt-1.5 text-xs text-red-500 font-medium">{{ form.errors.description }}</p>
                                </div>

                                <div class="flex items-center gap-3">
                                    <label class="flex items-center gap-2 cursor-pointer">
                                        <input v-model="form.active" type="checkbox" class="w-4 h-4 rounded border-bg-alt text-primary focus:ring-primary/20" />
                                        <span class="text-sm font-medium text-heading">Producto activo</span>
                                    </label>
                                </div>
                            </div>

                            <div class="flex gap-3 pt-2">
                                <button type="button" @click="showModal = false" class="flex-1 py-3 rounded-xl text-sm font-semibold bg-bg text-text hover:bg-bg-alt transition-colors">
                                    Cancelar
                                </button>
                                <button type="submit" :disabled="form.processing" class="flex-1 py-3 rounded-xl text-sm font-semibold bg-primary text-white shadow-md shadow-primary/25 hover:bg-primary-dark transition-all disabled:opacity-50">
                                    {{ editingProduct ? 'Guardar cambios' : 'Crear producto' }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </AppLayout>
</template>
