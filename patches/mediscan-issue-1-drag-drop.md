# Patch for MedMxLabs/MediScan issue #1

Repository: https://github.com/MedMxLabs/MediScan
File: frontend/src/pages/LabReportAnalysisPage.jsx

Apply the following changes to add drag-and-drop support to the lab report upload panel.

1. Add drag state beside the existing file state:

  const [isDragging, setIsDragging] = useState(false);

2. Replace the existing pickFile/onFile section with this:

  const pickFile = () => fileInputRef.current?.click();

  const acceptFile = (f) => {
    if (!f) return;
    const msg = validate(f);
    if (msg) {
      setError(msg);
      return;
    }
    setFile(f);
    setError('');
    setResult(null);
  };

  const onFile = (e) => {
    acceptFile(e.target.files?.[0]);
    // Allow selecting the same file again after a validation error.
    e.target.value = '';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    // Avoid flickering when moving between children of the dropzone.
    if (e.currentTarget.contains(e.relatedTarget)) return;
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    acceptFile(e.dataTransfer.files?.[0]);
  };

3. Update the upload panel's outer div className to include a drag highlight. Add these props to that same outer div:

  onDragOver={handleDragOver}
  onDragLeave={handleDragLeave}
  onDrop={handleDrop}

Replace the existing className with this JSX expression:

  className={`dash-inset-dashed flex-1 min-h-[280px] p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
    isDragging ? 'border-teal bg-teal/10' : 'hover:bg-slate-50/80 dark:hover:bg-slate-800/40'
  }`}

Keep its existing click, keyboard, role, and aria-label props unchanged.

Test checklist:
- Drop a valid PDF, JPG, or PNG under 10 MB: the file is selected.
- Drop an unsupported file or a file over 10 MB: existing validation message is shown.
- Drop an empty file list: no crash and no state mutation.
- Click-to-select and keyboard activation still work.
- Confirm npm run lint and npm run build from frontend.