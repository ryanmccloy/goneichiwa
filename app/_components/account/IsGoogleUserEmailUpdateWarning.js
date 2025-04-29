function IsGoogleUserEmailUpdateWarning({ isGoogleUser }) {
  return (
    <div>
      {isGoogleUser && (
        <div className="text-xs text-gray-500 italic">
          To change your email, please update it in your Google account
          settings.
        </div>
      )}
    </div>
  );
}

export default IsGoogleUserEmailUpdateWarning;
