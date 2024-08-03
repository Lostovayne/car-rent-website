import type { ICar, IReview } from "../interfaces";


export const dataReviews: IReview[] = [
    {
        carId: '2',
        userId:'1',
        createAt: new Date(),
        rating: 5,
        text: 'Alquilar un Tesla fue una experiencia increíble. Opté por el Model 3 y fue perfecto para la ciudad. La conducción es suave y la tecnología avanzada hace que cada viaje sea placentero. Además, me encantó que fuera ecológico y redujera mi huella de carbono. La empresa de alquiler fue profesional y el proceso de alquiler fue sencillo y sin problemas. Definitivamente lo recomendaría a cualquiera que busque una experiencia de conducción premium y consciente con el medio ambiente.',
        user: {
            id: '1',
            name: 'Alice',
            email: 'alice@example.com',
            title: "CEO Amazon",
            imageUrl: "https://github.com/shadcn.png",
            unreadNotifications: false,
        },

    },
    {
        carId: '2',
        userId: '2',
        createAt: new Date(),
        rating: 4,
        text: 'Tuve la oportunidad de alquilar un Tesla Model X y fue fantástico. El espacio interior es muy amplio, ideal para viajes largos en familia. La autonomía es impresionante y no tuve problemas con la carga, ya que planifiqué mis rutas con antelación. La empresa de alquiler me proporcionó un excelente servicio, y el coche estaba en perfectas condiciones. Sin duda, volveré a alquilar un Tesla en el futuro. Una experiencia altamente recomendable.',
        user: {
            id: '2',
            name: 'Bob',
            email: 'bob@example.com',
            imageUrl: "https://github.com/shadcn.png",
            unreadNotifications: true,
        },
    },
    {
        carId: '2',
        userId: '3',
        createAt: new Date(),
        rating: 0,
        text: 'Alquilar un Tesla Model S fue una de las mejores decisiones que he tomado. La velocidad y el rendimiento son excepcionales. Me encantó la conducción autónoma y todas las características inteligentes que ofrece el coche. El proceso de alquiler fue muy fácil y la empresa fue muy profesional. También aprecié mucho la reducción de emisiones y la sostenibilidad del vehículo. Recomiendo encarecidamente alquilar un Tesla a cualquiera que busque una experiencia de conducción de lujo.',
        user: {
            id: '3',
            name: 'Charlie',
            email: 'charlie@example.com',
            imageUrl: "https://github.com/shadcn.png",
            unreadNotifications: false,
        },
    },
    {
        carId: '2',
        userId: '4',
        createAt: new Date(),
        rating: 3,
        text: 'Recientemente alquilé un Tesla Model Y para un viaje por carretera y fue una gran elección. El espacio y la comodidad que ofrece este SUV son incomparables. La autonomía me permitió realizar el viaje sin preocupaciones y las paradas de carga fueron rápidas y fáciles. La tecnología de asistencia al conductor hizo que el viaje fuera más seguro y relajante. La empresa de alquiler fue muy servicial y el coche estaba en excelente estado. Definitivamente repetiré la experiencia.',
        user: {
            id: '4',
            name: 'Diana',
            email: 'diana@example.com',
            imageUrl: "https://github.com/shadcn.png",
            unreadNotifications: true,
        },
    },
    {
        carId: '2',
        userId: '5',
        createAt: new Date(),
        rating: 1,
        text: 'Mi experiencia alquilando un Tesla Model 3 fue inigualable. El coche ofrece una combinación perfecta de elegancia, rendimiento y sostenibilidad. Me impresionó la comodidad y la avanzada tecnología a bordo. El proceso de alquiler fue sencillo y la empresa muy profesional. La autonomía del coche es fantástica y no tuve problemas para encontrar puntos de carga en mi área. Recomiendo totalmente alquilar un Tesla para cualquier viaje, ya sea corto o largo. ¡Es una experiencia que vale la pena repetir!',
        user: {
            id: '5',
            name: 'Eve',
            email: 'eve@example.com',
            imageUrl: "https://github.com/shadcn.png",
            unreadNotifications: false,
        },
    },
    {
        carId: '2',
        userId: '7',
        user: {
            id: '7',
            name: 'Sam',
            email: 'sam@example.com',
            imageUrl: "https://github.com/shadcn.png",
            unreadNotifications: true,
        },
        createAt: new Date(),
        rating: 2,
        text: 'Todo bien',
    },
];

export const dataCarDetails:ICar = {
    id: "2",
    model: "Nissan GT - R",
    type: "Sport",
    image: "img/cars/gtr.svg",
    price: 80,
    specs: {
      fuel: "80L",
      transmission: "Manual",
      capacity: 2,
    },    
    reviews: dataReviews
}

