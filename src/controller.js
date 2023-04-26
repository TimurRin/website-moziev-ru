import { getDataFromJson } from "./service.js";

function sendAdminError(res, errorCode, errorText) {
  res.status(errorCode).render("error", { errorText });
}

export const getIndex = async (req, res) => {
  try {
    res.render("blocks", {
      localization: await getDataFromJson("localization"),
      stack: await getDataFromJson("stack"),
      contacts: await getDataFromJson("contacts"),
      projects: await getDataFromJson("projects"),
    });
  } catch (error) {
    console.error(error);
    sendAdminError(res, 500, "Error retrieving index: " + error.message);
  }
};
