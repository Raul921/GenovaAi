import { useRef, useState } from "react";
import { Cloud, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type FileDropzoneProps = {
  onFilesAdded: (files: File[]) => void;
  onFileRemoved: (index: number) => void;
  files: File[];
};

export default function FileDropzone({ onFilesAdded, onFileRemoved, files }: FileDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFilesAdded(Array.from(e.dataTransfer.files));
    }
  }

  function handleBrowseClick() {
    fileInputRef.current?.click();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      onFilesAdded(Array.from(e.target.files));
    }
  }

  function handleRemoveFile(index: number) {
    onFileRemoved(index);
  }

  function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  return (
    <div>
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragging ? 'border-primary' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Cloud className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag and drop your MRI files here, or
        </p>
        <Button 
          variant="secondary" 
          size="sm"
          onClick={handleBrowseClick}
          className="mt-2"
        >
          Browse files
        </Button>
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden" 
          multiple 
          accept=".dcm,.dicom,.nii,.nii.gz,.mha,.mhd,.nrrd,.jpg,.png,.tiff"
        />
        <p className="mt-1 text-xs text-gray-500">
          Supported formats: DICOM, NIfTI, MetaImage, NRRD, and image files
        </p>
      </div>

      {files.length > 0 && (
        <div className="mt-6">
          <h3 className="text-md font-medium mb-2">Selected Files</h3>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Filename</th>
                  <th>Type</th>
                  <th>Size</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file, index) => (
                  <tr key={index} className="hover">
                    <td>{file.name}</td>
                    <td>{file.type || 'Unknown'}</td>
                    <td>{formatFileSize(file.size)}</td>
                    <td>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleRemoveFile(index)} 
                        className="text-red-500 p-1 h-auto"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
