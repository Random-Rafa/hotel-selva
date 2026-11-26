/**
 * Internacionalização (i18n): PT-BR, EN e ES
 * Traduz textos (data-i18n), placeholders (data-i18n-placeholder),
 * labels ARIA (data-i18n-aria-label) e dispara evento para re-renderizar módulos dinâmicos.
 */
class I18nManager {
    #currentLang = 'pt-BR';
    #dictionary = {
        'pt-BR': {
            'a11y.skip': 'Pular para o conteúdo principal',
            'a11y.fontDec': 'Diminuir tamanho da fonte',
            'a11y.fontReset': 'Restaurar tamanho da fonte',
            'a11y.fontInc': 'Aumentar tamanho da fonte',
            'a11y.contrast': 'Alternar modo de alto contraste',
            'a11y.langLabel': 'Selecionar idioma',

            'brand.sub': 'Lodge & Spa de Luxo',
            'nav.about': 'Sobre',
            'nav.chalets': 'Chalés',
            'nav.gastronomy': 'Gastronomia & Spa',
            'nav.trip': 'Sua Viagem',
            'nav.gallery': 'Galeria',
            'nav.faq': 'FAQ',
            'nav.contact': 'Contato',
            'nav.book': 'Reservar Agora',

            'hero.tag': 'Sustentabilidade & Sofisticação',
            'hero.title': 'Sinta o Pulsar da Floresta com Luxo Imersivo',
            'hero.subtitle': 'Sua casa no coração da Amazônia. Desconexão profunda, gastronomia de raiz e conforto inigualável em bangalôs suspensos.',
            'hero.cta': 'Explore os Chalés',

            'search.checkin': 'Check-in',
            'search.checkout': 'Check-out',
            'search.guests': 'Hóspedes',
            'search.guests1': '1 Adulto',
            'search.guests2': '2 Adultos',
            'search.guests3': '3 Adultos',
            'search.guests4': 'Família (4 pessoas)',
            'search.type': 'Tipo de Chalé',
            'search.typeAll': 'Todos os tipos',
            'search.typeJacuzzi': 'Com Jacuzzi',
            'search.typeFloating': 'Bangalô Flutuante',
            'search.btn': 'Buscar Vagas',

            'about.tagline': 'A Experiência Selva',
            'about.title': 'Onde o Luxo Encontra o Pulso Virgem da Floresta',
            'about.badge': 'Energia Solar & Sustentável',
            'about.p1': 'O Hotel Selva nasceu do sonho de harmonizar a hospitalidade de classe mundial com a preservação intangível da Floresta Amazônica. Nossos chalés foram erguidos com madeira de manejo sustentável, integrados perfeitamente à copa das árvores.',
            'about.p2': 'Oferecemos vivências gastronômicas autorais, passeios guiados por biólogos nativos e rituais de bem-estar em nosso Spa com óleos botânicos extraídos localmente.',
            'about.stat1Value': '5.000 ha',
            'about.stat1Label': 'Área Protegida',
            'about.stat2Value': 'Zero',
            'about.stat2Label': 'Plástico Descartável',
            'about.stat3Value': '94%',
            'about.stat3Label': 'Equipe Local Nativa',

            'chalets.tagline': 'Refúgios Privativos',
            'chalets.title': 'Nossos Chalés e Bangalôs de Luxo',
            'chalets.subtitle': 'Arquitetura orgânica, vista panorâmica da mata e acabamentos de altíssimo padrão.',
            'chalets.filterAll': 'Todos',
            'chalets.filterJacuzzi': 'Com Jacuzzi',
            'chalets.filterCanas': 'Suítes Canas',
            'chalets.filterFloating': 'Bangalôs Flutuantes',
            'chalets.perDay': '/ diária',
            'chalets.perNight': '/ noite',
            'chalets.bookBtn': 'Reservar',

            'gastro.tagline': 'Experiências Sensoriais',
            'gastro.title': 'Restaurante Aruanã & Spa Nativo',
            'gastro.subtitle': 'Sinta os sabores autênticos da gastronomia farm-to-table e rejuvenesça com terapias florestais ancestrais.',
            'gastro.restTitle': 'Restaurante Aruanã',
            'gastro.restDesc': 'Comandado por chefs renomados, nosso menu destaca ingredientes frescos colhidos em nossa horta orgânica e peixes amazônicos de pesca sustentável.',
            'gastro.spaTitle': 'Spa Nativo Selva',
            'gastro.spaDesc': 'Banhos de imersão com óleos essenciais de copaíba e andiroba, massagens com pedras aquecidas e tratamentos de argiloterapia natural em salas suspensas sobre a água.',

            'widgets.tagline': 'Preparação de Viagem',
            'widgets.title': 'Widgets e Informações Práticas',
            'widgets.subtitle': 'Monitore o clima em tempo real na reserva e organize sua mala sem esquecer nada.',
            'widgets.weatherTitle': '🌱 Clima na Selva em Tempo Real',
            'widgets.weatherCond': 'Ensolarado c/ pancadas',
            'widgets.weatherMoon': 'Lua Crescente',
            'widgets.weatherMoonLabel': 'Fase da Lua',
            'widgets.weatherHumidity': 'Umidade',
            'widgets.weatherUv': 'Alta (8)',
            'widgets.weatherUvLabel': 'Índice UV',
            'widgets.weatherWater': 'Temp. Água',
            'widgets.checklistTitle': '🎒 Checklist de Mala para a Floresta',
            'widgets.checklistReset': 'Restaurar',
            'widgets.checklistPlaceholder': 'Adicionar item personalizado...',
            'widgets.checklistAdd': 'Adicionar',

            'checklist.item1': 'Repelente biodegradável',
            'checklist.item2': 'Protetor solar resistente à água',
            'checklist.item3': 'Roupas leves de manga longa',
            'checklist.item4': 'Bota ou tênis para trilha',
            'checklist.item5': 'Binóculo para observação de aves',

            'gallery.tagline': 'Galeria de Fotos',
            'gallery.title': 'Instantes Mágicos na Amazônia',
            'gallery.zoomPrefix': 'Ampliar foto',

            'faq.tagline': 'Tire suas Dúvidas',
            'faq.title': 'Perguntas Frequentes',
            'faq.q1': 'Como funciona o traslado até o hotel?',
            'faq.a1': 'Nosso traslado parte do Aeroporto Internacional de Manaus. Oferecemos transporte privativo em van climatizada até o píer (1h) seguido de lancha rápida privativa (45 min) pelo Rio Negro. Opção de voo em hidroavião sob consulta.',
            'faq.q2': 'É necessário vacinação prévia?',
            'faq.a2': 'Recomendamos fortemente a vacina contra a Febre Amarela tomada com pelo menos 10 dias de antecedência do embarque. Nossos chalés possuem telas de proteção de alta tecnologia e o Rio Negro é naturalmente ácido, inibindo a proliferação de mosquitos.',
            'faq.q3': 'Qual é a política de cancelamento?',
            'faq.a3': 'Cancelamentos feitos com até 30 dias de antecedência da data de check-in possuem reembolso integral de 100%. Entre 29 e 15 dias, oferecemos crédito para remarcação válida por 1 ano.',

            'contact.tagline': 'Localização Privilegiada',
            'contact.title': 'Como Chegar ao Nosso Santuário',
            'contact.coords': 'Coordenadas Geográficas: 3°08\'24.1"S 60°01\'42.2"W - Arquipélago de Anavilhanas, Novo Airão, AM.',
            'contact.centerTitle': 'Central de Atendimento Privativo',
            'contact.formTitle': 'Envie uma Mensagem',
            'contact.nameLabel': 'Seu Nome Completo',
            'contact.namePlaceholder': 'Ex: Maria Silva',
            'contact.emailLabel': 'E-mail de Contato',
            'contact.emailPlaceholder': 'maria@email.com',
            'contact.msgLabel': 'Mensagem ou Solicitação Especial',
            'contact.msgPlaceholder': 'Como podemos personalizar sua estadia?',
            'contact.submitBtn': 'Enviar Mensagem',
            'contact.alertSent': 'Obrigado! Sua mensagem foi enviada à nossa equipe de concierges. Entraremos em contato em breve.',

            'footer.desc': 'Lodge & Spa de Luxo Sustentável no coração da Amazônia. Preservação, alto conforto e experiências transformadoras.',
            'footer.navTitle': 'Navegação',
            'footer.navAbout': 'Sobre Nós',
            'footer.navChalets': 'Nossos Chalés',
            'footer.navGastro': 'Gastronomia',
            'footer.navGallery': 'Galeria de Fotos',
            'footer.sustTitle': 'Sustentabilidade & Privacidade',
            'footer.solar': 'Energia 100% Solar',
            'footer.project': 'Projeto Jacaré-Açu',
            'footer.esg': 'Relatório ESG',
            'footer.certTitle': 'Certificações',
            'footer.certDesc': 'Membro Oficial da EcoLuxury Hotels & Rainforest Alliance Certified.',
            'footer.rights': '© 2026 Hotel Selva - Lodge & Spa de Luxo. Todos os direitos reservados.',

            'wiz.title': 'Reserva Online - Hotel Selva',
            'wiz.subtitle': 'Garanta sua experiência inesquecível na Amazônia',
            'wiz.step1Title': 'Etapa 1: Selecione as Datas e Hóspedes',
            'wiz.checkin': 'Data de Check-in',
            'wiz.checkout': 'Data de Check-out',
            'wiz.adults': 'Adultos',
            'wiz.children': 'Crianças (até 12 anos)',
            'wiz.child0': 'Nenhuma',
            'wiz.child1': '1 Criança',
            'wiz.child2': '2 Crianças',
            'wiz.nextStep2': 'Avançar para Acomodações →',
            'wiz.step2Title': 'Etapa 2: Escolha seu Chalé',
            'wiz.back': '← Voltar',
            'wiz.nextStep3': 'Avançar para Adicionais →',
            'wiz.step3Title': 'Etapa 3: Personalize com Experiências Extras',
            'wiz.addonTransferTitle': 'Traslado de Lancha Privativa (Ida e Volta)',
            'wiz.addonTransferDesc': 'Saindo de Manaus direto para o hotel',
            'wiz.addonDinnerTitle': 'Jantar Romântico Exclusivo na Copa das Árvores',
            'wiz.addonDinnerDesc': 'Menu degustação de 5 passos com harmonização',
            'wiz.addonSpaTitle': 'Massagem Nativa Relaxante no Spa (Casal)',
            'wiz.addonSpaDesc': '60 minutos com banho de imersão botânico',
            'wiz.nextStep4': 'Dados do Hóspede →',
            'wiz.step4Title': 'Etapa 4: Informações do Titular',
            'wiz.guestName': 'Nome Completo',
            'wiz.guestNamePlaceholder': 'Ex: Gabriel Santos',
            'wiz.guestEmail': 'E-mail Principal',
            'wiz.guestPhone': 'WhatsApp / Telefone',
            'wiz.totalLabel': 'Valor Total Estimado:',
            'wiz.summaryPattern': '{nights} Noite(s) em {chalet} + Extras',
            'wiz.finishBtn': 'Finalizar Reserva →',
            'wiz.alertMissing': 'Por favor, preencha o Nome e E-mail para confirmar a reserva.',
            'wiz.confirmedBadge': 'CONFIRMADO',
            'wiz.voucherTitle': 'Voucher de Reserva Oficial',
            'wiz.voucherGuest': 'Hóspede Principal:',
            'wiz.voucherEmail': 'E-mail:',
            'wiz.voucherChalet': 'Acomodação:',
            'wiz.voucherPeriod': 'Período:',
            'wiz.voucherUntil': 'até',
            'wiz.voucherNights': 'Noites',
            'wiz.voucherTotal': 'Valor Total Final:',
            'wiz.printBtn': 'Imprimir Voucher (PDF)',

            'lgpd.title': 'Privacidade e Uso de Cookies (LGPD)',
            'lgpd.description': 'Utilizamos cookies e armazenamento local para garantir o funcionamento das reservas (necessários) e, mediante seu consentimento, salvar seu checklist de viagem e idioma (funcionais).',
            'lgpd.customize': 'Personalizar',
            'lgpd.reject': 'Rejeitar Não Essenciais',
            'lgpd.acceptAll': 'Aceitar Todos',
            'lgpd.modalTitle': 'Preferências de Privacidade (Lei nº 13.709/2018)',
            'lgpd.modalSubtitle': 'Escolha quais categorias de cookies e armazenamento local você autoriza:',
            'lgpd.catNecessary': 'Estritamente Necessários (Obrigatórios)',
            'lgpd.catNecessaryDesc': 'Essenciais para o processo de reserva e registro do seu consentimento.',
            'lgpd.catFunctional': 'Funcionais e Preferências',
            'lgpd.catFunctionalDesc': 'Permitem salvar seu checklist de bagagem e idioma no navegador.',
            'lgpd.catAnalytics': 'Analíticos e Estatísticos',
            'lgpd.catAnalyticsDesc': 'Ajudam a entender quais chalés e páginas são mais acessados.',
            'lgpd.cancel': 'Cancelar',
            'lgpd.savePrefs': 'Salvar Preferências',
            'lgpd.manageFooter': 'Gerenciar Cookies (LGPD)'
        },
        'en': {
            'a11y.skip': 'Skip to main content',
            'a11y.fontDec': 'Decrease font size',
            'a11y.fontReset': 'Reset font size',
            'a11y.fontInc': 'Increase font size',
            'a11y.contrast': 'Toggle high contrast mode',
            'a11y.langLabel': 'Select language',

            'brand.sub': 'Luxury Lodge & Spa',
            'nav.about': 'About',
            'nav.chalets': 'Chalets',
            'nav.gastronomy': 'Gastronomy & Spa',
            'nav.trip': 'Your Trip',
            'nav.gallery': 'Gallery',
            'nav.faq': 'FAQ',
            'nav.contact': 'Contact',
            'nav.book': 'Book Now',

            'hero.tag': 'Sustainability & Sophistication',
            'hero.title': 'Feel the Pulse of the Rainforest in Immersive Luxury',
            'hero.subtitle': 'Your sanctuary in the heart of the Amazon. Deep disconnection, root gastronomy, and unmatched comfort in elevated bungalows.',
            'hero.cta': 'Explore Chalets',

            'search.checkin': 'Check-in',
            'search.checkout': 'Check-out',
            'search.guests': 'Guests',
            'search.guests1': '1 Adult',
            'search.guests2': '2 Adults',
            'search.guests3': '3 Adults',
            'search.guests4': 'Family (4 guests)',
            'search.type': 'Chalet Type',
            'search.typeAll': 'All types',
            'search.typeJacuzzi': 'With Jacuzzi',
            'search.typeFloating': 'Floating Bungalow',
            'search.btn': 'Check Availability',

            'about.tagline': 'The Selva Experience',
            'about.title': 'Where Luxury Meets the Untouched Pulse of the Forest',
            'about.badge': '100% Solar & Sustainable Energy',
            'about.p1': 'Hotel Selva was born from the dream of harmonizing world-class hospitality with the untouched preservation of the Amazon Rainforest. Our chalets were built with sustainably managed timber, seamlessly integrated into the tree canopy.',
            'about.p2': 'We offer signature culinary experiences, guided expeditions led by native biologists, and wellness rituals at our Spa using locally extracted botanical oils.',
            'about.stat1Value': '5,000 ha',
            'about.stat1Label': 'Protected Area',
            'about.stat2Value': 'Zero',
            'about.stat2Label': 'Single-Use Plastic',
            'about.stat3Value': '94%',
            'about.stat3Label': 'Local Native Team',

            'chalets.tagline': 'Private Sanctuaries',
            'chalets.title': 'Our Luxury Chalets & Bungalows',
            'chalets.subtitle': 'Organic architecture, panoramic jungle views, and world-class finishes.',
            'chalets.filterAll': 'All',
            'chalets.filterJacuzzi': 'With Jacuzzi',
            'chalets.filterCanas': 'Canopy Suites',
            'chalets.filterFloating': 'Floating Bungalows',
            'chalets.perDay': '/ night',
            'chalets.perNight': '/ night',
            'chalets.bookBtn': 'Book',

            'gastro.tagline': 'Sensory Experiences',
            'gastro.title': 'Aruanã Restaurant & Native Spa',
            'gastro.subtitle': 'Savor authentic farm-to-table Amazonian cuisine and rejuvenate with ancestral forest therapies.',
            'gastro.restTitle': 'Aruanã Restaurant',
            'gastro.restDesc': 'Led by renowned chefs, our menu highlights fresh ingredients harvested from our organic garden and sustainably caught Amazonian fish.',
            'gastro.spaTitle': 'Selva Native Spa',
            'gastro.spaDesc': 'Immersion baths with copaiba and andiroba essential oils, hot stone massages, and natural clay therapies in suites suspended over the water.',

            'widgets.tagline': 'Trip Preparation',
            'widgets.title': 'Widgets & Practical Information',
            'widgets.subtitle': 'Monitor real-time weather in the reserve and pack your bags without forgetting anything.',
            'widgets.weatherTitle': '🌱 Live Rainforest Weather',
            'widgets.weatherCond': 'Sunny w/ passing showers',
            'widgets.weatherMoon': 'Waxing Crescent',
            'widgets.weatherMoonLabel': 'Moon Phase',
            'widgets.weatherHumidity': 'Humidity',
            'widgets.weatherUv': 'High (8)',
            'widgets.weatherUvLabel': 'UV Index',
            'widgets.weatherWater': 'Water Temp.',
            'widgets.checklistTitle': '🎒 Rainforest Packing Checklist',
            'widgets.checklistReset': 'Reset',
            'widgets.checklistPlaceholder': 'Add custom item...',
            'widgets.checklistAdd': 'Add',

            'checklist.item1': 'Biodegradable insect repellent',
            'checklist.item2': 'Water-resistant sunscreen',
            'checklist.item3': 'Lightweight long-sleeve clothing',
            'checklist.item4': 'Hiking boots or trail sneakers',
            'checklist.item5': 'Binoculars for birdwatching',

            'gallery.tagline': 'Photo Gallery',
            'gallery.title': 'Magical Moments in the Amazon',
            'gallery.zoomPrefix': 'Enlarge photo',

            'faq.tagline': 'Got Questions?',
            'faq.title': 'Frequently Asked Questions',
            'faq.q1': 'How does the transfer to the hotel work?',
            'faq.a1': 'Our transfer departs from Manaus International Airport. We provide private air-conditioned van transport to the pier (1h) followed by a private speedboat (45 min) along the Rio Negro. Seaplane flights available upon request.',
            'faq.q2': 'Is prior vaccination required?',
            'faq.a2': 'We strongly recommend getting the Yellow Fever vaccine at least 10 days before boarding. Our chalets feature high-tech protective screens, and the acidic waters of the Rio Negro naturally inhibit mosquito breeding.',
            'faq.q3': 'What is the cancellation policy?',
            'faq.a3': 'Cancellations made at least 30 days prior to check-in receive a 100% full refund. Between 29 and 15 days, we offer rescheduling credit valid for 1 year.',

            'contact.tagline': 'Privileged Location',
            'contact.title': 'How to Reach Our Sanctuary',
            'contact.coords': 'Geographic Coordinates: 3°08\'24.1"S 60°01\'42.2"W - Anavilhanas Archipelago, Novo Airão, AM, Brazil.',
            'contact.centerTitle': 'Private Concierge Desk',
            'contact.formTitle': 'Send a Message',
            'contact.nameLabel': 'Your Full Name',
            'contact.namePlaceholder': 'e.g., Jane Doe',
            'contact.emailLabel': 'Contact Email',
            'contact.emailPlaceholder': 'jane@email.com',
            'contact.msgLabel': 'Message or Special Request',
            'contact.msgPlaceholder': 'How can we personalize your stay?',
            'contact.submitBtn': 'Send Message',
            'contact.alertSent': 'Thank you! Your message has been sent to our concierge team. We will get back to you shortly.',

            'footer.desc': 'Sustainable Luxury Lodge & Spa in the heart of the Amazon. Preservation, superior comfort, and transformative experiences.',
            'footer.navTitle': 'Navigation',
            'footer.navAbout': 'About Us',
            'footer.navChalets': 'Our Chalets',
            'footer.navGastro': 'Gastronomy',
            'footer.navGallery': 'Photo Gallery',
            'footer.sustTitle': 'Sustainability & Privacy',
            'footer.solar': '100% Solar Power',
            'footer.project': 'Jacaré-Açu Project',
            'footer.esg': 'ESG Report',
            'footer.certTitle': 'Certifications',
            'footer.certDesc': 'Official Member of EcoLuxury Hotels & Rainforest Alliance Certified.',
            'footer.rights': '© 2026 Hotel Selva - Luxury Lodge & Spa. All rights reserved.',

            'wiz.title': 'Online Booking - Hotel Selva',
            'wiz.subtitle': 'Secure your unforgettable Amazonian experience',
            'wiz.step1Title': 'Step 1: Select Dates & Guests',
            'wiz.checkin': 'Check-in Date',
            'wiz.checkout': 'Check-out Date',
            'wiz.adults': 'Adults',
            'wiz.children': 'Children (up to 12 yrs)',
            'wiz.child0': 'None',
            'wiz.child1': '1 Child',
            'wiz.child2': '2 Children',
            'wiz.nextStep2': 'Continue to Accommodations →',
            'wiz.step2Title': 'Step 2: Choose Your Chalet',
            'wiz.back': '← Back',
            'wiz.nextStep3': 'Continue to Add-ons →',
            'wiz.step3Title': 'Step 3: Customize with Extra Experiences',
            'wiz.addonTransferTitle': 'Private Speedboat Transfer (Round Trip)',
            'wiz.addonTransferDesc': 'Departing from Manaus straight to the lodge',
            'wiz.addonDinnerTitle': 'Exclusive Romantic Dinner in the Treetops',
            'wiz.addonDinnerDesc': '5-course tasting menu with wine pairing',
            'wiz.addonSpaTitle': 'Native Relaxing Couples Spa Massage',
            'wiz.addonSpaDesc': '60 minutes with botanical immersion bath',
            'wiz.nextStep4': 'Guest Details →',
            'wiz.step4Title': 'Step 4: Primary Guest Information',
            'wiz.guestName': 'Full Name',
            'wiz.guestNamePlaceholder': 'e.g., Gabriel Santos',
            'wiz.guestEmail': 'Primary Email',
            'wiz.guestPhone': 'WhatsApp / Phone',
            'wiz.totalLabel': 'Estimated Total:',
            'wiz.summaryPattern': '{nights} Night(s) at {chalet} + Extras',
            'wiz.finishBtn': 'Complete Booking →',
            'wiz.alertMissing': 'Please fill in your Name and Email to confirm the booking.',
            'wiz.confirmedBadge': 'CONFIRMED',
            'wiz.voucherTitle': 'Official Booking Voucher',
            'wiz.voucherGuest': 'Primary Guest:',
            'wiz.voucherEmail': 'Email:',
            'wiz.voucherChalet': 'Accommodation:',
            'wiz.voucherPeriod': 'Period:',
            'wiz.voucherUntil': 'to',
            'wiz.voucherNights': 'Nights',
            'wiz.voucherTotal': 'Final Total:',
            'wiz.printBtn': 'Print Voucher (PDF)',

            'lgpd.title': 'Privacy & Cookie Policy (LGPD)',
            'lgpd.description': 'We use cookies and local storage to ensure booking functionality (necessary) and, with your consent, save your travel checklist and language (functional).',
            'lgpd.customize': 'Customize',
            'lgpd.reject': 'Reject Non-Essential',
            'lgpd.acceptAll': 'Accept All',
            'lgpd.modalTitle': 'Privacy Preferences (Brazilian LGPD)',
            'lgpd.modalSubtitle': 'Choose which categories of cookies and local storage you authorize:',
            'lgpd.catNecessary': 'Strictly Necessary (Required)',
            'lgpd.catNecessaryDesc': 'Essential for the booking process and recording your consent.',
            'lgpd.catFunctional': 'Functional & Preferences',
            'lgpd.catFunctionalDesc': 'Allow saving your packing checklist and language in your browser.',
            'lgpd.catAnalytics': 'Analytics & Statistics',
            'lgpd.catAnalyticsDesc': 'Help us understand which chalets and pages are most visited.',
            'lgpd.cancel': 'Cancel',
            'lgpd.savePrefs': 'Save Preferences',
            'lgpd.manageFooter': 'Manage Cookies (LGPD)'
        },
        'es': {
            'a11y.skip': 'Saltar al contenido principal',
            'a11y.fontDec': 'Disminuir tamaño de fuente',
            'a11y.fontReset': 'Restaurar tamaño de fuente',
            'a11y.fontInc': 'Aumentar tamaño de fuente',
            'a11y.contrast': 'Alternar modo de alto contraste',
            'a11y.langLabel': 'Seleccionar idioma',

            'brand.sub': 'Lodge & Spa de Lujo',
            'nav.about': 'Nosotros',
            'nav.chalets': 'Cabañas',
            'nav.gastronomy': 'Gastronomía y Spa',
            'nav.trip': 'Tu Viaje',
            'nav.gallery': 'Galería',
            'nav.faq': 'Preguntas',
            'nav.contact': 'Contacto',
            'nav.book': 'Reservar Ahora',

            'hero.tag': 'Sostenibilidad y Sofisticación',
            'hero.title': 'Siente el Latido de la Selva con Lujo Inmersivo',
            'hero.subtitle': 'Tu hogar en el corazón de la Amazonía. Desconexión profunda, gastronomía de raíz y confort incomparable en bungalós suspendidos.',
            'hero.cta': 'Explorar Cabañas',

            'search.checkin': 'Entrada',
            'search.checkout': 'Salida',
            'search.guests': 'Huéspedes',
            'search.guests1': '1 Adulto',
            'search.guests2': '2 Adultos',
            'search.guests3': '3 Adultos',
            'search.guests4': 'Familia (4 personas)',
            'search.type': 'Tipo de Cabaña',
            'search.typeAll': 'Todos los tipos',
            'search.typeJacuzzi': 'Con Jacuzzi',
            'search.typeFloating': 'Bungaló Flotante',
            'search.btn': 'Buscar Disponibilidad',

            'about.tagline': 'La Experiencia Selva',
            'about.title': 'Donde el Lujo Encuentra el Pulso Virgen de la Selva',
            'about.badge': 'Energía Solar y Sostenible',
            'about.p1': 'El Hotel Selva nació del sueño de armonizar la hospitalidad de clase mundial con la preservación intacta de la Selva Amazónica. Nuestras cabañas fueron construidas con madera de manejo sostenible, integradas perfectamente en la copa de los árboles.',
            'about.p2': 'Ofrecemos experiencias gastronómicas de autor, excursiones guiadas por biólogos nativos y rituales de bienestar en nuestro Spa con aceites botánicos extraídos localmente.',
            'about.stat1Value': '5.000 ha',
            'about.stat1Label': 'Área Protegida',
            'about.stat2Value': 'Cero',
            'about.stat2Label': 'Plástico Desechable',
            'about.stat3Value': '94%',
            'about.stat3Label': 'Equipo Local Nativo',

            'chalets.tagline': 'Refugios Privados',
            'chalets.title': 'Nuestras Cabañas y Bungalós de Lujo',
            'chalets.subtitle': 'Arquitectura orgánica, vista panorámica de la selva y acabados de altísimo nivel.',
            'chalets.filterAll': 'Todos',
            'chalets.filterJacuzzi': 'Con Jacuzzi',
            'chalets.filterCanas': 'Suites Copa',
            'chalets.filterFloating': 'Bungalós Flotantes',
            'chalets.perDay': '/ noche',
            'chalets.perNight': '/ noche',
            'chalets.bookBtn': 'Reservar',

            'gastro.tagline': 'Experiencias Sensoriales',
            'gastro.title': 'Restaurante Aruanã y Spa Nativo',
            'gastro.subtitle': 'Siente los sabores auténticos de la gastronomía de la huerta a la mesa y renuévate con terapias ancestrales de la selva.',
            'gastro.restTitle': 'Restaurante Aruanã',
            'gastro.restDesc': 'Dirigido por chefs de renombre, nuestro menú destaca ingredientes frescos cosechados en nuestra huerta orgánica y peces amazónicos de pesca sostenible.',
            'gastro.spaTitle': 'Spa Nativo Selva',
            'gastro.spaDesc': 'Baños de inmersión con aceites esenciales de copaiba y andiroba, masajes con piedras calientes y tratamientos de arcilloterapia natural en salas suspendidas sobre el agua.',

            'widgets.tagline': 'Preparación del Viaje',
            'widgets.title': 'Widgets e Información Práctica',
            'widgets.subtitle': 'Monitorea el clima en tiempo real en la reserva y organiza tu equipaje sin olvidar nada.',
            'widgets.weatherTitle': '🌱 Clima en la Selva en Tiempo Real',
            'widgets.weatherCond': 'Soleado c/ lluvias leves',
            'widgets.weatherMoon': 'Luna Creciente',
            'widgets.weatherMoonLabel': 'Fase Lunar',
            'widgets.weatherHumidity': 'Humedad',
            'widgets.weatherUv': 'Alto (8)',
            'widgets.weatherUvLabel': 'Índice UV',
            'widgets.weatherWater': 'Temp. Agua',
            'widgets.checklistTitle': '🎒 Lista de Equipaje para la Selva',
            'widgets.checklistReset': 'Restaurar',
            'widgets.checklistPlaceholder': 'Añadir artículo personalizado...',
            'widgets.checklistAdd': 'Añadir',

            'checklist.item1': 'Repelente biodegradable',
            'checklist.item2': 'Protector solar resistente al agua',
            'checklist.item3': 'Ropa ligera de manga larga',
            'checklist.item4': 'Botas o zapatillas de senderismo',
            'checklist.item5': 'Binoculares para observación de aves',

            'gallery.tagline': 'Galería de Fotos',
            'gallery.title': 'Instantes Mágicos en la Amazonía',
            'gallery.zoomPrefix': 'Ampliar foto',

            'faq.tagline': 'Resuelve tus Dudas',
            'faq.title': 'Preguntas Frecuentes',
            'faq.q1': '¿Cómo funciona el traslado hasta el hotel?',
            'faq.a1': 'Nuestro traslado parte del Aeropuerto Internacional de Manaos. Ofrecemos transporte privado en furgoneta climatizada hasta el muelle (1 h) seguido de lancha rápida privada (45 min) por el Río Negro. Opción de vuelo en hidroavión bajo consulta.',
            'faq.q2': '¿Es necesaria vacunación previa?',
            'faq.a2': 'Recomendamos encarecidamente la vacuna contra la Fiebre Amarilla aplicada al menos 10 días antes del embarque. Nuestras cabañas cuentan con mallas protectoras de alta tecnología y el Río Negro es naturalmente ácido, inhibiendo la proliferación de mosquitos.',
            'faq.q3': '¿Cuál es la política de cancelación?',
            'faq.a3': 'Las cancelaciones realizadas con al menos 30 días de antelación al check-in tienen reembolso integral del 100%. Entre 29 y 15 días, ofrecemos crédito para reprogramar válido por 1 año.',

            'contact.tagline': 'Ubicación Privilegiada',
            'contact.title': 'Cómo Llegar a Nuestro Santuario',
            'contact.coords': 'Coordenadas Geográficas: 3°08\'24.1"S 60°01\'42.2"W - Archipiélago de Anavilhanas, Novo Airão, AM, Brasil.',
            'contact.centerTitle': 'Central de Atención Privada',
            'contact.formTitle': 'Envía un Mensaje',
            'contact.nameLabel': 'Tu Nombre Completo',
            'contact.namePlaceholder': 'Ej: María Silva',
            'contact.emailLabel': 'Correo Electrónico',
            'contact.emailPlaceholder': 'maria@correo.com',
            'contact.msgLabel': 'Mensaje o Solicitud Especial',
            'contact.msgPlaceholder': '¿Cómo podemos personalizar tu estancia?',
            'contact.submitBtn': 'Enviar Mensaje',
            'contact.alertSent': '¡Gracias! Tu mensaje ha sido enviado a nuestro equipo de conserjes. Nos pondremos en contacto pronto.',

            'footer.desc': 'Lodge & Spa de Lujo Sostenible en el corazón de la Amazonía. Preservación, máximo confort y experiencias transformadoras.',
            'footer.navTitle': 'Navegación',
            'footer.navAbout': 'Sobre Nosotros',
            'footer.navChalets': 'Nuestras Cabañas',
            'footer.navGastro': 'Gastronomía',
            'footer.navGallery': 'Galería de Fotos',
            'footer.sustTitle': 'Sostenibilidad y Privacidad',
            'footer.solar': 'Energía 100% Solar',
            'footer.project': 'Proyecto Jacaré-Açu',
            'footer.esg': 'Informe ESG',
            'footer.certTitle': 'Certificaciones',
            'footer.certDesc': 'Miembro Oficial de EcoLuxury Hotels & Rainforest Alliance Certified.',
            'footer.rights': '© 2026 Hotel Selva - Lodge & Spa de Lujo. Todos los derechos reservados.',

            'wiz.title': 'Reserva Online - Hotel Selva',
            'wiz.subtitle': 'Asegura tu experiencia inolvidable en la Amazonía',
            'wiz.step1Title': 'Paso 1: Selecciona Fechas y Huéspedes',
            'wiz.checkin': 'Fecha de Entrada',
            'wiz.checkout': 'Fecha de Salida',
            'wiz.adults': 'Adultos',
            'wiz.children': 'Niños (hasta 12 años)',
            'wiz.child0': 'Ninguno',
            'wiz.child1': '1 Niño',
            'wiz.child2': '2 Niños',
            'wiz.nextStep2': 'Continuar a Alojamientos →',
            'wiz.step2Title': 'Paso 2: Elige tu Cabaña',
            'wiz.back': '← Volver',
            'wiz.nextStep3': 'Continuar a Adicionales →',
            'wiz.step3Title': 'Paso 3: Personaliza con Experiencias Extra',
            'wiz.addonTransferTitle': 'Traslado en Lancha Privada (Ida y Vuelta)',
            'wiz.addonTransferDesc': 'Saliendo de Manaos directo hacia el hotel',
            'wiz.addonDinnerTitle': 'Cena Romántica Exclusiva en la Copa de los Árboles',
            'wiz.addonDinnerDesc': 'Menú degustación de 5 pasos con maridaje',
            'wiz.addonSpaTitle': 'Masaje Nativo Relajante en el Spa (Pareja)',
            'wiz.addonSpaDesc': '60 minutos con baño de inmersión botánico',
            'wiz.nextStep4': 'Datos del Huésped →',
            'wiz.step4Title': 'Paso 4: Información del Titular',
            'wiz.guestName': 'Nombre Completo',
            'wiz.guestNamePlaceholder': 'Ej: Gabriel Santos',
            'wiz.guestEmail': 'Correo Principal',
            'wiz.guestPhone': 'WhatsApp / Teléfono',
            'wiz.totalLabel': 'Valor Total Estimado:',
            'wiz.summaryPattern': '{nights} Noche(s) en {chalet} + Extras',
            'wiz.finishBtn': 'Finalizar Reserva →',
            'wiz.alertMissing': 'Por favor, completa tu Nombre y Correo Electrónico para confirmar la reserva.',
            'wiz.confirmedBadge': 'CONFIRMADO',
            'wiz.voucherTitle': 'Voucher de Reserva Oficial',
            'wiz.voucherGuest': 'Huésped Principal:',
            'wiz.voucherEmail': 'Correo:',
            'wiz.voucherChalet': 'Alojamiento:',
            'wiz.voucherPeriod': 'Período:',
            'wiz.voucherUntil': 'hasta',
            'wiz.voucherNights': 'Noches',
            'wiz.voucherTotal': 'Valor Total Final:',
            'wiz.printBtn': 'Imprimir Voucher (PDF)',

            'lgpd.title': 'Privacidad y Uso de Cookies (LGPD)',
            'lgpd.description': 'Utilizamos cookies y almacenamiento local para garantizar las reservas (necesarias) y, con su consentimiento, guardar su lista de equipaje e idioma (funcionales).',
            'lgpd.customize': 'Personalizar',
            'lgpd.reject': 'Rechazar No Esenciales',
            'lgpd.acceptAll': 'Aceptar Todas',
            'lgpd.modalTitle': 'Preferencias de Privacidad (Ley LGPD)',
            'lgpd.modalSubtitle': 'Elija qué categorías de cookies y almacenamiento local autoriza:',
            'lgpd.catNecessary': 'Estrictamente Necesarias (Obligatorias)',
            'lgpd.catNecessaryDesc': 'Esenciales para el proceso de reserva y registro de su consentimiento.',
            'lgpd.catFunctional': 'Funcionales y Preferencias',
            'lgpd.catFunctionalDesc': 'Permiten guardar su lista de equipaje e idioma en el navegador.',
            'lgpd.catAnalytics': 'Analíticas y Estadísticas',
            'lgpd.catAnalyticsDesc': 'Ayudan a comprender qué cabañas y páginas son más visitadas.',
            'lgpd.cancel': 'Cancelar',
            'lgpd.savePrefs': 'Guardar Preferencias',
            'lgpd.manageFooter': 'Gestionar Cookies (LGPD)'
        }
    };

    get currentLang() {
        return this.#currentLang;
    }

    t(key, params = {}) {
        const dict = this.#dictionary[this.#currentLang] || this.#dictionary['pt-BR'];
        let text = dict[key] ?? this.#dictionary['pt-BR'][key] ?? key;
        Object.entries(params).forEach(([k, v]) => {
            text = text.replace(`{${k}}`, v);
        });
        return text;
    }

    init() {
        const canPersist = window.lgpdConsent?.canUse('functional');
        const savedLang = canPersist ? localStorage.getItem('selva_lang') : null;
        if (savedLang && this.#dictionary[savedLang]) {
            this.#currentLang = savedLang;
        }

        const selector = id('language-selector');
        if (selector) {
            selector.value = this.#currentLang;
            selector.addEventListener('change', (e) => this.setLanguage(e.target.value));
        }

        this.apply();
    }

    setLanguage(lang) {
        if (!this.#dictionary[lang]) return;
        this.#currentLang = lang;

        if (window.lgpdConsent?.canUse('functional')) {
            localStorage.setItem('selva_lang', lang);
        }

        this.apply();
    }

    apply() {
        document.documentElement.lang = this.#currentLang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translated = this.t(key);
            if (translated !== key) {
                el.textContent = translated;
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translated = this.t(key);
            if (translated !== key) {
                el.setAttribute('placeholder', translated);
            }
        });

        document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria-label');
            const translated = this.t(key);
            if (translated !== key) {
                el.setAttribute('aria-label', translated);
            }
        });

        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const translated = this.t(key);
            if (translated !== key) {
                el.setAttribute('title', translated);
            }
        });

        window.dispatchEvent(new CustomEvent('i18n:language-changed', {
            detail: { lang: this.#currentLang }
        }));
    }
}
