import Script from "next/script";

export const Scripts = () => {
  return (
    <div>
        <Script defer src="../../../home/js/core.min.js" />
        <Script defer src="../../../home/js/script.js" />
    </div>
  )
}
