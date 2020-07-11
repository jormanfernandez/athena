export const validationConfig = {
  "username": {
    "minLength": 3,
    "maxLength": 15,
    "required": true,
  },
  "password": {
    "password": true,
    "required": true,
    "minLength": 8
  }
}

export const validationMessages = {
  "username": {
    "minLength": "El nombre de usuario debe tener minimo 3 caracteres",
    "maxLength": "El nombre de usuario debe tener maximo 15 caracteres",
    "required": "Debe introducir su usuario",
  },
  "password": {
    "password": "La contraseña no cumple con el formato requerido",
    "required": "Debe introducir una contraseña",
    "minLength": "La contraseña debe tener minimo 8 caracteres"
  }
}