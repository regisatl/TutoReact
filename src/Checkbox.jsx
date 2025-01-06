export function Checkbox({ id, checked, onChange, label }) {
    return (
        <div className="flex items-center space-x-2">
            <input
                id={id}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-blue-500"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <label
                htmlFor={id}
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
                {label}
            </label>
        </div>
    );
}
