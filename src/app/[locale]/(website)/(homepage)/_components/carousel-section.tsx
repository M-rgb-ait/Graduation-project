import { useTranslations } from "next-intl";
import HomeCarousel from "./carousel";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/src/i18n/navigation";
import { cn } from "@/src/lib/utils/cn";
import staticImage from "@/public/assets/home-section-1-static.png";
import { buttonVariants } from "@/src/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CarouselSection() {
  // Translation
  const t = useTranslations();
  return (
    <section className="mx-auto grid min-h-[441px] w-full grid-cols-1 gap-[25px] text-white lg:grid-cols-[1fr_3fr]">
      {/* Static image */}
      <div className="relative h-full w-full">
        {/* Image */}
        <Image
          src={staticImage}
          className="rounded-2xl object-cover"
          fill
          alt="red presents"
        />

        {/* Title and button */}
        <div className="absolute bottom-5 start-4 flex flex-col space-y-2 lg:start-8">
          {/* Badge */}
          <Badge variant="secondary" className="w-fit">
            {t("home-carousel-badge", { price: 10.99 })}
          </Badge>
          {/* Title */}
          <h4 className="text-2xl font-semibold">{t("home-carousel-title")}</h4>
          {/* Button */}
          <Link
            href="/products"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "px-rounded-2xl w-[130px] py-[10px]",
            )}
          >
            {t("home-section-one-button")}{" "}
            <ArrowRight className="rtl:rotate-180" />
          </Link>
        </div>
      </div>

      {/* Carousel */}
      <div className="h-full w-full">
        <HomeCarousel />
      </div>
    </section>
  );
}
