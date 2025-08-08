const roles = [
  "admin",
  "manager",
  "supervisor",
  "editor",
  "viewer",
  "owner",
  "",
];
const userRoles = ["user", "editor"];
const requiredRoles = ["admin", "editor"];

function hasAnyRole(userRoles, requiredRoles) {
  for (const role of userRoles) {
    if (requiredRoles.includes(role)) {
      return true;
    }
  }
  return false;
}

const result = hasAnyRole(userRoles, requiredRoles);
console.log(result); // Output: true
//time complexity O(n*m)
