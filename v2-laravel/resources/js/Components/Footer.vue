<script setup>
import { Link } from '@inertiajs/vue3';

const year = new Date().getFullYear();

const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Catálogo', href: '/catalogo' },
    { name: 'Contacto', href: '/contacto' },
];

const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/ferreteriaaldaba', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
    { name: 'Instagram', href: 'https://www.instagram.com/abrinalferreteria/', icon: 'M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm3.5-6.5a1 1 0 110-2 1 1 0 010 2z' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/ferreteria-abrinal/', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z' },
];
</script>

<template>
    <footer class="mt-auto">
        <!-- MAIN FOOTER -->
        <div class="bg-heading text-white pt-16 pb-10">
            <div class="max-w-7xl mx-auto px-5">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <!-- COMPANY -->
                    <div>
                        <div class="flex items-center gap-3 mb-5">
                            <div class="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-2xl">
                                🛠️
                            </div>
                            <div>
                                <h3 class="text-lg font-bold leading-tight">Ferretería Abrinal</h3>
                                <span class="text-xs opacity-80 font-medium">Herramientas de Calidad</span>
                            </div>
                        </div>
                        <p class="text-sm leading-relaxed opacity-90 mb-6 max-w-sm">
                            Tu ferretería de confianza con más de 10 años de experiencia.
                            Ofrecemos las mejores herramientas y marcas del mercado.
                        </p>
                        <div class="flex gap-3">
                            <a
                                v-for="social in socialLinks"
                                :key="social.name"
                                :href="social.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                :aria-label="social.name"
                                class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                            >
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="social.icon" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- QUICK LINKS -->
                    <div>
                        <h4 class="text-base font-semibold mb-5">Enlaces Rápidos</h4>
                        <ul class="space-y-3">
                            <li v-for="link in quickLinks" :key="link.href">
                                <Link
                                    :href="link.href"
                                    class="text-sm text-white/80 hover:text-primary transition-colors"
                                >
                                    {{ link.name }}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <!-- CONTACT -->
                    <div>
                        <h4 class="text-base font-semibold mb-5">Contacto</h4>
                        <ul class="space-y-4 text-sm text-white/80">
                            <li class="flex items-start gap-3">
                                <svg class="w-5 h-5 mt-0.5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Tamazula 522, José Campillo Sáinz,<br>Gómez Palacio, Dgo. 35079</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+528717194848" class="hover:text-primary transition-colors">+52 871 719 4848</a>
                            </li>
                            <li class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:ventas@ferreteria-abrinal.com" class="hover:text-primary transition-colors">ventas@ferreteria-abrinal.com</a>
                            </li>
                        </ul>
                    </div>

                    <!-- KAISSER IMAGE -->
                    <div class="flex items-start justify-center md:justify-end">
                        <div class="group relative overflow-hidden rounded-2xl">
                            <img
                                src="/images/Kaisser_v2.png"
                                alt="Kaisser"
                                loading="lazy"
                                class="max-w-[220px] w-full object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-2xl"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-heading/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- FOOTER BOTTOM -->
        <div class="bg-footer text-white/70 py-5 border-t border-white/10">
            <div class="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
                <p>&copy; {{ year }} Ferretería Abrinal. Todos los derechos reservados.</p>
                <p>
                    Desarrollado por
                    <a href="https://github.com/PabloAmaya12" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Pablo Amaya</a>
                </p>
            </div>
        </div>
    </footer>
</template>
