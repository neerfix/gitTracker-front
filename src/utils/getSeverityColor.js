export default function getStatusColor(status) {
  switch (status) {
    case "warning":
      return "yellow";
    case "light":
      return "neutral";
    case "hight":
      return "orange";
    case "critical":
      return "red";
    default:
      return "neutral";
  }
}
