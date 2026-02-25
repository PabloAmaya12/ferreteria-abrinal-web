<script setup>
import { ref, watch } from 'vue';
import { router, Link, usePage } from '@inertiajs/vue3';
import AppLayout from '../Layouts/AppLayout.vue';

const props = defineProps({
    products: Object,
    brands: Array,
    filters: Object,
});

const activeBrand = ref(props.filters.brand || '');
const searchQuery = ref(props.filters.q || '');
let searchTimeout = null;

const page = usePage();
const auth = page.props.auth;

const filterByBrand = (brandId) => {
    activeBrand.value = brandId;
    router.get('/productos', {
        brand: brandId || undefined,
        q: searchQuery.value || undefined,
    }, { preserveState: true, preserveScroll: true });
};

watch(searchQuery, (val) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        router.get('/productos', {
            brand: activeBrand.value || undefined,
            q: val || undefined,
        }, { preserveState: true, preserveScroll: true });
    }, 400);
});

const addToCart = (productId) => {
    router.post('/carrito', { product_id: productId, quantity: 1 }, {
        preserveScroll: true,
    });
};

const formatPrice = (val) => {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(val);
};
</script>

<template>
    <AppLayout>
        <Head title="Productos" />

        <section class="py-12 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute -top-20 -right-20 w-80 h-80 bg-purple rounded-full blur-3xl" />
                <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-iris rounded-full blur-3xl" />
            </div>
            <div class="max-w-7xl mx-auto px-5 relative z-10 text-center">
                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3">Catálogo de Productos</h1>
                <p class="text-lg opacity-90 max-w-xl mx-auto">Herramientas y materiales de calidad profesional</p>
            </div>
        </section>

        <section class="py-12 bg-bg min-h-screen">
            <div class="max-w-7xl mx-auto px-5">
                <!-- SEARCH + FILTER BAR -->
                <div class="flex flex-col sm:flex-row gap-4 mb-10 max-w-2xl mx-auto">
                    <div class="relative flex-1">
                        <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            v-model="searchQuery"
                            type="text"
                            placeholder="Buscar productos..."
                            class="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-bg-alt rounded-full text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                        />
                    </div>
                    <select
                        v-model="activeBrand"
                        @change="filterByBrand(activeBrand)"
                        class="px-5 py-3.5 bg-white border-2 border-bg-alt rounded-full text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none min-w-[180px]"
                    >
                        <option value="">Todas las marcas</option>
                        <option v-for="b in brands" :key="b.id" :value="b.id">{{ b.name }}</option>
                    </select>
                </div>

                <!-- PRODUCTS GRID -->
                <div v-if="products.data.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <div
                        v-for="product in products.data"
                        :key="product.id"
                        class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col"
                    >
                        <!-- IMAGE -->
                        <div class="h-48 bg-bg flex items-center justify-center relative overflow-hidden">
                            <img
                                v-if="product.image_url"
                                :src="product.image_url"
                                :alt="product.name"
                                loading="lazy"
                                class="max-w-full max-h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                            />
                            <div v-else class="flex flex-col items-center gap-2 text-text/30">
                                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                                <span class="text-xs">Sin imagen</span>
                            </div>
                            <div v-if="!product.active" class="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md">Inactivo</div>
                            <div v-if="product.stock <= 5 && product.stock > 0" class="absolute top-3 right-3 bg-yellow text-heading text-[10px] font-bold px-2 py-1 rounded-md">Últimas {{ product.stock }}</div>
                            <div v-if="product.stock === 0" class="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md">Agotado</div>
                        </div>

                        <!-- INFO -->
                        <div class="p-5 flex flex-col flex-1">
                            <div class="flex items-start justify-between gap-2 mb-2">
                                <h3 class="text-sm font-bold text-heading leading-tight flex-1">{{ product.name }}</h3>
                                <span class="text-[10px] font-mono text-text/40 bg-bg px-1.5 py-0.5 rounded shrink-0">{{ product.sku }}</span>
                            </div>
                            <p v-if="product.brand" class="text-xs text-primary font-semibold mb-3">{{ product.brand.name }}</p>

                            <!-- PRICES -->
                            <div class="grid grid-cols-3 gap-2 mb-4">
                                <div class="text-center p-2 bg-bg rounded-lg">
                                    <p class="text-[10px] text-text/50 font-medium">Público</p>
                                    <p class="text-sm font-bold text-heading">{{ formatPrice(product.prec_pub) }}</p>
                                </div>
                                <div class="text-center p-2 bg-bg rounded-lg">
                                    <p class="text-[10px] text-text/50 font-medium">Mayoreo</p>
                                    <p class="text-sm font-bold text-primary">{{ formatPrice(product.prec_may) }}</p>
                                </div>
                                <div class="text-center p-2 bg-bg rounded-lg">
                                    <p class="text-[10px] text-text/50 font-medium">Mínimo</p>
                                    <p class="text-sm font-bold text-green-600">{{ formatPrice(product.prec_min) }}</p>
                                </div>
                            </div>

                            <div class="mt-auto">
                                <button
                                    v-if="auth?.user && product.stock > 0"
                                    @click="addToCart(product.id)"
                                    class="w-full py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold rounded-xl shadow-md shadow-primary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                                >
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                                    </svg>
                                    Agregar al carrito
                                </button>
                                <Link
                                    v-else-if="!auth?.user"
                                    href="/login"
                                    class="w-full py-2.5 bg-bg text-text text-sm font-semibold rounded-xl hover:bg-primary/10 hover:text-primary transition-all flex items-center justify-center gap-2"
                                >
                                    Inicia sesión para comprar
                                </Link>
                                <button v-else disabled class="w-full py-2.5 bg-bg-alt text-text/40 text-sm font-semibold rounded-xl cursor-not-allowed">
                                    Sin stock
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- EMPTY -->
                <div v-else class="text-center py-20">
                    <div class="w-20 h-20 bg-bg-alt rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-10 h-10 text-text/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-heading mb-2">Sin resultados</h3>
                    <p class="text-text">No se encontraron productos con los filtros seleccionados.</p>
                </div>

                <!-- PAGINATION -->
                <div v-if="products.last_page > 1" class="flex justify-center items-center gap-2 mt-12">
                    <Link
                        :href="products.prev_page_url || '#'"
                        :class="['w-10 h-10 rounded-full flex items-center justify-center transition-all', products.prev_page_url ? 'bg-white text-text hover:bg-primary/10 hover:text-primary' : 'bg-bg-alt text-text/20 pointer-events-none']"
                        preserve-scroll
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                    </Link>
                    <template v-for="(link, i) in products.links" :key="i">
                        <Link
                            v-if="i > 0 && i < products.links.length - 1"
                            :href="link.url || '#'"
                            :class="['w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all', link.active ? 'bg-primary text-white shadow-md shadow-primary/25' : link.url ? 'bg-white text-text hover:bg-primary/10 hover:text-primary' : 'bg-bg-alt text-text/30 cursor-not-allowed']"
                            v-html="link.label"
                            preserve-scroll
                        />
                    </template>
                    <Link
                        :href="products.next_page_url || '#'"
                        :class="['w-10 h-10 rounded-full flex items-center justify-center transition-all', products.next_page_url ? 'bg-white text-text hover:bg-primary/10 hover:text-primary' : 'bg-bg-alt text-text/20 pointer-events-none']"
                        preserve-scroll
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                    </Link>
                </div>
            </div>
        </section>
    </AppLayout>
</template>
