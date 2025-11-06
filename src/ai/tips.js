export function getDailyTips({ waterMl, steps, mood, goals }) {
  const tips = [];
  
  if (waterMl < goals.waterMl) tips.push('Try sipping water every 20 minutes.');
  if (steps < goals.steps) tips.push('Take a 5-minute walk after each study block.');
  if (mood === '🙁') tips.push('Do 5 deep breaths and stretch your shoulders.');
  if (mood === '😐') tips.push('Play your favorite 2-minute song and move a little.');
  
  return tips.length ? tips : ['Great job! Keep your rhythm steady today.'];
}
