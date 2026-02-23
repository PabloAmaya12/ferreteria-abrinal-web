<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BrandSeeder extends Seeder
{
    private const IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp', 'avif', 'svg'];

    private const BRAND_KEY_ALIASES = [
        '3en1' => '3in1',
    ];

    private function normalizeBrandKey(string $value): string
    {
        return Str::of($value)
            ->lower()
            ->ascii()
            ->replace(['&', '-', '_', '.', ' '], '')
            ->toString();
    }

    private function availableLogosByKey(): array
    {
        $dir = public_path('images/brands');
        $logos = [];

        if (!is_dir($dir)) {
            return $logos;
        }

        foreach (scandir($dir) as $file) {
            if ($file === '.' || $file === '..') continue;
            $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
            if (!in_array($ext, self::IMAGE_EXTENSIONS)) continue;

            $filename = pathinfo($file, PATHINFO_FILENAME);
            $key = $this->normalizeBrandKey($filename);
            $logos[$key] = '/images/brands/' . $file;
        }

        return $logos;
    }

    public function run(): void
    {
        $categories = Category::pluck('id', 'name');
        $logosByKey = $this->availableLogosByKey();

        $brands = [
            ['name' => 'Austromex', 'category' => 'Abrasivos', 'link' => 'https://www.austromex.com.mx/'],
            ['name' => 'Truper', 'category' => 'Herramientas', 'link' => 'https://www.truper.com/CatVigente/TRUPER-17.html'],
            ['name' => 'Milwaukee', 'category' => 'Herramientas', 'link' => 'https://www.milwaukeetool.com.mx/'],
            ['name' => 'Dewalt', 'category' => 'Herramientas', 'link' => 'https://www.dewalts.com.mx/'],
            ['name' => 'Makita', 'category' => 'Herramientas', 'link' => 'https://www.makita.com.mx/'],
            ['name' => 'URREA', 'category' => 'Herramientas', 'link' => 'https://www.urrea.com/'],
            ['name' => 'PFERD', 'category' => 'Abrasivos', 'link' => 'https://www.pferd.com/'],
            ['name' => 'Tenazit', 'category' => 'Abrasivos', 'link' => 'https://www.austromex.com.mx/brands/tenazit/'],
            ['name' => 'Stanley', 'category' => 'Herramientas', 'link' => 'https://mx.stanleytools.global/'],
            ['name' => 'Irwin', 'category' => 'Herramientas', 'link' => 'https://www.irwin.com/'],
            ['name' => 'Mikels', 'category' => 'Herramientas', 'link' => 'https://www.mikels.com.mx/'],
            ['name' => 'Bardahl', 'category' => 'Automotriz', 'link' => 'https://www.bardahl.com.mx/'],
            ['name' => 'IGoto', 'category' => 'Electricidad', 'link' => 'https://www.igoto.com.mx/'],
            ['name' => 'Coflex', 'category' => 'Plomería', 'link' => 'https://www.coflex.com.mx/'],
            ['name' => 'Black & Decker', 'category' => 'Herramientas', 'link' => 'https://www.blackanddecker.com.mx/'],
            ['name' => 'ESPA', 'category' => 'Plomería', 'link' => 'https://www.espa.com/'],
            ['name' => 'Volteck', 'category' => 'Electricidad', 'link' => 'https://www.truper.com/CatVigente/VOLTECK-389.html'],
            ['name' => 'Cinasa', 'category' => 'Abrasivos', 'link' => 'https://www.cinasa.com.mx/'],
            ['name' => 'Aqua Pak', 'category' => 'Plomería', 'link' => null],
            ['name' => 'Ingco', 'category' => 'Herramientas', 'link' => 'https://www.ingco.lat/'],
            ['name' => 'Fiero', 'category' => 'Trefilados', 'link' => 'https://www.truper.com/CatVigente/FIERO-548.html'],
            ['name' => 'Easy Cut', 'category' => 'Abrasivos', 'link' => 'https://www.austromex.com.mx/group/1005/'],
            ['name' => 'Dexter', 'category' => 'Cerrajería', 'link' => 'https://www.cerraduras-dexter.com.mx/'],
            ['name' => 'Energizer', 'category' => 'Pilas', 'link' => 'https://www.energizer.com/'],
            ['name' => 'Eveready', 'category' => 'Pilas', 'link' => 'https://www.eveready.com/'],
            ['name' => 'Panasonic', 'category' => 'Pilas', 'link' => 'https://www.panasonic.com/'],
            ['name' => 'Duracell', 'category' => 'Pilas', 'link' => 'https://www.duracell.com/'],
            ['name' => 'Omega', 'category' => 'Soldadura', 'link' => 'https://www.omegaaleaciones.com/'],
            ['name' => 'Fandeli', 'category' => 'Abrasivos', 'link' => 'https://www.fandeli.com/'],
            ['name' => 'Loctite', 'category' => 'Selladores', 'link' => 'https://www.loctite.com.mx/'],
            ['name' => 'Rotoplas', 'category' => 'Plomería', 'link' => 'https://www.rotoplas.com.mx/'],
            ['name' => 'Klintek', 'category' => 'Higiene', 'link' => 'https://www.truper.com/CatVigente/KLINTEK-601.html'],
            ['name' => 'Bticino', 'category' => 'Electricidad', 'link' => 'https://www.bticino.com.mx/'],
            ['name' => 'Volteck Lait', 'category' => 'Electricidad', 'link' => 'https://www.truper.com/CatVigente/VOLTECK-389.html'],
            ['name' => 'IUSA', 'category' => 'Electricidad', 'link' => 'https://www.iusa.com.mx/'],
            ['name' => 'Infra', 'category' => 'Soldadura', 'link' => 'https://www.infra.com.mx/'],
            ['name' => 'Doal', 'category' => 'Pintura', 'link' => 'https://www.pinturasdoal.com/'],
            ['name' => 'Sista', 'category' => 'Selladores', 'link' => 'https://www.sista-selladores.com/'],
            ['name' => 'Master', 'category' => 'Cerrajería', 'link' => 'https://www.masterlock.com/'],
            ['name' => 'IGESA', 'category' => 'Electricidad', 'link' => 'https://www.igesa.com.mx/'],
            ['name' => 'Foset', 'category' => 'Plomería', 'link' => 'https://www.truper.com/CatVigente/FOSET-467.html'],
            ['name' => 'Austrodiam', 'category' => 'Abrasivos', 'link' => 'https://www.austromex.com.mx/brands/austrodiam'],
            ['name' => 'Dica', 'category' => 'Plomería', 'link' => 'https://www.dicalidad.com.mx/'],
            ['name' => 'Phillips', 'category' => 'Cerrajería', 'link' => 'https://www.phillips.com.mx/'],
            ['name' => 'Evans', 'category' => 'Plomería', 'link' => 'https://www.evans.com.mx/'],
            ['name' => 'Derma Care', 'category' => 'Seguridad', 'link' => 'https://www.dermacare.mx/'],
            ['name' => 'WD-40', 'category' => 'Lubricantes', 'link' => 'https://www.wd40.com.mx/'],
            ['name' => '3 en 1', 'category' => 'Lubricantes', 'link' => 'https://www.3enuno.lat/'],
            ['name' => 'Ax Tech', 'category' => 'Soldadura', 'link' => 'https://www.axtech.com.mx/'],
            ['name' => 'Fleximatic', 'category' => 'Plomería', 'link' => 'https://www.fleximatic.mx/'],
            ['name' => 'Bosch', 'category' => 'Herramientas', 'link' => 'https://www.bosch.com.mx/'],
            ['name' => 'Ultra Color', 'category' => 'Pintura', 'link' => 'https://www.ultracolor.mx/'],
            ['name' => 'Fanal', 'category' => 'Cerrajería', 'link' => 'https://www.fanal.com.mx/'],
            ['name' => 'Kola Loka', 'category' => 'Adhesivos', 'link' => 'https://www.resistol.com.mx/'],
            ['name' => 'Resistol 5000', 'category' => 'Adhesivos', 'link' => 'https://www.resistol.com.mx/'],
            ['name' => 'Pennsylvania', 'category' => 'Selladores', 'link' => 'https://www.pennsylvania.com.mx/'],
            ['name' => 'Sika', 'category' => 'Selladores', 'link' => 'https://mex.sika.com/'],
            ['name' => 'Rugo', 'category' => 'Plomería', 'link' => 'https://www.rugo.com.mx/'],
            ['name' => 'Devcon', 'category' => 'Adhesivos', 'link' => 'https://www.devcon.com/'],
            ['name' => 'ByLack', 'category' => 'Seguridad', 'link' => 'https://www.bylack.com.mx/'],
            ['name' => 'Permatex', 'category' => 'Selladores', 'link' => 'https://www.permatex.com/'],
            ['name' => '3M', 'category' => 'Seguridad', 'link' => 'https://www.3m.com.mx/'],
            ['name' => 'Hermex', 'category' => 'Cerrajería', 'link' => 'https://www.truper.com/CatVigente/HERMEX-576.html'],
            ['name' => 'Cabel', 'category' => 'Seguridad', 'link' => 'https://www.cabel.mx/'],
            ['name' => 'Tuk', 'category' => 'Cintas', 'link' => 'https://www.tuk.com.mx/'],
            ['name' => 'Pretul', 'category' => 'Herramientas', 'link' => 'https://www.truper.com/CatVigente/TRUPER-17.html'],
            ['name' => 'Novapak', 'category' => 'Cintas', 'link' => 'https://www.novapak.com.mx/'],
            ['name' => 'Avante', 'category' => 'Carbones', 'link' => 'https://www.carbones-avante.com/'],
        ];

        foreach ($brands as $i => $data) {
            $categoryId = $categories[$data['category']] ?? null;
            if (!$categoryId) continue;

            $brandKey = $this->normalizeBrandKey($data['name']);
            $aliasKey = self::BRAND_KEY_ALIASES[$brandKey] ?? $brandKey;
            $imageUrl = $logosByKey[$brandKey] ?? $logosByKey[$aliasKey] ?? null;

            Brand::updateOrCreate(
                ['name' => $data['name']],
                [
                    'category_id' => $categoryId,
                    'image_url' => $imageUrl,
                    'link' => $data['link'],
                    'active' => true,
                    'sort_order' => $i,
                ]
            );
        }
    }
}
