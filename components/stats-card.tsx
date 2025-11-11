import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { NumberTicker } from "./ui/number-ticker";

export const StatsCard = ({
  title,
  value = 10,
}: {
  title: string;
  value: number;
}) => {
  return (
    <Card className="bg-card border-accent/20">
      <CardHeader>
        <CardTitle className="text-accent">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <NumberTicker
          value={value || 100}
          className="text-4xl font-bold text-foreground"
        />
      </CardContent>
    </Card>
  );
};
