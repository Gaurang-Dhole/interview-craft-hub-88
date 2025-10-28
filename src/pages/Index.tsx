import { useState, useEffect } from 'react';
import { Search, Code2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { PatternCard } from '@/components/PatternCard';
import { AddQuestionModal } from '@/components/AddQuestionModal';
import { AddLinkModal } from '@/components/AddLinkModal';
import { Pattern, Difficulty } from '@/types/pattern';
import { initialPatterns } from '@/data/patterns';
import { toast } from '@/hooks/use-toast';

const STORAGE_KEY = 'coding-patterns-data';

const Index = () => {
  const [patterns, setPatterns] = useState<Pattern[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialPatterns;
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [activePatternId, setActivePatternId] = useState<string | null>(null);
  const [activeProblemId, setActiveProblemId] = useState<string | null>(null);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(patterns));
  }, [patterns]);

  const filteredPatterns = patterns.map((pattern) => ({
    ...pattern,
    problems: pattern.problems.filter(
      (problem) =>
        problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pattern.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((pattern) => pattern.problems.length > 0);

  const togglePattern = (patternId: string) => {
    setPatterns((prev) =>
      prev.map((p) =>
        p.id === patternId ? { ...p, expanded: !p.expanded } : p
      )
    );
  };

  const toggleComplete = (patternId: string, problemId: string) => {
    setPatterns((prev) =>
      prev.map((pattern) =>
        pattern.id === patternId
          ? {
              ...pattern,
              problems: pattern.problems.map((problem) =>
                problem.id === problemId
                  ? { ...problem, completed: !problem.completed }
                  : problem
              ),
            }
          : pattern
      )
    );
  };

  const toggleStar = (patternId: string, problemId: string) => {
    setPatterns((prev) =>
      prev.map((pattern) =>
        pattern.id === patternId
          ? {
              ...pattern,
              problems: pattern.problems.map((problem) =>
                problem.id === problemId
                  ? { ...problem, starred: !problem.starred }
                  : problem
              ),
            }
          : pattern
      )
    );
  };

  const openAddQuestionModal = (patternId: string) => {
    setActivePatternId(patternId);
    setIsQuestionModalOpen(true);
  };

  const addQuestion = (title: string, difficulty: Difficulty) => {
    if (!activePatternId) return;

    setPatterns((prev) =>
      prev.map((pattern) =>
        pattern.id === activePatternId
          ? {
              ...pattern,
              problems: [
                ...pattern.problems,
                {
                  id: `${activePatternId}-custom-${Date.now()}`,
                  title,
                  difficulty,
                  links: [],
                  completed: false,
                  starred: false,
                },
              ],
            }
          : pattern
      )
    );

    toast({
      title: 'Question Added',
      description: `"${title}" has been added to the pattern.`,
    });
  };

  const openAddLinkModal = (patternId: string, problemId: string) => {
    setActivePatternId(patternId);
    setActiveProblemId(problemId);
    setIsLinkModalOpen(true);
  };

  const addLink = (text: string, url: string) => {
    if (!activePatternId || !activeProblemId) return;

    setPatterns((prev) =>
      prev.map((pattern) =>
        pattern.id === activePatternId
          ? {
              ...pattern,
              problems: pattern.problems.map((problem) =>
                problem.id === activeProblemId
                  ? {
                      ...problem,
                      links: [...problem.links, { text, url }],
                    }
                  : problem
              ),
            }
          : pattern
      )
    );

    toast({
      title: 'Link Added',
      description: `Link "${text}" has been added.`,
    });
  };

  const activeProblemTitle =
    activeProblemId && activePatternId
      ? patterns
          .find((p) => p.id === activePatternId)
          ?.problems.find((prob) => prob.id === activeProblemId)?.title || ''
      : '';

  const totalProblems = patterns.reduce((acc, p) => acc + p.problems.length, 0);
  const completedProblems = patterns.reduce(
    (acc, p) => acc + p.problems.filter((prob) => prob.completed).length,
    0
  );
  const overallProgress = (completedProblems / totalProblems) * 100;

  return (
    <div className="min-h-screen bg-gradient-radial">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-12 animate-in fade-in slide-in-from-top duration-500">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary text-primary-foreground mb-4 shadow-xl">
            <Code2 className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Coding Interview Patterns
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Track your progress across 28 essential coding patterns
          </p>

          <div className="max-w-2xl mx-auto mb-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="font-semibold">
                  {completedProblems} / {totalProblems} problems completed
                </span>
                <span>•</span>
                <span>{overallProgress.toFixed(1)}% complete</span>
              </div>
              <div className="w-full h-3 bg-secondary rounded-full overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-primary transition-all duration-500"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search patterns or problems..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base shadow-lg border-2 focus:border-primary"
            />
          </div>
        </header>

        <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-500">
          {filteredPatterns.map((pattern, index) => (
            <PatternCard
              key={pattern.id}
              pattern={pattern}
              patternNumber={index + 1}
              onToggleExpand={() => togglePattern(pattern.id)}
              onToggleComplete={(problemId) => toggleComplete(pattern.id, problemId)}
              onToggleStar={(problemId) => toggleStar(pattern.id, problemId)}
              onAddQuestion={() => openAddQuestionModal(pattern.id)}
              onAddLink={(problemId) => openAddLinkModal(pattern.id, problemId)}
            />
          ))}

          {filteredPatterns.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No patterns or problems found matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </div>

      <AddQuestionModal
        isOpen={isQuestionModalOpen}
        onClose={() => setIsQuestionModalOpen(false)}
        onAdd={addQuestion}
      />

      <AddLinkModal
        isOpen={isLinkModalOpen}
        onClose={() => setIsLinkModalOpen(false)}
        onAdd={addLink}
        problemTitle={activeProblemTitle}
      />
    </div>
  );
};

export default Index;
