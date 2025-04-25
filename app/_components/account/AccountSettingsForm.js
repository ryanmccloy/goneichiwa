"use client";

import { useEffect, useState } from "react";
import { useAccountActions } from "@/app/_lib/hooks/useAccountActions";
import { useAuthStore } from "@/app/_lib/stores/authStore";
import { useAccountStore } from "@/app/_lib/stores/accountStore";

function AccountSettingsForm() {
  const { saveSettings, changePassword, deleteAccount } = useAccountActions();
  const { user } = useAuthStore();
  const { settings } = useAccountStore();

  const [name, setName] = useState(user?.displayName || "");
  const [newEmail, setNewEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  // determining user sign up method
  const isGoogleUser = user?.providerData[0]?.providerId === "google.com";

  useEffect(() => {
    if (settings?.newsletter !== undefined) {
      setNewsletter(settings.newsletter);
    }
  }, [settings]);

  const handleSave = (e) => {
    e.preventDefault();
    saveSettings({ name, newEmail, password, newsletter });
  };

  const handlePasswordChange = async () => {
    const newPass = prompt("Enter a new password:");
    if (newPass) await changePassword(newPass);
  };

  const handleDeleteAccount = async () => {
    if (confirm("Are you sure? This cannot be undone.")) {
      await deleteAccount();
    }
  };

  const style1 = "flex flex-col gap-15";

  return (
    <form onSubmit={handleSave} className="flex flex-col gap-30 max-w-xl">
      <div className={style1}>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-styles"
        />
      </div>

      <div className={style1}>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          className={`input-styles ${isGoogleUser ? "cursor-not-allowed" : ""}`}
          disabled={isGoogleUser}
        />
        {isGoogleUser && (
          <div className="text-xs text-gray-500 italic">
            To change your email, please update it in your Google account
            settings.
          </div>
        )}
      </div>

      {!isGoogleUser && (
        <button
          type="button"
          onClick={handlePasswordChange}
          className="text-sm text-accent-blue underline w-fit"
        >
          Change Password
        </button>
      )}
      {isGoogleUser && (
        <p className="text-xs text-gray-500 italic">
          To update your password, please change it via your Google Account
          settings.
        </p>
      )}

      <div className={style1}>
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
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Current password for changes"
        />
      )}

      <div className="flex justify-between">
        <button type="submit" className="button text-sm">
          Save Changes
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
