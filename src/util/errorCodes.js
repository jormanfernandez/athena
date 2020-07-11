const MESSAGES = {
  UE01: () => "Usuario o contraseña incorrecta",
  E01: () => "Servicio no implementado",
  UNKNOW: () => "Ha ocurrido un error inesperado, por favor pruebe nuevamente en unos minutos"
}

const getMessage = message => (MESSAGES[message] || MESSAGES.UNKNOW)();

export {
  getMessage
}