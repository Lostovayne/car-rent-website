export * from "./date.helper"

// TODO: mover a otro fichero
export function precioAumentado(price: number) {
  return (price * 1.35).toFixed(2);
}
