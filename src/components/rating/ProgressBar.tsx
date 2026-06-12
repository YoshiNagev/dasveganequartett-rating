type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({
  current,
  total,
}: Props) {
  const percent =
    (current / total) * 100;

  return (
    <div>
      <div>
        Argument {current} von {total}
      </div>

      <progress
        value={percent}
        max="100"
      />
    </div>
  );
}