import { useTranslation } from "react-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from "next"

export default function Home() {
  const { t, ready } = useTranslation()

  console.log(ready, t("home.title"))

  return (
    <div>
      <h1>{t("home.title", "Static page")}</h1>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  }
}
