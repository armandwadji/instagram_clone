//Méthode pour afficher la description sur 150 lettres
export const truncateText = (string, n) => {
  return string?.length > n ? `${string.substr(0, n)} ...` : string;
};

export const timestampPost = (date) => {
  const datePost = date.getTime();
  const today = new Date().getTime();

  const t = today - datePost;

  const SECONDE = 1000;
  const MINUTE = 60 * SECONDE;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const MONTH = 30 * DAY;
  const YEAR = 12 * MONTH;

  //On calcule les années
  let year = Math.floor(t / YEAR);
  let reste = t % (3600 * 1000 * 24 * 365);

  //On calcule les mois
  let months = Math.floor(reste / MONTH);
  reste = reste % MONTH;

  //on calcule le nombre de jour
  let day = Math.floor(reste / DAY);
  reste = t % DAY;

  //on calcule le nombres d'heures
  let hour = Math.floor(reste / HOUR);
  reste = reste % HOUR;

  //on cacules le nombres de minutes
  let minutes = Math.floor(reste / MINUTE);
  reste = reste % MINUTE;

  // on calcule le nombres de secondes
  let secondes = Math.floor(reste / SECONDE);

  //on calcule les millisecondes qu'il nous reste
  reste = reste % 1000;

  //On stocke le temp converti dans un tableau d'objets (utile pour l'ordre d'itération)

  const times = [
    { an: year },
    { mois: months },
    { jour: day },
    { heure: hour },
    { minute: minutes },
    { seconde: secondes },
  ];

  //On initialise la valeur retourné
  let returnValue = 0;

  for (const time of times) {
    for (const value in time) {
      if (time[value] > 0) {
        returnValue = `${time[value]} ${value}`;
        break;
      }
    }
    if (returnValue !== 0) {
      break;
    }
  }

  return returnValue;
};
