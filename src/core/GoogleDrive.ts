const DRIVE_FOLDER = 'TFTier Logs';

export async function uploadFile(fileName: string, content: string, accessToken: string) {
  const metadata = {
    name: fileName,
    mimeType: 'application/json',
    parents: [DRIVE_FOLDER]
  };

  const form = new FormData();
  form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
  form.append('file', new Blob([content], { type: 'application/json' }));

  const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
    method: 'POST',
    headers: new Headers({
      'Authorization': `Bearer ${accessToken}`
    }),
    body: form
  });

  if (!response.ok) {
    throw new Error(`Drive upload failed: ${response.statusText}`);
  }
  return response.json();
}

export async function downloadFile(fileId: string, accessToken: string) {
  const response = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
    headers: new Headers({
      'Authorization': `Bearer ${accessToken}`
    })
  });

  if (!response.ok) {
    throw new Error(`Drive download failed: ${response.statusText}`);
  }
  return response.json();
}
