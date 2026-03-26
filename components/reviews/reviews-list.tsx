import { prisma } from "@/lib/prisma";
import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

type Review = {
  id: string;
  name: string;
  content: string;
  rating: number;
  createdAt: Date;
};

export async function ReviewsList() {
  // const testimonials: Review[] = await prisma.review.findMany({
  //   orderBy: {
  //     createdAt: "desc"
  //   }
  // });
  const testimonials: Review[] = await prisma.review.findMany({
    where: {
      approved: true
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  return (
    <Container>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial: Review, index: number) => (
          <Card
            key={testimonial.id}
            className={`relative overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              index === 0 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <CardContent className="p-6 md:p-8">
              <Quote className="mb-4 h-8 w-8 text-primary/20" />

              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i: number) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              <p className="mb-6 text-muted-foreground leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-border">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
