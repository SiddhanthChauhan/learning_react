import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    //forward ref : This lets parent components (or form libraries) 
    // directly access the underlying <input> element using a ref
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    //could add id = providedId as default if provided to
    // allow users to make readable IDs
    const id = useId()
    return (
        <div className="w-full">
            {label && <label
                className='inline-block mb-1 pl-1'
                htmlFor={id}>
                {label}
            </label>
            }
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref} //reference paused
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input

// This Input component renders a styled input 
// with an optional accessible label, and forwards 
// refs so parents/form libs can directly control 
// the underlying <input> DOM node.