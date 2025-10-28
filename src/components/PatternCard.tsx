import { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProblemItem } from './ProblemItem';
import { Pattern } from '@/types/pattern';
import { cn } from '@/lib/utils';

interface PatternCardProps {
  pattern: Pattern;
  patternNumber: number;
  onToggleExpand: () => void;
  onToggleComplete: (problemId: string) => void;
  onToggleStar: (problemId: string) => void;
  onAddQuestion: () => void;
  onAddLink: (problemId: string) => void;
}

export function PatternCard({
  pattern,
  patternNumber,
  onToggleExpand,
  onToggleComplete,
  onToggleStar,
  onAddQuestion,
  onAddLink,
}: PatternCardProps) {
  const completedCount = pattern.problems.filter((p) => p.completed).length;
  const totalCount = pattern.problems.length;
  const progressPercentage = (completedCount / totalCount) * 100;

  return (
    <Card className="overflow-hidden backdrop-blur-sm bg-card/70 border-2 transition-all duration-300 hover:shadow-xl">
      <button
        onClick={onToggleExpand}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary/5 transition-colors duration-200"
      >
        <div className="flex items-center gap-4 flex-1">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-primary text-primary-foreground font-bold text-sm shadow-lg">
            {patternNumber}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">{pattern.name}</h3>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm text-muted-foreground">
                {completedCount} / {totalCount} completed
              </span>
              <div className="flex-1 max-w-[200px] h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-primary transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
        <ChevronDown
          className={cn(
            'h-5 w-5 text-muted-foreground transition-transform duration-300',
            pattern.expanded && 'rotate-180'
          )}
        />
      </button>

      {pattern.expanded && (
        <div className="px-6 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
          {pattern.problems.map((problem) => (
            <ProblemItem
              key={problem.id}
              problem={problem}
              onToggleComplete={() => onToggleComplete(problem.id)}
              onToggleStar={() => onToggleStar(problem.id)}
              onAddLink={() => onAddLink(problem.id)}
            />
          ))}
          <Button
            onClick={onAddQuestion}
            variant="outline"
            className="w-full mt-2 border-dashed border-2 hover:bg-primary/5 hover:border-primary transition-all duration-200"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Question
          </Button>
        </div>
      )}
    </Card>
  );
}
