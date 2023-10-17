import { ReadonlyURLSearchParams } from "next/navigation";

// Create SearchUrls
export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
  return `${pathname}${queryString}`;
};

// Check string startswith and endswith
export const ensureStartsWith = (stringToCheck: string, startswith: string) => {
  stringToCheck.startsWith(startswith)
    ? stringToCheck
    : `${startswith}${stringToCheck}`;
};
