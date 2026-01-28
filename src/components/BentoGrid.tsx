import Link from "next/link";

interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  size?: "normal" | "large";
  accent?: "teal" | "orange" | "navy";
}

interface BentoGridProps {
  items: BentoItem[];
}

const accentStyles = {
  teal: "group-hover:bg-teal/10 group-hover:border-teal/30",
  orange: "group-hover:bg-orange/10 group-hover:border-orange/30",
  navy: "group-hover:bg-navy/10 group-hover:border-navy/30",
};

const iconAccentStyles = {
  teal: "bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white",
  orange: "bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white",
  navy: "bg-navy/10 text-navy group-hover:bg-navy group-hover:text-white",
};

export default function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={`group relative rounded-2xl bg-white border border-grey-light p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
            item.size === "large" ? "md:col-span-2 lg:col-span-1" : ""
          } ${accentStyles[item.accent || "teal"]}`}
        >
          {/* Icon */}
          <div
            className={`inline-flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
              iconAccentStyles[item.accent || "teal"]
            }`}
          >
            {item.icon}
          </div>

          {/* Content */}
          <h3 className="mt-4 font-heading text-lg font-semibold text-navy group-hover:text-navy-light transition-colors">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-grey leading-relaxed">
            {item.description}
          </p>

          {/* Arrow indicator */}
          <div className="mt-4 flex items-center text-sm font-medium text-teal opacity-0 group-hover:opacity-100 transition-opacity">
            Meer info
            <svg
              className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-grey-light/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </Link>
      ))}
    </div>
  );
}
