/**
 * Comprueba si la dirección proporcionada es válida.
 * Una dirección válida es una cadena no vacía de al menos un carácter tras
 * recortar espacios y con una longitud máxima de 255 caracteres.
 *
 * @param {string} address - Texto de la dirección.
 * @returns {boolean} `true` si la dirección pasa las comprobaciones, `false` en caso contrario.
 */
function isValidAddress(address) {
  if (typeof address !== 'string') {
    return false;
  }

  const trimmed = address.trim();
  if (trimmed.length === 0 || trimmed.length > 255) {
    return false;
  }

  return true;
}

module.exports = {
  isValidAddress
};