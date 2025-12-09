type StatusProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string; // optional label text
};

const StatusSelect = ({ value, onChange, label }: StatusProps) => {
  const getStatusBadgeClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "doing":
        return "badge badge-info"; // blue
      case "review":
        return "badge badge-warning"; // yellow
      case "done":
        return "badge badge-success"; // green
      default:
        return "badge badge-outline"; // neutral
    }
  };

  const selectId = label ? label.replace(/\s+/g, "-").toLowerCase() : undefined;

  return (
    <div className="flex items-center gap-2">
      {label && (
        <label htmlFor={selectId} className="font-medium">
          {label}
        </label>
      )}
      <select
        aria-label="Task Status"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="select select-bordered w-full"
      >
        <option value="Doing">Doing</option>
        <option value="Review">Review</option>
        <option value="Done">Done</option>
      </select>

      {/* Badge preview */}
      <span className={getStatusBadgeClass(value)}>{value}</span>
    </div>
  );
};

export default StatusSelect;
