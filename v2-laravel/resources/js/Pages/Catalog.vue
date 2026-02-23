<script setup>
import { ref, computed, watch } from 'vue';
import { router, Link } from '@inertiajs/vue3';
import AppLayout from '../Layouts/AppLayout.vue';

const props = defineProps({
    brands: Object,
    categories: Array,
    filters: Object,
});

const activeCategory = ref(props.filters.category || 'all');
const searchQuery = ref(props.filters.q || '');
let searchTimeout = null;
const logoErrors = ref({});

const filterByCategory = (slug) => {
    activeCategory.value = slug;
    router.get('/catalogo', {
        category: slug === 'all' ? undefined : slug,
        q: searchQuery.value || undefined,
    }, { preserveState: true, preserveScroll: true });
};

watch(searchQuery, (val) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        router.get('/catalogo', {
            category: activeCategory.value === 'all' ? undefined : activeCategory.value,
            q: val || undefined,
        }, { preserveState: true, preserveScroll: true });
    }, 400);
});

const brandInitial = (name) => name.charAt(0).toUpperCase();
const markLogoError = (id) => {
    logoErrors.value[id] = true;
};
const hasLogo = (brand) => Boolean(brand?.image_url) && !logoErrors.value[brand.id];
</script>

<template>
    <AppLayout>
        <Head title="Catálogo" />

        <!-- HEADER -->
        <section class="py-12 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute -top-20 -right-20 w-80 h-80 bg-purple rounded-full blur-3xl" />
                <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-iris rounded-full blur-3xl" />
            </div>
            <div class="max-w-7xl mx-auto px-5 relative z-10 text-center">
                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3">Catálogo de Marcas</h1>
                <p class="text-lg opacity-90 max-w-xl mx-auto">Descubre las mejores marcas profesionales</p>
            </div>
        </section>

        <section class="py-12 bg-bg min-h-screen">
            <div class="max-w-7xl mx-auto px-5">
                <!-- SEARCH -->
                <div class="max-w-md mx-auto mb-8">
                    <div class="relative">
                        <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            v-model="searchQuery"
                            type="text"
                            placeholder="Buscar marcas..."
                            class="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-bg-alt rounded-full text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                        />
                    </div>
                </div>

                <!-- FILTERS -->
                <div class="flex flex-wrap gap-2 justify-center mb-10">
                    <button
                        :class="[
                            'px-5 py-2.5 rounded-full text-sm font-medium border-2 transition-all duration-300',
                            activeCategory === 'all'
                                ? 'bg-primary border-primary text-white shadow-md shadow-primary/25'
                                : 'bg-white border-bg-alt text-text hover:border-primary hover:text-primary'
                        ]"
                        @click="filterByCategory('all')"
                    >
                        Todas
                    </button>
                    <button
                        v-for="cat in categories"
                        :key="cat.id"
                        :class="[
                            'px-5 py-2.5 rounded-full text-sm font-medium border-2 transition-all duration-300',
                            activeCategory === cat.slug
                                ? 'bg-primary border-primary text-white shadow-md shadow-primary/25'
                                : 'bg-white border-bg-alt text-text hover:border-primary hover:text-primary'
                        ]"
                        @click="filterByCategory(cat.slug)"
                    >
                        {{ cat.name }}
                    </button>
                </div>

                <!-- BRANDS GRID -->
                <div v-if="brands.data.length" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
                    <a
                        v-for="brand in brands.data"
                        :key="brand.id"
                        :href="brand.link || '#'"
                        :target="brand.link ? '_blank' : undefined"
                        rel="noopener noreferrer"
                        class="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center aspect-square relative overflow-hidden"
                    >
                        <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div class="w-16 h-16 rounded-2xl bg-bg flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors duration-300 overflow-hidden">
                            <img
                                v-if="hasLogo(brand)"
                                :src="brand.image_url"
                                :alt="brand.name"
                                loading="lazy"
                                class="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                @error="markLogoError(brand.id)"
                            />
                            <span
                                v-else
                                class="text-2xl font-bold text-heading/30 group-hover:text-primary transition-colors duration-300"
                            >
                                {{ brandInitial(brand.name) }}
                            </span>
                        </div>

                        <p class="text-sm font-semibold text-heading text-center relative z-10">{{ brand.name }}</p>
                        <span class="text-xs text-text/60 mt-1" v-if="brand.category">{{ brand.category.name }}</span>

                        <div v-if="brand.link" class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </div>
                    </a>
                </div>

                <!-- EMPTY STATE -->
                <div v-else class="text-center py-20">
                    <div class="w-20 h-20 bg-bg-alt rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-10 h-10 text-text/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-heading mb-2">Sin resultados</h3>
                    <p class="text-text">No se encontraron marcas con los filtros seleccionados.</p>
                </div>

                <!-- PAGINATION -->
                <div v-if="brands.last_page > 1" class="flex justify-center gap-2 mt-12">
                    <Link
                        v-for="link in brands.links"
                        :key="link.label"
                        :href="link.url || '#'"
                        :class="[
                            'w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all',
                            link.active
                                ? 'bg-primary text-white shadow-md shadow-primary/25'
                                : link.url
                                    ? 'bg-white text-text hover:bg-primary/10 hover:text-primary'
                                    : 'bg-bg-alt text-text/30 cursor-not-allowed'
                        ]"
                        v-html="link.label"
                        preserve-scroll
                    />
                </div>
            </div>
        </section>
    </AppLayout>
</template>
