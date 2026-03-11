export type PlayerScore = {
  name: string;
  score: number;
};

export const scoreUtils = {
  getAll(): PlayerScore[] {
    const data = localStorage.getItem("scores");
    if (data === null) return [];
    return JSON.parse(data) as PlayerScore[];
  },

  addWin(name: string): void {
    const scores = scoreUtils.getAll();
    const existing = scores.find((p) => p.name === name);
    if (existing) {
      existing.score++;
    } else {
      scores.push({ name, score: 1 });
    }
    localStorage.setItem("scores", JSON.stringify(scores));
  },
};
