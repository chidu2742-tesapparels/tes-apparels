type PlaceholderPageProps = {
  title: string;
  description?: string;
};

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
          {title}
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          {description ??
            "This landing page is currently under development and will soon feature complete information about our products and manufacturing capabilities."}
        </p>
      </div>
    </main>
  );
}