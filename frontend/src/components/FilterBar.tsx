import { Filter } from 'lucide-react';
import { genres, countries } from '@/data/serials';

interface FilterBarProps {
  selectedCountry: string;
  selectedGenre: string;
  onCountryChange: (country: string) => void;
  onGenreChange: (genre: string) => void;
}

export default function FilterBar({ 
  selectedCountry, 
  selectedGenre, 
  onCountryChange, 
  onGenreChange 
}: FilterBarProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-foreground">Filter Serials</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Country
          </label>
          <div className="flex flex-wrap gap-2">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => onCountryChange(country)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCountry === country
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Genre
          </label>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => onGenreChange(genre)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedGenre === genre
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}