const site = Bun.argv[2];
if (!site) throw new Error("you forgot to pass the site");
const url = new URL(site);

const androidApkPage = await fetch(
  `https://${url.hostname}/android-movies-apk`
).then((res) => res.text());

if (androidApkPage.includes("onstream")) {
  console.log(`${url.hostname} is a FlixHQ clone!`);
} else {
  console.log(`${url.hostname} is not a FlixHQ clone.`);
}
