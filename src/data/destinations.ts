export interface Destination {
  slug: string;
  name: string;
  place: string;
  tagline: string;
  description: string;
  duration: string;
  price: string;
  cover: string;
  coverLarge: string;
  gallery: string[];
  excursions: string[];
}

function wm(dir1: string, dir2: string, filename: string, width: number) {
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/${dir1}/${dir2}/${filename}/${width}px-${filename}`;
}

export const DESTINATIONS: Destination[] = [
  {
    slug: 'santorini',
    name: 'Santorini',
    place: 'Grecia',
    tagline: 'Atardeceres infinitos sobre el mar Egeo.',
    description:
      'Casas blancas colgadas sobre la caldera, cúpulas azules y el mar Egeo cambiando de color con cada hora del día. Un clásico griego pensado para caminar sin apuro.',
    duration: '7 días / 6 noches',
    price: 'Desde USD 1.890 por persona',
    cover: wm('7', '77', 'Oia_-_Santorini_2019.jpg', 960),
    coverLarge: wm('7', '77', 'Oia_-_Santorini_2019.jpg', 1280),
    gallery: [
      wm('2', '27', '1000_Three_domes_of_Oia_in_Santorini_Photo_by_Giles_Laurent.jpg', 1280),
      wm('b', 'b8', 'Tour_boats_-_Nea_Kameni_volcanic_island_-_Santorini_-_Greece_-_01.jpg', 1280),
    ],
    excursions: [
      'Recorrido en velero por la caldera al atardecer',
      'Cata de vinos volcánicos en Pyrgos',
      'Caminata panorámica de Fira a Oia',
    ],
  },
  {
    slug: 'kioto',
    name: 'Kioto',
    place: 'Japón',
    tagline: 'Templos milenarios entre jardines de otoño.',
    description:
      'Mil torii rojos, casas de té centenarias y calles de madera en el barrio de Gion. Kioto es Japón en su versión más silenciosa y ceremoniosa.',
    duration: '9 días / 8 noches',
    price: 'Desde USD 2.450 por persona',
    cover: wm('0', '0e', 'Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg', 960),
    coverLarge: wm('0', '0e', 'Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg', 1280),
    gallery: [
      wm('d', 'd8', 'Kinkaku-ji_in_November_2016_-02.jpg', 1280),
      wm('8', '86', 'A_view_of_Gion_corner_in_Geisha_district%2C_Kyoto%2C_Japan.jpg', 1280),
    ],
    excursions: [
      'Ceremonia del té en una casa tradicional',
      'Recorrido por los mil torii de Fushimi Inari',
      'Paseo nocturno por el barrio de Gion',
    ],
  },
  {
    slug: 'patagonia',
    name: 'Patagonia',
    place: 'Argentina',
    tagline: 'Glaciares y silencio al fin del mundo.',
    description:
      'Montañas de granito, glaciares que crujen y estepas interminables. Un viaje para quienes buscan el silencio más profundo del planeta.',
    duration: '8 días / 7 noches',
    price: 'Desde USD 2.150 por persona',
    cover: wm('6', '66', 'View_of_Grey_Glacier_in_Torres_del_Paine_National_Park%2C_Chilean_Patagonia.jpg', 960),
    coverLarge: wm('6', '66', 'View_of_Grey_Glacier_in_Torres_del_Paine_National_Park%2C_Chilean_Patagonia.jpg', 1280),
    gallery: [
      wm('5', '53', 'Fitz_Roy_1.jpg', 1280),
      wm('5', '5c', 'Perito_Moreno_Glacier_Patagonia_Argentina_Luca_Galuzzi_2005.JPG', 1280),
    ],
    excursions: [
      'Trekking a la base del Fitz Roy',
      'Navegación frente al glaciar Perito Moreno',
      'Avistaje de fauna en Torres del Paine',
    ],
  },
  {
    slug: 'marrakech',
    name: 'Marrakech',
    place: 'Marruecos',
    tagline: 'El desierto y la medina al caer el sol.',
    description:
      'Zocos que se pierden en laberintos, el llamado a la oración al atardecer y el desierto a pocas horas de la ciudad. Marrakech desborda los sentidos.',
    duration: '6 días / 5 noches',
    price: 'Desde USD 1.590 por persona',
    cover: wm('d', 'd2', 'Jemaa_el-Fnaa_at_night.jpg', 960),
    coverLarge: wm('d', 'd2', 'Jemaa_el-Fnaa_at_night.jpg', 1280),
    gallery: [
      wm('1', '14', 'Mosqu%C3%A9e_de_la_Koutoubia_-_marakesh.jpg', 1280),
      wm('c', 'cd', 'Marrakesh_hammam_DSCF9845.jpg', 1280),
    ],
    excursions: [
      'Noche en el desierto con cena beduina',
      'Recorrido guiado por la medina y los zocos',
      'Paseo en camello al atardecer',
    ],
  },
  {
    slug: 'bali',
    name: 'Bali',
    place: 'Indonesia',
    tagline: 'Arrozales verdes y aguas turquesa.',
    description:
      'Templos sobre el mar, arrozales en terrazas y un ritmo de vida que invita a bajar la velocidad. Bali combina naturaleza, espiritualidad y surf.',
    duration: '10 días / 9 noches',
    price: 'Desde USD 2.290 por persona',
    cover: wm('f', 'f8', 'Rice_terraces%2C_Ubud%2C_Bali.jpg', 960),
    coverLarge: wm('f', 'f8', 'Rice_terraces%2C_Ubud%2C_Bali.jpg', 1280),
    gallery: [
      wm('4', '4c', 'Tanah-Lot_Bali_Indonesia_Pura-Tanah-Lot-02.jpg', 1280),
      wm('6', '60', 'Cliffs_of_Uluwatu%2C_Bali%2C_Indonesia%2C_20220826_1006_1038.jpg', 1280),
    ],
    excursions: [
      'Amanecer en las terrazas de arroz de Tegallalang',
      'Ceremonia de purificación en un templo de agua',
      'Clase de surf en Uluwatu',
    ],
  },
  {
    slug: 'reikiavik',
    name: 'Reikiavik',
    place: 'Islandia',
    tagline: 'Auroras boreales sobre paisajes de hielo.',
    description:
      'Cascadas, géiseres y cielos verdes en movimiento. Reikiavik es la puerta a uno de los paisajes más crudos y espectaculares del planeta.',
    duration: '5 días / 4 noches',
    price: 'Desde USD 1.990 por persona',
    cover: wm('b', 'b9', 'Aurora_Borealis_outside_Reykjavik_%282%29.JPG', 960),
    coverLarge: wm('b', 'b9', 'Aurora_Borealis_outside_Reykjavik_%282%29.JPG', 1280),
    gallery: [
      wm('3', '3f', 'Reykjav%C3%ADk_Old_Harbor.jpg', 1280),
      wm('5', '53', 'Bells_at_Hallgrimskirkja_Reykjavik_Iceland_2026-02-07_21-40-36.jpg', 1280),
    ],
    excursions: [
      'Salida nocturna en busca de auroras boreales',
      'Círculo Dorado: géiseres y cascadas',
      'Baño termal en la Laguna Azul',
    ],
  },
];
