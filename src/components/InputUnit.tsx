import React from "react";

type InputUnitProps = React.InputHTMLAttributes<HTMLInputElement> & {
  // children: React.ReactNode;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  labelName?: string;
};

export const InputUnit: React.FC<InputUnitProps> = ({
  containerClassName = "",
  labelClassName = "",
  inputClassName = "",
  labelName,
  ...props
}) => {
  return (
    <div className={`${containerClassName}`}>
      <label className={`${labelClassName} pb-2 px-2`}>
        {labelName ? labelName : props.name}
      </label>
      <input {...props} className={`${inputClassName} text-gray-600 shadow border py-2 px-2 rounded focus:outline-none`}/>
    </div>
  );
};

export default InputUnit;
