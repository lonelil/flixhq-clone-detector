export async function checkIfFlixhqClone(url: URL) {
  const androidApkPage = await fetch(
    `https://${url.hostname}/android-movies-apk`
  ).then((res) => res.text());

  return androidApkPage.includes("onstream");
}
