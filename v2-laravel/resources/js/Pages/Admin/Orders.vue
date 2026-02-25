<script setup>
import { ref } from 'vue';
import { router, Link } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';

const props = defineProps({
    orders: Object,
    filters: Object,
});

const searchQuery = ref(props.filters.q || '');
const statusFilter = ref(props.filters.status || '');
let searchTimeout = null;

const applyFilters = () => {
    router.get('/admin/pedidos', {
        q: searchQuery.value || undefined,
        status: statusFilter.value || undefined,
    }, { preserveState: true, preserveScroll: true });
};

const onSearch = (val) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(applyFilters, 400);
};

const updateStatus = (order, status) => {
    router.patch(`/admin/pedidos/${order.id}/status`, { status }, { preserveScroll: true });
};

const formatPrice = (val) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(val);
const formatDate = (d) => new Date(d).toLocaleDateString('es-MX', { year: 'numeric', month: 'short', day: 'numeric' });

const statusColors = {
    pendiente: 'bg-yellow/20 text-yellow-700',
    procesando: 'bg-blue-100 text-blue-700',
    completado: 'bg-green-100 text-green-700',
    cancelado: 'bg-red-100 text-red-700',
};

const showDetailId = ref(null);
const toggleDetail = (id) => {
    showDetailId.value = showDetailId.value === id ? null : id;
};
</script>

<template>
    <AppLayout>
        <Head title="Admin — Pedidos" />

        <section class="py-8 bg-bg min-h-screen">
            <div class="max-w-7xl mx-auto px-5">
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 class="text-2xl font-extrabold text-heading">Gestión de Pedidos</h1>
                        <p class="text-sm text-text mt-1">{{ orders.total }} pedidos registrados</p>
                    </div>
                    <div class="flex gap-3 w-full sm:w-auto">
                        <div class="relative flex-1 sm:flex-initial">
                            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                            <input v-model="searchQuery" @input="onSearch" type="text" placeholder="Buscar folio o cliente..."
                                class="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-white border-2 border-bg-alt rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" />
                        </div>
                        <select v-model="statusFilter" @change="applyFilters"
                            class="px-4 py-2.5 bg-white border-2 border-bg-alt rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none">
                            <option value="">Todos</option>
                            <option value="pendiente">Pendiente</option>
                            <option value="procesando">Procesando</option>
                            <option value="completado">Completado</option>
                            <option value="cancelado">Cancelado</option>
                        </select>
                    </div>
                </div>

                <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead class="bg-bg border-b border-bg-alt">
                                <tr>
                                    <th class="text-left px-6 py-4 font-semibold text-heading">Folio</th>
                                    <th class="text-left px-6 py-4 font-semibold text-heading">Cliente</th>
                                    <th class="text-left px-6 py-4 font-semibold text-heading hidden md:table-cell">Fecha</th>
                                    <th class="text-right px-6 py-4 font-semibold text-heading">Total</th>
                                    <th class="text-center px-6 py-4 font-semibold text-heading">Estado</th>
                                    <th class="text-center px-6 py-4 font-semibold text-heading">Detalle</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-bg-alt">
                                <template v-for="order in orders.data" :key="order.id">
                                    <tr class="hover:bg-bg/50 transition-colors">
                                        <td class="px-6 py-4">
                                            <span class="font-mono font-bold text-heading bg-bg px-2 py-1 rounded text-xs">{{ order.folio }}</span>
                                        </td>
                                        <td class="px-6 py-4">
                                            <p class="font-semibold text-heading">{{ order.user?.name || '—' }}</p>
                                            <p class="text-xs text-text/50">{{ order.user?.email }}</p>
                                        </td>
                                        <td class="px-6 py-4 text-text hidden md:table-cell">{{ formatDate(order.created_at) }}</td>
                                        <td class="px-6 py-4 text-right font-bold text-heading">{{ formatPrice(order.total) }}</td>
                                        <td class="px-6 py-4 text-center">
                                            <select
                                                :value="order.status"
                                                @change="updateStatus(order, $event.target.value)"
                                                :class="[statusColors[order.status], 'px-3 py-1.5 text-xs font-semibold rounded-full border-0 cursor-pointer appearance-none text-center']"
                                            >
                                                <option value="pendiente">Pendiente</option>
                                                <option value="procesando">Procesando</option>
                                                <option value="completado">Completado</option>
                                                <option value="cancelado">Cancelado</option>
                                            </select>
                                        </td>
                                        <td class="px-6 py-4 text-center">
                                            <button @click="toggleDetail(order.id)" class="w-8 h-8 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all mx-auto">
                                                <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': showDetailId === order.id }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr v-if="showDetailId === order.id">
                                        <td colspan="6" class="px-6 py-4 bg-bg/50">
                                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                                <div v-for="p in order.products" :key="p.id" class="bg-white p-3 rounded-xl flex items-center gap-3">
                                                    <div class="w-10 h-10 bg-bg rounded-lg flex items-center justify-center shrink-0">
                                                        <svg class="w-5 h-5 text-text/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                                                    </div>
                                                    <div class="flex-1 min-w-0">
                                                        <p class="text-xs font-semibold text-heading truncate">{{ p.name }}</p>
                                                        <p class="text-[10px] text-text/50">{{ p.pivot.quantity }} x {{ formatPrice(p.pivot.unit_price) }}</p>
                                                    </div>
                                                    <p class="text-xs font-bold text-primary">{{ formatPrice(p.pivot.quantity * p.pivot.unit_price) }}</p>
                                                </div>
                                            </div>
                                            <p v-if="order.notes" class="mt-3 text-xs text-text/60 italic">Nota: {{ order.notes }}</p>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>

                    <!-- PAGINATION -->
                    <div v-if="orders.last_page > 1" class="flex justify-center items-center gap-2 py-6 border-t border-bg-alt">
                        <Link
                            :href="orders.prev_page_url || '#'"
                            :class="['w-9 h-9 rounded-lg flex items-center justify-center transition-all', orders.prev_page_url ? 'bg-bg text-text hover:bg-primary/10 hover:text-primary' : 'bg-bg-alt text-text/20 pointer-events-none']"
                            preserve-scroll
                        >
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                        </Link>
                        <template v-for="(link, i) in orders.links" :key="i">
                            <Link
                                v-if="i > 0 && i < orders.links.length - 1"
                                :href="link.url || '#'"
                                :class="['w-9 h-9 rounded-lg flex items-center justify-center text-xs font-medium transition-all', link.active ? 'bg-primary text-white' : link.url ? 'bg-bg text-text hover:bg-primary/10' : 'bg-bg-alt text-text/30 cursor-not-allowed']"
                                v-html="link.label"
                                preserve-scroll
                            />
                        </template>
                        <Link
                            :href="orders.next_page_url || '#'"
                            :class="['w-9 h-9 rounded-lg flex items-center justify-center transition-all', orders.next_page_url ? 'bg-bg text-text hover:bg-primary/10 hover:text-primary' : 'bg-bg-alt text-text/20 pointer-events-none']"
                            preserve-scroll
                        >
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </AppLayout>
</template>
