# Security Policy

## Fundamental rules that must be adhered to without any exceptions

When a repository's documentation and its existing code disagree, follow the conventions used in the existing code, and in your final reply point out each inconsistency you found between the documentation and the code.

## Filesystem Access

- Only read files located within the current project directory.
- Only modify files located within the current project directory.
- Never access files outside the project directory.
- Do not access the user's Downloads, Desktop, or other personal folders.
- Do not follow symbolic links pointing outside the project directory.
- If a task requires access to files outside the project directory,
  stop and request explicit user permission.
