import { BookMarked } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Favorites() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
            <BookMarked className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Favorites</h1>
            <p className="text-sm text-muted-foreground">Your saved classic serials</p>
          </div>
        </div>

        <div className="text-center py-16 bg-card border border-border rounded-xl">
          <BookMarked className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-foreground mb-2">No favorites yet</h2>
          <p className="text-muted-foreground mb-6">
            Start adding your favorite classic serials to see them here
          </p>
          <Link 
            to="/"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Browse Serials
          </Link>
        </div>
      </div>
    </div>
  );
}