export default function FeatureCard({
  title,
  description,
  bgColor,
  textColor,
  iconSvg
}) {
  return (
    <div className="
      group relative p-6 rounded-2xl border border-gray-100 
      bg-white shadow-sm hover:shadow-xl 
      transition-all duration-300
      hover:-translate-y-2
    ">
      {/* Icon */}
      <div className={`
        w-12 h-12 flex items-center justify-center 
        rounded-xl ${bgColor} ${textColor} 
        mb-4 transition-transform duration-300
        group-hover:scale-110
      `}>
        {iconSvg}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>

      {/* Subtle gradient hover effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-50 to-transparent pointer-events-none"></div>
    </div>
  );
}