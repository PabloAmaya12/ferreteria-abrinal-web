<script setup>
import { ref, onMounted } from 'vue';
import { Link } from '@inertiajs/vue3';
import AppLayout from '../Layouts/AppLayout.vue';

const props = defineProps({
    topBrands: Array,
    totalBrands: Number,
});

const heroToolImages = [
    { src: '/images/Sierra.jpg', alt: 'Sierra', classes: 'col-span-2 row-span-2 h-[420px] md:h-[460px]' },
    { src: '/images/Rotomartillo.webp', alt: 'Rotomartillo', classes: 'h-[200px] md:h-[225px]' },
    { src: '/images/Esmeriladora.png', alt: 'Esmeriladora', classes: 'h-[200px] md:h-[225px]' },
];

const brandLogoErrors = ref({});
const markBrandLogoError = (id) => {
    brandLogoErrors.value[id] = true;
};
const hasBrandLogo = (brand) => Boolean(brand?.image_url) && !brandLogoErrors.value[brand.id];

const features = [
    {
        icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
        title: 'Herramientas de Calidad',
        description: 'Trabajamos con las mejores marcas del mercado para garantizar durabilidad, confianza y alto rendimiento.',
    },
    {
        icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
        title: 'Atención Personalizada',
        description: 'Nuestro equipo de expertos te asesora para que encuentres la herramienta ideal para tus proyectos.',
    },
    {
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        title: 'Garantía Extendida',
        description: 'Ofrecemos garantía extendida en productos seleccionados, brindándote seguridad y tranquilidad.',
    },
];

const milestones = [
    { year: '2014', title: 'Fundación', description: 'Nacimos con el propósito de ser la ferretería de confianza para nuestra comunidad.', color: 'from-primary to-primary-dark' },
    { year: '2018', title: 'Expansión', description: 'Crecimos incorporando más de 50 marcas reconocidas, ampliando nuestro catálogo.', color: 'from-purple to-primary' },
    { year: '2021', title: 'Reconocimiento', description: 'Distinguidos como la mejor ferretería local por nuestro compromiso con el servicio.', color: 'from-iris to-purple' },
    { year: '2025', title: 'Presente', description: 'Más de 10,000 clientes satisfechos, consolidándonos como un aliado confiable.', color: 'from-yellow to-primary' },
];

const stats = [
    { value: '+10', label: 'Años de Experiencia', color: 'bg-yellow' },
    { value: '+80', label: 'Marcas en Catálogo', color: 'bg-purple' },
    { value: '100%', label: 'Satisfacción del Cliente', color: 'bg-iris' },
];

const isVisible = ref({});

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isVisible.value[entry.target.dataset.section] = true;
                }
            });
        },
        { threshold: 0.15 }
    );

    document.querySelectorAll('[data-section]').forEach((el) => observer.observe(el));
});
</script>

<template>
    <AppLayout>
        <Head title="Inicio" />

        <!-- HERO -->
        <section class="relative bg-gradient-to-br from-bg to-bg-alt min-h-[90vh] flex items-center overflow-hidden">
            <div class="absolute inset-0 opacity-[0.03]" style="background-image: url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%230067ff%22 fill-opacity=%221%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');" />

            <div class="max-w-7xl mx-auto px-5 py-16 relative z-10">
                <div class="flex flex-col lg:flex-row items-center gap-16">
                    <!-- TEXT -->
                    <div class="flex-1 max-w-xl lg:max-w-none">
                        <div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <span class="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Más de 10 años de confianza
                        </div>

                        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading leading-tight mb-6">
                            Tu ferretería de
                            <span class="relative inline-block">
                                <span class="text-primary">confianza</span>
                                <svg class="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                    <path d="M2 8c30-6 60-6 98-2s70 2 98-4" stroke="#0067ff" stroke-width="3" stroke-linecap="round" opacity="0.4" />
                                </svg>
                            </span>
                        </h1>

                        <p class="text-lg text-text leading-relaxed mb-8 max-w-lg">
                            En Ferretería Abrinal, nos dedicamos a ofrecer herramientas y marcas de la más alta calidad.
                            Nuestro equipo está comprometido con la excelencia, la innovación y un servicio excepcional.
                        </p>

                        <div class="flex flex-wrap gap-4 mb-12">
                            <Link href="/catalogo" class="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-dark transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25">
                                Explorar Catálogo
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link href="/contacto" class="inline-flex items-center gap-2 bg-white text-heading px-8 py-3.5 rounded-full font-semibold border-2 border-bg-alt hover:border-primary hover:text-primary transition-all hover:-translate-y-0.5">
                                Contactar
                            </Link>
                        </div>

                        <!-- STATS -->
                        <div class="flex gap-8 flex-wrap">
                            <div v-for="stat in stats" :key="stat.label" class="text-left">
                                <h3 class="text-3xl font-bold text-heading mb-1">{{ stat.value }}</h3>
                                <div :class="['w-16 h-1.5 rounded-full mb-2', stat.color]" />
                                <p class="text-sm text-text">{{ stat.label }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- HERO VISUAL -->
                    <div class="flex-1 max-w-2xl w-full">
                        <div class="relative">
                            <div class="absolute -inset-4 bg-gradient-to-br from-primary/20 via-purple/10 to-iris/20 rounded-3xl blur-2xl" />
                            <div class="relative bg-white rounded-3xl p-8 shadow-xl">
                                <div class="grid grid-cols-2 gap-4 auto-rows-auto">
                                    <div
                                        v-for="tool in heroToolImages"
                                        :key="tool.alt"
                                        :class="[
                                            'relative overflow-hidden rounded-2xl bg-bg group shadow-sm',
                                            'transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg',
                                            tool.classes
                                        ]"
                                    >
                                        <img
                                            :src="tool.src"
                                            :alt="tool.alt"
                                            loading="lazy"
                                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div class="absolute inset-0 bg-gradient-to-t from-heading/45 via-heading/10 to-transparent opacity-90" />
                                        <div class="absolute bottom-3 left-3">
                                            <span class="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-heading shadow-sm">
                                                {{ tool.alt }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-6 text-center">
                                    <p class="text-sm text-text">
                                        <span class="font-bold text-primary">{{ totalBrands || '+80' }}</span> marcas disponibles
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- STORY SECTION -->
        <section data-section="story" class="py-24 bg-gradient-to-b from-bg to-white relative">
            <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div class="max-w-7xl mx-auto px-5">
                <div class="text-center mb-16" :class="{ 'animate-fade-up': isVisible.story }">
                    <div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        ❤️ Nuestra Historia
                    </div>
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
                        Construyendo <span class="text-primary">confianza</span> desde 2014
                    </h2>
                    <p class="text-lg text-text max-w-2xl mx-auto leading-relaxed">
                        Más que una ferretería, somos tu socio en cada proyecto.
                    </p>
                </div>

                <!-- MISSION / VISION -->
                <div class="grid md:grid-cols-2 gap-6 mb-16">
                    <div class="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden hover:-translate-y-2">
                        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple" />
                        <div class="flex items-center gap-4 mb-5">
                            <div class="w-14 h-14 bg-gradient-to-br from-primary to-purple rounded-full flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-heading">Nuestra Misión</h3>
                        </div>
                        <p class="text-text leading-relaxed">
                            Ser el aliado confiable que impulsa los proyectos de nuestros clientes, ofreciendo herramientas
                            de la más alta calidad, junto con asesoramiento experto y soluciones integrales.
                        </p>
                    </div>

                    <div class="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden hover:-translate-y-2">
                        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple to-iris" />
                        <div class="flex items-center gap-4 mb-5">
                            <div class="w-14 h-14 bg-gradient-to-br from-purple to-iris rounded-full flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-heading">Nuestra Visión</h3>
                        </div>
                        <p class="text-text leading-relaxed">
                            Convertirnos en la ferretería líder de la región, reconocida por transformar ideas en realidad
                            a través de productos de alta calidad y un servicio personalizado.
                        </p>
                    </div>
                </div>

                <!-- TIMELINE -->
                <h3 class="text-2xl font-bold text-heading text-center mb-10">Nuestro Camino</h3>
                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="(m, i) in milestones" :key="m.year"
                        class="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                    >
                        <div :class="['absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r', m.color]" />
                        <div :class="['inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br text-white text-sm font-bold mb-4', m.color]">
                            {{ m.year }}
                        </div>
                        <h4 class="text-lg font-bold text-heading mb-2">{{ m.title }}</h4>
                        <p class="text-sm text-text leading-relaxed">{{ m.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FEATURES -->
        <section data-section="features" class="py-24 bg-white">
            <div class="max-w-7xl mx-auto px-5">
                <div class="text-center mb-16">
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-heading mb-4">¿Por qué elegirnos?</h2>
                    <p class="text-lg text-text max-w-xl mx-auto">Descubre las ventajas de trabajar con Ferretería Abrinal</p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <div v-for="feature in features" :key="feature.title"
                        class="group text-center p-8 rounded-2xl bg-bg hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                    >
                        <div class="w-20 h-20 bg-gradient-to-br from-primary to-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                            <svg class="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="feature.icon" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-heading mb-3">{{ feature.title }}</h3>
                        <p class="text-text leading-relaxed">{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- TOP BRANDS -->
        <section data-section="brands" class="py-24 bg-bg">
            <div class="max-w-7xl mx-auto px-5">
                <div class="text-center mb-16">
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-heading mb-4">Marcas de Confianza</h2>
                    <p class="text-lg text-text max-w-xl mx-auto">Trabajamos con las mejores marcas del mercado</p>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    <div v-for="brand in (topBrands || [])" :key="brand.id"
                        class="bg-white p-6 rounded-2xl flex items-center justify-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 group"
                    >
                        <img
                            v-if="hasBrandLogo(brand)"
                            :src="brand.image_url"
                            :alt="brand.name"
                            loading="lazy"
                            class="max-h-14 w-auto object-contain transition-all duration-500 group-hover:scale-105"
                            @error="markBrandLogoError(brand.id)"
                        />
                        <span
                            v-else
                            class="text-lg font-bold text-heading/40 group-hover:text-primary transition-colors duration-300"
                        >
                            {{ brand.name }}
                        </span>
                    </div>
                </div>

                <div class="text-center mt-10">
                    <Link href="/catalogo" class="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                        Ver todas las marcas
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="py-24 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
                <div class="absolute bottom-10 right-10 w-60 h-60 bg-purple rounded-full blur-3xl" />
            </div>
            <div class="max-w-3xl mx-auto px-5 text-center relative z-10">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">¿Listo para tu próximo proyecto?</h2>
                <p class="text-lg opacity-90 mb-10 max-w-xl mx-auto leading-relaxed">
                    Da el siguiente paso con Ferretería Abrinal y encuentra las herramientas perfectas
                    para transformar tus ideas en realidad.
                </p>
                <Link href="/catalogo" class="inline-flex items-center gap-2 bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                    Ver Catálogo Completo
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </section>
    </AppLayout>
</template>
