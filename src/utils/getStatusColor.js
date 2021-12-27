export default function getStatusColor(status) {
  switch (status) {
    case "production":
    case "approved":
      return "success";
    case "refused":
    case "duplicated":
    case "abort":
      return "danger";
    case "pending":
    default:
      return "disabled";
  }
}
