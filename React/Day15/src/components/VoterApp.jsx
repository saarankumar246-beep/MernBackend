import { useState, useEffect } from "react";

// --- Default Voter Data ---
const VOTERS = [
  { id: "TN001", name: "Arjun Kumar" },
  { id: "TN002", name: "Priya Selvam" },
  { id: "TN003", name: "Ramesh Babu" },
  { id: "TN004", name: "Deepa Nair" },
  { id: "TN005", name: "Suresh Mohan" },
  { id: "TN006", name: "Kavitha Rajan" },
  { id: "TN007", name: "Vikram Anand" },
  { id: "TN008", name: "Meena Devi" },
];

// --- Electoral Constituencies ---
const CONSTITUENCIES = [
  {
    id: "con1",
    area: "Chennai",
    constituency: "K.K. Nagar",
    symbol: "🌅",
    color: "from-orange-500 to-amber-400",
    candidate: "S. Murugesan",
    party: "Progressive Alliance",
  },
  {
    id: "con2",
    area: "Chennai",
    constituency: "Thousand Lights",
    symbol: "💡",
    color: "from-blue-500 to-cyan-400",
    candidate: "R. Anbalagan",
    party: "Democratic Front",
  },
  {
    id: "con3",
    area: "Chennai",
    constituency: "Chepauk",
    symbol: "🏛️",
    color: "from-green-500 to-emerald-400",
    candidate: "T. Palanisamy",
    party: "Peoples Party",
  },
  {
    id: "con4",
    area: "Chennai",
    constituency: "Velachery",
    symbol: "🌿",
    color: "from-violet-500 to-purple-400",
    candidate: "K. Sundaram",
    party: "Reform League",
  },
  {
    id: "con5",
    area: "Chennai",
    constituency: "Royapuram",
    symbol: "⚓",
    color: "from-rose-500 to-pink-400",
    candidate: "M. Duraipandi",
    party: "Unity Council",
  },
];

const STORAGE_KEY = "voter_votes";

export default function VoterApp() {
  const [page, setPage] = useState("login"); // login | vote | success
  const [voterId, setVoterId] = useState("");
  const [voterName, setVoterName] = useState("");
  const [loggedVoter, setLoggedVoter] = useState(null);
  const [error, setError] = useState("");
  const [votes, setVotes] = useState({});
  const [selectedVote, setSelectedVote] = useState(null);
  const [confirming, setConfirming] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Load votes from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setVotes(JSON.parse(stored));
    } catch {}
  }, []);

  const handleLogin = () => {
    setError("");
    const found = VOTERS.find(
      (v) =>
        v.id.toLowerCase() === voterId.trim().toLowerCase() &&
        v.name.toLowerCase() === voterName.trim().toLowerCase()
    );
    if (!found) {
      setError("❌ Voter ID or Name does not match. Please try again.");
      return;
    }
    setLoggedVoter(found);
    // Check if already voted (persisted)
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed[found.id]) {
          setSelectedVote(parsed[found.id]);
          setSubmitted(true);
          setPage("vote");
          return;
        }
      }
    } catch {}
    setPage("vote");
  };

  const handleVoteClick = (conId) => {
    if (submitted) return;
    setConfirming(conId);
  };

  const confirmVote = () => {
    if (!confirming || submitted) return;
    const newVotes = { ...votes, [loggedVoter.id]: confirming };
    setVotes(newVotes);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newVotes));
    } catch {}
    setSelectedVote(confirming);
    setSubmitted(true);
    setConfirming(null);
    setTimeout(() => setPage("success"), 600);
  };

  const cancelVote = () => setConfirming(null);

  const handleLogout = () => {
    setPage("login");
    setLoggedVoter(null);
    setVoterId("");
    setVoterName("");
    setSelectedVote(null);
    setSubmitted(false);
    setConfirming(null);
    setError("");
  };

  // ---- LOGIN PAGE ----
  if (page === "login") {
    return (
      <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center relative overflow-hidden font-sans">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage:"radial-gradient(circle at 20% 50%, #1e40af 0%, transparent 50%), radial-gradient(circle at 80% 20%, #7c3aed 0%, transparent 40%), radial-gradient(circle at 60% 80%, #065f46 0%, transparent 40%)"}}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{backgroundImage:"linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize:"40px 40px"}}
        />

        <div className="relative z-10 w-full max-w-md mx-4">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-600 shadow-lg shadow-orange-500/30 mb-4">
              <span className="text-3xl">🗳️</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight" style={{fontFamily:"'Georgia', serif"}}>
              Tamil Nadu
            </h1>
            <p className="text-orange-400 font-semibold text-sm tracking-widest uppercase mt-1">
              Electronic Voting System
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-orange-500 to-rose-500 mx-auto mt-3" />
          </div>

          {/* Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-white text-xl font-bold mb-6 text-center">Voter Authentication</h2>

            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2 block">
                  Voter ID
                </label>
                <input
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm"
                  placeholder="e.g. TN001"
                  value={voterId}
                  onChange={(e) => setVoterId(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2 block">
                  Full Name
                </label>
                <input
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm"
                  placeholder="e.g. Arjun Kumar"
                  value={voterName}
                  onChange={(e) => setVoterName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                />
              </div>

              {error && (
                <div className="bg-rose-500/20 border border-rose-500/40 rounded-xl px-4 py-3 text-rose-300 text-sm">
                  {error}
                </div>
              )}

              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-orange-500 to-rose-600 hover:from-orange-400 hover:to-rose-500 text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 active:translate-y-0 mt-2"
              >
                Verify & Proceed →
              </button>
            </div>
          </div>

          {/* Sample voters hint */}
          <div className="mt-4 bg-white/5 border border-white/10 rounded-2xl p-4">
            <p className="text-gray-500 text-xs text-center mb-2 uppercase tracking-wider font-semibold">Sample Voter IDs</p>
            <div className="grid grid-cols-2 gap-1.5">
              {VOTERS.slice(0, 4).map((v) => (
                <button key={v.id}
                  onClick={() => { setVoterId(v.id); setVoterName(v.name); }}
                  className="text-left bg-white/5 hover:bg-white/10 rounded-lg px-3 py-2 transition-all cursor-pointer"
                >
                  <p className="text-orange-400 text-xs font-bold">{v.id}</p>
                  <p className="text-gray-400 text-xs truncate">{v.name}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---- SUCCESS PAGE ----
  if (page === "success") {
    const voted = CONSTITUENCIES.find((c) => c.id === selectedVote);
    return (
      <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center font-sans">
        <div className="text-center max-w-sm mx-4">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 shadow-2xl shadow-green-500/40 mb-6 animate-bounce">
            <span className="text-5xl">✅</span>
          </div>
          <h1 className="text-white text-3xl font-black mb-2" style={{fontFamily:"'Georgia', serif"}}>Vote Cast!</h1>
          <p className="text-gray-400 mb-6">Your vote has been securely recorded.</p>
          {voted && (
            <div className={`bg-gradient-to-r ${voted.color} p-0.5 rounded-2xl mb-6 shadow-lg`}>
              <div className="bg-[#0f1525] rounded-2xl p-5">
                <p className="text-white font-bold text-lg">{voted.symbol} {voted.area} – {voted.constituency}</p>
                <p className="text-gray-400 text-sm mt-1">{voted.candidate} · {voted.party}</p>
              </div>
            </div>
          )}
          <p className="text-gray-500 text-xs mb-6">Voter: <span className="text-gray-300 font-semibold">{loggedVoter?.name}</span> · ID: <span className="text-orange-400">{loggedVoter?.id}</span></p>
          <button onClick={handleLogout}
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all border border-white/20">
            ← Back to Login
          </button>
        </div>
      </div>
    );
  }

  // ---- VOTE PAGE ----
  return (
    <div className="min-h-screen bg-[#0a0e1a] font-sans">
      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-[#0a0e1a]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🗳️</span>
            <div>
              <p className="text-white font-bold text-sm leading-tight">Welcome, {loggedVoter?.name}</p>
              <p className="text-orange-400 text-xs">ID: {loggedVoter?.id}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {submitted && (
              <span className="bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                ✓ Voted
              </span>
            )}
            <button onClick={handleLogout}
              className="text-gray-400 hover:text-white text-xs border border-white/20 hover:border-white/40 px-3 py-1.5 rounded-lg transition-all">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl font-black mb-1" style={{fontFamily:"'Georgia', serif"}}>
            Chennai Constituency Ballot
          </h2>
          <p className="text-gray-500 text-sm">
            {submitted
              ? "You have already cast your vote. Thank you!"
              : "Select one constituency to cast your vote. This action is irreversible."}
          </p>
          {submitted && (
            <div className="mt-3 inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs px-4 py-2 rounded-full">
              🔒 Voting locked — refreshing will not reset your vote
            </div>
          )}
        </div>

        {/* Constituency Cards */}
        <div className="space-y-3">
          {CONSTITUENCIES.map((con) => {
            const isVoted = selectedVote === con.id;
            const isDisabled = submitted && !isVoted;
            const isConfirming = confirming === con.id;

            return (
              <div
                key={con.id}
                className={`relative rounded-2xl border transition-all duration-300 overflow-hidden
                  ${isDisabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}
                  ${isVoted ? "border-green-500/60 bg-green-500/10 shadow-lg shadow-green-500/20" : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"}
                  ${isConfirming ? "border-yellow-400/60 bg-yellow-400/10" : ""}
                `}
                onClick={() => !isDisabled && !submitted && handleVoteClick(con.id)}
              >
                {/* Gradient accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${con.color}`} />

                <div className="pl-5 pr-4 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${con.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                      {con.symbol}
                    </div>
                    <div>
                      <p className="text-white font-bold text-base leading-tight">
                        {con.area} – {con.constituency}
                      </p>
                      <p className="text-gray-400 text-sm mt-0.5">{con.candidate}</p>
                      <p className="text-gray-600 text-xs">{con.party}</p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 ml-3">
                    {isVoted ? (
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/40">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                    ) : isConfirming ? (
                      <div className="w-8 h-8 rounded-full border-2 border-yellow-400 bg-yellow-400/20 flex items-center justify-center animate-pulse">
                        <span className="text-yellow-400 text-xs">?</span>
                      </div>
                    ) : isDisabled ? (
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                        <span className="text-gray-600 text-sm">🔒</span>
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full border-2 border-white/20 hover:border-orange-400 transition-all flex items-center justify-center">
                        <span className="text-gray-500 text-xs">○</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Confirm bar */}
                {isConfirming && (
                  <div className="border-t border-yellow-400/30 bg-yellow-400/10 px-5 py-3 flex items-center justify-between">
                    <p className="text-yellow-300 text-sm font-semibold">Confirm your vote?</p>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => { e.stopPropagation(); cancelVote(); }}
                        className="text-xs bg-white/10 hover:bg-white/20 text-gray-300 px-3 py-1.5 rounded-lg transition-all"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); confirmVote(); }}
                        className="text-xs bg-green-500 hover:bg-green-400 text-white font-bold px-4 py-1.5 rounded-lg transition-all shadow-lg shadow-green-500/30"
                      >
                        ✓ Confirm Vote
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-xs">
            🔒 Your vote is stored securely. Once cast, it cannot be changed.
          </p>
        </div>
      </div>
    </div>
  );
}
