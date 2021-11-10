import './style.css';

const names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];

const golfScore = (par, strokes) => {
  if (strokes === 1) {
    return names[0];
  }
  if (strokes <= (par - 2)) {
    return names[1];
  }
  if (strokes === (par - 1)) {
    return names[2];
  }
  if (strokes === par) {
    return names[3];
  }
  if (strokes === (par + 1)) {
    return names[4];
  }
  if (strokes === (par + 2)) {
    return names[5];
  }
  if (strokes >= (par + 3)) {
    return names[6];
  }
  return 'Change Me';
};

console.log(golfScore(5, 4));
console.log(golfScore(7, 9));
console.log(golfScore(15, 4));
