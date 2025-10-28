import { Badge } from '@/components/ui/badge';
import { Difficulty } from '@/types/pattern';
import { cn } from '@/lib/utils';

interface DifficultyBadgeProps {
  difficulty: Difficulty;
  className?: string;
}

export function DifficultyBadge({ difficulty, className }: DifficultyBadgeProps) {
  return (
    <Badge
      className={cn(
        'font-semibold capitalize px-3 py-1 transition-all duration-200',
        difficulty === 'easy' && 'bg-easy text-easy-foreground hover:bg-easy/90',
        difficulty === 'medium' && 'bg-medium text-medium-foreground hover:bg-medium/90',
        difficulty === 'hard' && 'bg-hard text-hard-foreground hover:bg-hard/90',
        className
      )}
    >
      {difficulty}
    </Badge>
  );
}
