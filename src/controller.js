import { getContacts, getLocalization, getProjects, getStack } from "./service.js";

function sendAdminError(res, errorCode, errorText) {
  res.status(errorCode).render("error", { errorText });
}

export const getIndex = async (req, res) => {
  try {
    const localization = await getLocalization();
    const stack = await getStack();
    const contacts = await getContacts();
    const projects = await getProjects();
    res.render("blocks", {
      localization,
      stack,
      contacts,
      projects,
    });
  } catch (error) {
    console.error(error);
    sendAdminError(res, 500, "Error retrieving index: " + error.message);
  }
};
