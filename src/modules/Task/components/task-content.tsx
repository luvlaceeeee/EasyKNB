import { FC } from 'react';

function trimLine(
  line: string | null | undefined,
  count: number
): string | null {
  if (line && count > 0) {
    return `${line.slice(0, count)}${line.length > count ? '...' : ''}`;
  }

  return null;
}

export const TaskContent: FC<{ desc?: string }> = ({ desc }) => (
  <p className="text-zinc-500">{trimLine(desc, 60)}</p>
);
