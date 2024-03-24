import {  FileInput, Label, TextInput, Tooltip } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { IoInformationCircle } from 'react-icons/io5';

export default function WrappedTextInput({ ...props }: any) {
  if (props.type == "hidden") {
    return <input {...props} />;
  }
  return (
    <div className={`flex-1 mb-3 ${props.className}`}>
      <div className="flex items-center">
        {props.label && (
          <Label htmlFor={props.id} >
            {props.label}
          </Label>
        )}
        {props.hint && (
          <span data-tooltip-target="tooltip-light" className="ml-1 mb-2">
            <Tooltip content={`${props.hint}`}>
              <IoInformationCircle size={16} className="text-gray-500" />
            </Tooltip>
          </span>
        )}
      </div>
      <div className="flex items-center">
        {props.Icon && <props.Icon className="mr-2" size={20} />}
        <TextInput
          color={
            (props.meta.error && props.meta.touched) || props.error
              ? "failure"
              : null
          }
          className="text-sm w-full"
          placeholder={props.placeholder}
          id={props.id}
          value={props.value}
          disabled={props.disabled}
          {...props.input}
        />
      </div>
    </div>
  );
}

export function WrappedFileUpload({ initialPreview, ...props }: any) {
  const [selectedFile, setSelectedFile] = useState<any>(undefined);
  const [preview, setPreview] = useState<string | undefined>(undefined);
  const [fileType, setFileType] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
      setFileType(selectedFile.type);
      return () => URL.revokeObjectURL(objectUrl);
    } else if (initialPreview?.image) {
      setPreview(initialPreview.image);
      setFileType("image");
      return;
    } else if (initialPreview?.pdf) {
      setPreview(initialPreview.pdf);
      setFileType("pdf");
      return;
    } else {
      setPreview(undefined);
    }
  }, [selectedFile, initialPreview]);

  const handleSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
    props.input.onChange(e.target.files[0]);
  };

  const handleRemoveFile = () => {
    setSelectedFile(undefined);
    setPreview(undefined);
    props.input.onChange(undefined);
  };
  return (
    <div className="flex-1 mb-3 w-100">
      <div className="flex items-center">
        <Label htmlFor={props.id} >
          {props.label}
        </Label>
        {props.hint && (
          <span data-tooltip-target="tooltip-light" className="ml-1 mb-2">
            <Tooltip className="z-50" content={`${props.hint}`}>
              <IoInformationCircle size={16} className="text-gray-500" />
            </Tooltip>
          </span>
        )}
      </div>
      <div className="w-100">
        <FileInput
          {...props}
          onChange={handleSelectFile}
          accept={props.accept || "image/*"}
          color={props.meta.error && props.meta.touched ? "failure" : null}
        />
        {/* <ValidationError props={props} /> */}
      </div>
    
    </div>
  );
}
