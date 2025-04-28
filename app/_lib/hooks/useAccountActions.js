"use client";

import { toast } from "react-hot-toast";
import {
  updateUserName,
  updateUserEmail,
  updateUserPassword,
  updateNewsletterPreference,
  deleteUserAccount,
  reauthenticateUser,
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
    newPassword,
    newsletter,
  }) => {
    const isGoogleUser = user?.providerData[0]?.providerId === "google.com";
    const shouldUpdateEmail = newEmail && newEmail !== user.email;
    const shouldUpdatePassword = newPassword && newPassword.trim() !== "";
    const shouldUpdateNewsletterSubscription =
      newsletter !== settings.newsletter;

    try {
      if (!isGoogleUser) {
        await reauthenticateUser(user, password);
      }

      if (!isGoogleUser && shouldUpdateEmail) {
        await updateUserEmail(user, newEmail);
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
      handleAccountError(err);
    }
  };

  const deleteAccount = async (password) => {
    if (!user) return;

    const providerId = user?.providerData[0]?.providerId;

    try {
      await reauthenticateUser(user, password);
      await deleteUserAccount(user, password);
      toast.success("Account deleted.");
    } catch (err) {
      handleAccountError(err);
      throw err;
    }
  };

  const handleAccountError = (err) => {
    console.error(err);

    if (err.code === "auth/wrong-password") {
      toast.error("Incorrect password. Please try again.");
    } else if (err.code === "auth/too-many-requests") {
      toast.error("Too many attempts. Please try again later.");
    } else if (err.code === "auth/user-not-found") {
      toast.error("User not found. Please sign in again.");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return {
    saveSettings,
    deleteAccount,
  };
};
