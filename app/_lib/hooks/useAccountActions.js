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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    try {
      if (!isGoogleUser) {
        await reauthenticateUser(user, password);
      }

      if (!isGoogleUser && shouldUpdateEmail) {
        if (!emailRegex.test(newEmail)) {
          toast.error("Please enter a valid email address.");
          return;
        }

        await updateUserEmail(user, newEmail);
        toast.success(
          "Verification email sent. Please verify your new email address!"
        );
      }

      if (!isGoogleUser && shouldUpdatePassword) {
        if (newPassword.trim().length < 6) {
          toast.error("New password must be at least 6 characters.");
          return;
        }

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

  const errorMap = {
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/user-not-found": "User not found. Please sign in again.",
    "auth/too-many-requests": "Too many attempts. Please try again later.",
    "auth/email-already-in-use":
      "This email is already in use by another account.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/requires-recent-login":
      "Please reauthenticate to perform this action.",
    "auth/weak-password": "Password must be at least 6 characters.",
    "auth/network-request-failed":
      "Network error. Please check your internet connection.",
    "auth/operation-not-allowed":
      "This operation is not allowed. Please contact support.",
  };

  const handleAccountError = (err) => {
    console.error(err);

    const message =
      errorMap[err.code] || "Something went wrong. Please try again.";
    toast.error(message);
  };

  return {
    saveSettings,
    deleteAccount,
  };
};
