export default function generateOrderNumber() {
  const datePart = new Date()
    .toISOString()
    .replace(/[-:TZ.]/g, "")
    .slice(0, 8);
  const randomPart = Math.floor(100 + Math.random() * 900);
  return `ORD-${datePart}-${randomPart}`;
}
