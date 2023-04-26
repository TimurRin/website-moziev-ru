import fs from "fs";

export async function getDataFromJson(type) {
  return await new Promise((resolve) => {
    fs.readFile(`./data/${type}.json`, "utf8", function (err, data) {
      if (err) throw err;
      resolve(JSON.parse(data));
    });
  });
}
