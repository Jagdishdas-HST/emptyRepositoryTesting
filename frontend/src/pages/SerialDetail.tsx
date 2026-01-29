import { useParams, Link } from 'react-router-dom';
import { tvSerials } from '@/data/serials';
import { Star, Calendar, MapPin, Users, Tv, ArrowLeft, BookMarked } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function SerialDetail() {
  const { id } = useParams();
  const serial = tvSerials.find((s) => s.id === id);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!serial) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Serial Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Browse</span>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Image Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-muted shadow-2xl">
                <img 
                  src={serial.imageUrl} 
                  alt={serial.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-bold text-white">{serial.rating}</span>
                  <span className="text-xs text-white/70">({serial.reviews} reviews)</span>
                </div>
              </div>

              <button
                onClick={handleFavorite}
                className={`w-full mt-4 px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                  isFavorite
                    ? 'bg-accent text-white'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                <BookMarked className={`w-5 h-5 ${isFavorite ? 'fill-white' : ''}`} />
                {isFavorite ? 'Saved to Favorites' : 'Add to Favorites'}
              </button>
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-lg">
                  {serial.country}
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-lg">
                  {serial.yearStart} - {serial.yearEnd}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                {serial.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-6">
                {serial.genre.map((genre) => (
                  <span 
                    key={genre}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-lg"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Network</p>
                    <p className="font-semibold text-foreground">{serial.network}</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Tv className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Episodes</p>
                    <p className="font-semibold text-foreground">{serial.episodes || 'N/A'}</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Years Aired</p>
                    <p className="font-semibold text-foreground">{serial.yearEnd - serial.yearStart + 1} years</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Cast Members</p>
                    <p className="font-semibold text-foreground">{serial.cast.length}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Synopsis */}
            <div className="bg-card border border-border rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Synopsis</h2>
              <p className="text-muted-foreground leading-relaxed">
                {serial.synopsis}
              </p>
            </div>

            {/* Cast */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Main Cast</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {serial.cast.map((actor, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-secondary rounded-lg"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{actor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}