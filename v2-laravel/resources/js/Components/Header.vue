<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Link, usePage, router } from '@inertiajs/vue3';

const isSticky = ref(false);
const isMobileMenuOpen = ref(false);
const isUserMenuOpen = ref(false);

const page = usePage();
const auth = page.props.auth;
const cartCount = page.props.cartCount;

const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Marcas', href: '/marcas' },
    { name: 'Productos', href: '/productos' },
    { name: 'Contacto', href: '/contacto' },
];

const handleScroll = () => {
    isSticky.value = window.scrollY > 80;
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));

const currentPath = page.url;

const logout = () => {
    router.post('/logout');
};
</script>

<template>
    <!-- TOP BAR -->
    <div class="bg-heading text-white">
        <div class="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between text-sm">
            <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="font-semibold">+52 871 719 4848</span>
            </div>
            <p class="hidden md:block font-medium opacity-90">Bienvenido a Ferretería Abrinal</p>
        </div>
    </div>

    <!-- MAIN HEADER -->
    <header
        :class="[
            'bg-white z-50 transition-all duration-300',
            isSticky ? 'fixed top-0 left-0 w-full shadow-xl' : 'relative shadow-md'
        ]"
    >
        <div class="max-w-7xl mx-auto px-5">
            <div class="flex items-center justify-between py-4 gap-6">
                <!-- LOGO -->
                <Link href="/" class="flex items-center gap-3 group">
                    <div class="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110">
                        🛠️
                    </div>
                    <div class="flex flex-col">
                        <span class="text-lg font-bold text-heading leading-tight">Ferretería Abrinal</span>
                        <span class="text-xs text-text font-medium">Herramientas de Calidad</span>
                    </div>
                </Link>

                <!-- NAV DESKTOP -->
                <nav class="hidden md:flex items-center gap-6">
                    <Link
                        v-for="link in navLinks"
                        :key="link.href"
                        :href="link.href"
                        :class="[
                            'relative text-sm font-medium transition-colors duration-300 py-1',
                            'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300',
                            currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href))
                                ? 'text-primary after:w-full'
                                : 'text-text hover:text-primary after:w-0 hover:after:w-full'
                        ]"
                    >
                        {{ link.name }}
                    </Link>

                    <!-- CART ICON (desktop) -->
                    <Link v-if="auth?.user" href="/carrito" class="relative w-10 h-10 flex items-center justify-center rounded-full bg-bg text-text hover:bg-primary/10 hover:text-primary transition-all">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                        </svg>
                        <span v-if="cartCount > 0" class="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                            {{ cartCount > 99 ? '99+' : cartCount }}
                        </span>
                    </Link>

                    <!-- AUTH BUTTON DESKTOP -->
                    <template v-if="auth?.user">
                        <div class="relative">
                            <button
                                @click="isUserMenuOpen = !isUserMenuOpen"
                                class="flex items-center gap-2 bg-bg rounded-full pl-3 pr-4 py-2 hover:bg-bg-alt transition-colors"
                            >
                                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center text-white text-xs font-bold overflow-hidden">
                                    <img v-if="auth.user.avatar" :src="auth.user.avatar" :alt="auth.user.name" class="w-full h-full object-cover" />
                                    <span v-else>{{ auth.user.name.charAt(0).toUpperCase() }}</span>
                                </div>
                                <span class="text-sm font-medium text-heading max-w-[100px] truncate">{{ auth.user.name }}</span>
                                <svg class="w-4 h-4 text-text transition-transform" :class="{ 'rotate-180': isUserMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <Transition
                                enter-active-class="transition duration-200 ease-out"
                                enter-from-class="opacity-0 scale-95"
                                enter-to-class="opacity-100 scale-100"
                                leave-active-class="transition duration-150 ease-in"
                                leave-from-class="opacity-100 scale-100"
                                leave-to-class="opacity-0 scale-95"
                            >
                                <div v-if="isUserMenuOpen" class="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-bg-alt py-2 z-50">
                                    <div class="px-4 py-2 border-b border-bg-alt">
                                        <p class="text-xs text-text truncate">{{ auth.user.email }}</p>
                                    </div>
                                    <Link href="/perfil" class="block px-4 py-2.5 text-sm text-text hover:bg-bg hover:text-primary transition-colors" @click="isUserMenuOpen = false">
                                        Mi Perfil
                                    </Link>
                                    <Link href="/perfil/pedidos" class="block px-4 py-2.5 text-sm text-text hover:bg-bg hover:text-primary transition-colors" @click="isUserMenuOpen = false">
                                        Mis Pedidos
                                    </Link>
                                    <template v-if="auth.user.is_admin">
                                        <div class="border-t border-bg-alt my-1" />
                                        <p class="px-4 py-1 text-[10px] font-bold text-text/40 uppercase tracking-wider">Admin</p>
                                        <Link href="/admin/usuarios" class="block px-4 py-2.5 text-sm text-text hover:bg-bg hover:text-primary transition-colors" @click="isUserMenuOpen = false">
                                            Usuarios
                                        </Link>
                                        <Link href="/admin/marcas" class="block px-4 py-2.5 text-sm text-text hover:bg-bg hover:text-primary transition-colors" @click="isUserMenuOpen = false">
                                            Marcas
                                        </Link>
                                        <Link href="/admin/categorias" class="block px-4 py-2.5 text-sm text-text hover:bg-bg hover:text-primary transition-colors" @click="isUserMenuOpen = false">
                                            Categorías
                                        </Link>
                                    </template>
                                    <template v-if="auth.user.is_manager">
                                        <div v-if="!auth.user.is_admin" class="border-t border-bg-alt my-1" />
                                        <p v-if="!auth.user.is_admin" class="px-4 py-1 text-[10px] font-bold text-text/40 uppercase tracking-wider">Gestión</p>
                                        <Link href="/admin/productos" class="block px-4 py-2.5 text-sm text-text hover:bg-bg hover:text-primary transition-colors" @click="isUserMenuOpen = false">
                                            Productos
                                        </Link>
                                        <Link href="/admin/pedidos" class="block px-4 py-2.5 text-sm text-text hover:bg-bg hover:text-primary transition-colors" @click="isUserMenuOpen = false">
                                            Pedidos
                                        </Link>
                                    </template>
                                    <div class="border-t border-bg-alt my-1" />
                                    <button @click="logout" class="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors">
                                        Cerrar Sesión
                                    </button>
                                </div>
                            </Transition>
                        </div>
                    </template>
                    <Link
                        v-else
                        href="/login"
                        class="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-primary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Iniciar Sesión
                    </Link>
                </nav>

                <!-- MOBILE BUTTONS -->
                <div class="flex md:hidden items-center gap-2">
                    <!-- CART MOBILE -->
                    <Link v-if="auth?.user" href="/carrito" class="relative w-10 h-10 flex items-center justify-center rounded-full bg-bg text-text hover:text-primary transition-all">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                        </svg>
                        <span v-if="cartCount > 0" class="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                            {{ cartCount > 99 ? '99+' : cartCount }}
                        </span>
                    </Link>

                    <!-- USER ICON MOBILE -->
                    <template v-if="auth?.user">
                        <button
                            @click="isUserMenuOpen = !isUserMenuOpen"
                            class="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-purple text-white text-sm font-bold overflow-hidden"
                        >
                            <img v-if="auth.user.avatar" :src="auth.user.avatar" :alt="auth.user.name" class="w-full h-full object-cover" />
                            <span v-else>{{ auth.user.name.charAt(0).toUpperCase() }}</span>
                        </button>
                    </template>
                    <Link
                        v-else
                        href="/login"
                        class="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-white shadow-md shadow-primary/25 hover:shadow-lg transition-all"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </Link>

                    <!-- MENU TOGGLE -->
                    <button
                        class="w-10 h-10 flex items-center justify-center rounded-full bg-bg text-primary hover:bg-primary hover:text-white transition-all"
                        @click="isMobileMenuOpen = !isMobileMenuOpen"
                    >
                        <svg v-if="!isMobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- MOBILE USER DROPDOWN -->
        <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
        >
            <div v-if="isUserMenuOpen && auth?.user" class="md:hidden bg-white border-t shadow-lg">
                <div class="max-w-7xl mx-auto px-5 py-4">
                    <div class="flex items-center gap-3 mb-3 pb-3 border-b border-bg-alt">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center text-white font-bold overflow-hidden">
                            <img v-if="auth.user.avatar" :src="auth.user.avatar" :alt="auth.user.name" class="w-full h-full object-cover" />
                            <span v-else>{{ auth.user.name.charAt(0).toUpperCase() }}</span>
                        </div>
                        <div>
                            <p class="text-sm font-semibold text-heading">{{ auth.user.name }}</p>
                            <p class="text-xs text-text">{{ auth.user.email }}</p>
                        </div>
                    </div>
                    <Link href="/perfil" class="block px-4 py-3 rounded-lg text-sm font-medium text-text hover:bg-bg hover:text-primary transition-all" @click="isUserMenuOpen = false">Mi Perfil</Link>
                    <Link href="/perfil/pedidos" class="block px-4 py-3 rounded-lg text-sm font-medium text-text hover:bg-bg hover:text-primary transition-all" @click="isUserMenuOpen = false">Mis Pedidos</Link>
                    <template v-if="auth.user.is_admin">
                        <div class="border-t border-bg-alt my-1" />
                        <Link href="/admin/usuarios" class="block px-4 py-3 rounded-lg text-sm font-medium text-text hover:bg-bg hover:text-primary transition-all" @click="isUserMenuOpen = false">Usuarios</Link>
                        <Link href="/admin/marcas" class="block px-4 py-3 rounded-lg text-sm font-medium text-text hover:bg-bg hover:text-primary transition-all" @click="isUserMenuOpen = false">Marcas</Link>
                        <Link href="/admin/categorias" class="block px-4 py-3 rounded-lg text-sm font-medium text-text hover:bg-bg hover:text-primary transition-all" @click="isUserMenuOpen = false">Categorías</Link>
                    </template>
                    <template v-if="auth.user.is_manager">
                        <div v-if="!auth.user.is_admin" class="border-t border-bg-alt my-1" />
                        <Link href="/admin/productos" class="block px-4 py-3 rounded-lg text-sm font-medium text-text hover:bg-bg hover:text-primary transition-all" @click="isUserMenuOpen = false">Productos</Link>
                        <Link href="/admin/pedidos" class="block px-4 py-3 rounded-lg text-sm font-medium text-text hover:bg-bg hover:text-primary transition-all" @click="isUserMenuOpen = false">Pedidos</Link>
                    </template>
                    <div class="border-t border-bg-alt my-1" />
                    <button @click="logout" class="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-all">
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </Transition>

        <!-- MOBILE MENU (only nav links) -->
        <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
        >
            <div v-if="isMobileMenuOpen" class="md:hidden bg-white border-t shadow-lg">
                <nav class="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
                    <Link
                        v-for="link in navLinks"
                        :key="link.href"
                        :href="link.href"
                        :class="[
                            'block px-4 py-3 rounded-lg text-sm font-medium transition-all',
                            currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href))
                                ? 'bg-primary-light text-primary'
                                : 'text-text hover:bg-bg hover:text-primary'
                        ]"
                        @click="isMobileMenuOpen = false"
                    >
                        {{ link.name }}
                    </Link>
                </nav>
            </div>
        </Transition>
    </header>

    <!-- SPACER WHEN STICKY -->
    <div v-if="isSticky" class="h-[88px]" />
</template>
