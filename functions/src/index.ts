// Cloud Functions codebase: koperasi.
// Foundation scaffold only — placeholder health check. Contact-form intake API lands
// later (see FIREBASE.md > per-project to-do). Writes against the shared
// `apsmono-projects` Firestore using collection koperasi_contacts.

import { onRequest } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";

initializeApp();

export const healthz = onRequest((_req, res) => {
  res.json({ status: "ok", codebase: "koperasi" });
});
