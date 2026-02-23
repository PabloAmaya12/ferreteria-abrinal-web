<script setup>
import { ref } from 'vue';
import AppLayout from '../Layouts/AppLayout.vue';

const activeTab = ref('contact');

const contactMethods = [
    {
        icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
        title: 'Teléfono',
        description: 'Llámanos directamente',
        info: '+52 871 719 4848',
        action: 'tel:+528717194848',
    },
    {
        icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        title: 'E-mail',
        description: 'Envíanos un correo',
        info: 'ventas@ferreteria-abrinal.com',
        action: 'mailto:ventas@ferreteria-abrinal.com',
    },
    {
        icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
        title: 'Dirección',
        description: 'Visítanos en tienda',
        info: 'Tamazula 522, José Campillo Sáinz, Gómez Palacio, Dgo.',
        action: '#mapa',
    },
    {
        icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
        title: 'WhatsApp',
        description: 'Envíanos un mensaje',
        info: '+52 871 220 6353',
        action: 'https://wa.me/528712206353',
    },
];

const contactDetails = [
    { label: 'Teléfono', value: '+52 871 719 4848', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
    { label: 'E-mail', value: 'ventas@ferreteria-abrinal.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', link: 'mailto:ventas@ferreteria-abrinal.com' },
    { label: 'Dirección', value: 'Tamazula 522, José Campillo Sáinz, Gómez Palacio, Dgo. 35079', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
    { label: 'Horarios', value: 'Lunes - Viernes: 9 AM - 7 PM | Sábado: 9 AM - 4 PM', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'WhatsApp', value: '+52 871 220 6353 / +52 871 521 5756', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
];

const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/ferreteriaaldaba', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
    { name: 'Instagram', href: 'https://www.instagram.com/abrinalferreteria/', icon: 'M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm3.5-6.5a1 1 0 110-2 1 1 0 010 2z' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/ferreteria-abrinal/', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z' },
];

const faqs = [
    {
        question: '¿Ofrecen garantía en sus productos?',
        answer: 'Sí, todos nuestros productos cuentan con garantía del fabricante y ofrecemos garantía extendida en productos seleccionados.',
    },
    {
        question: '¿Realizan entregas a domicilio?',
        answer: 'Sí, realizamos entregas en toda la ciudad. El costo de envío varía según la distancia y el peso del pedido.',
    },
    {
        question: '¿Aceptan devoluciones?',
        answer: 'Aceptamos devoluciones dentro de los primeros 2 días con el producto en perfecto estado y con su empaque original.',
    },
];
</script>

<template>
    <AppLayout>
        <Head title="Contacto" />

        <!-- HERO -->
        <section class="py-16 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute -top-20 -right-20 w-80 h-80 bg-iris rounded-full blur-3xl" />
                <div class="absolute -bottom-10 -left-10 w-60 h-60 bg-purple rounded-full blur-3xl" />
            </div>
            <div class="max-w-3xl mx-auto px-5 text-center relative z-10">
                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">Contáctanos</h1>
                <p class="text-lg opacity-90 max-w-xl mx-auto leading-relaxed">
                    Estamos aquí para ayudarte. Ponte en contacto con nosotros y resolveremos todas tus dudas.
                </p>
            </div>
        </section>

        <!-- CONTACT METHODS -->
        <section class="py-12 bg-white">
            <div class="max-w-7xl mx-auto px-5">
                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <a
                        v-for="method in contactMethods"
                        :key="method.title"
                        :href="method.action"
                        :target="method.action.startsWith('http') ? '_blank' : undefined"
                        rel="noopener noreferrer"
                        class="group text-center p-6 rounded-2xl bg-bg border-2 border-transparent hover:border-primary hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                    >
                        <div class="w-16 h-16 bg-gradient-to-br from-primary to-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="method.icon" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold text-heading mb-1">{{ method.title }}</h3>
                        <p class="text-sm text-text mb-3">{{ method.description }}</p>
                        <span class="text-sm font-semibold text-primary">{{ method.info }}</span>
                    </a>
                </div>
            </div>
        </section>

        <!-- MAIN CONTENT -->
        <section class="py-12 bg-bg">
            <div class="max-w-7xl mx-auto px-5">
                <div class="grid lg:grid-cols-2 gap-8 items-start">
                    <!-- TABS PANEL -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <!-- TAB BUTTONS -->
                        <div class="flex border-b">
                            <button
                                :class="[
                                    'flex-1 px-6 py-4 text-sm font-medium flex items-center justify-center gap-2 transition-all',
                                    activeTab === 'contact'
                                        ? 'bg-white text-primary border-b-2 border-primary'
                                        : 'bg-bg text-text hover:bg-bg-alt'
                                ]"
                                @click="activeTab = 'contact'"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Información de Contacto
                            </button>
                            <button
                                :class="[
                                    'flex-1 px-6 py-4 text-sm font-medium flex items-center justify-center gap-2 transition-all',
                                    activeTab === 'faq'
                                        ? 'bg-white text-primary border-b-2 border-primary'
                                        : 'bg-bg text-text hover:bg-bg-alt'
                                ]"
                                @click="activeTab = 'faq'"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Preguntas Frecuentes
                            </button>
                        </div>

                        <!-- CONTACT TAB -->
                        <Transition
                            enter-active-class="transition-all duration-300"
                            enter-from-class="opacity-0 translate-y-4"
                            enter-to-class="opacity-100 translate-y-0"
                        >
                            <div v-if="activeTab === 'contact'" class="p-8">
                                <h2 class="text-xl font-bold text-heading mb-6">Contáctanos</h2>
                                <div class="grid sm:grid-cols-2 gap-6">
                                    <div v-for="detail in contactDetails" :key="detail.label" class="flex gap-3">
                                        <div class="w-10 h-10 bg-bg rounded-xl flex items-center justify-center shrink-0">
                                            <svg class="w-5 h-5 text-text/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="detail.icon" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 class="text-sm font-semibold text-heading mb-0.5">{{ detail.label }}</h4>
                                            <a v-if="detail.link" :href="detail.link" class="text-sm text-primary hover:underline">{{ detail.value }}</a>
                                            <p v-else class="text-sm text-text leading-relaxed">{{ detail.value }}</p>
                                        </div>
                                    </div>

                                    <!-- SOCIAL -->
                                    <div class="flex gap-3 sm:col-span-2">
                                        <div class="w-10 h-10 bg-bg rounded-xl flex items-center justify-center shrink-0">
                                            <svg class="w-5 h-5 text-text/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 class="text-sm font-semibold text-heading mb-2">Redes Sociales</h4>
                                            <div class="flex gap-2">
                                                <a
                                                    v-for="social in socialLinks"
                                                    :key="social.name"
                                                    :href="social.href"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    :aria-label="social.name"
                                                    class="w-10 h-10 bg-bg rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                                                >
                                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="social.icon" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition>

                        <!-- FAQ TAB -->
                        <Transition
                            enter-active-class="transition-all duration-300"
                            enter-from-class="opacity-0 translate-y-4"
                            enter-to-class="opacity-100 translate-y-0"
                        >
                            <div v-if="activeTab === 'faq'" class="p-8">
                                <h2 class="text-xl font-bold text-heading mb-6">Preguntas Frecuentes</h2>
                                <div class="space-y-4">
                                    <div
                                        v-for="faq in faqs"
                                        :key="faq.question"
                                        class="p-5 bg-bg rounded-xl border-l-4 border-primary"
                                    >
                                        <h3 class="flex items-center gap-2 text-sm font-bold text-heading mb-2">
                                            <svg class="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {{ faq.question }}
                                        </h3>
                                        <p class="text-sm text-text leading-relaxed ml-6">{{ faq.answer }}</p>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                    </div>

                    <!-- MAP -->
                    <div id="mapa" class="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div class="h-80">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7198.070222760813!2d-103.4627838455714!3d25.5704986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fd98fd7c7e451%3A0xe35c50fa9a77d8ca!2sFerreter%C3%ADa%20ABRINAL%20G%C3%B3mez%20Palacio.%20Dgo.!5e0!3m2!1ses-419!2smx!4v1747442669778!5m2!1ses-419!2smx"
                                class="w-full h-full border-0"
                                loading="lazy"
                                title="Ubicación de Ferretería Abrinal"
                            />
                        </div>
                        <div class="p-6">
                            <h3 class="text-lg font-bold text-heading mb-2">Nuestra Ubicación</h3>
                            <p class="text-sm text-text leading-relaxed">
                                Visítanos en nuestra tienda física donde podrás ver y probar nuestros productos antes de comprar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </AppLayout>
</template>
