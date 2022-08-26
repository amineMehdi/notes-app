import React, { useEffect, useRef } from 'react';

export default function Input({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    required,
    placeholder,
    selector,
    handleChange
}) {
    return (
        <div>
            <input
                type={type}
                name={name}
                value={value}
                className={
                    `border-0 focus:shadow-none focus:ring-0 w-full border-gray-400 focus:border-gray-400 ` +
                    className
                }
                ref={selector}
                autoComplete={autoComplete}
                required={required}
                onChange={handleChange}
                placeholder = {placeholder}
            />
        </div>
    );
}
