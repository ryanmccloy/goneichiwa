"use client";

import { useEffect, useState } from "react";
import { useAccountActions } from "@/app/_lib/hooks/useAccountActions";
import { useAuthStore } from "@/app/_lib/stores/authStore";
import { useAccountStore } from "@/app/_lib/stores/accountStore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { toastConfirmAction } from "./toastConfirmAction";
import IsNotVerifiedBanner from "./IsNotVerifiedBanner";
import IsGoogleUserEmailUpdateWarning from "./IsGoogleUserEmailUpdateWarning";
import IsGoogleUserPasswordUpdateWarning from "./IsGoogleUserPasswordUpdateWarning";

function AccountSettingsForm() {
  const { saveSettings, deleteAccount } = useAccountActions();
  const { user } = useAuthStore();
  const { settings } = useAccountStore();

  const [isVerified, setIsVerified] = useState(user?.emailVerified || false);
  const [isSaving, setIsSaving] = useState(false);

  const [name, setName] = useState(user?.displayName || "");
  const [newEmail, setNewEmail] = useState(user?.email || "");
  const [changePasswordRequest, setChangePasswordRequest] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const router = useRouter();

  // determining user sign up method
  const isGoogleUser = user?.providerData[0]?.providerId === "google.com";

  // check if email is verified
  useEffect(() => {
    if (
      !user ||
      user.providerData[0]?.providerId === "google.com" ||
      user.emailVerified
    )
      return;

    const interval = setInterval(async () => {
      try {
        await user.reload();
        if (user.emailVerified) {
          setIsVerified(true);
          clearInterval(interval);
          toast.success("Email verified! You can now update your settings.");
        }
      } catch (err) {
        console.error("Error reloading user:", err);
      }
    }, 5000); // ⏳ Check every 5 seconds

    return () => clearInterval(interval); // 🧹 Cleanup on unmount
  }, [user]);

  // check newsletter subscription
  useEffect(() => {
    if (settings?.newsletter !== undefined) {
      setNewsletter(settings.newsletter);
    }
  }, [settings]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!isGoogleUser && !password) {
      toast.error(
        "You must confirm your current password to update your settings"
      );
      return;
    }

    setIsSaving(true);
    try {
      await saveSettings({
        isVerified,
        name,
        newEmail,
        password,
        newPassword,
        newsletter,
      });
      setChangePasswordRequest(false);
      setNewPassword("");
      setPassword("");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!isGoogleUser && !password) {
      toast.error(
        "Please confirm your current password to delete your account"
      );
      return;
    }

    const deleteMessage = isGoogleUser
      ? "You will be asked to confirm your Google account before deleting.\n\nAre you sure you want to delete your account? This action cannot be reversed."
      : "Are you sure you want to delete your account? This action cannot be reversed.";

    toastConfirmAction(deleteMessage, async () => {
      try {
        await deleteAccount(password);
        router.push("/");
      } catch (err) {
        // Do nothing here — error already handled inside deleteAccount
      }
    });
  };

  return (
    <form
      onSubmit={handleSave}
      className="flex flex-col gap-30 max-w-xl justify-start"
    >
      <IsNotVerifiedBanner isVerified={isVerified} />

      <div className="account-settings-form-div">
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-styles"
        />
      </div>

      <div className="account-settings-form-div">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          className={`input-styles ${isGoogleUser ? "cursor-not-allowed" : ""}`}
          disabled={isGoogleUser}
        />
        <IsGoogleUserEmailUpdateWarning isGoogleUser={isGoogleUser} />
      </div>

      {!isGoogleUser && (
        <button
          type="button"
          onClick={() => setChangePasswordRequest((r) => !r)}
          className="text-sm text-accent-blue underline w-fit"
        >
          Change Password
        </button>
      )}
      {changePasswordRequest && (
        <div className={`$"account-settings-form-div" `}>
          <label className="block text-sm font-medium">New Password</label>
          <input
            type="password"
            className="input-styles"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Confirm password"
          />
        </div>
      )}
      <IsGoogleUserPasswordUpdateWarning isGoogleUser={isGoogleUser} />
      <div className="account-settings-form-div">
        <label className="block text-sm font-medium">Newsletter</label>
        <label className="inline-flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
            className="accent-accent-blue"
          />
          Subscribe to newsletter
        </label>
      </div>

      {/* Show password input only for email/password users */}
      {!isGoogleUser && (
        <div className={`$"account-settings-form-div" mt-60`}>
          <label className="block text-sm font-medium">
            Confirm current password to save changes
          </label>
          <input
            type="password"
            className="input-styles"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Confirm password"
          />
        </div>
      )}

      <div className="flex justify-between">
        <button type="submit" className="button text-sm" disabled={isSaving}>
          {isSaving ? "Saving..." : "Save Changes"}
        </button>

        <button
          onClick={handleDeleteAccount}
          type="button"
          className="text-sm text-red-600 hover:underline cursor-pointer"
        >
          Delete Account
        </button>
      </div>
    </form>
  );
}

export default AccountSettingsForm;
