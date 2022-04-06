import Button from "../Button";
import Watch from "./Watch";
import style from "./StopWatch.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import ITask from "../../types/ITask";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined;
  endTask: () => void;
}

export default function StopWatch({ selected, endTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regress(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return regress(count - 1);
      }

      endTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => regress(time)}>Começar!</Button>
    </div>
  );
}
