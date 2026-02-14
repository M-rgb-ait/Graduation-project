import { Badge } from "@/components/ui/badge";
import { Link } from "@/src/i18n/navigation";
import { OCCASIONS_IMAGES } from "@/src/lib/constants/occasions.constant";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function OccasionsSection() {
  // Translation
  const t = useTranslations();

  return (
    <section className="mx-auto my-6 grid w-full grid-cols-1 justify-items-center gap-6 text-white md:grid-cols-2 lg:grid-cols-3">
      {OCCASIONS_IMAGES.map((occasion, index) => {
        return (
          <Link href="/occasions" key={index} className="w-full">
            <div className="relative h-[271px] w-full overflow-hidden rounded-2xl">
              {/* Image */}
              <Image
                src={occasion.image}
                alt={t(occasion.alt)}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              <div className="absolute bottom-6 flex flex-col ltr:left-6 rtl:right-6">
                {/* Badge */}
                <Badge variant="secondary" className="w-fit">
                  {t(occasion.badge)}
                </Badge>
                {/* Title */}
                <h5 className="text-2xl font-semibold">{t(occasion.title)}</h5>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
