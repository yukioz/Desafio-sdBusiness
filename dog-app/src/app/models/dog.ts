export class Dog {
    id?: string;
    name?: string;
    temperament?: string;
    life_span?: string;
    alt_names?: string;
    wikipedia_url?: string;
    origin?: string;
    weight?: Weight;
    country_code?: string;
    height?: Height;
}

class Weight {
    imperial?: string;
    metric?: string;
}

class Height {
    imperial?: string;
    metric?: string;
}
