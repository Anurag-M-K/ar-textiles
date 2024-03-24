import React from 'react';
import { FieldRenderProps } from 'react-final-form';

interface FileUploadFieldProps extends FieldRenderProps<File> {
  label?: string;
}

const FileUploadField: React.FC<FileUploadFieldProps> = ({
  input: { value, onChange, onBlur, ...restInput },
  meta: { touched, error },
  label,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <input
        type="file"
        onChange={handleChange}
        onBlur={onBlur}
        value={value}
        {...restInput}
        {...rest}
      />
      {touched && error && <span>{error}</span>}
    </div>
  );
};

export default FileUploadField;
