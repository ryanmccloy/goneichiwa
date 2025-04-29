function IsGoogleUserPasswordUpdateWarning({ isGoogleUser }) {
  return (
    <div>
      {isGoogleUser && (
        <p className="text-xs text-gray-500 italic">
          To update your password, please change it via your Google Account
          settings.
        </p>
      )}
    </div>
  );
}

export default IsGoogleUserPasswordUpdateWarning;
