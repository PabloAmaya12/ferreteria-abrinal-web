<script setup>
import { router, Link } from '@inertiajs/vue3';
import AppLayout from '../Layouts/AppLayout.vue';

const props = defineProps({
    items: Array,
});

const formatPrice = (val) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(val);

const subtotal = props.items.reduce((sum, item) => sum + item.product.prec_pub * item.quantity, 0);

const updateQty = (item, qty) => {
    if (qty < 1) return;
    router.put(`/carrito/${item.id}`, { quantity: qty }, { preserveScroll: true });
};

const removeItem = (item) => {
    router.delete(`/carrito/${item.id}`, { preserveScroll: true });
};

const checkout = () => {
    if (confirm('¿Confirmar el pedido?')) {
        router.post('/carrito/checkout');
    }
};
</script>

<template>
    <AppLayout>
        <Head title="Mi Carrito" />

        <section class="py-12 bg-bg min-h-screen">
            <div class="max-w-4xl mx-auto px-5">
                <h1 class="text-2xl font-extrabold text-heading mb-8">Mi Carrito</h1>

                <template v-if="items.length">
                    <div class="space-y-4 mb-8">
                        <div v-for="item in items" :key="item.id" class="bg-white rounded-2xl p-5 shadow-sm flex items-center gap-5 group hover:shadow-md transition-all">
                            <!-- IMAGE -->
                            <div class="w-16 h-16 bg-bg rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                                <img v-if="item.product.image_url" :src="item.product.image_url" :alt="item.product.name" class="max-w-full max-h-full object-contain" />
                                <svg v-else class="w-8 h-8 text-text/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                            </div>

                            <!-- INFO -->
                            <div class="flex-1 min-w-0">
                                <h3 class="text-sm font-bold text-heading truncate">{{ item.product.name }}</h3>
                                <p class="text-xs text-primary font-medium">{{ item.product.brand?.name }}</p>
                                <p class="text-sm font-semibold text-heading mt-1">{{ formatPrice(item.product.prec_pub) }}</p>
                            </div>

                            <!-- QTY -->
                            <div class="flex items-center gap-2">
                                <button @click="updateQty(item, item.quantity - 1)" :disabled="item.quantity <= 1"
                                    class="w-8 h-8 rounded-lg bg-bg text-text hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
                                </button>
                                <span class="w-8 text-center text-sm font-bold text-heading">{{ item.quantity }}</span>
                                <button @click="updateQty(item, item.quantity + 1)"
                                    class="w-8 h-8 rounded-lg bg-bg text-text hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-all">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                                </button>
                            </div>

                            <!-- SUBTOTAL -->
                            <p class="text-sm font-bold text-primary w-24 text-right hidden sm:block">{{ formatPrice(item.product.prec_pub * item.quantity) }}</p>

                            <!-- DELETE -->
                            <button @click="removeItem(item)" class="w-8 h-8 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all shrink-0">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                            </button>
                        </div>
                    </div>

                    <!-- SUMMARY -->
                    <div class="bg-white rounded-2xl p-6 shadow-sm">
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-text font-medium">Subtotal ({{ items.length }} producto{{ items.length > 1 ? 's' : '' }})</span>
                            <span class="text-xl font-extrabold text-heading">{{ formatPrice(subtotal) }}</span>
                        </div>
                        <button @click="checkout" class="w-full py-3.5 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-bold rounded-xl shadow-md shadow-primary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                            Confirmar Pedido
                        </button>
                    </div>
                </template>

                <!-- EMPTY -->
                <div v-else class="text-center py-20">
                    <div class="w-20 h-20 bg-bg-alt rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-10 h-10 text-text/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-heading mb-2">Tu carrito está vacío</h3>
                    <p class="text-text mb-6">Explora nuestros productos y agrega los que necesites.</p>
                    <Link href="/productos" class="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md shadow-primary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                        Ver Productos
                    </Link>
                </div>
            </div>
        </section>
    </AppLayout>
</template>
