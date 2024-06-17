import React from 'react'

export default function TextAreaInput({name,label,register,isRequired=true,errors, ...rest}) {
  return (
    <div className="sm:col-span-2">
            <label
              htmlFor={name}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              {label}
            </label>
            <div className="mt-2">
              <textarea
                {...register(`${name}`, { required: isRequired })}
                id={name}
                name={name}
                rows={3}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                defaultValue={""}
                {...rest}
              />
              {errors[`${name}`] && (
                <span className="text-sm text-red-600">
                  {label} description is required
                </span>
              )}
            </div>
          </div>
  )
}
