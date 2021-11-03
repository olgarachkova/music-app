import React, { useRef } from "react";
import { FileUploadProps } from "./FileUpload.props";

export const FileUpload = ({ setFile, accept, children }: FileUploadProps): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setFile(e.target.files[0]);
  }

  return (
    <div onClick={() => ref?.current?.click()}>
      <input
        type='file'
        accept={accept}
        style={{ display: 'none' }}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  )
}