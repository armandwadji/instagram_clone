//Méthode pour afficher la description sur 150 lettres
export const truncateText = (string, n) => {
  return string?.length > n ? `${string.substr(0, n)} ...` : string;
};
