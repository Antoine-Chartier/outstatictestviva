"use client";
import { useEffect } from 'react';

type Props = {
  log: string
}

const ConsoleLog = ({ log }: Props) => {

  useEffect(() => {
    console.log(log);
  }, []);

  return (
    <>

    </>
  )
}

export default ConsoleLog
