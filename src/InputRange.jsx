export function InputRange({placeholder, value, onChange, label, id, min, max, step}) {
    return (
        <div className="flex flex-col gap-2 my-3">
            <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {label}
            </label>
            <input
                id={id}
                min={min}
                max={max}
                step={step}
                type="range"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
