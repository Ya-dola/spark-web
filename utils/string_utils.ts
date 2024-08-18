declare global {
  interface String {
    toPascalCase(): string;
    toKebabCase(): string;
    capitalizeFirst(): string;
    toSnakeCase(): string;
  }
}

String.prototype.toPascalCase = function (): string {
  return this.replace(/\w+/g, (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).replace(/\s+/g, '');
};

String.prototype.toKebabCase = function (): string {
  return (
    this.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
    )
      ?.map((word) => word.toLowerCase())
      .join('-') || ''
  );
};

String.prototype.capitalizeFirst = function (): string {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

String.prototype.toSnakeCase = function (): string {
  return (
    this.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
    )
      ?.map((word) => word.toLowerCase())
      .join('_') || ''
  );
};

// Exports all the functions
export {};
