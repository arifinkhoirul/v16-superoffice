import { officeSpace } from "../types/officeSpace.types";
export const officeSpaces: officeSpace[] = [
    {
        id: 1,
        title: 'angga park central master siliicon vally star class',
        slug: 'angga-park-central-master-silicon',
        price: 18560000,
        duration: '28 days',
        location: 'jakarta timur',
        rating: '4.5',
        address: 'dekat gedung BWA HQ di jakarta no 18',
        image: '/assets/images/thumbnails/thumbnails-1.png',
            images: [
                '/assets/images/thumbnails/thumbnail-details-2.png',
                '/assets/images/thumbnails/thumbnail-details-3.png',
                '/assets/images/thumbnails/thumbnail-details-3.png',
            ],
        tags: ['popular', 'Cheaper'],
        about: 'wether you need quiet private space away',
        // features: ['global event', 'privacy', 'free move', 'sustainbility', 'extra snakcs', 'compact',],
        isFullyBooked: false,
        features: [
            {
                image: '/assets/images/icons/3dcube.svg',
                caption: 'global event',
                description: 'lorem ipsum dolor sit amet'
            },
            {
                image: '/assets/images/icons/3dcube.svg',
                caption: 'global event',
                description: 'lorem ipsum dolor sit amet'
            },
            {
                image: '/assets/images/icons/3dcube.svg',
                caption: 'global event',
                description: 'lorem ipsum dolor sit amet'
            },
            {
                image: '/assets/images/icons/3dcube.svg',
                caption: 'global event',
                description: 'lorem ipsum dolor sit amet'
            },
            {
                image: '/assets/images/icons/3dcube.svg',
                caption: 'global event',
                description: 'lorem ipsum dolor sit amet'
            },
            {
                image: '/assets/images/icons/3dcube.svg',
                caption: 'global event',
                description: 'lorem ipsum dolor sit amet'
            },
        ],
        saleContacts: [
            {
                id: 1,
                name: 'mayshosi',
                role: 'sales manages',
                photo: '/assets/images/photos/photo-1.png'
            },
            {
                id: 2,
                name: 'mayshosi',
                role: 'sales manages',
                photo: '/assets/images/photos/photo-1.png'
            },
        ]
    },
    {
        id: 2,
        title: 'pondok pekerja remote surebaya',
        slug: 'pondok-pekerja-remote-surebaya',
        price: 13560000,
        duration: '28 days',
        location: 'surabaya',
        rating: '4.8',
        address: 'dekat gedung BWA HQ di jakarta no 18',
        image: '/assets/images/thumbnails/thumbnails-3.png',
            images: [
                '/assets/images/thumbnails/thumbnail-details-2.png',
                '/assets/images/thumbnails/thumbnail-details-3.png',
                '/assets/images/thumbnails/thumbnail-details-3.png',
            ],
        tags: ['popular'],
        about: 'ntrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. ',
        isFullyBooked: true,
        features: [
            {
                image: '/assets/images/icons/3dcube.svg',
                caption: 'global event',
                description: 'lorem ipsum dolor sit amet'
            },
            {
                image: '/assets/images/icons/coffee.svg',
                caption: 'extra snacks',
                description: 'lorem ipsum dolor sit amet'
            },
            {
                image: '/assets/images/icons/3dcube.svg',
                caption: 'sustainbility',
                description: 'lorem ipsum dolor sit amet'
            },
        ],
        saleContacts: [
            {   
                id: 1,
                name: 'rinda',
                role: 'sales manages',
                photo: '/assets/images/photos/photo-1.png'
            },
            {
                id: 2,
                name: 'maumara',
                role: 'sales manages',
                photo: '/assets/images/photos/photo-2.png'
            },
            {
                id: 3,
                name: 'maumara',
                role: 'sales manages',
                photo: '/assets/images/photos/photo-2.png'
            },
        ]
    },
]
