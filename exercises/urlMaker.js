const url = "www.siteTest.com/";
const globalTitle = "Winter Is    Coming";
const content = urlSlug(globalTitle);

function urlSlug(title) {
  const titleFormatted = title
  .toLocaleLowerCase()
  .split(/\s+/)
  .join("-");

  return url + titleFormatted;
}

console.log({ content, url, globalTitle });
