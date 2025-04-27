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
import { useAccountStore } from "../stores/accountStore";

export const useAccountActions = () => {
  const { user } = useAuthStore();
  const { settings } = useAccountStore();
  const setSettings = useAccountStore((s) => s.setSettings);

  const saveSettings = async ({
    name,
    newEmail,
    password,
    newPassword = null,
    newsletter,
  }) => {
    const isGoogleUser = user?.providerData[0]?.providerId === "google.com";
    const shouldUpdateEmail = newEmail && newEmail !== user.email;
    const shouldUpdatePassword = newPassword !== null;
    const shouldUpdateNewsletterSubscription =
      newsletter !== settings.newsletter;

    try {
      if (!isGoogleUser && shouldUpdateEmail) {
        await updateUserEmail(user, newEmail, password);
        toast.success(
          "Verification email sent. Please verify your new email address!"
        );
      }

      if (!isGoogleUser && shouldUpdatePassword) {
        await updateUserPassword(newPassword);
        toast.success("Password updated");
      }

      if (name && name !== user.displayName) {
        await updateUserName(user, name);
        toast.success("Name updated!");
      }

      if (shouldUpdateNewsletterSubscription) {
        await updateNewsletterPreference(user, newsletter);
        setSettings({ newsletter: newsletter });
        toast.success("Newsletter subscription updated!");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    }
  };

  const deleteAccount = async (password) => {
    if (!user) return;

    const providerId = user?.providerData[0]?.providerId;

    try {
      await deleteUserAccount(user, password);
      toast.success("Account deleted.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete account.");
    }
  };

  return {
    saveSettings,
    deleteAccount,
  };
};
