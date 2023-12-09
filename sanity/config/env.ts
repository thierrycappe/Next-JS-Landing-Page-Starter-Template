export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-01-01';

// eslint-disable-next-line @typescript-eslint/no-use-before-define
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
);

// eslint-disable-next-line @typescript-eslint/no-use-before-define
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'lpwbwc5b',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
);

export const readToken = process.env.SANITY_API_READ_TOKEN;

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
