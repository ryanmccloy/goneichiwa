"use client";

import { toast } from "react-hot-toast";
import {
  updateUserName,
  updateUserEmail,
  updateUserPassword,
  updateNewsletterPreference,
  deleteUserAccount,
} from "../data-service";
import { useAuthStore } from "../stores/authStore";

export const useAccountActions = () => {
  const { user } = useAuthStore();

  const saveSettings = async ({ name, newEmail, password, newsletter }) => {
    const isGoogleUser = user?.providerData[0]?.providerId === "google.com";
    const shouldUpdateEmail = newEmail && newEmail !== user.email;

    try {
      if (!isGoogleUser && shouldUpdateEmail) {
        await updateUserEmail(user, newEmail, password);
      }

      if (name && name !== user.displayName) {
        await updateUserName(user, name);
      }

      await updateNewsletterPreference(user, newsletter);

      toast.success("Settings updated!");
    } catch (err) {
      toast.error("Update failed");
      console.error(err);
    }
  };

  const changePassword = async (newPass) => {
    try {
      await updateUserPassword(newPass);
      toast.success("Password updated.");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Failed to update password.");
    }
  };

  const deleteAccount = async () => {
    try {
      await deleteUserAccount(user.uid);
      toast.success("Account deleted.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete account.");
    }
  };

  return {
    saveSettings,
    changePassword,
    deleteAccount,
  };
};
