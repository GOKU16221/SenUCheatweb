
import { Card, CardContent } from "@/components/ui/card";

interface Category {
  name: string;
  count: number;
  icon: string;
  color: string;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection = ({ categories }: CategorySectionProps) => {
  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Browse by Category</h2>
          <p className="text-gray-400 text-lg">Find cheats for your favorite game genres</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group bg-black/40 border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {category.count} games
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
