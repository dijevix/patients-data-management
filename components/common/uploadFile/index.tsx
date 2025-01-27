import React, { InputHTMLAttributes } from "react";

type Props = {
    onChange: React.ChangeEventHandler<HTMLInputElement>
    accept ?: InputHTMLAttributes<HTMLInputElement>['accept']
};

const UploadFile = ({onChange , accept = 'image/*' }: Props) => {
  return (
    <div>
        <input
          onChange={onChange}
          accept={accept}
          type="File"
        />

    </div>
  );
};

export default UploadFile;
