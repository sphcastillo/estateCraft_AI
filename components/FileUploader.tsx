"use client";

import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import {
  CheckCircleIcon,
  CircleArrowDown,
  HammerIcon,
  RocketIcon,
  SaveIcon,
} from "lucide-react";
import useUpload from "@/hooks/useUpload";
import { useRouter } from "next/navigation";

function FileUploader() {
  const { progress, status, fileId, handleUpload } = useUpload();
  const router = useRouter();

  useEffect(() => {
    if (fileId) {
      router.push(`/dashboard/files/${fileId}`);
    }
  }, [fileId, router]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    // Do something with the files
    console.log("accepted files: ", acceptedFiles);

    const file = acceptedFiles[0];

    if (file) {
      await handleUpload(file);
    } else {
      // do nothing
      // toast
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      accept: {
        "application/pdf": [".pdf"],
      },
    });

  const uploadInProgress = progress != null && progress >= 0 && progress <= 100;

  return (
    <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto">

      {/* Loading ... */}
      {uploadInProgress && (
        <div className="mt-32 flex flex-col justify-center items-center gap-5">
          <div
            className={`radial-progress bg-indigo-300 text-white border-indigo-600 border-4 ${
              progress === 100 && "hidden"
            }`}
            role="progressbar"
            style={{
              // @ts-ignore
              "--value": progress,
              "--size": "12rem",
              "--thickness": "1.3rem",
            }}
          >
            {progress} %
          </div>

          {/* Render Status Icon */}

          {
            // @ts-ignore
            statusIcons[status!]
          }
          {/* @ts-ignore */}
          <p className="text-indigo-600 animate-pulse">{status}</p>
        </div>
      )}

      <div
        {...getRootProps()}
        className={`p-10 border-2 border-dashed mt-10 w-[90%] border-indigo-600 text-indigo-600 rounded-lg h-96 flex items-center justify-center ${
          isFocused || isDragAccept ? "bg-indigo-300" : "bg-indigo-100"
        }`}
      >
        <input {...getInputProps()} />

        <div className="flex flex-col items-center justify-center">
          {isDragActive ? (
            <>
              <RocketIcon className="w-20 h-20 animate-ping" />
              <p>Drop the files here ...</p>
            </>
          ) : (
            <>
              <CircleArrowDown className="w-20 h-20 animate-bounce" />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default FileUploader;