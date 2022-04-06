import style from "./Watch.module.scss";

interface Props {
  time: number | undefined;
}

export default function Watch({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteFirstDecimal, minuteSecondDecimal] = String(minutes).padStart(
    2,
    "0"
  );
  const [secondFirstDecimal, secondSecondDecimal] = String(seconds).padStart(
    2,
    "0"
  );

  return (
    <>
      <span className={style.relogioNumero}>{minuteFirstDecimal}</span>
      <span className={style.relogioNumero}>{minuteSecondDecimal}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondFirstDecimal}</span>
      <span className={style.relogioNumero}>{secondSecondDecimal}</span>
    </>
  );
}
