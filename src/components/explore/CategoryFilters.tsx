interface CategoryFiltersProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  onCategoryChange?: () => void;
}

const CATEGORIES = [
  { key: "all", label: "All Spots", icon: "✦" },
  { key: "beaches", label: "Beaches", icon: "🏖️" },
  { key: "food", label: "Food & Drink", icon: "🍽️" },
  { key: "nightlife", label: "Nightlife", icon: "🎶" },
  { key: "historical", label: "Heritage", icon: "⚓" },
  { key: "activities", label: "Activities", icon: "🌴" },
  { key: "shopping", label: "Shopping", icon: "🛍️" },
];

const CategoryFilters = ({ activeCategory, setActiveCategory, onCategoryChange }: CategoryFiltersProps) => {
  return (
    <div className="relative z-40 flex gap-2 px-5 md:px-7 pb-4 overflow-x-auto animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
      {CATEGORIES.map((cat) => (
        <button
          key={cat.key}
          onClick={() => {
            setActiveCategory(cat.key);
            onCategoryChange?.();
          }}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
            activeCategory === cat.key
              ? "bg-turquoise/[0.18] border-turquoise/25 text-turquoise"
              : "bg-white/5 border-white/[0.06] text-white/50 hover:text-white/70 hover:bg-white/[0.08]"
          }`}
        >
          <span className="text-[13px]">{cat.icon}</span> {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
