import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import SerialCard from '@/components/SerialCard';
import { tvSerials } from '@/data/serials';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query });
    }
  };

  const filteredSerials = tvSerials.filter((serial) => {
    const searchLower = query.toLowerCase();
    return (
      serial.title.toLowerCase().includes(searchLower) ||
      serial.synopsis.toLowerCase().includes(searchLower) ||
      serial.cast.some(actor => actor.toLowerCase().includes(searchLower)) ||
      serial.genre.some(genre => genre.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-6">Search Classic Serials</h1>
          
          <form onSubmit={handleSearch}>
            <div className="relative max-w-2xl">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, cast, genre..."
                className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </form>
        </div>

        {query && (
          <div className="mb-6">
            <p className="text-muted-foreground">
              Found <span className="font-semibold text-foreground">{filteredSerials.length}</span> results for "{query}"
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSerials.map((serial) => (
            <SerialCard key={serial.id} serial={serial} />
          ))}
        </div>

        {filteredSerials.length === 0 && query && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">No serials found matching your search.</p>
            <button
              onClick={() => {
                setQuery('');
                setSearchParams({});
              }}
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}