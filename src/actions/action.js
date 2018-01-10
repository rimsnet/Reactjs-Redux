
/*
  const value will be changed according to your requirements
  
*/

export const INC = 'INC';
export const DES = 'DES';


export function incInc(text){
  return { type : INC, text };
}

export function desDes(text){
  return { type : DES, text }
}
