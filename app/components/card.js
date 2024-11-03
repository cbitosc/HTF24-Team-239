export function Card({ children, className }) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="mb-2">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}

export function CardDescription({ children }) {
  return <p className="text-gray-500 text-base">{children}</p>;
}

export function CardContent({ children, className }) {
  return <div className={`${className}`}>{children}</div>;
}