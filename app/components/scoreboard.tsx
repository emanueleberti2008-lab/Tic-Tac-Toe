import { PlayerScore } from "../utils/score-utils";

type Props = {
  scores: PlayerScore[];
};

export function Scoreboard(props: Props) {
  return (
    <div className="flex flex-col gap-2 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 min-w-40">
      <h2 className="text-white font-bold text-lg mb-2">Classifica</h2>
      {props.scores.length === 0 ? (
        <p className="text-white/50 text-sm">Nessuna partita ancora</p>
      ) : (
        props.scores
          .sort((a, b) => b.score - a.score)
          .map((player) => (
            <div
              key={player.name}
              className="flex justify-between gap-4 text-white text-sm"
            >
              <span>{player.name}</span>
              <span className="font-bold">{player.score}</span>
            </div>
          ))
      )}
    </div>
  );
}
