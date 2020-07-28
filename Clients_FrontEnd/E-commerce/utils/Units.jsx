export function handleCount(val) {
  if (val === "product") {
    return 1;
  } else if (val === "Kilograms") {
    return 0.25;
  } else if (val === "Grams") {
    return 25;
  } else if (val === "Liter") {
    return 0.25;
  }
}

export function handleSign(val) {
  if (val === "product") {
    return "";
  } else if (val === "Kilograms") {
    return "kg";
  } else if (val === "Grams") {
    return "g";
  } else if (val === "Liter") {
    return "L";
  }
}
