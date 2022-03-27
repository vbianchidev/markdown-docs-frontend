const HEADING = /#{1,6}.+/g;

const HEADING_TEXT = /#{1,6} /;

const SLUGFY_WORDS = /[^\w]+/g;

const LETRAS_COM_ACENTOS = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

export const REGEX = {
  HEADING,
  HEADING_TEXT,
  SLUGFY_WORDS,
  LETRAS_COM_ACENTOS
};
