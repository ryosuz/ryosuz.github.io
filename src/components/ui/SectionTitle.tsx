interface SectionTitleProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function SectionTitle({
  title,
  description,
  children,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black text-teal-500 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
