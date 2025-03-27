// src/core/RiotSync.ts

// Cast the literal "UTF8" to the type overwolf.io.enums.eEncoding.
// This is a workaround since ambient const enums cannot be referenced directly when 'isolatedModules' is enabled.
const UTF8_ENCODING = "UTF8" as unknown as overwolf.io.enums.eEncoding;

export async function saveAnalytics(data: any, fileName = 'analytics.json'): Promise<void> {
  window.overwolf.io.writeFileContents(
    fileName,
    JSON.stringify(data, null, 2),
    UTF8_ENCODING,
    false,
    (result: overwolf.Result) => {
      if (!result.success) {
        console.error("Error writing analytics file:", result);
      }
    }
  );
}

export async function loadAnalytics(fileName = 'analytics.json'): Promise<any> {
  return new Promise((resolve, reject) => {
    window.overwolf.io.readFileContents(
      fileName,
      UTF8_ENCODING,
      (result: overwolf.io.ReadFileContentsResult) => {
        if (result.success && result.content) {
          try {
            const data = JSON.parse(result.content);
            resolve(data);
          } catch (e) {
            reject(e);
          }
        } else {
          reject(result);
        }
      }
    );
  });
}
