import fs from "fs";

export async function getLocalization() {
  return await new Promise((resolve) => {
    fs.readFile("./data/loc.json", "utf8", function (err, data) {
      if (err) throw err;
      resolve(JSON.parse(data));
    });
  });
}

export async function getStack() {
  return await new Promise((resolve) => {
    fs.readFile("./data/stack.json", "utf8", function (err, data) {
      if (err) throw err;
      resolve(JSON.parse(data));
    });
  });
}

export async function getContacts() {
  return await new Promise((resolve) => {
    fs.readFile("./data/contacts.json", "utf8", function (err, data) {
      if (err) throw err;
      resolve(JSON.parse(data));
    });
  });
}

export async function getProjects() {
  return [];
}
