import { Star, Calendar, MapPin } from 'lucide-react';
import { TVSerial } from '@/data/serials';
import { Link } from 'react-router-dom';

interface SerialCardProps {
  serial: TVSerial;
}

export default function SerialCard({ serial }: SerialCardProps) {
  return (
    <Link to={`/serial/${serial.id}`} className="group">
      <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img 
            src={serial.imageUrl} 
            alt={serial.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-semibold text-white">{serial.rating}</span>
          </div>
          <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm px-2 py-1 rounded-lg">
            <span className="text-xs font-semibold text-white">{serial.country}</span>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {serial.title}
          </h3>
          
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{serial.yearStart}-{serial.yearEnd}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{serial.network}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {serial.genre.slice(0, 2).map((genre) => (
              <span 
                key={genre}
                className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md"
              >
                {genre}
              </span>
            ))}
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {serial.synopsis}
          </p>
        </div>
      </div>
    </Link>
  );
}