import { checkIfFlixhqClone } from "./functions";

const site = Bun.argv[2];
if (!site) throw new Error("you forgot to pass the site");
const url = new URL(site);

const isFlixHQClone = await checkIfFlixhqClone(url);

if (isFlixHQClone) {
  console.log(`${url.hostname} is a FlixHQ clone!`);
} else {
  console.log(`${url.hostname} is not a FlixHQ clone.`);
}
