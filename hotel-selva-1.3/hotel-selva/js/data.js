const CHALETS_DATA = [
    {
        id: 'c1',
        title: 'Chalé Castanheira',
        category: 'jacuzzi',
        price: 1850,
        capacity: 'Até 2 Pessoas',
        size: '75 m²',
        tag: 'Mais Reservado',
        image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=80',
        amenities: ['Jacuzzi Privativa', 'Deck Suspenso', 'Cama King Size', 'Vista para o Rio'],
        i18n: {
            'pt-BR': {
                title: 'Chalé Castanheira',
                capacity: 'Até 2 Pessoas',
                tag: 'Mais Reservado',
                amenities: ['Jacuzzi Privativa', 'Deck Suspenso', 'Cama King Size', 'Vista para o Rio']
            },
            'en': {
                title: 'Castanheira Chalet',
                capacity: 'Up to 2 Guests',
                tag: 'Most Booked',
                amenities: ['Private Jacuzzi', 'Suspended Deck', 'King Size Bed', 'River View']
            },
            'es': {
                title: 'Cabaña Castanheira',
                capacity: 'Hasta 2 Personas',
                tag: 'Más Reservada',
                amenities: ['Jacuzzi Privado', 'Terraza Suspendida', 'Cama King Size', 'Vista al Río']
            }
        }
    },
    {
        id: 'c2',
        title: 'Bangalô Igarapé',
        category: 'floating',
        price: 2400,
        capacity: 'Até 3 Pessoas',
        size: '90 m²',
        tag: 'Flutuante',
        image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80',
        amenities: ['Acesso Direto à Água', 'Caiaques Privativos', 'Pista de Observação', 'Chuveiro Externo'],
        i18n: {
            'pt-BR': {
                title: 'Bangalô Igarapé',
                capacity: 'Até 3 Pessoas',
                tag: 'Flutuante',
                amenities: ['Acesso Direto à Água', 'Caiaques Privativos', 'Pista de Observação', 'Chuveiro Externo']
            },
            'en': {
                title: 'Igarapé Bungalow',
                capacity: 'Up to 3 Guests',
                tag: 'Floating',
                amenities: ['Direct Water Access', 'Private Kayaks', 'Observation Deck', 'Outdoor Shower']
            },
            'es': {
                title: 'Bungaló Igarapé',
                capacity: 'Hasta 3 Personas',
                tag: 'Flotante',
                amenities: ['Acceso Directo al Agua', 'Kayaks Privados', 'Mirador de Observación', 'Ducha Exterior']
            }
        }
    },
    {
        id: 'c3',
        title: 'Suíte Samaúma',
        category: 'canas',
        price: 1450,
        capacity: 'Até 2 Pessoas',
        size: '60 m²',
        tag: 'Copa das Árvores',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        amenities: ['Copa Panorâmica', 'Rede Suspensa', 'Café da Manhã Privativo', 'Adega de Vinhos'],
        i18n: {
            'pt-BR': {
                title: 'Suíte Samaúma',
                capacity: 'Até 2 Pessoas',
                tag: 'Copa das Árvores',
                amenities: ['Copa Panorâmica', 'Rede Suspensa', 'Café da Manhã Privativo', 'Adega de Vinhos']
            },
            'en': {
                title: 'Samaúma Suite',
                capacity: 'Up to 2 Guests',
                tag: 'Treetop',
                amenities: ['Panoramic Canopy', 'Suspended Hammock', 'Private Breakfast', 'Wine Cellar']
            },
            'es': {
                title: 'Suite Samaúma',
                capacity: 'Hasta 2 Personas',
                tag: 'Copa de los Árboles',
                amenities: ['Vista Panorámica', 'Hamaca Suspendida', 'Desayuno Privado', 'Cava de Vinos']
            }
        }
    },
    {
        id: 'c4',
        title: 'Chalé Jequitibá Família',
        category: 'jacuzzi',
        price: 3200,
        capacity: 'Até 5 Pessoas',
        size: '130 m²',
        tag: 'Espaço Família',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
        amenities: ['2 Suítes Master', 'Jacuzzi Dupla', 'Sala de Estar Integrada', 'Mordomo Nativo'],
        i18n: {
            'pt-BR': {
                title: 'Chalé Jequitibá Família',
                capacity: 'Até 5 Pessoas',
                tag: 'Espaço Família',
                amenities: ['2 Suítes Master', 'Jacuzzi Dupla', 'Sala de Estar Integrada', 'Mordomo Nativo']
            },
            'en': {
                title: 'Jequitibá Family Chalet',
                capacity: 'Up to 5 Guests',
                tag: 'Family Space',
                amenities: ['2 Master Suites', 'Double Jacuzzi', 'Integrated Living Room', 'Native Butler']
            },
            'es': {
                title: 'Cabaña Familiar Jequitibá',
                capacity: 'Hasta 5 Personas',
                tag: 'Espacio Familiar',
                amenities: ['2 Suites Master', 'Jacuzzi Doble', 'Sala Integrada', 'Mayordomo Nativo']
            }
        }
    }
];

const GALLERY_DATA = [
    {
        img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80',
        title: 'Visão Aérea do Lodge',
        i18n: { 'pt-BR': 'Visão Aérea do Lodge', 'en': 'Aerial View of the Lodge', 'es': 'Vista Aérea del Lodge' }
    },
    {
        img: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=80',
        title: 'Suíte Suspensa',
        i18n: { 'pt-BR': 'Suíte Suspensa', 'en': 'Suspended Suite', 'es': 'Suite Suspendida' }
    },
    {
        img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
        title: 'Culinária Regional',
        i18n: { 'pt-BR': 'Culinária Regional', 'en': 'Regional Cuisine', 'es': 'Cocina Regional' }
    },
    {
        img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
        title: 'Spa & Relaxamento',
        i18n: { 'pt-BR': 'Spa & Relaxamento', 'en': 'Spa & Relaxation', 'es': 'Spa y Relajación' }
    }
];

function getLocalizedChalet(chalet) {
    const lang = window.i18n?.currentLang || 'pt-BR';
    const localized = chalet.i18n?.[lang] || chalet.i18n?.['pt-BR'];
    return localized ? { ...chalet, ...localized } : chalet;
}

function getLocalizedGalleryTitle(item) {
    const lang = window.i18n?.currentLang || 'pt-BR';
    return item.i18n?.[lang] || item.title;
}
