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
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  useEffect(() => {
    if (settings?.newsletter !== undefined) {
      setNewsletter(settings.newsletter);
    }
  }, [settings]);

  const handleSave = (e) => {
    e.preventDefault();
    saveSettings({ name, email, password, newsletter });
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-styles"
        />
      </div>

      <button
        type="button"
        onClick={handlePasswordChange}
        className="text-sm text-accent-blue underline w-fit"
      >
        Change Password
      </button>

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
