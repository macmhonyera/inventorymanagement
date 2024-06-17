
export default function TextInput({
  name,
  label,
  type="text",
  register,
  errors,
  isRequired=true,
  className="sm:col-span-2",
  ...rest
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        autoComplete={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        {...register(`${name}`, { required:isRequired })}
        {...rest}
      />
      {errors[`${name}`] && (
        <span className="text-sm text-red-600">{label} is required</span>
      )}
    </div>
  );
}
