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

  const saveSettings = async ({ name, email, password, newsletter }) => {
    try {
      if (name && name !== user.displayName) {
        await updateUserName(name);
      }

      if (email && email !== user.email) {
        await updateUserEmail(email, password);
      }

      await updateNewsletterPreference(user.uid, newsletter);
      toast.success("Settings updated!");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Failed to update settings.");
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
