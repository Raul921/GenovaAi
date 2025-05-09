import { ReactNode } from "react";

type StatCardProps = {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
  color: "primary" | "secondary" | "success" | "error" | "warning";
};

export default function StatCard({
  title,
  value,
  description,
  icon,
  color,
}: StatCardProps) {
  const colorMap = {
    primary: "text-primary",
    secondary: "text-green-500",
    success: "text-green-600",
    error: "text-red-500",
    warning: "text-amber-500",
  };

  return (
    <div className="stat bg-white shadow rounded-lg">
      <div className={`stat-figure ${colorMap[color]}`}>
        {icon}
      </div>
      <div className="stat-title">{title}</div>
      <div className={`stat-value ${colorMap[color]}`}>{value}</div>
      <div className="stat-desc">{description}</div>
    </div>
  );
}
