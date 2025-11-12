import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { NumberTicker } from "./ui/number-ticker";

export const StatsCard = ({
  title,
  value = 10,
  icon,
}: {
  title: string;
  value: number;
  icon?: any;
}) => {
  return (
    // <Card className="bg-card border-accent/20">
    //   <CardHeader>
    //     <CardTitle className="text-accent">{title}</CardTitle>
    //   </CardHeader>
    //   <CardContent>
    //     <NumberTicker
    //       value={value || 100}
    //       className="text-4xl font-bold text-foreground"
    //     />
    //   </CardContent>
    // </Card>

    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
        {/* <FileText className="h-4 w-4 text-muted-foreground" /> */}
      </CardHeader>
      <CardContent>
        <NumberTicker
          className="text-2xl font-bold text-white"
          value={value || 100}
        />
      </CardContent>
    </Card>
  );
};
