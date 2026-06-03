interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}