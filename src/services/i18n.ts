import en from '../lang/en.json';

const messages: Record<string, string> = en;

export function t(key: string): string {
  return messages[key] || key;
}
