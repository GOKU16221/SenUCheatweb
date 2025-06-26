
import { Star, Eye, Code, Monitor } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Game {
  id: number;
  title: string;
  image: string;
  rating: number;
  cheatsCount: number;
  category: string;
  platform: string;
  isPopular?: boolean;
  isNew?: boolean;
}

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className="group bg-black/40 border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-[1.02] hover:bg-black/60 cursor-pointer">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {game.isPopular && (
            <Badge className="bg-red-500/90 text-white border-0 text-xs">
              🔥 Popular
            </Badge>
          )}
          {game.isNew && (
            <Badge className="bg-green-500/90 text-white border-0 text-xs">
              ✨ New
            </Badge>
          )}
        </div>

        {/* Platform Badge */}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-black/70 text-gray-200 border-0 text-xs">
            <Monitor className="w-3 h-3 mr-1" />
            {game.platform}
          </Badge>
        </div>

        {/* Hover overlay with quick actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex space-x-3">
            <div className="bg-purple-600/90 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 hover:bg-purple-700 transition-colors">
              <Eye className="w-4 h-4" />
              <span>View Cheats</span>
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-white text-lg leading-tight group-hover:text-purple-300 transition-colors">
            {game.title}
          </h3>
        </div>

        <div className="flex items-center justify-between mb-3">
          <Badge variant="outline" className="border-purple-500/50 text-purple-300 text-xs">
            {game.category}
          </Badge>
          <div className="flex items-center space-x-1 text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">{game.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <Code className="w-4 h-4" />
            <span>{game.cheatsCount} cheats</span>
          </div>
          <span className="text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
            View Details →
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
