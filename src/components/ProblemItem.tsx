import { Check, Star, ExternalLink, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DifficultyBadge } from './DifficultyBadge';
import { Problem } from '@/types/pattern';
import { cn } from '@/lib/utils';

interface ProblemItemProps {
  problem: Problem;
  onToggleComplete: () => void;
  onToggleStar: () => void;
  onAddLink: () => void;
}

export function ProblemItem({
  problem,
  onToggleComplete,
  onToggleStar,
  onAddLink,
}: ProblemItemProps) {
  return (
    <div
      className={cn(
        'group relative flex items-center gap-3 p-4 rounded-lg transition-all duration-300',
        'bg-card/50 backdrop-blur-sm border-2',
        problem.completed && 'border-completed/30 bg-completed/5',
        problem.starred && !problem.completed && 'border-starred/30 bg-starred/5',
        !problem.completed && !problem.starred && 'border-border hover:border-primary/30',
        'hover:shadow-lg hover:translate-y-[-2px]'
      )}
    >
      <div className="flex gap-2">
        <Button
          size="icon"
          variant="ghost"
          onClick={onToggleComplete}
          className={cn(
            'h-8 w-8 transition-all duration-200',
            problem.completed
              ? 'bg-completed text-completed-foreground hover:bg-completed/90'
              : 'hover:bg-completed/10 hover:text-completed'
          )}
        >
          <Check className={cn('h-4 w-4', problem.completed && 'font-bold')} />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={onToggleStar}
          className={cn(
            'h-8 w-8 transition-all duration-200',
            problem.starred
              ? 'bg-starred text-white hover:bg-starred/90'
              : 'hover:bg-starred/10 hover:text-starred'
          )}
        >
          <Star
            className={cn('h-4 w-4', problem.starred && 'fill-white')}
          />
        </Button>
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-foreground truncate">{problem.title}</h4>
        <div className="flex flex-wrap items-center gap-2 mt-1">
          {problem.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-primary hover:text-accent transition-colors duration-200"
            >
              <ExternalLink className="h-3 w-3" />
              {link.text}
            </a>
          ))}
          <Button
            size="sm"
            variant="ghost"
            onClick={onAddLink}
            className="h-6 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <Plus className="h-3 w-3 mr-1" />
            Add Link
          </Button>
        </div>
      </div>

      <DifficultyBadge difficulty={problem.difficulty} />
    </div>
  );
}
