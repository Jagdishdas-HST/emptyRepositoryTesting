import { useState } from 'react';
import Hero from '@/components/Hero';
import FilterBar from '@/components/FilterBar';
import SerialCard from '@/components/SerialCard';
import { tvSerials } from '@/data/serials';
import { TrendingUp, Clock } from 'lucide-react';

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedGenre, setSelectedGenre] = useState('All');

  const filteredSerials = tvSerials.filter((serial) => {
    const countryMatch = selectedCountry === 'All' || serial.country === selectedCountry;
    const genreMatch = selectedGenre === 'All' || serial.genre.includes(selectedGenre);
    return countryMatch && genreMatch;
  });

  const trendingSerials = [...tvSerials]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  const recentlyAdded = [...tvSerials]
    .sort((a, b) => b.yearEnd - a.yearEnd)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Trending Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Trending Classics</h2>
              <p className="text-sm text-muted-foreground">Most loved by our community</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingSerials.map((serial) => (
              <SerialCard key={serial.id} serial={serial} />
            ))}
          </div>
        </section>

        {/* Recently Added Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Recently Added</h2>
              <p className="text-sm text-muted-foreground">Latest additions to our archive</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentlyAdded.map((serial) => (
              <SerialCard key={serial.id} serial={serial} />
            ))}
          </div>
        </section>

        {/* All Serials with Filters */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">Browse All Serials</h2>
            <p className="text-sm text-muted-foreground">
              Showing {filteredSerials.length} of {tvSerials.length} serials
            </p>
          </div>

          <FilterBar
            selectedCountry={selectedCountry}
            selectedGenre={selectedGenre}
            onCountryChange={setSelectedCountry}
            onGenreChange={setSelectedGenre}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSerials.map((serial) => (
              <SerialCard key={serial.id} serial={serial} />
            ))}
          </div>

          {filteredSerials.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No serials found matching your filters.</p>
              <button
                onClick={() => {
                  setSelectedCountry('All');
                  setSelectedGenre('All');
                }}
                className="mt-4 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}