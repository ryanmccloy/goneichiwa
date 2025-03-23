export default function formatTitleRoute(route) {
  return decodeURIComponent(route)
    .replace(/[-_]/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
