<?php

namespace Database\Factories;

use App\Models\Brand;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    private const TOOL_NAMES = [
        'Martillo', 'Desarmador', 'Llave inglesa', 'Pinzas', 'Sierra circular',
        'Taladro percutor', 'Esmeriladora angular', 'Llave Allen', 'Nivel láser',
        'Cinta métrica', 'Juego de dados', 'Broca para concreto', 'Lija de banda',
        'Disco de corte', 'Soldadora inversor', 'Pistola de calor', 'Compresor',
        'Pulidora orbital', 'Remachadora', 'Cortadora de azulejo',
        'Flexómetro', 'Serrucho', 'Prensa tipo C', 'Gato hidráulico',
        'Escalera extensible', 'Manguera industrial', 'Cable THW', 'Interruptor',
        'Cerradura', 'Bisagra', 'Tornillo galvanizado', 'Clavo de acero',
        'Abrazadera', 'Tubo PVC', 'Conexión cobre', 'Válvula de bola',
        'Pegamento epóxico', 'Silicón sellador', 'Impermeabilizante', 'Pintura esmalte',
        'Brocha profesional', 'Rodillo felpa', 'Thinner', 'Masilla automotriz',
        'Guante de carnaza', 'Lente de seguridad', 'Casco industrial', 'Arnés seguridad',
        'Zapato dieléctrico', 'Chaleco reflectante',
    ];

    private const SPECS = [
        '1/4"', '3/8"', '1/2"', '5/8"', '3/4"', '1"', '2"',
        '6mm', '8mm', '10mm', '12mm', '14mm',
        '4.5"', '7"', '9"', '14"',
        '500W', '750W', '1000W', '1500W', '2200W',
        '110V', '220V', '12V', '18V', '20V',
        'Acero inox', 'Carbono', 'Cromado', 'Galvanizado',
    ];

    public function definition(): array
    {
        $name = fake()->randomElement(self::TOOL_NAMES);
        $spec = fake()->randomElement(self::SPECS);
        $fullName = "$name $spec";

        $precMin = fake()->randomFloat(2, 25, 800);
        $precMay = round($precMin * fake()->randomFloat(2, 1.15, 1.40), 2);
        $precPub = round($precMay * fake()->randomFloat(2, 1.20, 1.60), 2);

        return [
            'name' => $fullName,
            'description' => fake()->optional(0.7)->sentence(8),
            'sku' => strtoupper(fake()->unique()->bothify('???-#####')),
            'prec_pub' => $precPub,
            'prec_may' => $precMay,
            'prec_min' => $precMin,
            'brand_id' => Brand::inRandomOrder()->value('id') ?? 1,
            'image_url' => null,
            'stock' => fake()->numberBetween(0, 500),
            'active' => fake()->boolean(90),
        ];
    }
}
