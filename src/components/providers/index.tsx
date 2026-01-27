import {
  NextIntlClientProvider,
  useLocale,
  useMessages,
  useNow,
  useTimeZone,
} from "next-intl";
import ReactQueryProvider from "./components/react-quary-provider";
import { ThemeProvider } from "next-themes";
import ToasterProvider from "./components/toaster.provider";

type ProviderProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProviderProps) {
  // Translation
  const messages = useMessages();
  const locale = useLocale();
  const now = useNow();
  const timeZone = useTimeZone();

  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      now={now}
      timeZone={timeZone}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </ThemeProvider>
      <ToasterProvider />
    </NextIntlClientProvider>
  );
}
