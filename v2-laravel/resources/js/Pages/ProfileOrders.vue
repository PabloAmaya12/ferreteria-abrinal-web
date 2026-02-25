<script setup>
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import AppLayout from '../Layouts/AppLayout.vue';

const props = defineProps({ orders: Object });

const formatPrice = (val) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(val);
const formatDate = (d) => new Date(d).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });

const statusColors = {
    pendiente: 'bg-yellow/20 text-yellow-700',
    procesando: 'bg-blue-100 text-blue-700',
    completado: 'bg-green-100 text-green-700',
    cancelado: 'bg-red-100 text-red-700',
};

const expandedId = ref(null);
const toggle = (id) => { expandedId.value = expandedId.value === id ? null : id; };
</script>

<template>
    <AppLayout>
        <Head title="Mis Pedidos" />

        <section class="py-12 bg-bg min-h-screen">
            <div class="max-w-4xl mx-auto px-5">
                <div class="flex items-center gap-4 mb-8">
                    <Link href="/perfil" class="w-10 h-10 rounded-xl bg-white text-text hover:text-primary flex items-center justify-center shadow-sm hover:shadow-md transition-all">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                    </Link>
                    <div>
                        <h1 class="text-2xl font-extrabold text-heading">Mis Pedidos</h1>
                        <p class="text-sm text-text">{{ orders.total }} pedido{{ orders.total !== 1 ? 's' : '' }}</p>
                    </div>
                </div>

                <div v-if="orders.data.length" class="space-y-4">
                    <div v-for="order in orders.data" :key="order.id" class="bg-white rounded-2xl shadow-sm overflow-hidden">
                        <button @click="toggle(order.id)" class="w-full p-5 flex items-center justify-between hover:bg-bg/50 transition-colors">
                            <div class="flex items-center gap-4">
                                <span class="font-mono font-bold text-heading bg-bg px-3 py-1.5 rounded-lg text-sm">{{ order.folio }}</span>
                                <div class="text-left">
                                    <p class="text-xs text-text/60">{{ formatDate(order.created_at) }}</p>
                                    <p class="text-sm font-bold text-heading">{{ formatPrice(order.total) }}</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <span :class="statusColors[order.status]" class="px-3 py-1 text-xs font-semibold rounded-full capitalize">{{ order.status }}</span>
                                <svg class="w-5 h-5 text-text/30 transition-transform" :class="{ 'rotate-180': expandedId === order.id }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </button>

                        <Transition
                            enter-active-class="transition-all duration-200 ease-out"
                            enter-from-class="opacity-0 max-h-0"
                            enter-to-class="opacity-100 max-h-[500px]"
                            leave-active-class="transition-all duration-150 ease-in"
                            leave-from-class="opacity-100 max-h-[500px]"
                            leave-to-class="opacity-0 max-h-0"
                        >
                            <div v-if="expandedId === order.id" class="border-t border-bg-alt px-5 pb-5 overflow-hidden">
                                <div class="pt-4 space-y-3">
                                    <div v-for="p in order.products" :key="p.id" class="flex items-center justify-between py-2">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 bg-bg rounded-lg flex items-center justify-center">
                                                <svg class="w-4 h-4 text-text/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                                            </div>
                                            <div>
                                                <p class="text-sm font-semibold text-heading">{{ p.name }}</p>
                                                <p class="text-xs text-text/50">{{ p.pivot.quantity }} x {{ formatPrice(p.pivot.unit_price) }}</p>
                                            </div>
                                        </div>
                                        <p class="text-sm font-bold text-primary">{{ formatPrice(p.pivot.quantity * p.pivot.unit_price) }}</p>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                    </div>

                    <!-- PAGINATION -->
                    <div v-if="orders.last_page > 1" class="flex justify-center items-center gap-2 mt-8">
                        <Link
                            :href="orders.prev_page_url || '#'"
                            :class="['w-10 h-10 rounded-full flex items-center justify-center transition-all', orders.prev_page_url ? 'bg-white text-text hover:bg-primary/10 hover:text-primary' : 'bg-bg-alt text-text/20 pointer-events-none']"
                            preserve-scroll
                        >
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                        </Link>
                        <template v-for="(link, i) in orders.links" :key="i">
                            <Link
                                v-if="i > 0 && i < orders.links.length - 1"
                                :href="link.url || '#'"
                                :class="['w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all', link.active ? 'bg-primary text-white shadow-md shadow-primary/25' : link.url ? 'bg-white text-text hover:bg-primary/10 hover:text-primary' : 'bg-bg-alt text-text/30 cursor-not-allowed']"
                                v-html="link.label"
                                preserve-scroll
                            />
                        </template>
                        <Link
                            :href="orders.next_page_url || '#'"
                            :class="['w-10 h-10 rounded-full flex items-center justify-center transition-all', orders.next_page_url ? 'bg-white text-text hover:bg-primary/10 hover:text-primary' : 'bg-bg-alt text-text/20 pointer-events-none']"
                            preserve-scroll
                        >
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                        </Link>
                    </div>
                </div>

                <!-- EMPTY -->
                <div v-else class="text-center py-20">
                    <div class="w-20 h-20 bg-bg-alt rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-10 h-10 text-text/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                    </div>
                    <h3 class="text-xl font-bold text-heading mb-2">Sin pedidos</h3>
                    <p class="text-text mb-6">Aún no has realizado ningún pedido.</p>
                    <Link href="/productos" class="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md shadow-primary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                        Explorar Productos
                    </Link>
                </div>
            </div>
        </section>
    </AppLayout>
</template>
