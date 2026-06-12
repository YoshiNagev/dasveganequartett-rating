type Props = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};

export default function RatingScale({
  label,
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label>
        {label}: {value}
      </label>

      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
      />
    </div>
  );
}