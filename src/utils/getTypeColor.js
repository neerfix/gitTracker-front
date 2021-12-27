export default function getTypeColor(status) {
  switch (status) {
    case "approved":
      return "green";
    case "bug":
      return "red";
    case "feature":
      return "teal";
    case "pending":
    default:
      return "disabled";
  }
}
