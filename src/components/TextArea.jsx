/* TextArea.jsx */

import { useEffect, useRef } from 'react'

function TextArea({ inputs, label, inputName, setInputs }) {
  // Text area field

  const containerRef = useRef(null)
  const fieldRef = useRef(null)

  useEffect(() => {
    // Removes the 'highlighted' class from the field after data submission

    checkField()
  }, [inputs[inputName]])

  function checkField() {
    // Removes the 'highlighted' class if the field is empty and not focused

    if (
      fieldRef.current.value.length === 0 &&
      fieldRef.current !== document.activeElement
    )
      containerRef.current.classList.remove('highlighted')
  }

  return (
    <div className="form-element form-field" ref={containerRef}>
      <label
        className={`${
          inputs[inputName].length === 0
            ? '-translate-y-1/2 scale-100'
            : '-translate-y-[155%] scale-[0.85]'
        }
        absolute top-[10%] left-0 text-base md:text-lg 2xl:text-xl text-slate-500
        dark:text-gray-400 font-medium origin-left duration-300`}
        htmlFor={inputName}
      >
        {label}
      </label>
      <textarea
        className="w-full h-40 border-b-2 border-slate-300 dark:border-dark-4
        outline-none dark:outline-none text-base md:text-lg 2xl:text-xl pt-[0.25em] pb-[0.5em]
        block bg-transparent resize-none transition-[border-color] duration-300 px-[0.5em]"
        id={inputName}
        onBlur={checkField}
        onChange={() => setInputs({ ...inputs, [inputName]: fieldRef.current.value })}
        onFocus={() => containerRef.current.classList.add('highlighted')}
        ref={fieldRef}
        value={inputs[inputName]}
      ></textarea>
    </div>
  )
}

export default TextArea
