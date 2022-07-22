import { SetStateAction, useState } from 'react';

type onChangeVlue = {
  name: string;
  value: string | boolean;
};

type validate = ({ name, value }: onChangeVlue) => boolean | string;

type useCreate<T> = {
  targetobject: T;
  handleSetTargetObject: (obj: SetStateAction<T>) => void;
  handleEventSetTargetObject: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useTargetObject = <T>(props: T, validate?: validate): useCreate<T> => {
  const [targetobject, setTargetObject] = useState<T>(props);

  const handleSetTargetObject = (obj: SetStateAction<T>) => {
    setTargetObject(obj);
  };

  const handleEventSetTargetObject = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (!(name in targetobject)) return false;
    if (typeof validate !== 'undefined' && !validate({ name, value }))
      return false;

    setTargetObject((obj) => {
      return { ...obj, [name]: value };
    });
  };

  return {
    targetobject,
    handleSetTargetObject,
    handleEventSetTargetObject,
  };
};

export { useTargetObject };
